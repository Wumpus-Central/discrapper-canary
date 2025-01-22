n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(747017),
    u = n(43267),
    d = n(933557),
    m = n(471445),
    h = n(377171),
    f = n(313201),
    p = n(565138),
    _ = n(199902),
    g = n(592125),
    E = n(430824),
    C = n(158776),
    I = n(306680),
    x = n(594174),
    N = n(388032),
    v = n(897394);
let T = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function S(e) {
    let { channel: t, children: n, gotoChannel: r, mentionCount: l, channelState: o, toggleCollapsed: c } = e,
        u = (0, a.JA)('recents-header-'.concat(t.id, '-').concat((0, f.Dt)()));
    return (0, i.jsx)(s.FocusRing, {
        offset: T,
        children: (0, i.jsxs)('div', {
            className: v.channelHeader,
            ...u,
            tabIndex: 0,
            'data-recents-channel': t.id,
            onKeyDown: function (e) {
                null != c && null != o && (('ArrowRight' === e.key && o.collapsed) || ('ArrowLeft' === e.key && !o.collapsed)) && (null == c || c(o));
            },
            children: [
                (0, i.jsx)(A, {
                    channel: t,
                    gotoChannel: r
                }),
                (0, i.jsx)(R, {
                    channel: t,
                    gotoChannel: r,
                    mentionCount: l
                }),
                n
            ]
        })
    });
}
function A(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(b, {
              channel: t,
              gotoChannel: n
          })
        : (0, i.jsx)(j, {
              channel: t,
              gotoChannel: n
          });
}
function b(e) {
    let { channel: t, gotoChannel: n } = e,
        r = (0, o.e7)([x.default], () => (t.isDM() ? x.default.getUser(t.getRecipientId()) : null)),
        l = null == r ? (0, u.x)(t) : r.getAvatarURL(void 0, 40);
    return (0, i.jsx)(s.Clickable, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)('img', {
            className: v.dmIcon,
            src: l,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function j(e) {
    let { channel: t, gotoChannel: n } = e,
        r = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id));
    return null == r
        ? null
        : (0, i.jsx)(p.Z, {
              'aria-hidden': !0,
              className: v.guildIcon,
              guild: r,
              size: p.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function R(e) {
    let { channel: t, gotoChannel: n, mentionCount: r } = e,
        a = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id)),
        c = (0, o.e7)([g.Z], () => g.Z.getChannel(t.parent_id)),
        u = (0, o.e7)([I.ZP], () => I.ZP.getIsMentionLowImportance(t.id)),
        f = (0, m.KS)(t, a),
        p = (0, d.ZP)(t, !1),
        _ = null == c ? (null == a ? void 0 : a.name) : ''.concat(null == a ? void 0 : a.name, ' \u203A ').concat(c.name),
        C = t.isMultiUserDM()
            ? N.intl.formatToPlainString(N.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(Z, { channel: t })
              : (0, i.jsx)(s.Clickable, {
                    className: l()(v.subtext, v.guildName),
                    onClick: n,
                    children: _
                });
    return (0, i.jsxs)('div', {
        className: v.channelNameSection,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-md/semibold',
                className: v.channelNameHeader,
                children: (0, i.jsxs)(s.Clickable, {
                    className: v.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == f
                            ? null
                            : (0, i.jsx)(f, {
                                  className: t.isForumLikeChannel() ? v.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, i.jsx)('span', {
                            className: v.channelNameSpan,
                            children: p
                        }),
                        null != r && r > 0
                            ? (0, i.jsx)('div', {
                                  className: v.badge,
                                  children: (0, i.jsx)(s.NumberBadge, {
                                      count: r,
                                      color: u ? h.Z.BACKGROUND_ACCENT : h.Z.STATUS_DANGER
                                  })
                              })
                            : null
                    ]
                })
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: v.subtextContainer,
                children: C
            })
        ]
    });
}
function Z(e) {
    let { channel: t } = e,
        {
            user: n,
            activities: r,
            applicationStream: l
        } = (0, o.cj)([x.default, C.Z, _.Z], () => {
            let e = x.default.getUser(t.getRecipientId());
            return {
                user: e,
                activities: null != e ? C.Z.getActivities(e.id) : null,
                applicationStream: null != e ? _.Z.getAnyStreamForUser(e.id) : null
            };
        });
    return null == r
        ? null
        : (0, i.jsx)(c.Z, {
              className: v.activityStatus,
              emojiClassName: v.activityEmoji,
              activities: r,
              applicationStream: l,
              hideTooltip: !0,
              user: n
          });
}
