(t.d(e, {
    UB: () => U,
    ZP: () => K
}),
    t(388685),
    t(642613),
    t(415506));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(512722),
    a = t.n(s),
    o = t(772848),
    g = t(91192),
    f = t(924826),
    v = t(866442),
    c = t(442837),
    h = t(692547),
    E = t(481060),
    u = t(239091),
    d = t(749210),
    C = t(112724),
    B = t(607070),
    w = t(605436),
    D = t(134433),
    M = t(600164),
    I = t(91218),
    p = t(313201),
    H = t(518738),
    b = t(434404),
    Q = t(884902),
    O = t(271383),
    P = t(485386),
    V = t(496675),
    j = t(594174),
    T = t(700785),
    y = t(944613),
    m = t(981631),
    L = t(388032),
    x = t(78248);
function Z(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
function N(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
function R(A, e) {
    if (null == A) return {};
    var t,
        n,
        r = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = {},
                l = Object.keys(A);
            for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
            return r;
        })(A, e);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(A);
        for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
    }
    return r;
}
let S = () => Promise.resolve();
function G(A) {
    let { userRoles: e, position: t } = A,
        r = R(A, ['userRoles', 'position']),
        l = (0, p.Dt)();
    return (0, n.jsxs)(E.VqE, {
        className: i()(x.overflowRolesPopout, {
            [x.popoutBottom]: 'bottom' === t,
            [x.popoutTop]: 'top' === t
        }),
        'aria-labelledby': l,
        children: [
            (0, n.jsx)('div', {
                className: x.overflowRolesPopoutArrowWrapper,
                children: (0, n.jsx)('div', { className: x.overflowRolesPopoutArrow })
            }),
            (0, n.jsxs)(M.Z, {
                className: x.overflowRolesPopoutHeader,
                align: M.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(E.U65, {
                        size: 'xs',
                        color: h.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: x.overflowRolesPopoutHeaderIcon
                    }),
                    (0, n.jsx)('div', {
                        className: x.overflowRolesPopoutHeaderText,
                        id: l,
                        children: L.intl.format(L.t.PCs0oq, { numRoles: e.length })
                    })
                ]
            }),
            (0, n.jsx)(
                z,
                N(Z({}, r), {
                    wrap: !0,
                    userRoles: e
                })
            )
        ]
    });
}
let U = r.forwardRef(function (A, e) {
    var l, s, a;
    let o,
        { canRemove: f, className: d, role: C, onRemove: w, guildId: M, disableBorderColor: p, onMouseDown: b } = A,
        O = (0, g.JA)(C.id),
        { tabIndex: P } = O,
        V = R(O, ['tabIndex']),
        j = (0, H.p9)({
            roleId: C.id,
            size: 16,
            guildId: M
        }),
        T = (0, c.e7)([B.Z], () => B.Z.roleStyle),
        y = (0, Q._f)(M, C, C.colorStrings),
        m = (null == (l = C.tags) ? void 0 : l.guild_connections) === null,
        S = r.useCallback(
            (A) => {
                (0, u.jW)(A, async () => {
                    let { default: A } = await t.e('5396').then(t.bind(t, 731646));
                    return (e) =>
                        (0, n.jsx)(
                            A,
                            N(Z({}, e), {
                                id: C.id,
                                label: L.intl.string(L.t.sMsaLi)
                            })
                        );
                });
            },
            [C.id]
        ),
        G = (0, E.dQu)(h.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        U = null != (s = C.colorString) ? s : G,
        F = null != (a = (0, v.wK)(U, 0.6)) ? a : void 0,
        X = h.Z.unsafe_rawColors.WHITE_500.css,
        z = (0, v._i)(U);
    (null != z && 0.3 > (0, v.Bd)(z) && (X = h.Z.unsafe_rawColors.PRIMARY_630.css),
        (o = m
            ? (0, n.jsx)(D.Z, {
                  className: x.roleFlowerStar,
                  iconClassName: f ? x.roleVerifiedIcon : void 0,
                  color: U,
                  size: 14
              })
            : 'dot' === T
              ? (0, n.jsx)(E.FhE, {
                    className: x.roleDot,
                    color: U,
                    colors: y,
                    background: !1,
                    tooltip: !1
                })
              : (0, n.jsx)(E.xko, {
                    color: U,
                    colors: y
                })));
    let k = r.useMemo(() => {
        var e;
        return Z({ borderColor: p ? void 0 : F }, null != (e = A.style) ? e : {});
    }, [F, p, A.style]);
    return (0, n.jsx)(E.tEY, {
        children: (0, n.jsxs)(
            'div',
            N(
                Z(
                    {
                        ref: e,
                        className: i()(x.role, d),
                        style: k,
                        onContextMenu: S,
                        onMouseDown: b,
                        'aria-label': C.name,
                        tabIndex: P
                    },
                    V
                ),
                {
                    children: [
                        (0, n.jsxs)(E.P3F, {
                            className: i()(f && x.roleRemoveButtonCanRemove, x.roleRemoveButton),
                            onClick: f ? w : void 0,
                            tabIndex: f ? P : -1,
                            focusProps: { focusClassName: x.roleRemoveIconFocused },
                            'aria-hidden': !f,
                            'aria-label': L.intl.formatToPlainString(L.t.QrxwhY, { roleName: C.name }),
                            children: [
                                o,
                                f
                                    ? (0, n.jsx)(E.Dio, {
                                          size: 'md',
                                          color: X,
                                          className: x.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != j ? (0, n.jsx)(I.Z, N(Z({ className: x.roleIcon }, j), { enableTooltip: !1 })) : null,
                        (0, n.jsx)('div', {
                            'aria-hidden': !0,
                            className: x.roleName,
                            children: (0, n.jsx)(E.Text, {
                                variant: 'text-xs/medium',
                                className: x.roleNameOverflow,
                                children: C.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function F(A) {
    let { user: e, numRolesHidden: t, roleClassName: l } = A,
        s = (0, g.JA)('overflow-more-roles-'.concat(e.id)),
        a = r.useRef(null);
    return (0, n.jsx)(E.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(G, N(Z({}, A), { position: null != t ? t : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (A) => (0, n.jsx)(E.tEY, { children: (0, n.jsx)('button', N(Z(N(Z({ ref: a }, A), { className: i()(x.overflowButton, l) }), s), { children: '+'.concat(t) })) })
    });
}
function X(A) {
    let e = r.useRef(null),
        { guild: t, user: l, handleAddRole: s, roleClassName: a, addButtonClassName: o, addButtonIconClassName: f } = A,
        v = (0, g.JA)('overflow-add-roles-'.concat(l.id)),
        h = (0, c.e7)([B.Z], () => B.Z.roleStyle),
        u = V.Z.getHighestRole(t),
        d = O.ZP.getMember(t.id, l.id),
        C = (A) => (0, w.Gy)(t.id, A.id) && !A.managed && V.Z.isRoleHigher(t, u, A) && (null == d || -1 === d.roles.indexOf(A.id));
    return (0, n.jsx)(E.yRy, {
        targetElementRef: e,
        renderPopout: (A) => {
            let { closePopout: e } = A;
            return (0, n.jsx)(y.Z, {
                guild: t,
                roleStyle: h,
                roleFilter: C,
                onSelect: s,
                onClose: e
            });
        },
        position: 'bottom',
        align: 'center',
        children: (A) =>
            (0, n.jsx)(E.tEY, {
                children: (0, n.jsx)(
                    'button',
                    N(
                        Z(
                            N(Z({ ref: e }, A), {
                                className: i()(x.addButton, a, o),
                                'aria-label': L.intl.string(L.t.e3Wly8),
                                type: 'button'
                            }),
                            v
                        ),
                        {
                            children: (0, n.jsx)(E.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(x.addButtonIcon, f),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function z(A) {
    let e,
        { user: t, guild: l, userRoles: s, wrap: v = !0, width: h, className: E, readOnly: u, roleClassName: C, disableBorderColor: B } = A,
        w = r.useRef({}),
        D = r.useCallback(
            (A) => {
                var e;
                let n = s.filter((e) => e !== A.id);
                (null == (e = A.tags) ? void 0 : e.guild_connections) === null ? d.Z.unassignGuildRoleConnection(l.id, A.id) : b.Z.updateMemberRoles(l.id, t.id, n, [], [A.id]);
            },
            [s, l.id, t.id]
        ),
        M = r.useCallback(
            (A) => {
                let e = s;
                (-1 === e.indexOf(A) && (e = e.concat([A])), b.Z.updateMemberRoles(l.id, t.id, e, [A], []));
            },
            [s, l.id, t.id]
        ),
        [I, p] = r.useState(null),
        H = (0, c.e7)([P.Z], () => P.Z.getRoles(l.id)),
        Q = r.useMemo(() => {
            let A = Object.values(H)
                .filter((A) => s.includes(A.id))
                .sort((A, e) => {
                    var t, n;
                    let r = (null == (t = A.tags) ? void 0 : t.guild_connections) !== null,
                        l = (null == (n = e.tags) ? void 0 : n.guild_connections) !== null;
                    return r && !l ? 1 : !r && l ? -1 : 0;
                });
            return null != I ? A.slice(0, I) : A;
        }, [H, I, s]),
        O = s.length - Q.length;
    r.useLayoutEffect(() => {
        if (v) return;
        if ('number' != typeof h) throw Error('Unexpected null width');
        let A = 0,
            e = 0,
            t = h - 30 - 4;
        for (let n = 0; n < Q.length; n++) {
            let r = Q[n],
                l = w.current[r.id];
            if (null != l) {
                if ((e += l.offsetWidth + 4) > t) break;
                A++;
            }
        }
        p((e) => (A < Q.length ? A : e));
    }, [v, h, Q]);
    let y = j.default.getCurrentUser();
    a()(null != y, 'MemberRolesList: currentUser cannot be undefined');
    let G = !u && V.Z.can(m.Plq.MANAGE_ROLES, l),
        z = T.e9(l, y.id),
        k = r.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        K = (0, f.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: S,
            scrollToEnd: S,
            wrap: !0
        }),
        Y = Q.map((A) => {
            var e;
            return (0, n.jsx)(
                U,
                {
                    className: C,
                    role: A,
                    canRemove: (null == (e = A.tags) ? void 0 : e.guild_connections) === null ? t.id === y.id : G && T.r6(l, y.id, z, A),
                    onRemove: () => D(A),
                    ref: (e) => {
                        var t;
                        return ((t = A.id), void (null != e ? (w.current[t] = e) : delete w.current[t]));
                    },
                    guildId: l.id,
                    disableBorderColor: B
                },
                A.id
            );
        });
    return (
        null != I && 0 !== O ? (e = (0, n.jsx)(F, N(Z({}, A), { numRolesHidden: O }))) : G && (e = (0, n.jsx)(X, N(Z({}, A), { handleAddRole: M }))),
        (0, n.jsx)(g.bG, {
            navigator: K,
            children: (0, n.jsx)(g.SJ, {
                children: (A) => {
                    var { ref: t } = A,
                        r = R(A, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        N(
                            Z(
                                {
                                    className: i()(x.root, E),
                                    'aria-label': L.intl.formatToPlainString(L.t.PCs0oq, { numRoles: s.length }),
                                    ref: t
                                },
                                r
                            ),
                            {
                                children: [Y, e]
                            }
                        )
                    );
                }
            })
        })
    );
}
let k = (0, C.Z)(z);
function K(A) {
    return (
        (0, c.e7)([V.Z], () => {
            var e;
            return V.Z.getGuildVersion(null == (e = A.guild) ? void 0 : e.id);
        }),
        !1 === A.wrap ? (0, n.jsx)(k, Z({}, A)) : (0, n.jsx)(z, Z({}, A))
    );
}
