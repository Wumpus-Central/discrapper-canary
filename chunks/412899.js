(n.d(t, {
    UB: () => z,
    ZP: () => W
}),
    n(388685),
    n(642613),
    n(415506));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    u = n(772848),
    c = n(91192),
    d = n(924826),
    E = n(866442),
    _ = n(442837),
    A = n(692547),
    m = n(481060),
    T = n(239091),
    f = n(749210),
    g = n(112724),
    I = n(607070),
    h = n(605436),
    O = n(134433),
    N = n(600164),
    p = n(91218),
    R = n(313201),
    S = n(518738),
    C = n(434404),
    b = n(884902),
    v = n(271383),
    D = n(485386),
    x = n(496675),
    M = n(594174),
    L = n(700785),
    U = n(944613),
    P = n(981631),
    j = n(388032),
    y = n(78248);
function w(e) {
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
function k(e, t) {
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
}
let F = () => Promise.resolve();
function Z(e) {
    let { userRoles: t, position: n } = e,
        l = k(e, ['userRoles', 'position']),
        i = (0, R.Dt)();
    return (0, r.jsxs)(m.VqE, {
        className: s()(y.overflowRolesPopout, {
            [y.popoutBottom]: 'bottom' === n,
            [y.popoutTop]: 'top' === n
        }),
        'aria-labelledby': i,
        children: [
            (0, r.jsx)('div', {
                className: y.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)('div', { className: y.overflowRolesPopoutArrow })
            }),
            (0, r.jsxs)(N.Z, {
                className: y.overflowRolesPopoutHeader,
                align: N.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(m.U65, {
                        size: 'xs',
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: y.overflowRolesPopoutHeaderIcon
                    }),
                    (0, r.jsx)('div', {
                        className: y.overflowRolesPopoutHeaderText,
                        id: i,
                        children: j.intl.format(j.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                H,
                G(w({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let z = l.forwardRef(function (e, t) {
    var i, a, o;
    let u,
        { canRemove: d, className: f, role: g, onRemove: h, guildId: N, disableBorderColor: R, onMouseDown: C } = e,
        v = (0, c.JA)(g.id),
        { tabIndex: D } = v,
        x = k(v, ['tabIndex']),
        M = (0, S.p9)({
            roleId: g.id,
            size: 16,
            guildId: N
        }),
        L = (0, _.e7)([I.Z], () => I.Z.roleStyle),
        U = (0, b._f)(N, g, g.colorStrings),
        P = (null == (i = g.tags) ? void 0 : i.guild_connections) === null,
        F = l.useCallback(
            (e) => {
                (0, T.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            G(w({}, t), {
                                id: g.id,
                                label: j.intl.string(j.t.sMsaLi)
                            })
                        );
                });
            },
            [g.id]
        ),
        Z = (0, m.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        z = null != (a = g.colorString) ? a : Z,
        B = null != (o = (0, E.wK)(z, 0.6)) ? o : void 0,
        V = A.Z.unsafe_rawColors.WHITE_500.css,
        H = (0, E._i)(z);
    (null != H && 0.3 > (0, E.Bd)(H) && (V = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (u = P
            ? (0, r.jsx)(O.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: d ? y.roleVerifiedIcon : void 0,
                  color: z,
                  size: 14
              })
            : 'dot' === L
              ? (0, r.jsx)(m.FhE, {
                    className: y.roleDot,
                    color: z,
                    colors: U,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(m.xko, {
                    color: z,
                    colors: U
                })));
    let K = l.useMemo(() => {
        var t;
        return w({ borderColor: R ? void 0 : B }, null != (t = e.style) ? t : {});
    }, [B, R, e.style]);
    return (0, r.jsx)(m.tEY, {
        children: (0, r.jsxs)(
            'div',
            G(
                w(
                    {
                        ref: t,
                        className: s()(y.role, f),
                        style: K,
                        onContextMenu: F,
                        onMouseDown: C,
                        'aria-label': g.name,
                        tabIndex: D
                    },
                    x
                ),
                {
                    children: [
                        (0, r.jsxs)(m.P3F, {
                            className: s()(d && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                            onClick: d ? h : void 0,
                            tabIndex: d ? D : -1,
                            focusProps: { focusClassName: y.roleRemoveIconFocused },
                            'aria-hidden': !d,
                            'aria-label': j.intl.formatToPlainString(j.t.QrxwhY, { roleName: g.name }),
                            children: [
                                u,
                                d
                                    ? (0, r.jsx)(m.Dio, {
                                          size: 'md',
                                          color: V,
                                          className: y.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != M ? (0, r.jsx)(p.Z, G(w({ className: y.roleIcon }, M), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: y.roleName,
                            children: (0, r.jsx)(m.Text, {
                                variant: 'text-xs/medium',
                                className: y.roleNameOverflow,
                                children: g.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function B(e) {
    let { user: t, numRolesHidden: n, roleClassName: i } = e,
        a = (0, c.JA)('overflow-more-roles-'.concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(m.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(Z, G(w({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(m.tEY, { children: (0, r.jsx)('button', G(w(G(w({ ref: o }, e), { className: s()(y.overflowButton, i) }), a), { children: '+'.concat(n) })) })
    });
}
function V(e) {
    let t = l.useRef(null),
        { guild: n, user: i, handleAddRole: a, roleClassName: o, addButtonClassName: u, addButtonIconClassName: d } = e,
        E = (0, c.JA)('overflow-add-roles-'.concat(i.id)),
        A = (0, _.e7)([I.Z], () => I.Z.roleStyle),
        T = x.Z.getHighestRole(n),
        f = v.ZP.getMember(n.id, i.id),
        g = (e) => (0, h.Gy)(n.id, e.id) && !e.managed && x.Z.isRoleHigher(n, T, e) && (null == f || -1 === f.roles.indexOf(e.id));
    return (0, r.jsx)(m.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(U.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: g,
                onSelect: a,
                onClose: t
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(m.tEY, {
                children: (0, r.jsx)(
                    'button',
                    G(
                        w(
                            G(w({ ref: t }, e), {
                                className: s()(y.addButton, o, u),
                                'aria-label': j.intl.string(j.t.e3Wly8),
                                type: 'button'
                            }),
                            E
                        ),
                        {
                            children: (0, r.jsx)(m.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(y.addButtonIcon, d),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function H(e) {
    let t,
        { user: n, guild: i, userRoles: a, wrap: E = !0, width: A, className: m, readOnly: T, roleClassName: g, disableBorderColor: I } = e,
        h = l.useRef({}),
        O = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? f.Z.unassignGuildRoleConnection(i.id, e.id) : C.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [a, i.id, n.id]
        ),
        N = l.useCallback(
            (e) => {
                let t = a;
                (-1 === t.indexOf(e) && (t = t.concat([e])), C.Z.updateMemberRoles(i.id, n.id, t, [e], []));
            },
            [a, i.id, n.id]
        ),
        [p, R] = l.useState(null),
        S = (0, _.e7)([D.Z], () => D.Z.getRoles(i.id)),
        b = l.useMemo(() => {
            let e = Object.values(S)
                .filter((e) => a.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                        i = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != p ? e.slice(0, p) : e;
        }, [S, p, a]),
        v = a.length - b.length;
    l.useLayoutEffect(() => {
        if (E) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < b.length; r++) {
            let l = b[r],
                i = h.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        R((t) => (e < b.length ? e : t));
    }, [E, A, b]);
    let U = M.default.getCurrentUser();
    o()(null != U, 'MemberRolesList: currentUser cannot be undefined');
    let Z = !T && x.Z.can(P.Plq.MANAGE_ROLES, i),
        H = L.e9(i, U.id),
        K = l.useMemo(() => 'roles-'.concat((0, u.Z)()), []),
        W = (0, d.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            wrap: !0
        }),
        q = b.map((e) => {
            var t;
            return (0, r.jsx)(
                z,
                {
                    className: g,
                    role: e,
                    canRemove: (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? n.id === U.id : Z && L.r6(i, U.id, H, e),
                    onRemove: () => O(e),
                    ref: (t) => {
                        var n;
                        return ((n = e.id), void (null != t ? (h.current[n] = t) : delete h.current[n]));
                    },
                    guildId: i.id,
                    disableBorderColor: I
                },
                e.id
            );
        });
    return (
        null != p && 0 !== v ? (t = (0, r.jsx)(B, G(w({}, e), { numRolesHidden: v }))) : Z && (t = (0, r.jsx)(V, G(w({}, e), { handleAddRole: N }))),
        (0, r.jsx)(c.bG, {
            navigator: W,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = k(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        G(
                            w(
                                {
                                    className: s()(y.root, m),
                                    'aria-label': j.intl.formatToPlainString(j.t.PCs0oq, { numRoles: a.length }),
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
let K = (0, g.Z)(H);
function W(e) {
    return (
        (0, _.e7)([x.Z], () => {
            var t;
            return x.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(K, w({}, e)) : (0, r.jsx)(H, w({}, e))
    );
}
