(t.d(n, {
    d: () => T,
    p: () => S
}),
    t(49124));
var r = t(255367),
    l = t(442837),
    i = t(481060),
    c = t(239091),
    o = t(287734),
    u = t(627050),
    a = t(66999),
    s = t(364640),
    d = t(754688),
    f = t(336197),
    _ = t(779699),
    h = t(797874),
    b = t(359875),
    g = t(124072),
    m = t(891984),
    y = t(644956),
    p = t(819366),
    j = t(488968),
    x = t(131704),
    v = t(592125),
    w = t(485386),
    O = t(430824),
    k = t(934415),
    I = t(900849),
    P = t(981631),
    Z = t(388032);
async function C(e, n, t) {
    if (null == n) return;
    if (
        (s.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = O.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await I.Ub(
                    e,
                    {},
                    {
                        channelId: n,
                        messageId: t
                    }
                );
                return;
            } catch (e) {}
    }
    let r = v.Z.getChannel(n);
    if (null != r && null == t && (0, x.bw)(r.type) && (0, d.YO)(r)) return void o.default.selectVoiceChannel(r.id);
    (0, f.Z)(P.Z5c.CHANNEL(e, n, t));
}
function S(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(T, { channelId: t });
        case 'user':
            return (0, r.jsx)(E, { id: t });
        case 'role':
            return (0, r.jsx)(N, { id: t });
        case 'everyone':
            return (0, r.jsx)(H, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(H, { roleName: '@here' });
        case 'game':
            return (0, r.jsx)(D, { id: t });
        default:
            return JSON.stringify(t);
    }
}
function T(e) {
    let { channelId: n, guildId: o, messageId: u } = e,
        s = (0, a.Z)(n),
        {
            name: f,
            iconType: h,
            isForumPost: b,
            hasAccess: y
        } = (0, l.cj)(
            [v.Z],
            () => {
                let e = v.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, k.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, d.YO)(e)
                };
            },
            [n]
        ),
        p = (0, j.d)();
    if (null == h) return;
    let x = o === (null == p ? void 0 : p.guildId) || null == o,
        w =
            y || s.isSubscriptionGated
                ? x || null == f
                    ? (0, r.jsx)(_.Z, {
                          iconType: h,
                          children: null != f ? f : (0, r.jsx)('em', { children: Z.intl.string(Z.t.J90oLS) })
                      })
                    : (0, r.jsx)(A, {
                          guildId: o,
                          children: f
                      })
                : (0, r.jsx)(_.Z, {
                      iconType: 'locked',
                      children: Z.intl.string(Z.t['/YzI6+'])
                  }),
        O = null;
    return (
        null != u &&
            (O = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(m.Z, {}), (0, r.jsx)(_.Z, { iconType: b ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(g.Z, {
            role: 'link',
            onClick: (e) => {
                (null == e || e.stopPropagation(), C(o, n, u), (0, i.pTH)());
            },
            onContextMenu: (e) => {
                let l = v.Z.getChannel(n);
                (0, c.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, c, o;
                        return (0, r.jsx)(
                            e,
                            ((c = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            ((r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = r));
                                        }));
                                }
                                return e;
                            })({}, t)),
                            (o = o =
                                {
                                    channel: l,
                                    channelId: null != (i = null == l ? void 0 : l.id) ? i : n,
                                    originalLink: null,
                                    messageId: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            c)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [w, O]
        })
    );
}
function A(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([O.Z], () => O.Z.getGuild(n), [n]);
    return (0, r.jsxs)(b.Z, {
        guild: i,
        children: [null == i ? void 0 : i.name, null != i ? (0, r.jsx)(m.Z, {}) : null, t]
    });
}
function E(e) {
    let { id: n } = e,
        t = (0, j.d)();
    return (0, r.jsx)(p.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: '<@'.concat(n, '>')
    });
}
function N(e) {
    let { id: n } = e,
        t = (0, j.d)(),
        i = null == t ? void 0 : t.guildId,
        c = (0, l.e7)(
            [w.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = w.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : Z.intl.string(Z.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(y.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(c)
    });
}
function D(e) {
    let { id: n } = e,
        t = (0, j.d)();
    return u.d.useExperiment({ location: 'native markdown' }).enabled
        ? (0, r.jsx)(h.Z, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId
          })
        : (0, r.jsx)('span', { children: '<@$'.concat(n, '>') });
}
function H(e) {
    let { roleName: n } = e,
        t = (0, j.d)();
    return (0, r.jsx)(y.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
