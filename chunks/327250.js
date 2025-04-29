n.d(t, { ZP: () => R });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(399606),
    a = n(481060),
    s = n(493683),
    c = n(906732),
    u = n(69882),
    d = n(251794),
    p = n(386696),
    h = n(946273),
    f = n(910693),
    m = n(172751),
    g = n(314897),
    b = n(271383),
    _ = n(430824),
    y = n(496675),
    C = n(158776),
    x = n(885110),
    v = n(594174),
    j = n(572004),
    O = n(5192),
    E = n(51144),
    I = n(131085),
    P = n(388032),
    S = n(157092);
function Z(e) {
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
}
function N(e, t) {
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
function T(e) {
    let { user: t, guildId: n, onClose: i } = e,
        l = t.id,
        s = (0, o.e7)([x.Z, C.Z, g.default], () => (l === g.default.getId() ? x.Z.getStatus() : C.Z.getStatus(l, n)), [l, n]);
    return (0, r.jsxs)('div', {
        className: S.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: S.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: S.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: a.EFr.SIZE_48,
                            status: s
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: S.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(a.PUh, {
                                            name: O.ZP.getName(n, null, t),
                                            color: a.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, r.jsx)(m.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: I.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: S.memberClanTag,
                                        containerClassName: S.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: E.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, r.jsx)(a.P3F, {
                    className: S.closeAction,
                    onClick: i,
                    children: (0, r.jsx)(a.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function A(e) {
    var { tag: t = 'div', text: n, disabled: i, children: o, onClick: s } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['tag', 'text', 'disabled', 'children', 'onClick']);
    return (0, r.jsx)(a.ua7, {
        text: n,
        children: (e) =>
            (0, r.jsx)(
                a.P3F,
                N(Z({}, c, e), {
                    tag: t,
                    'aria-label': n,
                    className: l()(S.bottomRowAction, { [S.bottomRowActionDisabled]: i }),
                    onClick: i ? void 0 : s,
                    children: (0, r.jsx)('div', {
                        className: S.innerBottomRowAction,
                        children: o
                    })
                })
            )
    });
}
function w(e) {
    let { user: t, member: i, guildId: l } = e,
        m = (0, o.e7)([_.Z], () => _.Z.getGuild(l)),
        {
            canKickUser: b,
            canBanUser: C,
            canModerateMembers: x
        } = (0, o.cj)(
            [y.Z, v.default, _.Z],
            () => ({
                canKickUser: (0, h.BK)(t, m),
                canBanUser: (0, h.mm)(t, m),
                canModerateMembers: null != m && (0, p.F)(m.id, t.id, [v.default, _.Z, y.Z])
            }),
            [t, m]
        ),
        O = (0, u.b)(i),
        { analyticsLocations: E, newestAnalyticsLocation: I } = (0, c.ZP)(),
        T = (0, f.sE)(l, {
            targetUserId: t.id,
            location: I,
            locations: E
        }),
        w = (0, o.e7)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id));
    return (0, r.jsxs)('div', {
        className: S.bottomRow,
        children: [
            (0, r.jsx)(A, {
                disabled: w,
                text: P.intl.string(P.t['g33r/P']),
                onClick: () => {
                    s.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(a.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 24,
                    height: 24
                })
            }),
            (0, r.jsx)(A, {
                disabled: !b,
                text: P.intl.string(P.t['3glT6e']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                N(Z({}, n), {
                                    location: I,
                                    guildId: l,
                                    user: t
                                })
                            );
                    });
                },
                children: (0, r.jsx)(a.I9k, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(A, {
                disabled: !C,
                text: P.intl.string(P.t['5MBJ5O']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('4114').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                N(Z({}, n), {
                                    location: I,
                                    guildId: l,
                                    user: t
                                })
                            );
                    });
                },
                children: (0, r.jsx)(a.pgN, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(A, {
                disabled: !x,
                text: O ? P.intl.string(P.t.N86XcH) : P.intl.string(P.t.kTlLr6),
                onClick: () => {
                    O
                        ? (0, d.q)({
                              guildId: i.guildId,
                              userId: i.userId,
                              anaylticsLocations: E
                          })
                        : (0, d.z)({
                              guildId: i.guildId,
                              userId: i.userId,
                              anaylticsLocations: E
                          });
                },
                children: (0, r.jsx)(a.YlB, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(A, {
                text: P.intl.string(P.t.IHTjzM),
                onClick: () => {
                    T(f.jQ.COPY_ID), (0, j.JG)(t.id);
                },
                disabled: !j.wS,
                children: (0, r.jsx)(a.VuL, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: a.TVs.colors.TEXT_NORMAL.css
                })
            })
        ]
    });
}
function R(e) {
    let { userId: t, guildId: n, onClose: i } = e,
        l = (0, o.e7)([v.default], () => v.default.getUser(t), [t]),
        a = (0, o.e7)([b.ZP], () => b.ZP.getMember(n, t), [n, t]);
    return null == l || null == a
        ? null
        : (0, r.jsxs)('div', {
              className: S.container,
              children: [
                  (0, r.jsx)(T, {
                      user: l,
                      guildId: n,
                      onClose: i
                  }),
                  (0, r.jsx)(w, {
                      user: l,
                      member: a,
                      guildId: n
                  })
              ]
          });
}
