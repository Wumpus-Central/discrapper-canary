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
    f = n(430824),
    O = n(496675),
    N = n(158776),
    h = n(944486),
    R = n(885110),
    p = n(594174),
    S = n(572004),
    C = n(5192),
    b = n(51144),
    D = n(131085),
    v = n(388032),
    U = n(157092);
function L(e) {
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
        o = (0, s.e7)([R.Z, N.Z, I.default], () => (i === I.default.getId() ? R.Z.getStatus() : N.Z.getStatus(i, n)), [i, n]);
    return (0, r.jsxs)('div', {
        className: U.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: U.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: U.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: a.EFr.SIZE_48,
                            status: o
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: U.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: U.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(a.PUh, {
                                            name: C.ZP.getName(n, null, t),
                                            color: a.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, r.jsx)(T.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: D.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: U.memberClanTag,
                                        containerClassName: U.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'text-default',
                                children: b.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'text-default',
                children: (0, r.jsx)(a.P3F, {
                    className: U.closeAction,
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
                M(L({}, u, e), {
                    tag: t,
                    'aria-label': n,
                    className: i()(U.bottomRowAction, { [U.bottomRowActionDisabled]: l }),
                    onClick: l ? void 0 : o,
                    children: (0, r.jsx)('div', {
                        className: U.innerBottomRowAction,
                        children: s
                    })
                })
            )
    });
}
function j(e) {
    let { user: t, member: l, guildId: i } = e,
        T = (0, s.e7)([f.Z], () => f.Z.getGuild(i)),
        {
            canKickUser: m,
            canBanUser: N,
            canModerateMembers: R
        } = (0, s.cj)(
            [O.Z, p.default, f.Z],
            () => ({
                canKickUser: (0, _.BK)(t, T),
                canBanUser: (0, _.mm)(t, T),
                canModerateMembers: null != T && (0, d.F)(T.id, t.id, [p.default, f.Z, O.Z])
            }),
            [t, T]
        ),
        C = (0, c.b)(l),
        { analyticsLocations: b, newestAnalyticsLocation: D } = (0, u.ZP)(),
        x = (0, A.sE)(i, {
            targetUserId: t.id,
            location: D,
            locations: b
        }),
        j = (0, s.e7)([I.default], () => I.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, s.e7)(
            [h.Z, g.Z],
            () => {
                let e = h.Z.getChannelId(i),
                    t = null != e ? g.Z.getChannel(e) : null,
                    n = null != t && t.isModeratorReportChannel() ? e : void 0;
                return null != n ? n : void 0;
            },
            [i]
        );
    return (0, r.jsxs)('div', {
        className: U.bottomRow,
        children: [
            (0, r.jsx)(P, {
                disabled: j,
                text: v.intl.string(v.t['g33r/P']),
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
                text: v.intl.string(v.t['3glT6e']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('36760').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: D,
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
                disabled: !N,
                text: v.intl.string(v.t['5MBJ5O']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('4114').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: D,
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
                disabled: !R,
                text: C ? v.intl.string(v.t.N86XcH) : v.intl.string(v.t.kTlLr6),
                onClick: () => {
                    C
                        ? (0, E.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: b
                          })
                        : (0, E.z)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: b,
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
                text: v.intl.string(v.t.IHTjzM),
                onClick: () => {
                    (x(A.jQ.COPY_ID), (0, S.JG)(t.id));
                },
                disabled: !S.wS,
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
        i = (0, s.e7)([p.default], () => p.default.getUser(t), [t]),
        a = (0, s.e7)([m.ZP], () => m.ZP.getMember(n, t), [n, t]);
    return null == i || null == a
        ? null
        : (0, r.jsxs)('div', {
              className: U.container,
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
