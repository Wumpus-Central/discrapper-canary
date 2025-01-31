n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(771173),
    d = n(43267),
    u = n(933557),
    m = n(471445),
    h = n(377171),
    _ = n(313201),
    p = n(565138),
    g = n(199902),
    f = n(592125),
    x = n(430824),
    E = n(158776),
    C = n(306680),
    v = n(594174),
    I = n(388032),
    N = n(897394);
let S = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function T(e) {
    let { channel: t, children: n, gotoChannel: l, mentionCount: a, channelState: s, toggleCollapsed: c } = e,
        d = (0, r.JA)('recents-header-'.concat(t.id, '-').concat((0, _.Dt)()));
    return (0, i.jsx)(o.tEY, {
        offset: S,
        children: (0, i.jsxs)('div', {
            className: N.channelHeader,
            ...d,
            tabIndex: 0,
            'data-recents-channel': t.id,
            onKeyDown: function (e) {
                null != c && null != s && (('ArrowRight' === e.key && s.collapsed) || ('ArrowLeft' === e.key && !s.collapsed)) && (null == c || c(s));
            },
            children: [
                (0, i.jsx)(b, {
                    channel: t,
                    gotoChannel: l
                }),
                (0, i.jsx)(y, {
                    channel: t,
                    gotoChannel: l,
                    mentionCount: a
                }),
                n
            ]
        })
    });
}
function b(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(A, {
              channel: t,
              gotoChannel: n
          })
        : (0, i.jsx)(j, {
              channel: t,
              gotoChannel: n
          });
}
function A(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.e7)([v.default], () => (t.isDM() ? v.default.getUser(t.getRecipientId()) : null)),
        a = null == l ? (0, d.x)(t) : l.getAvatarURL(void 0, 40);
    return (0, i.jsx)(o.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)('img', {
            className: N.dmIcon,
            src: a,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function j(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, i.jsx)(p.Z, {
              'aria-hidden': !0,
              className: N.guildIcon,
              guild: l,
              size: p.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function y(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        r = (0, s.e7)([x.Z], () => x.Z.getGuild(t.guild_id)),
        c = (0, s.e7)([f.Z], () => f.Z.getChannel(t.parent_id)),
        d = (0, s.e7)([C.ZP], () => C.ZP.getIsMentionLowImportance(t.id)),
        _ = (0, m.KS)(t, r),
        p = (0, u.ZP)(t, !1),
        g = null == c ? (null == r ? void 0 : r.name) : ''.concat(null == r ? void 0 : r.name, ' \u203A ').concat(c.name),
        E = t.isMultiUserDM()
            ? I.intl.formatToPlainString(I.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(Z, { channel: t })
              : (0, i.jsx)(o.P3F, {
                    className: a()(N.subtext, N.guildName),
                    onClick: n,
                    children: g
                });
    return (0, i.jsxs)('div', {
        className: N.channelNameSection,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/semibold',
                className: N.channelNameHeader,
                children: (0, i.jsxs)(o.P3F, {
                    className: N.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == _
                            ? null
                            : (0, i.jsx)(_, {
                                  className: t.isForumLikeChannel() ? N.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, i.jsx)('span', {
                            className: N.channelNameSpan,
                            children: p
                        }),
                        null != l && l > 0
                            ? (0, i.jsx)('div', {
                                  className: N.badge,
                                  children: (0, i.jsx)(o.mAB, {
                                      count: l,
                                      color: d ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER
                                  })
                              })
                            : null
                    ]
                })
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: N.subtextContainer,
                children: E
            })
        ]
    });
}
function Z(e) {
    let { channel: t } = e,
        {
            user: n,
            activities: l,
            applicationStream: a
        } = (0, s.cj)([v.default, E.Z, g.Z], () => {
            let e = v.default.getUser(t.getRecipientId());
            return {
                user: e,
                activities: null != e ? E.Z.getActivities(e.id) : null,
                applicationStream: null != e ? g.Z.getAnyStreamForUser(e.id) : null
            };
        });
    return null == l
        ? null
        : (0, i.jsx)(c.Z, {
              location: 'RecentsChannelHeader',
              activities: l,
              applicationStream: a,
              hideTooltip: !0,
              user: n
          });
}
