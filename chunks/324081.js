n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(468363),
    d = n(297369),
    u = n(956221),
    m = n(771173),
    _ = n(43267),
    h = n(933557),
    p = n(471445),
    g = n(377171),
    f = n(313201),
    x = n(565138),
    C = n(199902),
    v = n(592125),
    E = n(430824),
    I = n(158776),
    N = n(306680),
    S = n(594174),
    T = n(388032),
    b = n(413555);
let A = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function j(e) {
    let { channel: t, children: n, gotoChannel: l, mentionCount: a, channelState: s, toggleCollapsed: c } = e,
        d = (0, r.JA)('recents-header-'.concat(t.id, '-').concat((0, f.Dt)()));
    return (0, i.jsx)(o.tEY, {
        offset: A,
        children: (0, i.jsxs)('div', {
            className: b.channelHeader,
            ...d,
            tabIndex: 0,
            'data-recents-channel': t.id,
            onKeyDown: function (e) {
                null != c && null != s && (('ArrowRight' === e.key && s.collapsed) || ('ArrowLeft' === e.key && !s.collapsed)) && (null == c || c(s));
            },
            children: [
                (0, i.jsx)(y, {
                    channel: t,
                    gotoChannel: l
                }),
                (0, i.jsx)(L, {
                    channel: t,
                    gotoChannel: l,
                    mentionCount: a
                }),
                n
            ]
        })
    });
}
function y(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(Z, {
              channel: t,
              gotoChannel: n
          })
        : (0, i.jsx)(R, {
              channel: t,
              gotoChannel: n
          });
}
function Z(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.e7)([S.default], () => (t.isDM() ? S.default.getUser(t.getRecipientId()) : null)),
        a = null == l ? (0, _.x)(t) : l.getAvatarURL(void 0, 40);
    return (0, i.jsx)(o.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)('img', {
            className: b.dmIcon,
            src: a,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function R(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.e7)([E.Z], () => E.Z.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, i.jsx)(x.Z, {
              'aria-hidden': !0,
              className: b.guildIcon,
              guild: l,
              size: x.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function L(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        r = (0, s.e7)([E.Z], () => E.Z.getGuild(t.guild_id)),
        c = (0, s.e7)([v.Z], () => v.Z.getChannel(t.parent_id)),
        d = (0, s.e7)([N.ZP], () => N.ZP.getIsMentionLowImportance(t.id)),
        u = (0, p.KS)(t, r),
        m = (0, h.ZP)(t, !1),
        _ = null == c ? (null == r ? void 0 : r.name) : ''.concat(null == r ? void 0 : r.name, ' \u203A ').concat(c.name),
        f = t.isMultiUserDM()
            ? T.intl.formatToPlainString(T.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(P, { channel: t })
              : (0, i.jsx)(o.P3F, {
                    className: a()(b.subtext, b.guildName),
                    onClick: n,
                    children: _
                });
    return (0, i.jsxs)('div', {
        className: b.channelNameSection,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/semibold',
                className: b.channelNameHeader,
                children: (0, i.jsxs)(o.P3F, {
                    className: b.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == u
                            ? null
                            : (0, i.jsx)(u, {
                                  className: t.isForumLikeChannel() ? b.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, i.jsx)('span', {
                            className: b.channelNameSpan,
                            children: m
                        }),
                        null != l && l > 0
                            ? (0, i.jsx)('div', {
                                  className: b.badge,
                                  children: (0, i.jsx)(o.mAB, {
                                      count: l,
                                      color: d ? g.Z.BACKGROUND_ACCENT : g.Z.STATUS_DANGER
                                  })
                              })
                            : null
                    ]
                })
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: b.subtextContainer,
                children: f
            })
        ]
    });
}
function P(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: a,
            applicationStream: r
        } = (0, s.cj)([S.default, I.Z, C.Z], () => {
            let e = S.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? I.Z.getStatus(e.id) : null,
                activities: null != e ? I.Z.getActivities(e.id) : null,
                applicationStream: null != e ? C.Z.getAnyStreamForUser(e.id) : null
            };
        }),
        { voiceActivityStatusEnabled: o } = (0, c.U)({ location: 'RecentsChannelHeader' }),
        { voiceChannel: _ } = (0, u.Z)({ userId: null == n ? void 0 : n.id }),
        h = o ? _ : void 0;
    return (0, d.Z)({
        activities: a,
        status: l,
        applicationStream: r,
        voiceChannel: h
    })
        ? (0, i.jsx)(m.Z, {
              location: 'RecentsChannelHeader',
              user: n,
              activities: a,
              applicationStream: r,
              voiceChannel: h,
              hideTooltip: !0
          })
        : null;
}
