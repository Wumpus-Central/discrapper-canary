(t.d(e, {
    UB: () => F,
    ZP: () => Y
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
    w = t(134433),
    D = t(600164),
    M = t(91218),
    I = t(313201),
    p = t(518738),
    H = t(434404),
    b = t(884902),
    Q = t(635042),
    O = t(345162),
    P = t(271383),
    V = t(485386),
    j = t(496675),
    T = t(594174),
    y = t(700785),
    m = t(944613),
    L = t(981631),
    x = t(388032),
    Z = t(78248);
function N(A) {
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
function S(A, e) {
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
let G = () => Promise.resolve();
function U(A) {
    let { userRoleIds: e, position: t } = A,
        r = R(A, ['userRoleIds', 'position']),
        l = (0, I.Dt)();
    return (0, n.jsxs)(E.VqE, {
        className: i()(Z.overflowRolesPopout, {
            [Z.popoutBottom]: 'bottom' === t,
            [Z.popoutTop]: 'top' === t
        }),
        'aria-labelledby': l,
        children: [
            (0, n.jsx)('div', {
                className: Z.overflowRolesPopoutArrowWrapper,
                children: (0, n.jsx)('div', { className: Z.overflowRolesPopoutArrow })
            }),
            (0, n.jsxs)(D.Z, {
                className: Z.overflowRolesPopoutHeader,
                align: D.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(E.U65, {
                        size: 'xs',
                        color: h.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: Z.overflowRolesPopoutHeaderIcon
                    }),
                    (0, n.jsx)('div', {
                        className: Z.overflowRolesPopoutHeaderText,
                        id: l,
                        children: x.intl.format(x.t.PCs0oq, { numRoles: e.length })
                    })
                ]
            }),
            (0, n.jsx)(
                k,
                S(N({}, r), {
                    wrap: !0,
                    userRoleIds: e
                })
            )
        ]
    });
}
let F = r.forwardRef(function (A, e) {
    var l, s, a;
    let o,
        { canRemove: f, className: d, role: C, onRemove: D, guildId: I, disableBorderColor: H, onMouseDown: Q } = A,
        O = (0, g.JA)(C.id),
        { tabIndex: P } = O,
        V = R(O, ['tabIndex']),
        j = (0, p.p9)({
            roleId: C.id,
            size: 16,
            guildId: I
        }),
        T = (0, c.e7)([B.Z], () => B.Z.roleStyle),
        y = (0, b._f)(I, C, C.colorStrings),
        m = (null == (l = C.tags) ? void 0 : l.guild_connections) === null,
        L = r.useCallback(
            (A) => {
                (0, u.jW)(A, async () => {
                    let { default: A } = await t.e('5396').then(t.bind(t, 731646));
                    return (e) =>
                        (0, n.jsx)(
                            A,
                            S(N({}, e), {
                                id: C.id,
                                label: x.intl.string(x.t.sMsaLi)
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
            ? (0, n.jsx)(w.Z, {
                  className: Z.roleFlowerStar,
                  iconClassName: f ? Z.roleVerifiedIcon : void 0,
                  color: U,
                  size: 14
              })
            : 'dot' === T
              ? (0, n.jsx)(E.FhE, {
                    className: Z.roleDot,
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
        return N({ borderColor: H ? void 0 : F }, null != (e = A.style) ? e : {});
    }, [F, H, A.style]);
    return (0, n.jsx)(E.tEY, {
        children: (0, n.jsxs)(
            'div',
            S(
                N(
                    {
                        ref: e,
                        className: i()(Z.role, d),
                        style: k,
                        onContextMenu: L,
                        onMouseDown: Q,
                        'aria-label': C.name,
                        tabIndex: P
                    },
                    V
                ),
                {
                    children: [
                        (0, n.jsxs)(E.P3F, {
                            className: i()(f && Z.roleRemoveButtonCanRemove, Z.roleRemoveButton),
                            onClick: f ? D : void 0,
                            tabIndex: f ? P : -1,
                            focusProps: { focusClassName: Z.roleRemoveIconFocused },
                            'aria-hidden': !f,
                            'aria-label': x.intl.formatToPlainString(x.t.QrxwhY, { roleName: C.name }),
                            children: [
                                o,
                                f
                                    ? (0, n.jsx)(E.Dio, {
                                          size: 'md',
                                          color: X,
                                          className: Z.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != j ? (0, n.jsx)(M.Z, S(N({ className: Z.roleIcon }, j), { enableTooltip: !1 })) : null,
                        (0, n.jsx)('div', {
                            'aria-hidden': !0,
                            className: Z.roleName,
                            children: (0, n.jsx)(E.Text, {
                                variant: 'text-xs/medium',
                                className: Z.roleNameOverflow,
                                children: C.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function X(A) {
    let { user: e, numRolesHidden: t, roleClassName: l } = A,
        s = (0, g.JA)('overflow-more-roles-'.concat(e.id)),
        a = r.useRef(null);
    return (0, n.jsx)(E.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(U, S(N({}, A), { position: null != t ? t : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (A) => (0, n.jsx)(E.tEY, { children: (0, n.jsx)('button', S(N(S(N({ ref: a }, A), { className: i()(Z.overflowButton, l) }), s), { children: '+'.concat(t) })) })
    });
}
function z(A) {
    let e = r.useRef(null),
        { guild: t, user: l, handleAddRole: s, roleClassName: a, addButtonClassName: o, addButtonIconClassName: f } = A,
        v = (0, g.JA)('overflow-add-roles-'.concat(l.id)),
        h = (0, c.e7)([B.Z], () => B.Z.roleStyle),
        u = j.Z.getHighestRole(t),
        d = P.ZP.getMember(t.id, l.id),
        C = (A) => !(0, O.fI)(A) && !A.managed && j.Z.isRoleHigher(t, u, A) && (null == d || -1 === d.roles.indexOf(A.id));
    return (0, n.jsx)(E.yRy, {
        targetElementRef: e,
        renderPopout: (A) => {
            let { closePopout: e } = A;
            return (0, n.jsx)(m.Z, {
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
                    S(
                        N(
                            S(N({ ref: e }, A), {
                                className: i()(Z.addButton, a, o),
                                'aria-label': x.intl.string(x.t.e3Wly8),
                                type: 'button'
                            }),
                            v
                        ),
                        {
                            children: (0, n.jsx)(E.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: i()(Z.addButtonIcon, f),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function k(A) {
    let e,
        { user: t, guild: l, userRoleIds: s, wrap: v = !0, width: h, className: E, readOnly: u, roleClassName: C, disableBorderColor: B } = A,
        w = r.useRef({}),
        D = r.useCallback(
            (A) => {
                var e;
                let n = s.filter((e) => e !== A.id);
                (null == (e = A.tags) ? void 0 : e.guild_connections) === null ? d.Z.unassignGuildRoleConnection(l.id, A.id) : H.Z.updateMemberRoles(l.id, t.id, n, [], [A.id]);
            },
            [s, l.id, t.id]
        ),
        M = r.useCallback(
            (A) => {
                let e = s;
                (e.includes(A) || (e = [...e, A]), H.Z.updateMemberRoles(l.id, t.id, e, [A], []));
            },
            [s, l.id, t.id]
        ),
        [I, p] = r.useState(null),
        b = (0, c.Wu)([V.Z], () => V.Z.getManyRoles(l.id, s).sort(Q.Z)),
        O = r.useMemo(() => (null != I ? b.slice(0, I) : b), [b, I]),
        P = s.length - O.length;
    r.useLayoutEffect(() => {
        if (v) return;
        if ('number' != typeof h) throw Error('Unexpected null width');
        let A = 0,
            e = 0,
            t = h - 30 - 4;
        for (let n = 0; n < O.length; n++) {
            let r = O[n],
                l = w.current[r.id];
            if (null != l) {
                if ((e += l.offsetWidth + 4) > t) break;
                A++;
            }
        }
        p((e) => (A < O.length ? A : e));
    }, [v, h, O]);
    let m = T.default.getCurrentUser();
    a()(null != m, 'MemberRolesList: currentUser cannot be undefined');
    let U = !u && j.Z.can(L.Plq.MANAGE_ROLES, l),
        k = y.e9(l, m.id),
        K = r.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        Y = (0, f.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: G,
            scrollToEnd: G,
            wrap: !0
        }),
        W = O.map((A) => {
            var e;
            return (0, n.jsx)(
                F,
                {
                    className: C,
                    role: A,
                    canRemove: (null == (e = A.tags) ? void 0 : e.guild_connections) === null ? t.id === m.id : U && y.r6(l, m.id, k, A),
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
        null != I && 0 !== P ? (e = (0, n.jsx)(X, S(N({}, A), { numRolesHidden: P }))) : U && (e = (0, n.jsx)(z, S(N({}, A), { handleAddRole: M }))),
        (0, n.jsx)(g.bG, {
            navigator: Y,
            children: (0, n.jsx)(g.SJ, {
                children: (A) => {
                    var { ref: t } = A,
                        r = R(A, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        S(
                            N(
                                {
                                    className: i()(Z.root, E),
                                    'aria-label': x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: s.length }),
                                    ref: t
                                },
                                r
                            ),
                            {
                                children: [W, e]
                            }
                        )
                    );
                }
            })
        })
    );
}
let K = (0, C.Z)(k);
function Y(A) {
    return (
        (0, c.e7)([j.Z], () => {
            var e;
            return j.Z.getGuildVersion(null == (e = A.guild) ? void 0 : e.id);
        }),
        !1 === A.wrap ? (0, n.jsx)(K, N({}, A)) : (0, n.jsx)(k, N({}, A))
    );
}
