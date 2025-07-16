(n.d(t, {
    UB: () => F,
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
    E = n(924826),
    d = n(866442),
    _ = n(442837),
    A = n(692547),
    T = n(481060),
    I = n(239091),
    g = n(749210),
    m = n(112724),
    f = n(607070),
    O = n(605436),
    N = n(134433),
    h = n(600164),
    R = n(91218),
    p = n(313201),
    S = n(518738),
    C = n(434404),
    b = n(884902),
    D = n(271383),
    v = n(485386),
    U = n(496675),
    L = n(594174),
    M = n(700785),
    x = n(944613),
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
function z(e, t) {
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
let B = () => Promise.resolve();
function Z(e) {
    let { userRoles: t, position: n } = e,
        l = z(e, ['userRoles', 'position']),
        i = (0, p.Dt)();
    return (0, r.jsxs)(T.VqE, {
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
            (0, r.jsxs)(h.Z, {
                className: y.overflowRolesPopoutHeader,
                align: h.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
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
                k,
                G(w({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let F = l.forwardRef(function (e, t) {
    var i, a, o;
    let u,
        { canRemove: E, className: g, role: m, onRemove: O, guildId: h, disableBorderColor: p, onMouseDown: C } = e,
        D = (0, c.JA)(m.id),
        { tabIndex: v } = D,
        U = z(D, ['tabIndex']),
        L = (0, S.p9)({
            roleId: m.id,
            size: 16,
            guildId: h
        }),
        M = (0, _.e7)([f.Z], () => f.Z.roleStyle),
        x = (0, b._f)(h, m, m.colorStrings),
        P = (null == (i = m.tags) ? void 0 : i.guild_connections) === null,
        B = l.useCallback(
            (e) => {
                (0, I.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            G(w({}, t), {
                                id: m.id,
                                label: j.intl.string(j.t.sMsaLi)
                            })
                        );
                });
            },
            [m.id]
        ),
        Z = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        F = null != (a = m.colorString) ? a : Z,
        V = null != (o = (0, d.wK)(F, 0.6)) ? o : void 0,
        H = A.Z.unsafe_rawColors.WHITE_500.css,
        k = (0, d._i)(F);
    (null != k && 0.3 > (0, d.Bd)(k) && (H = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (u = P
            ? (0, r.jsx)(N.Z, {
                  className: y.roleFlowerStar,
                  iconClassName: E ? y.roleVerifiedIcon : void 0,
                  color: F,
                  size: 14
              })
            : 'dot' === M
              ? (0, r.jsx)(T.FhE, {
                    className: y.roleDot,
                    color: F,
                    colors: x,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, {
                    color: F,
                    colors: x
                })));
    let K = l.useMemo(() => {
        var t;
        return w({ borderColor: p ? void 0 : V }, null != (t = e.style) ? t : {});
    }, [V, p, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            G(
                w(
                    {
                        ref: t,
                        className: s()(y.role, g),
                        style: K,
                        onContextMenu: B,
                        onMouseDown: C,
                        'aria-label': m.name,
                        tabIndex: v
                    },
                    U
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: s()(E && y.roleRemoveButtonCanRemove, y.roleRemoveButton),
                            onClick: E ? O : void 0,
                            tabIndex: E ? v : -1,
                            focusProps: { focusClassName: y.roleRemoveIconFocused },
                            'aria-hidden': !E,
                            'aria-label': j.intl.formatToPlainString(j.t.QrxwhY, { roleName: m.name }),
                            children: [
                                u,
                                E
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: H,
                                          className: y.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != L ? (0, r.jsx)(R.Z, G(w({ className: y.roleIcon }, L), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: y.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: 'text-xs/medium',
                                className: y.roleNameOverflow,
                                children: m.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function V(e) {
    let { user: t, numRolesHidden: n, roleClassName: i } = e,
        a = (0, c.JA)('overflow-more-roles-'.concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(Z, G(w({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', G(w(G(w({ ref: o }, e), { className: s()(y.overflowButton, i) }), a), { children: '+'.concat(n) })) })
    });
}
function H(e) {
    let t = l.useRef(null),
        { guild: n, user: i, handleAddRole: a, roleClassName: o, addButtonClassName: u, addButtonIconClassName: E } = e,
        d = (0, c.JA)('overflow-add-roles-'.concat(i.id)),
        A = (0, _.e7)([f.Z], () => f.Z.roleStyle),
        I = U.Z.getHighestRole(n),
        g = D.ZP.getMember(n.id, i.id),
        m = (e) => (0, O.Gy)(n.id, e.id) && !e.managed && U.Z.isRoleHigher(n, I, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(x.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: m,
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
                    G(
                        w(
                            G(w({ ref: t }, e), {
                                className: s()(y.addButton, o, u),
                                'aria-label': j.intl.string(j.t.e3Wly8),
                                type: 'button'
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(y.addButtonIcon, E),
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
        { user: n, guild: i, userRoles: a, wrap: d = !0, width: A, className: T, readOnly: I, roleClassName: m, disableBorderColor: f } = e,
        O = l.useRef({}),
        N = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(i.id, e.id) : C.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [a, i.id, n.id]
        ),
        h = l.useCallback(
            (e) => {
                let t = a;
                (-1 === t.indexOf(e) && (t = t.concat([e])), C.Z.updateMemberRoles(i.id, n.id, t, [e], []));
            },
            [a, i.id, n.id]
        ),
        [R, p] = l.useState(null),
        S = (0, _.e7)([v.Z], () => v.Z.getRoles(i.id)),
        b = l.useMemo(() => {
            let e = Object.values(S)
                .filter((e) => a.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null,
                        i = (null == (r = t.tags) ? void 0 : r.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != R ? e.slice(0, R) : e;
        }, [S, R, a]),
        D = a.length - b.length;
    l.useLayoutEffect(() => {
        if (d) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < b.length; r++) {
            let l = b[r],
                i = O.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        p((t) => (e < b.length ? e : t));
    }, [d, A, b]);
    let x = L.default.getCurrentUser();
    o()(null != x, 'MemberRolesList: currentUser cannot be undefined');
    let Z = !I && U.Z.can(P.Plq.MANAGE_ROLES, i),
        k = M.e9(i, x.id),
        K = l.useMemo(() => 'roles-'.concat((0, u.Z)()), []),
        W = (0, E.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: B,
            scrollToEnd: B,
            wrap: !0
        }),
        q = b.map((e) => {
            var t;
            return (0, r.jsx)(
                F,
                {
                    className: m,
                    role: e,
                    canRemove: (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? n.id === x.id : Z && M.r6(i, x.id, k, e),
                    onRemove: () => N(e),
                    ref: (t) => {
                        var n;
                        return ((n = e.id), void (null != t ? (O.current[n] = t) : delete O.current[n]));
                    },
                    guildId: i.id,
                    disableBorderColor: f
                },
                e.id
            );
        });
    return (
        null != R && 0 !== D ? (t = (0, r.jsx)(V, G(w({}, e), { numRolesHidden: D }))) : Z && (t = (0, r.jsx)(H, G(w({}, e), { handleAddRole: h }))),
        (0, r.jsx)(c.bG, {
            navigator: W,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = z(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        G(
                            w(
                                {
                                    className: s()(y.root, T),
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
let K = (0, m.Z)(k);
function W(e) {
    return (
        (0, _.e7)([U.Z], () => {
            var t;
            return U.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(K, w({}, e)) : (0, r.jsx)(k, w({}, e))
    );
}
