(n.d(t, {
    UB: () => Z,
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
    N = n(607070),
    O = n(134433),
    f = n(600164),
    R = n(91218),
    S = n(313201),
    C = n(518738),
    h = n(434404),
    p = n(884902),
    D = n(635042),
    U = n(345162),
    L = n(271383),
    v = n(485386),
    b = n(496675),
    M = n(594174),
    x = n(700785),
    P = n(944613),
    j = n(981631),
    y = n(388032),
    G = n(78248);
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
function B(e, t) {
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
let z = () => Promise.resolve();
function V(e) {
    let { userRoleIds: t, position: n } = e,
        l = B(e, ['userRoleIds', 'position']),
        i = (0, S.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: s()(G.overflowRolesPopout, {
            [G.popoutBottom]: 'bottom' === n,
            [G.popoutTop]: 'top' === n
        }),
        'aria-labelledby': i,
        children: [
            (0, r.jsx)('div', {
                className: G.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)('div', { className: G.overflowRolesPopoutArrow })
            }),
            (0, r.jsxs)(f.Z, {
                className: G.overflowRolesPopoutHeader,
                align: f.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
                        size: 'xs',
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: G.overflowRolesPopoutHeaderIcon
                    }),
                    (0, r.jsx)('div', {
                        className: G.overflowRolesPopoutHeaderText,
                        id: i,
                        children: y.intl.format(y.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(
                K,
                F(w({}, l), {
                    wrap: !0,
                    userRoleIds: t
                })
            )
        ]
    });
}
let Z = l.forwardRef(function (e, t) {
    var i, a, o;
    let u,
        { canRemove: E, className: g, role: m, onRemove: f, guildId: S, disableBorderColor: h, onMouseDown: D } = e,
        U = (0, c.JA)(m.id),
        { tabIndex: L } = U,
        v = B(U, ['tabIndex']),
        b = (0, C.p9)({
            roleId: m.id,
            size: 16,
            guildId: S
        }),
        M = (0, _.e7)([N.Z], () => N.Z.roleStyle),
        x = (0, p._f)(S, m, m.colorStrings),
        P = (null == (i = m.tags) ? void 0 : i.guild_connections) === null,
        j = l.useCallback(
            (e) => {
                (0, I.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(w({}, t), {
                                id: m.id,
                                label: y.intl.string(y.t.sMsaLi)
                            })
                        );
                });
            },
            [m.id]
        ),
        z = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        V = null != (a = m.colorString) ? a : z,
        Z = null != (o = (0, d.wK)(V, 0.6)) ? o : void 0,
        H = A.Z.unsafe_rawColors.WHITE_500.css,
        k = (0, d._i)(V);
    (null != k && 0.3 > (0, d.Bd)(k) && (H = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (u = P
            ? (0, r.jsx)(O.Z, {
                  className: G.roleFlowerStar,
                  iconClassName: E ? G.roleVerifiedIcon : void 0,
                  color: V,
                  size: 14
              })
            : 'dot' === M
              ? (0, r.jsx)(T.FhE, {
                    className: G.roleDot,
                    color: V,
                    colors: x,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, {
                    color: V,
                    colors: x
                })));
    let K = l.useMemo(() => {
        var t;
        return w({ borderColor: h ? void 0 : Z }, null != (t = e.style) ? t : {});
    }, [Z, h, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            'div',
            F(
                w(
                    {
                        ref: t,
                        className: s()(G.role, g),
                        style: K,
                        onContextMenu: j,
                        onMouseDown: D,
                        'aria-label': m.name,
                        tabIndex: L
                    },
                    v
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: s()(E && G.roleRemoveButtonCanRemove, G.roleRemoveButton),
                            onClick: E ? f : void 0,
                            tabIndex: E ? L : -1,
                            focusProps: { focusClassName: G.roleRemoveIconFocused },
                            'aria-hidden': !E,
                            'aria-label': y.intl.formatToPlainString(y.t.QrxwhY, { roleName: m.name }),
                            children: [
                                u,
                                E
                                    ? (0, r.jsx)(T.Dio, {
                                          size: 'md',
                                          color: H,
                                          className: G.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != b ? (0, r.jsx)(R.Z, F(w({ className: G.roleIcon }, b), { enableTooltip: !1 })) : null,
                        (0, r.jsx)('div', {
                            'aria-hidden': !0,
                            className: G.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: 'text-xs/medium',
                                className: G.roleNameOverflow,
                                children: m.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function H(e) {
    let { user: t, numRolesHidden: n, roleClassName: i } = e,
        a = (0, c.JA)('overflow-more-roles-'.concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(V, F(w({}, e), { position: null != n ? n : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, r.jsx)(T.tEY, { children: (0, r.jsx)('button', F(w(F(w({ ref: o }, e), { className: s()(G.overflowButton, i) }), a), { children: '+'.concat(n) })) })
    });
}
function k(e) {
    let t = l.useRef(null),
        { guild: n, user: i, handleAddRole: a, roleClassName: o, addButtonClassName: u, addButtonIconClassName: E } = e,
        d = (0, c.JA)('overflow-add-roles-'.concat(i.id)),
        A = (0, _.e7)([N.Z], () => N.Z.roleStyle),
        I = b.Z.getHighestRole(n),
        g = L.ZP.getMember(n.id, i.id),
        m = (e) => !(0, U.fI)(e) && !e.managed && b.Z.isRoleHigher(n, I, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
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
                    F(
                        w(
                            F(w({ ref: t }, e), {
                                className: s()(G.addButton, o, u),
                                'aria-label': y.intl.string(y.t.e3Wly8),
                                type: 'button'
                            }),
                            d
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(G.addButtonIcon, E),
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
        { user: n, guild: i, userRoleIds: a, wrap: d = !0, width: A, className: T, readOnly: I, roleClassName: m, disableBorderColor: N } = e,
        O = l.useRef({}),
        f = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(i.id, e.id) : h.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [a, i.id, n.id]
        ),
        R = l.useCallback(
            (e) => {
                let t = a;
                (t.includes(e) || (t = [...t, e]), h.Z.updateMemberRoles(i.id, n.id, t, [e], []));
            },
            [a, i.id, n.id]
        ),
        [S, C] = l.useState(null),
        p = (0, _.Wu)([v.Z], () => v.Z.getManyRoles(i.id, a).sort(D.Z)),
        U = l.useMemo(() => (null != S ? p.slice(0, S) : p), [p, S]),
        L = a.length - U.length;
    l.useLayoutEffect(() => {
        if (d) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < U.length; r++) {
            let l = U[r],
                i = O.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        C((t) => (e < U.length ? e : t));
    }, [d, A, U]);
    let P = M.default.getCurrentUser();
    o()(null != P, 'MemberRolesList: currentUser cannot be undefined');
    let V = !I && b.Z.can(j.Plq.MANAGE_ROLES, i),
        K = x.e9(i, P.id),
        q = l.useMemo(() => 'roles-'.concat((0, u.Z)()), []),
        W = (0, E.ZP)({
            id: q,
            isEnabled: !0,
            scrollToStart: z,
            scrollToEnd: z,
            wrap: !0
        }),
        Y = U.map((e) => {
            var t;
            return (0, r.jsx)(
                Z,
                {
                    className: m,
                    role: e,
                    canRemove: (null == (t = e.tags) ? void 0 : t.guild_connections) === null ? n.id === P.id : V && x.r6(i, P.id, K, e),
                    onRemove: () => f(e),
                    ref: (t) => {
                        var n;
                        return ((n = e.id), void (null != t ? (O.current[n] = t) : delete O.current[n]));
                    },
                    guildId: i.id,
                    disableBorderColor: N
                },
                e.id
            );
        });
    return (
        null != S && 0 !== L ? (t = (0, r.jsx)(H, F(w({}, e), { numRolesHidden: L }))) : V && (t = (0, r.jsx)(k, F(w({}, e), { handleAddRole: R }))),
        (0, r.jsx)(c.bG, {
            navigator: W,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = B(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        F(
                            w(
                                {
                                    className: s()(G.root, T),
                                    'aria-label': y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: a.length }),
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
let q = (0, m.Z)(K);
function W(e) {
    return (
        (0, _.e7)([b.Z], () => {
            var t;
            return b.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(q, w({}, e)) : (0, r.jsx)(K, w({}, e))
    );
}
