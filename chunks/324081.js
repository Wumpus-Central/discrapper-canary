n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(91192),
    a = n(442837),
    s = n(481060),
    c = n(468363),
    u = n(326255),
    d = n(956221),
    h = n(771173),
    p = n(43267),
    f = n(933557),
    g = n(471445),
    m = n(377171),
    b = n(313201),
    _ = n(565138),
    O = n(199902),
    y = n(592125),
    v = n(430824),
    C = n(158776),
    j = n(306680),
    E = n(594174),
    x = n(388032),
    S = n(265938);
let I = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function P(e) {
    var t, n;
    let { channel: i, children: l, gotoChannel: a, mentionCount: c, channelState: u, toggleCollapsed: d } = e,
        h = (0, o.JA)('recents-header-'.concat(i.id, '-').concat((0, b.Dt)()));
    return (0, r.jsx)(s.tEY, {
        offset: I,
        children: (0, r.jsxs)(
            'div',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({ className: S.channelHeader }, h)),
            (n = n =
                {
                    tabIndex: 0,
                    'data-recents-channel': i.id,
                    onKeyDown: function (e) {
                        null != d && null != u && (('ArrowRight' === e.key && u.collapsed) || ('ArrowLeft' === e.key && !u.collapsed)) && (null == d || d(u));
                    },
                    children: [
                        (0, r.jsx)(N, {
                            channel: i,
                            gotoChannel: a
                        }),
                        (0, r.jsx)(T, {
                            channel: i,
                            gotoChannel: a,
                            mentionCount: c
                        }),
                        l
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
function N(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(w, {
              channel: t,
              gotoChannel: n
          })
        : (0, r.jsx)(Z, {
              channel: t,
              gotoChannel: n
          });
}
function w(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, a.e7)([E.default], () => (t.isDM() ? E.default.getUser(t.getRecipientId()) : null)),
        l = null == i ? (0, p.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(s.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)('img', {
            className: S.dmIcon,
            src: l,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function Z(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              'aria-hidden': !0,
              className: S.guildIcon,
              guild: i,
              size: _.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function T(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        o = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        c = (0, a.e7)([y.Z], () => y.Z.getChannel(t.parent_id)),
        u = (0, a.e7)([j.ZP], () => j.ZP.getIsMentionLowImportance(t.id)),
        d = (0, g.KS)(t, o),
        h = (0, f.ZP)(t, !1),
        p = null == c ? (null == o ? void 0 : o.name) : ''.concat(null == o ? void 0 : o.name, ' \u203A ').concat(c.name),
        b = t.isMultiUserDM()
            ? x.intl.formatToPlainString(x.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(A, { channel: t })
              : (0, r.jsx)(s.P3F, {
                    className: l()(S.subtext, S.guildName),
                    onClick: n,
                    children: p
                });
    return (0, r.jsxs)('div', {
        className: S.channelNameSection,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: S.channelNameHeader,
                children: (0, r.jsxs)(s.P3F, {
                    className: S.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == d
                            ? null
                            : (0, r.jsx)(d, {
                                  className: t.isForumLikeChannel() ? S.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, r.jsx)('span', {
                            className: S.channelNameSpan,
                            children: h
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)('div', {
                                  className: S.badge,
                                  children: (0, r.jsx)(s.mAB, {
                                      count: i,
                                      color: u ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER
                                  })
                              })
                            : null
                    ]
                })
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: S.subtextContainer,
                children: b
            })
        ]
    });
}
function A(e) {
    let { channel: t } = e,
        {
            user: n,
            status: i,
            activities: l,
            applicationStream: o
        } = (0, a.cj)([E.default, C.Z, O.Z], () => {
            let e = E.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? C.Z.getStatus(e.id) : null,
                activities: null != e ? C.Z.getActivities(e.id) : null,
                applicationStream: null != e ? O.Z.getAnyStreamForUser(e.id) : null
            };
        }),
        { voiceActivityStatusEnabled: s } = (0, c.U)({ location: 'RecentsChannelHeader' }),
        { voiceChannel: p } = (0, d.Z)({ userId: null == n ? void 0 : n.id }),
        f = s ? p : void 0;
    return (0, u.Z)({
        activities: l,
        status: i,
        applicationStream: o,
        voiceChannel: f
    })
        ? (0, r.jsx)(h.Z, {
              location: 'RecentsChannelHeader',
              user: n,
              activities: l,
              applicationStream: o,
              voiceChannel: f,
              hideTooltip: !0
          })
        : null;
}
