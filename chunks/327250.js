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
    d = n(251794),
    E = n(386696),
    _ = n(946273),
    A = n(910693),
    m = n(172751),
    T = n(314897),
    f = n(592125),
    g = n(271383),
    I = n(430824),
    h = n(496675),
    O = n(158776),
    N = n(944486),
    p = n(885110),
    R = n(594174),
    S = n(572004),
    C = n(5192),
    b = n(51144),
    v = n(131085),
    D = n(388032),
    x = n(157092);
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
function U(e) {
    let { user: t, guildId: n, onClose: l } = e,
        i = t.id,
        o = (0, s.e7)([p.Z, O.Z, T.default], () => (i === T.default.getId() ? p.Z.getStatus() : O.Z.getStatus(i, n)), [i, n]);
    return (0, r.jsxs)('div', {
        className: x.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: x.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: x.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: a.EFr.SIZE_48,
                            status: o
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: x.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(a.PUh, {
                                            name: C.ZP.getName(n, null, t),
                                            color: a.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, r.jsx)(m.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: v.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: x.memberClanTag,
                                        containerClassName: x.memberClanTagContainer
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
                    className: x.closeAction,
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
function j(e) {
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
                    className: i()(x.bottomRowAction, { [x.bottomRowActionDisabled]: l }),
                    onClick: l ? void 0 : o,
                    children: (0, r.jsx)('div', {
                        className: x.innerBottomRowAction,
                        children: s
                    })
                })
            )
    });
}
function P(e) {
    let { user: t, member: l, guildId: i } = e,
        m = (0, s.e7)([I.Z], () => I.Z.getGuild(i)),
        {
            canKickUser: g,
            canBanUser: O,
            canModerateMembers: p
        } = (0, s.cj)(
            [h.Z, R.default, I.Z],
            () => ({
                canKickUser: (0, _.BK)(t, m),
                canBanUser: (0, _.mm)(t, m),
                canModerateMembers: null != m && (0, E.F)(m.id, t.id, [R.default, I.Z, h.Z])
            }),
            [t, m]
        ),
        C = (0, c.b)(l),
        { analyticsLocations: b, newestAnalyticsLocation: v } = (0, u.ZP)(),
        U = (0, A.sE)(i, {
            targetUserId: t.id,
            location: v,
            locations: b
        }),
        P = (0, s.e7)([T.default], () => T.default.getId() === (null == t ? void 0 : t.id)),
        y = (0, s.e7)(
            [N.Z, f.Z],
            () => {
                let e = N.Z.getChannelId(i),
                    t = null != e ? f.Z.getChannel(e) : null,
                    n = null != t && t.isModeratorReportChannel() ? e : void 0;
                return null != n ? n : void 0;
            },
            [i]
        );
    return (0, r.jsxs)('div', {
        className: x.bottomRow,
        children: [
            (0, r.jsx)(j, {
                disabled: P,
                text: D.intl.string(D.t['g33r/P']),
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
            (0, r.jsx)(j, {
                disabled: !g,
                text: D.intl.string(D.t['3glT6e']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('36760').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: v,
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
            (0, r.jsx)(j, {
                disabled: !O,
                text: D.intl.string(D.t['5MBJ5O']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('4114').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    location: v,
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
            (0, r.jsx)(j, {
                disabled: !p,
                text: C ? D.intl.string(D.t.N86XcH) : D.intl.string(D.t.kTlLr6),
                onClick: () => {
                    C
                        ? (0, d.q)({
                              guildId: l.guildId,
                              userId: l.userId,
                              anaylticsLocations: b
                          })
                        : (0, d.z)({
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
            (0, r.jsx)(j, {
                text: D.intl.string(D.t.IHTjzM),
                onClick: () => {
                    (U(A.jQ.COPY_ID), (0, S.JG)(t.id));
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
        i = (0, s.e7)([R.default], () => R.default.getUser(t), [t]),
        a = (0, s.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]);
    return null == i || null == a
        ? null
        : (0, r.jsxs)('div', {
              className: x.container,
              children: [
                  (0, r.jsx)(U, {
                      user: i,
                      guildId: n,
                      onClose: l
                  }),
                  (0, r.jsx)(P, {
                      user: i,
                      member: a,
                      guildId: n
                  })
              ]
          });
}
