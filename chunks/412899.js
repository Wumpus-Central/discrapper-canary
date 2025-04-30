n.d(t, {
    UB: () => H,
    ZP: () => W
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    i = n.n(s),
    a = n(512722),
    o = n.n(a),
    E = n(772848),
    u = n(91192),
    c = n(924826),
    _ = n(866442),
    d = n(442837),
    A = n(692547),
    T = n(481060),
    I = n(239091),
    O = n(749210),
    N = n(112724),
    R = n(607070),
    g = n(605436),
    f = n(134433),
    S = n(600164),
    h = n(91218),
    U = n(313201),
    p = n(518738),
    L = n(434404),
    D = n(884902),
    C = n(271383),
    M = n(430824),
    m = n(496675),
    v = n(594174),
    b = n(700785),
    P = n(944613),
    x = n(981631),
    j = n(388032),
    y = n(78248);
function G(e) {
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
function F(e, t) {
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
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let B = () => Promise.resolve();
function w(e) {
    let { userRoles: t, position: n } = e,
        l = z(e, ['userRoles', 'position']),
        s = (0, U.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: i()(y.overflowRolesPopout, {
            [y.popoutBottom]: 'bottom' === n,
            [y.popoutTop]: 'top' === n
        }),
        'aria-labelledby': s,
        children: [
            (0, r.jsx)('div', {
                className: y.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)('div', { className: y.overflowRolesPopoutArrow })
            }),
            (0, r.jsxs)(S.Z, {
                className: y.overflowRolesPopoutHeader,
                align: S.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
                        size: 'xs',
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: y.overflowRolesPopoutHeaderIcon
                    }),
                    (0, r.jsx)('div', {
                        className: y.overflowRolesPopoutHeaderText,
                        id: s,
                        children: j.intl.format(j.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                K,
                F(G({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let H = l.forwardRef(function (e, t) {
    var s, a, o;
    let E,
        { canRemove: c, className: O, role: N, onRemove: g, guildId: S, disableBorderColor: U, onMouseDown: L } = e,
        C = (0, u.JA)(N.id),
        { tabIndex: M } = C,
        m = z(C, ['tabIndex']),
        v = (0, p.p9)({
            roleId: N.id,
            size: 16,
            guildId: S
        }),
        b = (0, d.e7)([R.Z], () => R.Z.roleStyle),
        P = (0, D.X)(S, N.colorStrings),
        x = (null == (s = N.tags) ? void 0 : s.guild_connections) === null,
        B = l.useCallback(
            (e) => {
                (0, I.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(G({}, t), {
                                id: N.id,
                                label: j.intl.string(j.t.sMsaLi)
                            })
                        );
                });
            },
            [N.id]
        ),
        w = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        H = null != (a = N.colorString) ? a : w,
        V = null != (o = (0, _.wK)(H, 0.6)) ? o : void 0,
        k = A.Z.unsafe_rawColors.WHITE_500.css,
        K = (0, _._i)(H);
    null != K && 0.3 > (0, _.Bd)(K) && (k = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = x
            ? (0, r.jsx)(f.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: c ? y.roleVerifiedIcon : void 0,
                  color: H,
                  size: 14
              })
            : 'dot' === b
              ? (0, r.jsx)(T.FhE, {
                    className: y.roleDot,
                    color: H,
                    colors: P,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, {
                    color: H,
                    colors: P
                }));
    let Z = l.useMemo(() => {
        var t;
        return G({ borderColor: U ? void 0 : V }, null != (t = e.style) ? t : {});
    }, [V, U, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            F(
                G(
                    {
                        ref: t,
                        className: i()(y.role, O),
                        style: Z,
                        onContextMenu: B,
                        onMouseDown: L,
                        'aria-label': N.name,
                        tabIndex: M
                    },
                    m
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: i()(c && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                            onClick: c ? g : void 0,
                            tabIndex: c ? M : -1,
                            focusProps: { focusClassName: y.roleRemoveIconFocused },
                            'aria-hidden': !c,
                            'aria-label': j.intl.formatToPlainString(j.t.QrxwhY, { roleName: N.name }),
                            children: [
                                E,
                                c
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: k,
                                          className: y.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != v ? (0, r.jsx)(h.Z, F(G({ className: y.roleIcon }, v), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: y.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: 'text-xs/medium',
                                className: y.roleNameOverflow,
                                children: N.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function V(e) {
    let { user: t, numRolesHidden: n, roleClassName: s } = e,
        a = (0, u.JA)('overflow-more-roles-'.concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(w, F(G({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', F(G(F(G({ ref: o }, e), { className: i()(y.overflowButton, s) }), a), { children: '+'.concat(n) })) })
    });
}
function k(e) {
    let t = l.useRef(null),
        { guild: n, user: s, handleAddRole: a, roleClassName: o, addButtonClassName: E, addButtonIconClassName: c } = e,
        _ = (0, u.JA)('overflow-add-roles-'.concat(s.id)),
        A = (0, d.e7)([R.Z], () => R.Z.roleStyle),
        I = m.Z.getHighestRole(n),
        O = C.ZP.getMember(n.id, s.id),
        N = (e) => (0, g.Gy)(n.id, e.id) && !e.managed && m.Z.isRoleHigher(n, I, e) && (null == O || -1 === O.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: N,
                onSelect: a,
                onClose: t
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)(
                    'button',
                    F(
                        G(
                            F(G({ ref: t }, e), {
                                className: i()(y.addButton, o, E),
                                'aria-label': j.intl.string(j.t.e3Wly8),
                                type: 'button'
                            }),
                            _
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(y.addButtonIcon, c),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function K(e) {
    let t,
        { user: n, guild: s, userRoles: a, wrap: _ = !0, width: A, className: T, readOnly: I, roleClassName: N, disableBorderColor: R } = e,
        g = l.useRef({}),
        f = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? O.Z.unassignGuildRoleConnection(s.id, e.id) : L.Z.updateMemberRoles(s.id, n.id, r, [], [e.id]);
            },
            [a, s.id, n.id]
        ),
        S = l.useCallback(
            (e) => {
                let t = a;
                -1 === t.indexOf(e) && (t = t.concat([e])), L.Z.updateMemberRoles(s.id, n.id, t, [e], []);
            },
            [a, s.id, n.id]
        ),
        [h, U] = l.useState(null),
        p = (0, d.e7)([M.Z], () => M.Z.getRoles(s.id)),
        D = l.useMemo(() => {
            let e = Object.values(p)
                .filter((e) => a.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                        s = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                    return l && !s ? 1 : !l && s ? -1 : 0;
                });
            return null != h ? e.slice(0, h) : e;
        }, [p, h, a]),
        C = a.length - D.length;
    l.useLayoutEffect(() => {
        if (_) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < D.length; r++) {
            let l = D[r],
                s = g.current[l.id];
            if (null != s) {
                if ((t += s.offsetWidth + 4) > n) break;
                e++;
            }
        }
        U((t) => (e < D.length ? e : t));
    }, [_, A, D]);
    let P = v.default.getCurrentUser();
    o()(null != P, 'MemberRolesList: currentUser cannot be undefined');
    let w = !I && m.Z.can(x.Plq.MANAGE_ROLES, s),
        K = b.e9(s, P.id),
        Z = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        W = (0, c.ZP)({
            id: Z,
            isEnabled: !0,
            scrollToStart: B,
            scrollToEnd: B,
            wrap: !0
        }),
        Y = D.map((e) => {
            var t;
            return (0, r.jsx)(
                H,
                {
                    className: N,
                    role: e,
                    canRemove: (w && b.r6(s, P.id, K, e)) || ((null == (t = e.tags) ? void 0 : t.guild_connections) === null && n.id === P.id),
                    onRemove: () => f(e),
                    ref: (t) => {
                        var n;
                        return (n = e.id), void (null != t ? (g.current[n] = t) : delete g.current[n]);
                    },
                    guildId: s.id,
                    disableBorderColor: R
                },
                e.id
            );
        });
    return (
        null != h && 0 !== C ? (t = (0, r.jsx)(V, F(G({}, e), { numRolesHidden: C }))) : w && (t = (0, r.jsx)(k, F(G({}, e), { handleAddRole: S }))),
        (0, r.jsx)(u.bG, {
            navigator: W,
            children: (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = z(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        F(
                            G(
                                {
                                    className: i()(y.root, T),
                                    'aria-label': j.intl.formatToPlainString(j.t.PCs0oq, { numRoles: a.length }),
                                    ref: n
                                },
                                l
                            ),
                            {
                                children: [Y, t]
                            }
                        )
                    );
                }
            })
        })
    );
}
let Z = (0, N.Z)(K);
function W(e) {
    return (
        (0, d.e7)([m.Z], () => {
            var t;
            return m.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(Z, G({}, e)) : (0, r.jsx)(K, G({}, e))
    );
}
