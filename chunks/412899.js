n.d(t, {
    UB: () => w,
    ZP: () => Z
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(512722),
    o = n.n(i),
    E = n(772848),
    u = n(91192),
    c = n(924826),
    _ = n(866442),
    d = n(442837),
    A = n(692547),
    T = n(481060),
    N = n(239091),
    I = n(749210),
    O = n(112724),
    R = n(607070),
    g = n(605436),
    f = n(134433),
    S = n(600164),
    U = n(91218),
    h = n(313201),
    L = n(518738),
    p = n(434404),
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
function W(e, t) {
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
let z = () => Promise.resolve();
function B(e) {
    let { userRoles: t, position: n } = e,
        l = W(e, ['userRoles', 'position']),
        s = (0, h.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: a()(y.overflowRolesPopout, {
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
                        children: j.NW.format(j.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                k,
                F(G({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let w = l.forwardRef(function (e, t) {
    var s, i, o;
    let E,
        { canRemove: c, className: I, role: O, onRemove: g, guildId: S, disableBorderColor: h, onMouseDown: p } = e,
        C = (0, u.JA)(O.id),
        { tabIndex: M } = C,
        m = W(C, ['tabIndex']),
        v = (0, L.p9)({
            roleId: O.id,
            size: 16,
            guildId: S
        }),
        b = (0, d.e7)([R.Z], () => R.Z.roleStyle),
        P = (0, D.X)(S, O.colorStrings),
        x = (null == (s = O.tags) ? void 0 : s.guild_connections) === null,
        z = l.useCallback(
            (e) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(G({}, t), {
                                id: O.id,
                                label: j.NW.string(j.t.sMsaLi)
                            })
                        );
                });
            },
            [O.id]
        ),
        B = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        w = null != (i = O.colorString) ? i : B,
        H = null != (o = (0, _.wK)(w, 0.6)) ? o : void 0,
        V = A.Z.unsafe_rawColors.WHITE_500.css,
        k = (0, _._i)(w);
    null != k && 0.3 > (0, _.Bd)(k) && (V = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = x
            ? (0, r.jsx)(f.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: c ? y.roleVerifiedIcon : void 0,
                  color: w,
                  size: 14
              })
            : 'dot' === b
              ? (0, r.jsx)(T.FhE, {
                    className: y.roleDot,
                    color: w,
                    colors: P,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, {
                    color: w,
                    colors: P
                }));
    let K = l.useMemo(() => {
        var t;
        return G({ borderColor: h ? void 0 : H }, null != (t = e.style) ? t : {});
    }, [H, h, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            F(
                G(
                    {
                        ref: t,
                        className: a()(y.role, I),
                        style: K,
                        onContextMenu: z,
                        onMouseDown: p,
                        'aria-label': O.name,
                        tabIndex: M
                    },
                    m
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: a()(c && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                            onClick: c ? g : void 0,
                            tabIndex: c ? M : -1,
                            focusProps: { focusClassName: y.roleRemoveIconFocused },
                            'aria-hidden': !c,
                            'aria-label': j.NW.formatToPlainString(j.t.QrxwhY, { roleName: O.name }),
                            children: [
                                E,
                                c
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: V,
                                          className: y.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != v ? (0, r.jsx)(U.Z, F(G({ className: y.roleIcon }, v), { enableTooltip: !1 })) : null,
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
function H(e) {
    let { user: t, numRolesHidden: n, roleClassName: s } = e,
        i = (0, u.JA)('overflow-more-roles-'.concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(B, F(G({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', F(G(F(G({ ref: o }, e), { className: a()(y.overflowButton, s) }), i), { children: '+'.concat(n) })) })
    });
}
function V(e) {
    let t = l.useRef(null),
        { guild: n, user: s, handleAddRole: i, roleClassName: o, addButtonClassName: E, addButtonIconClassName: c } = e,
        _ = (0, u.JA)('overflow-add-roles-'.concat(s.id)),
        A = (0, d.e7)([R.Z], () => R.Z.roleStyle),
        N = m.Z.getHighestRole(n),
        I = C.ZP.getMember(n.id, s.id),
        O = (e) => (0, g.Gy)(n.id, e.id) && !e.managed && m.Z.isRoleHigher(n, N, e) && (null == I || -1 === I.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: O,
                onSelect: i,
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
                                className: a()(y.addButton, o, E),
                                'aria-label': j.NW.string(j.t.e3Wly8),
                                type: 'button'
                            }),
                            _
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(y.addButtonIcon, c),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function k(e) {
    let t,
        { user: n, guild: s, userRoles: i, wrap: _ = !0, width: A, className: T, readOnly: N, roleClassName: O, disableBorderColor: R } = e,
        g = l.useRef({}),
        f = l.useCallback(
            (e) => {
                var t;
                let r = i.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? I.Z.unassignGuildRoleConnection(s.id, e.id) : p.Z.updateMemberRoles(s.id, n.id, r, [], [e.id]);
            },
            [i, s.id, n.id]
        ),
        S = l.useCallback(
            (e) => {
                let t = i;
                -1 === t.indexOf(e) && (t = t.concat([e])), p.Z.updateMemberRoles(s.id, n.id, t, [e], []);
            },
            [i, s.id, n.id]
        ),
        [U, h] = l.useState(null),
        L = (0, d.e7)([M.Z], () => M.Z.getRoles(s.id)),
        D = l.useMemo(() => {
            let e = Object.values(L)
                .filter((e) => i.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                        s = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                    return l && !s ? 1 : !l && s ? -1 : 0;
                });
            return null != U ? e.slice(0, U) : e;
        }, [L, U, i]),
        C = i.length - D.length;
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
        h((t) => (e < D.length ? e : t));
    }, [_, A, D]);
    let P = v.default.getCurrentUser();
    o()(null != P, 'MemberRolesList: currentUser cannot be undefined');
    let B = !N && m.Z.can(x.Plq.MANAGE_ROLES, s),
        k = b.e9(s, P.id),
        K = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        Z = (0, c.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: z,
            scrollToEnd: z,
            wrap: !0
        }),
        Y = D.map((e) => {
            var t;
            return (0, r.jsx)(
                w,
                {
                    className: O,
                    role: e,
                    canRemove: (B && b.r6(s, P.id, k, e)) || ((null == (t = e.tags) ? void 0 : t.guild_connections) === null && n.id === P.id),
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
        null != U && 0 !== C ? (t = (0, r.jsx)(H, F(G({}, e), { numRolesHidden: C }))) : B && (t = (0, r.jsx)(V, F(G({}, e), { handleAddRole: S }))),
        (0, r.jsx)(u.bG, {
            navigator: Z,
            children: (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = W(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        F(
                            G(
                                {
                                    className: a()(y.root, T),
                                    'aria-label': j.NW.formatToPlainString(j.t.PCs0oq, { numRoles: i.length }),
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
let K = (0, O.Z)(k);
function Z(e) {
    return (
        (0, d.e7)([m.Z], () => {
            var t;
            return m.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(K, G({}, e)) : (0, r.jsx)(k, G({}, e))
    );
}
