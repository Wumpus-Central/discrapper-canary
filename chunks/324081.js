n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(468363),
    u = n(326255),
    d = n(956221),
    p = n(747017),
    m = n(43267),
    f = n(933557),
    h = n(471445),
    g = n(377171),
    _ = n(313201),
    b = n(565138),
    x = n(199902),
    y = n(592125),
    E = n(430824),
    v = n(158776),
    O = n(306680),
    N = n(594174),
    j = n(388032),
    C = n(265938);
let I = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};
function S(e) {
    var t, n;
    let { channel: i, children: a, gotoChannel: o, mentionCount: c, channelState: u, toggleCollapsed: d } = e,
        p = (0, l.JA)('recents-header-'.concat(i.id, '-').concat((0, _.Dt)()));
    return (0, r.jsx)(s.tEY, {
        offset: I,
        children: (0, r.jsxs)(
            'div',
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ className: C.channelHeader }, p)),
            (n = n =
                {
                    tabIndex: 0,
                    'data-recents-channel': i.id,
                    onKeyDown: function (e) {
                        null != d && null != u && (('ArrowRight' === e.key && u.collapsed) || ('ArrowLeft' === e.key && !u.collapsed)) && (null == d || d(u));
                    },
                    children: [
                        (0, r.jsx)(T, {
                            channel: i,
                            gotoChannel: o
                        }),
                        (0, r.jsx)(w, {
                            channel: i,
                            gotoChannel: o,
                            mentionCount: c
                        }),
                        a
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
function T(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(P, {
              channel: t,
              gotoChannel: n
          })
        : (0, r.jsx)(A, {
              channel: t,
              gotoChannel: n
          });
}
function P(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, o.e7)([N.default], () => (t.isDM() ? N.default.getUser(t.getRecipientId()) : null)),
        a = null == i ? (0, m.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(s.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)('img', {
            className: C.dmIcon,
            src: a,
            alt: '',
            'aria-hidden': !0
        })
    });
}
function A(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(b.Z, {
              'aria-hidden': !0,
              className: C.guildIcon,
              guild: i,
              size: b.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1
          });
}
function w(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        l = (0, o.e7)([E.Z], () => E.Z.getGuild(t.guild_id)),
        c = (0, o.e7)([y.Z], () => y.Z.getChannel(t.parent_id)),
        u = (0, o.e7)([O.ZP], () => O.ZP.getIsMentionLowImportance(t.id)),
        d = (0, h.KS)(t, l),
        p = (0, f.ZP)(t, !1),
        m = null == c ? (null == l ? void 0 : l.name) : ''.concat(null == l ? void 0 : l.name, ' \u203A ').concat(c.name),
        _ = t.isMultiUserDM()
            ? j.NW.formatToPlainString(j.t.CxSA5O, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(Z, { channel: t })
              : (0, r.jsx)(s.P3F, {
                    className: a()(C.subtext, C.guildName),
                    onClick: n,
                    children: m
                });
    return (0, r.jsxs)('div', {
        className: C.channelNameSection,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: C.channelNameHeader,
                children: (0, r.jsxs)(s.P3F, {
                    className: C.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == d
                            ? null
                            : (0, r.jsx)(d, {
                                  className: t.isForumLikeChannel() ? C.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: 'custom',
                                  color: 'currentColor'
                              }),
                        (0, r.jsx)('span', {
                            className: C.channelNameSpan,
                            children: p
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)('div', {
                                  className: C.badge,
                                  children: (0, r.jsx)(s.mAB, {
                                      count: i,
                                      color: u ? g.Z.BACKGROUND_ACCENT : g.Z.STATUS_DANGER
                                  })
                              })
                            : null
                    ]
                })
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                className: C.subtextContainer,
                children: _
            })
        ]
    });
}
function Z(e) {
    let { channel: t } = e,
        {
            user: n,
            status: i,
            activities: a,
            applicationStream: l
        } = (0, o.cj)([N.default, v.Z, x.Z], () => {
            let e = N.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? v.Z.getStatus(e.id) : null,
                activities: null != e ? v.Z.getActivities(e.id) : null,
                applicationStream: null != e ? x.Z.getAnyStreamForUser(e.id) : null
            };
        }),
        { voiceActivityStatusEnabled: s } = (0, c.U)({ location: 'RecentsChannelHeader' }),
        { voiceChannel: m } = (0, d.Z)({
            userId: null == n ? void 0 : n.id,
            surface: 'recents-channel-header'
        }),
        f = s ? m : void 0;
    return (0, u.Z)({
        activities: a,
        status: i,
        applicationStream: l,
        voiceChannel: f
    })
        ? (0, r.jsx)(p.Z, {
              user: n,
              activities: a,
              applicationStream: l,
              voiceChannel: f,
              hideTooltip: !0
          })
        : null;
}
