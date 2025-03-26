r.d(t, {
    UB: () => G,
    ZP: () => z
}),
    r(47120),
    r(230036),
    r(411104);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(512722),
    s = r.n(o),
    h = r(772848),
    c = r(91192),
    v = r(924826),
    u = r(866442),
    d = r(442837),
    E = r(692547),
    f = r(481060),
    p = r(239091),
    M = r(749210),
    _ = r(112724),
    O = r(607070),
    g = r(605436),
    b = r(134433),
    A = r(600164),
    T = r(91218),
    Z = r(313201),
    N = r(518738),
    H = r(434404),
    y = r(271383),
    j = r(430824),
    I = r(496675),
    m = r(594174),
    V = r(700785),
    S = r(944613),
    R = r(981631),
    D = r(388032),
    C = r(520517);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let U = () => Promise.resolve();
function w(e) {
    let { userRoles: t, position: r } = e,
        l = P(e, ['userRoles', 'position']),
        i = (0, Z.Dt)();
    return (0, n.jsxs)(f.VqE, {
        className: a()(C.overflowRolesPopout, {
            [C.popoutBottom]: 'bottom' === r,
            [C.popoutTop]: 'top' === r
        }),
        'aria-labelledby': i,
        children: [
            (0, n.jsx)('div', {
                className: C.overflowRolesPopoutArrowWrapper,
                children: (0, n.jsx)('div', { className: C.overflowRolesPopoutArrow })
            }),
            (0, n.jsxs)(A.Z, {
                className: C.overflowRolesPopoutHeader,
                align: A.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(f.U65, {
                        size: 'xs',
                        color: E.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: C.overflowRolesPopoutHeaderIcon
                    }),
                    (0, n.jsx)('div', {
                        className: C.overflowRolesPopoutHeaderText,
                        id: i,
                        children: D.NW.format(D.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, n.jsx)(
                B,
                L(x({}, l), {
                    wrap: !0,
                    userRoles: t
                })
            )
        ]
    });
}
let G = l.forwardRef(function (e, t) {
    var i, o, s;
    let h;
    let { canRemove: v, className: M, role: _, onRemove: g, guildId: A, disableBorderColor: Z, onMouseDown: H } = e,
        y = (0, c.JA)(_.id),
        { tabIndex: j } = y,
        I = P(y, ['tabIndex']),
        m = (0, N.p9)({
            roleId: _.id,
            size: 16,
            guildId: A
        }),
        V = (0, d.e7)([O.Z], () => O.Z.roleStyle),
        S = (null === (i = _.tags) || void 0 === i ? void 0 : i.guild_connections) === null,
        R = l.useCallback(
            (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await r.e('5396').then(r.bind(r, 731646));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            L(x({}, t), {
                                id: _.id,
                                label: D.NW.string(D.t.sMsaLi)
                            })
                        );
                });
            },
            [_.id]
        ),
        U = (0, f.dQu)(E.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        w = null !== (o = _.colorString) && void 0 !== o ? o : U,
        G = null !== (s = (0, u.wK)(w, 0.6)) && void 0 !== s ? s : void 0,
        W = E.Z.unsafe_rawColors.WHITE_500.css,
        F = (0, u._i)(w);
    null != F && 0.3 > (0, u.Bd)(F) && (W = E.Z.unsafe_rawColors.PRIMARY_630.css),
        (h = S
            ? (0, n.jsx)(b.Z, {
                  className: C.roleFlowerStar,
                  iconClassName: v ? C.roleVerifiedIcon : void 0,
                  color: w,
                  size: 14
              })
            : 'dot' === V
              ? (0, n.jsx)(f.FhE, {
                    className: C.roleDot,
                    color: w,
                    background: !1,
                    tooltip: !1
                })
              : (0, n.jsx)(f.xko, { color: w }));
    let B = l.useMemo(() => {
        var t;
        return x({ borderColor: Z ? void 0 : G }, null !== (t = e.style) && void 0 !== t ? t : {});
    }, [G, Z, e.style]);
    return (0, n.jsx)(f.tEY, {
        children: (0, n.jsxs)(
            'div',
            L(
                x(
                    {
                        ref: t,
                        className: a()(C.role, M),
                        style: B,
                        onContextMenu: R,
                        onMouseDown: H,
                        'aria-label': _.name,
                        tabIndex: j
                    },
                    I
                ),
                {
                    children: [
                        (0, n.jsxs)(f.P3F, {
                            className: a()(v && C.roleRemoveButtonCanRemove, C.roleRemoveButton),
                            onClick: v ? g : void 0,
                            tabIndex: v ? j : -1,
                            focusProps: { focusClassName: C.roleRemoveIconFocused },
                            'aria-hidden': !v,
                            'aria-label': D.NW.formatToPlainString(D.t.QrxwhY, { roleName: _.name }),
                            children: [
                                h,
                                v
                                    ? (0, n.jsx)(f.Dio, {
                                          size: 'md',
                                          color: W,
                                          className: C.roleRemoveIcon,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        null != m ? (0, n.jsx)(T.Z, L(x({ className: C.roleIcon }, m), { enableTooltip: !1 })) : null,
                        (0, n.jsx)('div', {
                            'aria-hidden': !0,
                            className: C.roleName,
                            children: (0, n.jsx)(f.Text, {
                                variant: 'text-xs/medium',
                                className: C.roleNameOverflow,
                                children: _.name
                            })
                        })
                    ]
                }
            )
        )
    });
});
function W(e) {
    let { user: t, numRolesHidden: r, roleClassName: i } = e,
        o = (0, c.JA)('overflow-more-roles-'.concat(t.id)),
        s = l.useRef(null);
    return (0, n.jsx)(f.yRy, {
        targetElementRef: s,
        renderPopout: (t) => {
            let { position: r } = t;
            return (0, n.jsx)(w, L(x({}, e), { position: null != r ? r : 'top' }));
        },
        position: 'top',
        align: 'center',
        children: (e) => (0, n.jsx)(f.tEY, { children: (0, n.jsx)('button', L(x(L(x({ ref: s }, e), { className: a()(C.overflowButton, i) }), o), { children: '+'.concat(r) })) })
    });
}
function F(e) {
    let t = l.useRef(null),
        { guild: r, user: i, handleAddRole: o, roleClassName: s, addButtonClassName: h, addButtonIconClassName: v } = e,
        u = (0, c.JA)('overflow-add-roles-'.concat(i.id)),
        E = (0, d.e7)([O.Z], () => O.Z.roleStyle),
        p = I.Z.getHighestRole(r),
        M = y.ZP.getMember(r.id, i.id),
        _ = (e) => (0, g.Gy)(r.id, e.id) && !e.managed && I.Z.isRoleHigher(r, p, e) && (null == M || -1 === M.roles.indexOf(e.id));
    return (0, n.jsx)(f.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(S.Z, {
                guild: r,
                roleStyle: E,
                roleFilter: _,
                onSelect: o,
                onClose: t
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, n.jsx)(f.tEY, {
                children: (0, n.jsx)(
                    'button',
                    L(
                        x(
                            L(x({ ref: t }, e), {
                                className: a()(C.addButton, s, h),
                                'aria-label': D.NW.string(D.t.e3Wly8),
                                type: 'button'
                            }),
                            u
                        ),
                        {
                            children: (0, n.jsx)(f.qJs, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(C.addButtonIcon, v),
                                'aria-hidden': !0
                            })
                        }
                    )
                )
            })
    });
}
function B(e) {
    let t;
    let { user: r, guild: i, userRoles: o, wrap: u = !0, width: E, className: f, readOnly: p, roleClassName: _, disableBorderColor: O } = e,
        g = l.useRef({}),
        b = l.useCallback(
            (e) => {
                var t;
                let n = o.filter((t) => t !== e.id);
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? M.Z.unassignGuildRoleConnection(i.id, e.id) : H.Z.updateMemberRoles(i.id, r.id, n, [], [e.id]);
            },
            [o, i.id, r.id]
        ),
        A = l.useCallback(
            (e) => {
                let t = o;
                -1 === t.indexOf(e) && (t = t.concat([e])), H.Z.updateMemberRoles(i.id, r.id, t, [e], []);
            },
            [o, i.id, r.id]
        ),
        [T, Z] = l.useState(null),
        N = (0, d.e7)([j.Z], () => j.Z.getRoles(i.id)),
        y = l.useMemo(() => {
            let e = Object.values(N)
                .filter((e) => o.includes(e.id))
                .sort((e, t) => {
                    var r, n;
                    let l = (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) !== null,
                        i = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != T ? e.slice(0, T) : e;
        }, [N, T, o]),
        S = o.length - y.length;
    l.useLayoutEffect(() => {
        if (u) return;
        if ('number' != typeof E) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            r = E - 30 - 4;
        for (let n = 0; n < y.length; n++) {
            let l = y[n],
                i = g.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > r) break;
                e++;
            }
        }
        Z((t) => (e < y.length ? e : t));
    }, [u, E, y]);
    let w = m.default.getCurrentUser();
    s()(null != w, 'MemberRolesList: currentUser cannot be undefined');
    let B = !p && I.Z.can(R.Plq.MANAGE_ROLES, i),
        k = V.e9(i, w.id),
        z = l.useMemo(() => 'roles-'.concat((0, h.Z)()), []),
        K = (0, v.ZP)({
            id: z,
            isEnabled: !0,
            scrollToStart: U,
            scrollToEnd: U,
            wrap: !0
        }),
        Y = y.map((e) => {
            var t;
            return (0, n.jsx)(
                G,
                {
                    className: _,
                    role: e,
                    canRemove: (B && V.r6(i, w.id, k, e)) || ((null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && r.id === w.id),
                    onRemove: () => b(e),
                    ref: (t) => {
                        var r;
                        return (r = e.id), void (null != t ? (g.current[r] = t) : delete g.current[r]);
                    },
                    guildId: i.id,
                    disableBorderColor: O
                },
                e.id
            );
        });
    return (
        null != T && 0 !== S ? (t = (0, n.jsx)(W, L(x({}, e), { numRolesHidden: S }))) : B && (t = (0, n.jsx)(F, L(x({}, e), { handleAddRole: A }))),
        (0, n.jsx)(c.bG, {
            navigator: K,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: r } = e,
                        l = P(e, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        L(
                            x(
                                {
                                    className: a()(C.root, f),
                                    'aria-label': D.NW.formatToPlainString(D.t.PCs0oq, { numRoles: o.length }),
                                    ref: r
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
let k = (0, _.Z)(B);
function z(e) {
    return (
        (0, d.e7)([I.Z], () => {
            var t;
            return I.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, n.jsx)(k, x({}, e)) : (0, n.jsx)(B, x({}, e))
    );
}
