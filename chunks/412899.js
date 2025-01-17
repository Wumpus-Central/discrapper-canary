n.d(t, {
    UB: function () {
        return j;
    },
    ZP: function () {
        return k;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    E = n(772848),
    u = n(91192),
    c = n(924826),
    d = n(866442),
    _ = n(442837),
    A = n(692547),
    T = n(481060),
    I = n(239091),
    N = n(749210),
    f = n(112724),
    g = n(607070),
    O = n(605436),
    R = n(134433),
    S = n(600164),
    D = n(91218),
    h = n(313201),
    p = n(518738),
    U = n(434404),
    C = n(271383),
    L = n(430824),
    M = n(496675),
    m = n(594174),
    v = n(700785),
    b = n(944613),
    P = n(981631),
    x = n(388032),
    G = n(20381);
let F = () => Promise.resolve();
function y(e) {
    let { userRoles: t, position: n, ...l } = e,
        i = (0, h.Dt)();
    return (0, r.jsxs)(T.Dialog, {
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
            (0, r.jsxs)(S.Z, {
                className: G.overflowRolesPopoutHeader,
                align: S.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.FlagIcon, {
                        size: 'xs',
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: G.overflowRolesPopoutHeaderIcon
                    }),
                    (0, r.jsx)('div', {
                        className: G.overflowRolesPopoutHeaderText,
                        id: i,
                        children: x.intl.format(x.t.PCs0oq, { numRoles: t.length })
                    })
                ]
            }),
            (0, r.jsx)(z, {
                ...l,
                wrap: !0,
                userRoles: t
            })
        ]
    });
}
let j = l.forwardRef(function (e, t) {
    var i, a, o;
    let E;
    let { canRemove: c, className: N, role: f, onRemove: O, guildId: S, disableBorderColor: h, onMouseDown: U } = e,
        { tabIndex: C, ...L } = (0, u.JA)(f.id),
        M = (0, p.p9)({
            roleId: f.id,
            size: 16,
            guildId: S
        }),
        m = (0, _.e7)([g.Z], () => g.Z.roleStyle),
        v = (null === (i = f.tags) || void 0 === i ? void 0 : i.guild_connections) === null,
        b = l.useCallback(
            (e) => {
                (0, I.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: f.id,
                            label: x.intl.string(x.t.sMsaLi)
                        });
                });
            },
            [f.id]
        ),
        P = (0, T.useToken)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        F = null !== (a = f.colorString) && void 0 !== a ? a : P,
        y = null !== (o = (0, d.wK)(F, 0.6)) && void 0 !== o ? o : void 0,
        j = A.Z.unsafe_rawColors.WHITE_500.css,
        V = (0, d._i)(F);
    null != V && 0.3 > (0, d.Bd)(V) && (j = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = v
            ? (0, r.jsx)(R.Z, {
                  className: G.roleFlowerStar,
                  iconClassName: c ? G.roleVerifiedIcon : void 0,
                  color: F,
                  size: 14
              })
            : 'dot' === m
              ? (0, r.jsx)(T.RoleDot, {
                    className: G.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.RoleCircle, { color: F }));
    let B = l.useMemo(() => {
        var t;
        return {
            borderColor: h ? void 0 : y,
            ...(null !== (t = e.style) && void 0 !== t ? t : {})
        };
    }, [y, h, e.style]);
    return (0, r.jsx)(T.FocusRing, {
        children: (0, r.jsxs)('div', {
            ref: t,
            className: s()(G.role, N),
            style: B,
            onContextMenu: b,
            onMouseDown: U,
            'aria-label': f.name,
            tabIndex: C,
            ...L,
            children: [
                (0, r.jsxs)(T.Clickable, {
                    className: s()(c && G.roleRemoveButtonCanRemove, G.roleRemoveButton),
                    onClick: c ? O : void 0,
                    tabIndex: c ? C : -1,
                    focusProps: { focusClassName: G.roleRemoveIconFocused },
                    'aria-hidden': !c,
                    'aria-label': x.intl.formatToPlainString(x.t.QrxwhY, { roleName: f.name }),
                    children: [
                        E,
                        c
                            ? (0, r.jsx)(T.XSmallIcon, {
                                  size: 'md',
                                  color: j,
                                  className: G.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != M
                    ? (0, r.jsx)(D.Z, {
                          className: G.roleIcon,
                          ...M,
                          enableTooltip: !1
                      })
                    : null,
                (0, r.jsx)('div', {
                    'aria-hidden': !0,
                    className: G.roleName,
                    children: (0, r.jsx)(T.Text, {
                        variant: 'text-xs/medium',
                        className: G.roleNameOverflow,
                        children: f.name
                    })
                })
            ]
        })
    });
});
function V(e) {
    let { user: t, numRolesHidden: n, roleClassName: l } = e,
        i = (0, u.JA)('overflow-more-roles-'.concat(t.id));
    return (0, r.jsx)(T.Popout, {
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(y, {
                ...e,
                position: null != n ? n : 'top'
            });
        },
        position: 'top',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(T.FocusRing, {
                children: (0, r.jsx)('button', {
                    ...e,
                    className: s()(G.overflowButton, l),
                    ...i,
                    children: '+'.concat(n)
                })
            })
    });
}
function B(e) {
    let { guild: t, user: n, handleAddRole: l, roleClassName: i, addButtonClassName: a, addButtonIconClassName: o } = e,
        E = (0, u.JA)('overflow-add-roles-'.concat(n.id)),
        c = (0, _.e7)([g.Z], () => g.Z.roleStyle),
        d = M.Z.getHighestRole(t),
        A = C.ZP.getMember(t.id, n.id),
        I = (e) => (0, O.Gy)(t.id, e.id) && !e.managed && M.Z.isRoleHigher(t, d, e) && (null == A || -1 === A.roles.indexOf(e.id));
    return (0, r.jsx)(T.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(b.Z, {
                guild: t,
                roleStyle: c,
                roleFilter: I,
                onSelect: l,
                onClose: n
            });
        },
        position: 'bottom',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(T.FocusRing, {
                children: (0, r.jsx)('button', {
                    ...e,
                    className: s()(G.addButton, i, a),
                    'aria-label': x.intl.string(x.t.e3Wly8),
                    type: 'button',
                    ...E,
                    children: (0, r.jsx)(T.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(G.addButtonIcon, o),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function z(e) {
    let t;
    let { user: n, guild: i, userRoles: a, wrap: d = !0, width: A, className: T, readOnly: I, roleClassName: f, disableBorderColor: g } = e,
        O = l.useRef({}),
        R = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? N.Z.unassignGuildRoleConnection(i.id, e.id) : U.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [a, i.id, n.id]
        ),
        S = l.useCallback(
            (e) => {
                let t = a;
                -1 === t.indexOf(e) && (t = t.concat([e])), U.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [a, i.id, n.id]
        ),
        [D, h] = l.useState(null),
        p = (0, _.e7)([L.Z], () => L.Z.getRoles(i.id)),
        C = l.useMemo(() => {
            let e = Object.values(p)
                .filter((e) => a.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                        i = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != D ? e.slice(0, D) : e;
        }, [p, D, a]),
        b = a.length - C.length;
    l.useLayoutEffect(() => {
        if (d) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < C.length; r++) {
            let l = C[r],
                i = O.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        h((t) => (e < C.length ? e : t));
    }, [d, A, C]);
    let y = m.default.getCurrentUser();
    o()(null != y, 'MemberRolesList: currentUser cannot be undefined');
    let z = !I && M.Z.can(P.Plq.MANAGE_ROLES, i),
        H = v.e9(i, y.id),
        k = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        w = (0, c.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            wrap: !0
        }),
        Z = C.map((e) => {
            var t;
            return (0, r.jsx)(
                j,
                {
                    className: f,
                    role: e,
                    canRemove: (z && v.r6(i, y.id, H, e)) || ((null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === y.id),
                    onRemove: () => R(e),
                    ref: (t) => {
                        var n, r;
                        return (n = e.id), void (null != (r = t) ? (O.current[n] = r) : delete O.current[n]);
                    },
                    guildId: i.id,
                    disableBorderColor: g
                },
                e.id
            );
        });
    return (
        null != D && 0 !== b
            ? (t = (0, r.jsx)(V, {
                  ...e,
                  numRolesHidden: b
              }))
            : z &&
              (t = (0, r.jsx)(B, {
                  ...e,
                  handleAddRole: S
              })),
        (0, r.jsx)(u.bG, {
            navigator: w,
            children: (0, r.jsx)(u.SJ, {
                children: (e) => {
                    let { ref: n, ...l } = e;
                    return (0, r.jsxs)('div', {
                        className: s()(G.root, T),
                        'aria-label': x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: a.length }),
                        ref: n,
                        ...l,
                        children: [Z, t]
                    });
                }
            })
        })
    );
}
let H = (0, f.Z)(z);
function k(e) {
    return (
        (0, _.e7)([M.Z], () => {
            var t;
            return M.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(H, { ...e }) : (0, r.jsx)(z, { ...e })
    );
}
