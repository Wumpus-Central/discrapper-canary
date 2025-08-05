n.d(t, { ZP: () => y });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    a = n(481060),
    o = n(493683),
    u = n(906732),
    c = n(69882),
    E = n(251794),
    d = n(386696),
    _ = n(946273),
    A = n(910693),
    T = n(172751),
    I = n(314897),
    g = n(592125),
    m = n(271383),
    N = n(430824),
    O = n(496675),
    f = n(158776),
    R = n(944486),
    S = n(885110),
    C = n(594174),
    h = n(572004),
    p = n(5192),
    D = n(51144),
    U = n(131085),
    L = n(388032),
    v = n(157092);
function b(e) {
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
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { user: t, guildId: n, onClose: l } = e,
        i = t.id,
        o = (0, s.e7)([S.Z, f.Z, I.default], () => (i === I.default.getId() ? S.Z.getStatus() : f.Z.getStatus(i, n)), [i, n]);
    return (0, r.jsxs)('div', {
        className: v.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: v.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: v.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: a.EFr.SIZE_48,
                            status: o
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: v.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(a.PUh, {
                                            name: p.ZP.getName(n, null, t),
                                            colorString: a.TVs.colors.HEADER_PRIMARY.css,
                                            colorStrings: null
                                        })
                                    }),
                                    (0, r.jsx)(T.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: U.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: v.memberClanTag,
                                        containerClassName: v.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'text-default',
                                children: D.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'text-default',
                children: (0, r.jsx)(a.P3F, {
                    className: v.closeAction,
                    onClick: l,
                    children: (0, r.jsx)(a.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function P(e) {
    var { tag: t = 'div', text: n, disabled: l, children: s, onClick: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['tag', 'text', 'disabled', 'children', 'onClick']);
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) =>
            (0, r.jsx)(
                a.P3F,
                M(b({}, u, e), {
                    tag: t,
                    'aria-label': n,
                    className: i()(v.bottomRowAction, { [v.bottomRowActionDisabled]: l }),
                    onClick: l ? void 0 : o,
                    children: (0, r.jsx)('div', {
                        className: v.innerBottomRowAction,
                        children: s
                    })
                })
            )
    });
}
function j(e) {
    let { user: t, member: l, guildId: i } = e,
        T = (0, s.e7)([N.Z], () => N.Z.getGuild(i)),
        {
            canKickUser: m,
            canBanUser: f,
            canModerateMembers: S
        } = (0, s.cj)(
            [O.Z, C.default, N.Z],
            () => ({
                canKickUser: (0, _.BK)(t, T),
                canBanUser: (0, _.mm)(t, T),
                canModerateMembers: null != T && (0, d.F)(T.id, t.id, [C.default, N.Z, O.Z])
            }),
            [t, T]
        ),
        p = (0, c.b)(l),
        { analyticsLocations: D, newestAnalyticsLocation: U } = (0, u.ZP)(),
        x = (0, A.sE)(i, {
            targetUserId: t.id,
            location: U,
            locations: D
        }),
        j = (0, s.e7)([I.default], () => I.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, s.e7)(
            [R.Z, g.Z],
            () => {
                let e = R.Z.getChannelId(i),
                    t = null != e ? g.Z.getChannel(e) : null,
                    n = null != t && t.isModeratorReportChannel() ? e : void 0;
                return null != n ? n : void 0;
            },
            [i]
        );
    return (0, r.jsxs)('div', {
        className: v.bottomRow,
        children: [
            (0, r.jsx)(P, {
                disabled: j,
                text: L.intl.string(L.t['g33r/P']),
                onClick: () => {
                    o.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(a.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 24,
                    height: 24
                })
            }),
            (0, r.jsx)(P, {
                disabled: !m,
                text: L.intl.string(L.t['3glT6e']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(b({}, n), {
                                    location: U,
                                    guildId: i,
                                    user: t,
                                    modReportId: y
                                })
                            );
                    });
                },
                children: (0, r.jsx)(a.I9k, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css
                })
            }),
            (0, r.jsx)(P, {
                disabled: !f,
                text: L.intl.string(L.t['5MBJ5O']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(b({}, n), {
                                    location: U,
                                    guildId: i,
                                    user: t,
                                    modReportId: y
                                })
                            );
                    });
                },
                children: (0, r.jsx)(a.pgN, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css
                })
            }),
            (0, r.jsx)(P, {
                disabled: !S,
                text: p ? L.intl.string(L.t.N86XcH) : L.intl.string(L.t.kTlLr6),
                onClick: () => {
                    p
                        ? (0, E.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: D
                          })
                        : (0, E.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: D,
                              modReportId: y
                          });
                },
                children: (0, r.jsx)(a.YlB, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css
                })
            }),
            (0, r.jsx)(P, {
                text: L.intl.string(L.t.IHTjzM),
                onClick: () => {
                    (x(A.jQ.COPY_ID), (0, h.JG)(t.id));
                },
                disabled: !h.wS,
                children: (0, r.jsx)(a.VuL, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_DEFAULT.css
                })
            })
        ]
    });
}
function y(e) {
    let { userId: t, guildId: n, onClose: l } = e,
        i = (0, s.e7)([C.default], () => C.default.getUser(t), [t]),
        a = (0, s.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]);
    return null == i || null == a
        ? null
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(x, {
                      user: i,
                      guildId: n,
                      onClose: l
                  }),
                  (0, r.jsx)(j, {
                      user: i,
                      member: a,
                      guildId: n
                  })
              ]
          });
}
