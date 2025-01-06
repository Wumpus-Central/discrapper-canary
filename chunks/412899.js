n.d(t, {
    UB: function () {
        return B;
    },
    ZP: function () {
        return V;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    E = n(772848),
    c = n(91192),
    u = n(924826),
    d = n(866442),
    _ = n(442837),
    A = n(692547),
    T = n(481060),
    I = n(239091),
    g = n(749210),
    f = n(112724),
    N = n(607070),
    R = n(605436),
    O = n(134433),
    S = n(600164),
    p = n(91218),
    D = n(313201),
    h = n(518738),
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
        i = (0, D.Dt)();
    return (0, r.jsxs)(T.Dialog, {
        className: a()(G.overflowRolesPopout, {
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
            (0, r.jsx)(k, {
                ...l,
                wrap: !0,
                userRoles: t
            })
        ]
    });
}
let B = l.forwardRef(function (e, t) {
    var i, s, o;
    let E;
    let { canRemove: u, className: g, role: f, onRemove: R, guildId: S, disableBorderColor: D, onMouseDown: U } = e,
        { tabIndex: C, ...L } = (0, c.JA)(f.id),
        M = (0, h.p9)({
            roleId: f.id,
            size: 16,
            guildId: S
        }),
        m = (0, _.e7)([N.Z], () => N.Z.roleStyle),
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
        F = null !== (s = f.colorString) && void 0 !== s ? s : P,
        y = null !== (o = (0, d.wK)(F, 0.6)) && void 0 !== o ? o : void 0,
        B = A.Z.unsafe_rawColors.WHITE_500.css,
        j = (0, d._i)(F);
    null != j && 0.3 > (0, d.Bd)(j) && (B = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = v
            ? (0, r.jsx)(O.Z, {
                  className: G.roleFlowerStar,
                  iconClassName: u ? G.roleVerifiedIcon : void 0,
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
    let z = l.useMemo(() => {
        var t;
        return {
            borderColor: D ? void 0 : y,
            ...(null !== (t = e.style) && void 0 !== t ? t : {})
        };
    }, [y, D, e.style]);
    return (0, r.jsx)(T.FocusRing, {
        children: (0, r.jsxs)('div', {
            ref: t,
            className: a()(G.role, g),
            style: z,
            onContextMenu: b,
            onMouseDown: U,
            'aria-label': f.name,
            tabIndex: C,
            ...L,
            children: [
                (0, r.jsxs)(T.Clickable, {
                    className: a()(u && G.roleRemoveButtonCanRemove, G.roleRemoveButton),
                    onClick: u ? R : void 0,
                    tabIndex: u ? C : -1,
                    focusProps: { focusClassName: G.roleRemoveIconFocused },
                    'aria-hidden': !u,
                    'aria-label': x.intl.formatToPlainString(x.t.QrxwhY, { roleName: f.name }),
                    children: [
                        E,
                        u
                            ? (0, r.jsx)(T.XSmallIcon, {
                                  size: 'md',
                                  color: B,
                                  className: G.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != M
                    ? (0, r.jsx)(p.Z, {
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
function j(e) {
    let { user: t, numRolesHidden: n, roleClassName: l } = e,
        i = (0, c.JA)('overflow-more-roles-'.concat(t.id));
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
                    className: a()(G.overflowButton, l),
                    ...i,
                    children: '+'.concat(n)
                })
            })
    });
}
function z(e) {
    let { guild: t, user: n, handleAddRole: l, roleClassName: i, addButtonClassName: s, addButtonIconClassName: o } = e,
        E = (0, c.JA)('overflow-add-roles-'.concat(n.id)),
        u = (0, _.e7)([N.Z], () => N.Z.roleStyle),
        d = M.Z.getHighestRole(t),
        A = C.ZP.getMember(t.id, n.id),
        I = (e) => (0, R.Gy)(t.id, e.id) && !e.managed && M.Z.isRoleHigher(t, d, e) && (null == A || -1 === A.roles.indexOf(e.id));
    return (0, r.jsx)(T.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(b.Z, {
                guild: t,
                roleStyle: u,
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
                    className: a()(G.addButton, i, s),
                    'aria-label': x.intl.string(x.t.e3Wly8),
                    type: 'button',
                    ...E,
                    children: (0, r.jsx)(T.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(G.addButtonIcon, o),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function k(e) {
    let t;
    let { user: n, guild: i, userRoles: s, wrap: d = !0, width: A, className: T, readOnly: I, roleClassName: f, disableBorderColor: N } = e,
        R = l.useRef({}),
        O = l.useCallback(
            (e) => {
                var t;
                let r = s.filter((t) => t !== e.id);
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? g.Z.unassignGuildRoleConnection(i.id, e.id) : U.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [s, i.id, n.id]
        ),
        S = l.useCallback(
            (e) => {
                let t = s;
                -1 === t.indexOf(e) && (t = t.concat([e])), U.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [s, i.id, n.id]
        ),
        [p, D] = l.useState(null),
        h = (0, _.e7)([L.Z], () => L.Z.getRoles(i.id)),
        C = l.useMemo(() => {
            let e = Object.values(h)
                .filter((e) => s.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                        i = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != p ? e.slice(0, p) : e;
        }, [h, p, s]),
        b = s.length - C.length;
    l.useLayoutEffect(() => {
        if (d) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < C.length; r++) {
            let l = C[r],
                i = R.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        D((t) => (e < C.length ? e : t));
    }, [d, A, C]);
    let y = m.default.getCurrentUser();
    o()(null != y, 'MemberRolesList: currentUser cannot be undefined');
    let k = !I && M.Z.can(P.Plq.MANAGE_ROLES, i),
        H = v.e9(i, y.id),
        V = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        w = (0, u.ZP)({
            id: V,
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            wrap: !0
        }),
        K = C.map((e) => {
            var t;
            return (0, r.jsx)(
                B,
                {
                    className: f,
                    role: e,
                    canRemove: (k && v.r6(i, y.id, H, e)) || ((null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === y.id),
                    onRemove: () => O(e),
                    ref: (t) => {
                        var n, r;
                        return (n = e.id), void (null != (r = t) ? (R.current[n] = r) : delete R.current[n]);
                    },
                    guildId: i.id,
                    disableBorderColor: N
                },
                e.id
            );
        });
    return (
        null != p && 0 !== b
            ? (t = (0, r.jsx)(j, {
                  ...e,
                  numRolesHidden: b
              }))
            : k &&
              (t = (0, r.jsx)(z, {
                  ...e,
                  handleAddRole: S
              })),
        (0, r.jsx)(c.bG, {
            navigator: w,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    let { ref: n, ...l } = e;
                    return (0, r.jsxs)('div', {
                        className: a()(G.root, T),
                        'aria-label': x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: s.length }),
                        ref: n,
                        ...l,
                        children: [K, t]
                    });
                }
            })
        })
    );
}
let H = (0, f.Z)(k);
function V(e) {
    return (
        (0, _.e7)([M.Z], () => {
            var t;
            return M.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(H, { ...e }) : (0, r.jsx)(k, { ...e })
    );
}
