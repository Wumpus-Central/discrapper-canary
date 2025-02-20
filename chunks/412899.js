n.d(t, {
    UB: () => w,
    ZP: () => K
}),
    n(47120),
    n(230036),
    n(411104);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(512722),
    s = n.n(o),
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
    R = n(605436),
    f = n(134433),
    S = n(600164),
    p = n(91218),
    U = n(313201),
    C = n(518738),
    D = n(434404),
    L = n(271383),
    h = n(430824),
    m = n(496675),
    M = n(594174),
    v = n(700785),
    b = n(944613),
    P = n(981631),
    x = n(388032),
    y = n(635870);
function j(e) {
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
function G(e, t) {
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
function F(e, t) {
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
let W = () => Promise.resolve();
function B(e) {
    let { userRoles: t, position: n } = e,
        l = F(e, ['userRoles', 'position']),
        a = (0, U.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: i()(y.overflowRolesPopout, {
            [y.popoutBottom]: 'bottom' === n,
            [y.popoutTop]: 'top' === n
        }),
        'aria-labelledby': a,
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
                        id: a,
                        children: x.NW.format(x.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                V,
                G(j({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let w = l.forwardRef(function (e, t) {
    var a, o, s;
    let E;
    let { canRemove: u, className: I, role: O, onRemove: R, guildId: S, disableBorderColor: U, onMouseDown: D } = e,
        L = (0, c.JA)(O.id),
        { tabIndex: h } = L,
        m = F(L, ['tabIndex']),
        M = (0, C.p9)({
            roleId: O.id,
            size: 16,
            guildId: S
        }),
        v = (0, d.e7)([g.Z], () => g.Z.roleStyle),
        b = (null === (a = O.tags) || void 0 === a ? void 0 : a.guild_connections) === null,
        P = l.useCallback(
            (e) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            G(j({}, t), {
                                id: O.id,
                                label: x.NW.string(x.t.sMsaLi)
                            })
                        );
                });
            },
            [O.id]
        ),
        W = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        B = null !== (o = O.colorString) && void 0 !== o ? o : W,
        w = null !== (s = (0, _.wK)(B, 0.6)) && void 0 !== s ? s : void 0,
        z = A.Z.unsafe_rawColors.WHITE_500.css,
        k = (0, _._i)(B);
    null != k && 0.3 > (0, _.Bd)(k) && (z = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = b
            ? (0, r.jsx)(f.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: u ? y.roleVerifiedIcon : void 0,
                  color: B,
                  size: 14
              })
            : 'dot' === v
              ? (0, r.jsx)(T.FhE, {
                    className: y.roleDot,
                    color: B,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, { color: B }));
    let V = l.useMemo(() => {
        var t;
        return j({ borderColor: U ? void 0 : w }, null !== (t = e.style) && void 0 !== t ? t : {});
    }, [w, U, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            G(
                j(
                    {
                        ref: t,
                        className: i()(y.role, I),
                        style: V,
                        onContextMenu: P,
                        onMouseDown: D,
                        'aria-label': O.name,
                        tabIndex: h
                    },
                    m
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: i()(u && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                            onClick: u ? R : void 0,
                            tabIndex: u ? h : -1,
                            focusProps: { focusClassName: y.roleRemoveIconFocused },
                            'aria-hidden': !u,
                            'aria-label': x.NW.formatToPlainString(x.t.QrxwhY, { roleName: O.name }),
                            children: [
                                E,
                                u
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: z,
                                          className: y.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != M ? (0, r.jsx)(p.Z, G(j({ className: y.roleIcon }, M), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: y.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: 'text-xs/medium',
                                className: y.roleNameOverflow,
                                children: O.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function z(e) {
    let { user: t, numRolesHidden: n, roleClassName: l } = e,
        a = (0, c.JA)('overflow-more-roles-'.concat(t.id));
    return (0, r.jsx)(T.yRy, {
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(B, G(j({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', G(j(G(j({}, e), { className: i()(y.overflowButton, l) }), a), { children: '+'.concat(n) })) })
    });
}
function k(e) {
    let { guild: t, user: n, handleAddRole: l, roleClassName: a, addButtonClassName: o, addButtonIconClassName: s } = e,
        E = (0, c.JA)('overflow-add-roles-'.concat(n.id)),
        u = (0, d.e7)([g.Z], () => g.Z.roleStyle),
        _ = m.Z.getHighestRole(t),
        A = L.ZP.getMember(t.id, n.id),
        N = (e) => (0, R.Gy)(t.id, e.id) && !e.managed && m.Z.isRoleHigher(t, _, e) && (null == A || -1 === A.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(b.Z, {
                guild: t,
                roleStyle: u,
                roleFilter: N,
                onSelect: l,
                onClose: n
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)(
                    'button',
                    G(
                        j(
                            G(j({}, e), {
                                className: i()(y.addButton, a, o),
                                'aria-label': x.NW.string(x.t.e3Wly8),
                                type: 'button'
                            }),
                            E
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(y.addButtonIcon, s),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function V(e) {
    let t;
    let { user: n, guild: a, userRoles: o, wrap: _ = !0, width: A, className: T, readOnly: N, roleClassName: O, disableBorderColor: g } = e,
        R = l.useRef({}),
        f = l.useCallback(
            (e) => {
                var t;
                let r = o.filter((t) => t !== e.id);
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(a.id, e.id) : D.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [o, a.id, n.id]
        ),
        S = l.useCallback(
            (e) => {
                let t = o;
                -1 === t.indexOf(e) && (t = t.concat([e])), D.Z.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [o, a.id, n.id]
        ),
        [p, U] = l.useState(null),
        C = (0, d.e7)([h.Z], () => h.Z.getRoles(a.id)),
        L = l.useMemo(() => {
            let e = Object.values(C)
                .filter((e) => o.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                        a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                    return l && !a ? 1 : !l && a ? -1 : 0;
                });
            return null != p ? e.slice(0, p) : e;
        }, [C, p, o]),
        b = o.length - L.length;
    l.useLayoutEffect(() => {
        if (_) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < L.length; r++) {
            let l = L[r],
                a = R.current[l.id];
            if (null != a) {
                if ((t += a.offsetWidth + 4) > n) break;
                e++;
            }
        }
        U((t) => (e < L.length ? e : t));
    }, [_, A, L]);
    let B = M.default.getCurrentUser();
    s()(null != B, 'MemberRolesList: currentUser cannot be undefined');
    let V = !N && m.Z.can(P.Plq.MANAGE_ROLES, a),
        H = v.e9(a, B.id),
        K = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        Z = (0, u.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: W,
            scrollToEnd: W,
            wrap: !0
        }),
        q = L.map((e) => {
            var t;
            return (0, r.jsx)(
                w,
                {
                    className: O,
                    role: e,
                    canRemove: (V && v.r6(a, B.id, H, e)) || ((null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === B.id),
                    onRemove: () => f(e),
                    ref: (t) => {
                        var n;
                        return (n = e.id), void (null != t ? (R.current[n] = t) : delete R.current[n]);
                    },
                    guildId: a.id,
                    disableBorderColor: g
                },
                e.id
            );
        });
    return (
        null != p && 0 !== b ? (t = (0, r.jsx)(z, G(j({}, e), { numRolesHidden: b }))) : V && (t = (0, r.jsx)(k, G(j({}, e), { handleAddRole: S }))),
        (0, r.jsx)(c.bG, {
            navigator: Z,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = F(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        G(
                            j(
                                {
                                    className: i()(y.root, T),
                                    'aria-label': x.NW.formatToPlainString(x.t.PCs0oq, { numRoles: o.length }),
                                    ref: n
                                },
                                l
                            ),
                            {
                                children: [q, t]
                            }
                        )
                    );
                }
            })
        })
    );
}
let H = (0, O.Z)(V);
function K(e) {
    return (
        (0, d.e7)([m.Z], () => {
            var t;
            return m.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(H, j({}, e)) : (0, r.jsx)(V, j({}, e))
    );
}
