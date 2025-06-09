n.d(t, { ZP: () => k });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(399606),
    o = n(481060),
    s = n(493683),
    c = n(906732),
    u = n(69882),
    d = n(251794),
    p = n(386696),
    h = n(946273),
    f = n(910693),
    m = n(172751),
    g = n(314897),
    b = n(592125),
    _ = n(271383),
    y = n(430824),
    C = n(496675),
    x = n(158776),
    v = n(944486),
    j = n(885110),
    O = n(594174),
    E = n(572004),
    I = n(5192),
    P = n(51144),
    S = n(131085),
    Z = n(388032),
    N = n(157092);
function T(e) {
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
function A(e, t) {
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
function w(e) {
    let { user: t, guildId: n, onClose: i } = e,
        l = t.id,
        s = (0, a.e7)([j.Z, x.Z, g.default], () => (l === g.default.getId() ? j.Z.getStatus() : x.Z.getStatus(l, n)), [l, n]);
    return (0, r.jsxs)('div', {
        className: N.topRow,
        children: [
            (0, r.jsxs)('div', {
                className: N.memberNameContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: N.memberAvatar,
                        children: (0, r.jsx)(o.qEK, {
                            src: t.getAvatarURL(n, 48),
                            'aria-label': t.username,
                            size: o.EFr.SIZE_48,
                            status: s
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: N.memberNameAndTagContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: N.memberNameTextContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-lg/medium',
                                        children: (0, r.jsx)(o.PUh, {
                                            name: I.ZP.getName(n, null, t),
                                            color: o.TVs.colors.HEADER_PRIMARY.css
                                        })
                                    }),
                                    (0, r.jsx)(m.ZP, {
                                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                                        userId: null == t ? void 0 : t.id,
                                        contextGuildId: n,
                                        badgeSize: S.Gg.SIZE_16,
                                        textVariant: 'heading-md/semibold',
                                        className: N.memberClanTag,
                                        containerClassName: N.memberClanTagContainer
                                    })
                                ]
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'text-normal',
                                children: P.ZP.getUserTag(t)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'text-normal',
                children: (0, r.jsx)(o.P3F, {
                    className: N.closeAction,
                    onClick: i,
                    children: (0, r.jsx)(o.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            })
        ]
    });
}
function R(e) {
    var { tag: t = 'div', text: n, disabled: i, children: a, onClick: s } = e,
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
    return (0, r.jsx)(o.ua7, {
        text: n,
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                A(T({}, c, e), {
                    tag: t,
                    'aria-label': n,
                    className: l()(N.bottomRowAction, { [N.bottomRowActionDisabled]: i }),
                    onClick: i ? void 0 : s,
                    children: (0, r.jsx)('div', {
                        className: N.innerBottomRowAction,
                        children: a
                    })
                })
            )
    });
}
function M(e) {
    let { user: t, member: i, guildId: l } = e,
        m = (0, a.e7)([y.Z], () => y.Z.getGuild(l)),
        {
            canKickUser: _,
            canBanUser: x,
            canModerateMembers: j
        } = (0, a.cj)(
            [C.Z, O.default, y.Z],
            () => ({
                canKickUser: (0, h.BK)(t, m),
                canBanUser: (0, h.mm)(t, m),
                canModerateMembers: null != m && (0, p.F)(m.id, t.id, [O.default, y.Z, C.Z])
            }),
            [t, m]
        ),
        I = (0, u.b)(i),
        { analyticsLocations: P, newestAnalyticsLocation: S } = (0, c.ZP)(),
        w = (0, f.sE)(l, {
            targetUserId: t.id,
            location: S,
            locations: P
        }),
        M = (0, a.e7)([g.default], () => g.default.getId() === (null == t ? void 0 : t.id)),
        k = (0, a.e7)(
            [v.Z, b.Z],
            () => {
                var e;
                let t = v.Z.getChannelId(l);
                return null != t && (null == (e = b.Z.getChannel(t)) ? void 0 : e.isModeratorReportChannel()) != null ? t : void 0;
            },
            [l]
        );
    return (0, r.jsxs)('div', {
        className: N.bottomRow,
        children: [
            (0, r.jsx)(R, {
                disabled: M,
                text: Z.intl.string(Z.t['g33r/P']),
                onClick: () => {
                    s.Z.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, r.jsx)(o.kBi, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 24,
                    height: 24
                })
            }),
            (0, r.jsx)(R, {
                disabled: !_,
                text: Z.intl.string(Z.t['3glT6e']),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('5454').then(n.bind(n, 854360));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(T({}, n), {
                                    location: S,
                                    guildId: l,
                                    user: t,
                                    modReportId: k
                                })
                            );
                    });
                },
                children: (0, r.jsx)(o.I9k, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(R, {
                disabled: !x,
                text: Z.intl.string(Z.t['5MBJ5O']),
                onClick: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(T({}, n), {
                                    location: S,
                                    guildId: l,
                                    user: t,
                                    modReportId: k
                                })
                            );
                    });
                },
                children: (0, r.jsx)(o.pgN, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(R, {
                disabled: !j,
                text: I ? Z.intl.string(Z.t.N86XcH) : Z.intl.string(Z.t.kTlLr6),
                onClick: () => {
                    I
                        ? (0, d.q)({
                              guildId: i.guildId,
                              userId: i.userId,
                              anaylticsLocations: P
                          })
                        : (0, d.z)({
                              guildId: i.guildId,
                              userId: i.userId,
                              anaylticsLocations: P,
                              modReportId: k
                          });
                },
                children: (0, r.jsx)(o.YlB, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_NORMAL.css
                })
            }),
            (0, r.jsx)(R, {
                text: Z.intl.string(Z.t.IHTjzM),
                onClick: () => {
                    w(f.jQ.COPY_ID), (0, E.JG)(t.id);
                },
                disabled: !E.wS,
                children: (0, r.jsx)(o.VuL, {
                    size: 'custom',
                    width: 24,
                    height: 24,
                    color: o.TVs.colors.TEXT_NORMAL.css
                })
            })
        ]
    });
}
function k(e) {
    let { userId: t, guildId: n, onClose: i } = e,
        l = (0, a.e7)([O.default], () => O.default.getUser(t), [t]),
        o = (0, a.e7)([_.ZP], () => _.ZP.getMember(n, t), [n, t]);
    return null == l || null == o
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsx)(w, {
                      user: l,
                      guildId: n,
                      onClose: i
                  }),
                  (0, r.jsx)(M, {
                      user: l,
                      member: o,
                      guildId: n
                  })
              ]
          });
}
