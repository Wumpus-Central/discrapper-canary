n.d(t, { ZP: () => R });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(399606),
    a = n(481060),
    s = n(493683),
    c = n(906732),
    u = n(979264),
    d = n(69882),
    p = n(251794),
    h = n(386696),
    f = n(946273),
    m = n(910693),
    g = n(314897),
    b = n(271383),
    _ = n(430824),
    C = n(496675),
    y = n(158776),
    x = n(885110),
    v = n(594174),
    j = n(572004),
    O = n(5192),
    E = n(51144),
    N = n(308083),
    I = n(388032),
    P = n(157092);
function S(e) {
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
function Z(e, t) {
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
        s = (0, o.e7)([x.Z, y.Z, g.default], () => (l === g.default.getId() ? x.Z.getStatus() : y.Z.getStatus(l, n)), [l, n]);
    return (0, r.jsxs)('div', {
        className: P.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: P.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: P.memberAvatar,
                        children: (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: a.EFr.SIZE_48,
                            status: s
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: P.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: P.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(a.PUh, {
                                            name: O.ZP.getName(n, null, t),
                                            color: a.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, r.jsx)(u.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: N.NC.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: P.memberClanTag,
                                        containerClassName: P.memberClanTagContainer
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
                    className: P.closeAction,
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
                Z(S({}, c, e), {
                    tag: t,
                    'aria-label': n,
                    className: l()(P.bottomRowAction, { [P.bottomRowActionDisabled]: i }),
                    onClick: i ? void 0 : s,
                    children: (0, r.jsx)('div', {
                        className: P.innerBottomRowAction,
                        children: o
                    })
                })
            )
    });
}
function w(e) {
    let { user: t, member: i, guildId: l } = e,
        u = (0, o.e7)([_.Z], () => _.Z.getGuild(l)),
        {
            canKickUser: b,
            canBanUser: y,
            canModerateMembers: x
        } = (0, o.cj)(
            [C.Z, v.default, _.Z],
            () => ({
                canKickUser: (0, f.BK)(t, u),
                canBanUser: (0, f.mm)(t, u),
                canModerateMembers: null != u && (0, h.F)(u.id, t.id, [v.default, _.Z, C.Z])
            }),
            [t, u]
        ),
        O = (0, d.b)(i),
        { analyticsLocations: E, newestAnalyticsLocation: N } = (0, c.ZP)(),
        T = (0, m.sE)(l, {
            targetUserId: t.id,
            location: N,
            locations: E
        }),
        w = (0, o.e7)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id));
    return (0, r.jsxs)('div', {
        className: P.bottomRow,
        children: [
            (0, r.jsx)(A, {
                disabled: w,
                text: I.NW.string(I.t['g33r/P']),
                onClick: () => {
                    s.Z.openPrivateChannel(t.id);
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
                text: I.NW.string(I.t['3glT6e']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                Z(S({}, n), {
                                    location: N,
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
                disabled: !y,
                text: I.NW.string(I.t['5MBJ5O']),
                onClick: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                Z(S({}, n), {
                                    location: N,
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
                text: O ? I.NW.string(I.t.N86XcH) : I.NW.string(I.t.kTlLr6),
                onClick: () => {
                    O
                        ? (0, p.q)({
                              guildId: i.guildId,
                              userId: i.userId,
                              anaylticsLocations: E
                          })
                        : (0, p.z)({
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
                text: I.NW.string(I.t.IHTjzM),
                onClick: () => {
                    T(m.jQ.COPY_ID), (0, j.JG)(t.id);
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
              className: P.container,
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
