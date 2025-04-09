n.d(t, {
    UB: () => w,
    ZP: () => Z
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    i = n.n(o),
    E = n(772848),
    c = n(91192),
    u = n(924826),
    _ = n(866442),
    d = n(442837),
    A = n(692547),
    T = n(481060),
    N = n(239091),
    I = n(749210),
    O = n(112724),
    g = n(607070),
    f = n(605436),
    R = n(134433),
    p = n(600164),
    S = n(91218),
    h = n(313201),
    U = n(518738),
    D = n(434404),
    L = n(884902),
    C = n(271383),
    m = n(430824),
    M = n(496675),
    b = n(594174),
    v = n(700785),
    P = n(944613),
    y = n(981631),
    x = n(388032),
    j = n(78248);
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
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let B = () => Promise.resolve();
function z(e) {
    let { userRoles: t, position: n } = e,
        l = W(e, ['userRoles', 'position']),
        a = (0, h.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: s()(j.overflowRolesPopout, {
            [j.popoutBottom]: 'bottom' === n,
            [j.popoutTop]: 'top' === n
        }),
        'aria-labelledby': a,
        children: [
            (0, r.jsx)('div', {
                className: j.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)('div', { className: j.overflowRolesPopoutArrow })
            }),
            (0, r.jsxs)(p.Z, {
                className: j.overflowRolesPopoutHeader,
                align: p.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
                        size: 'xs',
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: j.overflowRolesPopoutHeaderIcon
                    }),
                    (0, r.jsx)('div', {
                        className: j.overflowRolesPopoutHeaderText,
                        id: a,
                        children: x.NW.format(x.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                V,
                F(G({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let w = l.forwardRef(function (e, t) {
    var a, o, i;
    let E,
        { canRemove: u, className: I, role: O, onRemove: f, guildId: p, disableBorderColor: h, onMouseDown: D } = e,
        C = (0, c.JA)(O.id),
        { tabIndex: m } = C,
        M = W(C, ['tabIndex']),
        b = (0, U.p9)({
            roleId: O.id,
            size: 16,
            guildId: p
        }),
        v = (0, d.e7)([g.Z], () => g.Z.roleStyle),
        P = (0, L.X)(p, O.colorStrings),
        y = (null == (a = O.tags) ? void 0 : a.guild_connections) === null,
        B = l.useCallback(
            (e) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(G({}, t), {
                                id: O.id,
                                label: x.NW.string(x.t.sMsaLi)
                            })
                        );
                });
            },
            [O.id]
        ),
        z = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        w = null != (o = O.colorString) ? o : z,
        k = null != (i = (0, _.wK)(w, 0.6)) ? i : void 0,
        H = A.Z.unsafe_rawColors.WHITE_500.css,
        V = (0, _._i)(w);
    null != V && 0.3 > (0, _.Bd)(V) && (H = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = y
            ? (0, r.jsx)(R.Z, {
                  className: j.roleFlowerStar,
                  iconClassName: u ? j.roleVerifiedIcon : void 0,
                  color: w,
                  size: 14
              })
            : 'dot' === v
              ? (0, r.jsx)(T.FhE, {
                    className: j.roleDot,
                    color: w,
                    colors: P,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, { color: w }));
    let K = l.useMemo(() => {
        var t;
        return G({ borderColor: h ? void 0 : k }, null != (t = e.style) ? t : {});
    }, [k, h, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            F(
                G(
                    {
                        ref: t,
                        className: s()(j.role, I),
                        style: K,
                        onContextMenu: B,
                        onMouseDown: D,
                        'aria-label': O.name,
                        tabIndex: m
                    },
                    M
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: s()(u && j.roleRemoveButtonCanRemove, j.roleRemoveButton),
                            onClick: u ? f : void 0,
                            tabIndex: u ? m : -1,
                            focusProps: { focusClassName: j.roleRemoveIconFocused },
                            'aria-hidden': !u,
                            'aria-label': x.NW.formatToPlainString(x.t.QrxwhY, { roleName: O.name }),
                            children: [
                                E,
                                u
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: H,
                                          className: j.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != b ? (0, r.jsx)(S.Z, F(G({ className: j.roleIcon }, b), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: j.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: 'text-xs/medium',
                                className: j.roleNameOverflow,
                                children: O.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function k(e) {
    let { user: t, numRolesHidden: n, roleClassName: a } = e,
        o = (0, c.JA)('overflow-more-roles-'.concat(t.id)),
        i = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: i,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(z, F(G({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', F(G(F(G({ ref: i }, e), { className: s()(j.overflowButton, a) }), o), { children: '+'.concat(n) })) })
    });
}
function H(e) {
    let t = l.useRef(null),
        { guild: n, user: a, handleAddRole: o, roleClassName: i, addButtonClassName: E, addButtonIconClassName: u } = e,
        _ = (0, c.JA)('overflow-add-roles-'.concat(a.id)),
        A = (0, d.e7)([g.Z], () => g.Z.roleStyle),
        N = M.Z.getHighestRole(n),
        I = C.ZP.getMember(n.id, a.id),
        O = (e) => (0, f.Gy)(n.id, e.id) && !e.managed && M.Z.isRoleHigher(n, N, e) && (null == I || -1 === I.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: O,
                onSelect: o,
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
                                className: s()(j.addButton, i, E),
                                'aria-label': x.NW.string(x.t.e3Wly8),
                                type: 'button'
                            }),
                            _
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(j.addButtonIcon, u),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function V(e) {
    let t,
        { user: n, guild: a, userRoles: o, wrap: _ = !0, width: A, className: T, readOnly: N, roleClassName: O, disableBorderColor: g } = e,
        f = l.useRef({}),
        R = l.useCallback(
            (e) => {
                var t;
                let r = o.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(a.id, e.id) : D.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [o, a.id, n.id]
        ),
        p = l.useCallback(
            (e) => {
                let t = o;
                -1 === t.indexOf(e) && (t = t.concat([e])), D.Z.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [o, a.id, n.id]
        ),
        [S, h] = l.useState(null),
        U = (0, d.e7)([m.Z], () => m.Z.getRoles(a.id)),
        L = l.useMemo(() => {
            let e = Object.values(U)
                .filter((e) => o.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                        a = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                    return l && !a ? 1 : !l && a ? -1 : 0;
                });
            return null != S ? e.slice(0, S) : e;
        }, [U, S, o]),
        C = o.length - L.length;
    l.useLayoutEffect(() => {
        if (_) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < L.length; r++) {
            let l = L[r],
                a = f.current[l.id];
            if (null != a) {
                if ((t += a.offsetWidth + 4) > n) break;
                e++;
            }
        }
        h((t) => (e < L.length ? e : t));
    }, [_, A, L]);
    let P = b.default.getCurrentUser();
    i()(null != P, 'MemberRolesList: currentUser cannot be undefined');
    let z = !N && M.Z.can(y.Plq.MANAGE_ROLES, a),
        V = v.e9(a, P.id),
        K = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        Z = (0, u.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: B,
            scrollToEnd: B,
            wrap: !0
        }),
        Y = L.map((e) => {
            var t;
            return (0, r.jsx)(
                w,
                {
                    className: O,
                    role: e,
                    canRemove: (z && v.r6(a, P.id, V, e)) || ((null == (t = e.tags) ? void 0 : t.guild_connections) === null && n.id === P.id),
                    onRemove: () => R(e),
                    ref: (t) => {
                        var n;
                        return (n = e.id), void (null != t ? (f.current[n] = t) : delete f.current[n]);
                    },
                    guildId: a.id,
                    disableBorderColor: g
                },
                e.id
            );
        });
    return (
        null != S && 0 !== C ? (t = (0, r.jsx)(k, F(G({}, e), { numRolesHidden: C }))) : z && (t = (0, r.jsx)(H, F(G({}, e), { handleAddRole: p }))),
        (0, r.jsx)(c.bG, {
            navigator: Z,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = W(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        F(
                            G(
                                {
                                    className: s()(j.root, T),
                                    'aria-label': x.NW.formatToPlainString(x.t.PCs0oq, { numRoles: o.length }),
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
let K = (0, O.Z)(V);
function Z(e) {
    return (
        (0, d.e7)([M.Z], () => {
            var t;
            return M.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(K, G({}, e)) : (0, r.jsx)(V, G({}, e))
    );
}
