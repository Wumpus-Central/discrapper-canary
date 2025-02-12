n.d(t, {
    UB: () => y,
    ZP: () => k
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
    u = n(91192),
    c = n(924826),
    _ = n(866442),
    d = n(442837),
    A = n(692547),
    T = n(481060),
    I = n(239091),
    N = n(749210),
    g = n(112724),
    O = n(607070),
    R = n(605436),
    S = n(134433),
    U = n(600164),
    f = n(91218),
    D = n(313201),
    L = n(518738),
    C = n(434404),
    M = n(271383),
    h = n(430824),
    p = n(496675),
    m = n(594174),
    v = n(700785),
    P = n(944613),
    b = n(981631),
    x = n(388032),
    G = n(695678);
let F = () => Promise.resolve();
function V(e) {
    let { userRoles: t, position: n, ...l } = e,
        i = (0, D.Dt)();
    return (0, r.jsxs)(T.VqE, {
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
            (0, r.jsxs)(U.Z, {
                className: G.overflowRolesPopoutHeader,
                align: U.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
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
let y = l.forwardRef(function (e, t) {
    var i, s, o;
    let E;
    let { canRemove: c, className: N, role: g, onRemove: R, guildId: U, disableBorderColor: D, onMouseDown: C } = e,
        { tabIndex: M, ...h } = (0, u.JA)(g.id),
        p = (0, L.p9)({
            roleId: g.id,
            size: 16,
            guildId: U
        }),
        m = (0, d.e7)([O.Z], () => O.Z.roleStyle),
        v = (null === (i = g.tags) || void 0 === i ? void 0 : i.guild_connections) === null,
        P = l.useCallback(
            (e) => {
                (0, I.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: g.id,
                            label: x.intl.string(x.t.sMsaLi)
                        });
                });
            },
            [g.id]
        ),
        b = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        F = null !== (s = g.colorString) && void 0 !== s ? s : b,
        V = null !== (o = (0, _.wK)(F, 0.6)) && void 0 !== o ? o : void 0,
        y = A.Z.unsafe_rawColors.WHITE_500.css,
        B = (0, _._i)(F);
    null != B && 0.3 > (0, _.Bd)(B) && (y = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (E = v
            ? (0, r.jsx)(S.Z, {
                  className: G.roleFlowerStar,
                  iconClassName: c ? G.roleVerifiedIcon : void 0,
                  color: F,
                  size: 14
              })
            : 'dot' === m
              ? (0, r.jsx)(T.FhE, {
                    className: G.roleDot,
                    color: F,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(T.xko, { color: F }));
    let j = l.useMemo(() => {
        var t;
        return {
            borderColor: D ? void 0 : V,
            ...(null !== (t = e.style) && void 0 !== t ? t : {})
        };
    }, [V, D, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)('div', {
            ref: t,
            className: a()(G.role, N),
            style: j,
            onContextMenu: P,
            onMouseDown: C,
            'aria-label': g.name,
            tabIndex: M,
            ...h,
            children: [
                (0, r.jsxs)(T.P3F, {
                    className: a()(c && G.roleRemoveButtonCanRemove, G.roleRemoveButton),
                    onClick: c ? R : void 0,
                    tabIndex: c ? M : -1,
                    focusProps: { focusClassName: G.roleRemoveIconFocused },
                    'aria-hidden': !c,
                    'aria-label': x.intl.formatToPlainString(x.t.QrxwhY, { roleName: g.name }),
                    children: [
                        E,
                        c
                            ? (0, r.jsx)(T.Dio, {
                                  size: 'md',
                                  color: y,
                                  className: G.roleRemoveIcon,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                null != p
                    ? (0, r.jsx)(f.Z, {
                          className: G.roleIcon,
                          ...p,
                          enableTooltip: !1
                      })
                    : null,
                (0, r.jsx)('div', {
                    'aria-hidden': !0,
                    className: G.roleName,
                    children: (0, r.jsx)(T.Text, {
                        variant: 'text-xs/medium',
                        className: G.roleNameOverflow,
                        children: g.name
                    })
                })
            ]
        })
    });
});
function B(e) {
    let { user: t, numRolesHidden: n, roleClassName: l } = e,
        i = (0, u.JA)('overflow-more-roles-'.concat(t.id));
    return (0, r.jsx)(T.yRy, {
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(V, {
                ...e,
                position: null != n ? n : 'top'
            });
        },
        position: 'top',
        align: 'center',
        children: (e) =>
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)('button', {
                    ...e,
                    className: a()(G.overflowButton, l),
                    ...i,
                    children: '+'.concat(n)
                })
            })
    });
}
function j(e) {
    let { guild: t, user: n, handleAddRole: l, roleClassName: i, addButtonClassName: s, addButtonIconClassName: o } = e,
        E = (0, u.JA)('overflow-add-roles-'.concat(n.id)),
        c = (0, d.e7)([O.Z], () => O.Z.roleStyle),
        _ = p.Z.getHighestRole(t),
        A = M.ZP.getMember(t.id, n.id),
        I = (e) => (0, R.Gy)(t.id, e.id) && !e.managed && p.Z.isRoleHigher(t, _, e) && (null == A || -1 === A.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(P.Z, {
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
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)('button', {
                    ...e,
                    className: a()(G.addButton, i, s),
                    'aria-label': x.intl.string(x.t.e3Wly8),
                    type: 'button',
                    ...E,
                    children: (0, r.jsx)(T.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(G.addButtonIcon, o),
                        'aria-hidden': !0
                    })
                })
            })
    });
}
function z(e) {
    let t;
    let { user: n, guild: i, userRoles: s, wrap: _ = !0, width: A, className: T, readOnly: I, roleClassName: g, disableBorderColor: O } = e,
        R = l.useRef({}),
        S = l.useCallback(
            (e) => {
                var t;
                let r = s.filter((t) => t !== e.id);
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? N.Z.unassignGuildRoleConnection(i.id, e.id) : C.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [s, i.id, n.id]
        ),
        U = l.useCallback(
            (e) => {
                let t = s;
                -1 === t.indexOf(e) && (t = t.concat([e])), C.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [s, i.id, n.id]
        ),
        [f, D] = l.useState(null),
        L = (0, d.e7)([h.Z], () => h.Z.getRoles(i.id)),
        M = l.useMemo(() => {
            let e = Object.values(L)
                .filter((e) => s.includes(e.id))
                .sort((e, t) => {
                    var n, r;
                    let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                        i = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                    return l && !i ? 1 : !l && i ? -1 : 0;
                });
            return null != f ? e.slice(0, f) : e;
        }, [L, f, s]),
        P = s.length - M.length;
    l.useLayoutEffect(() => {
        if (_) return;
        if ('number' != typeof A) throw Error('Unexpected null width');
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < M.length; r++) {
            let l = M[r],
                i = R.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        D((t) => (e < M.length ? e : t));
    }, [_, A, M]);
    let V = m.default.getCurrentUser();
    o()(null != V, 'MemberRolesList: currentUser cannot be undefined');
    let z = !I && p.Z.can(b.Plq.MANAGE_ROLES, i),
        H = v.e9(i, V.id),
        k = l.useMemo(() => 'roles-'.concat((0, E.Z)()), []),
        w = (0, c.ZP)({
            id: k,
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            wrap: !0
        }),
        K = M.map((e) => {
            var t;
            return (0, r.jsx)(
                y,
                {
                    className: g,
                    role: e,
                    canRemove: (z && v.r6(i, V.id, H, e)) || ((null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === V.id),
                    onRemove: () => S(e),
                    ref: (t) => {
                        var n;
                        return (n = e.id), void (null != t ? (R.current[n] = t) : delete R.current[n]);
                    },
                    guildId: i.id,
                    disableBorderColor: O
                },
                e.id
            );
        });
    return (
        null != f && 0 !== P
            ? (t = (0, r.jsx)(B, {
                  ...e,
                  numRolesHidden: P
              }))
            : z &&
              (t = (0, r.jsx)(j, {
                  ...e,
                  handleAddRole: U
              })),
        (0, r.jsx)(u.bG, {
            navigator: w,
            children: (0, r.jsx)(u.SJ, {
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
let H = (0, g.Z)(z);
function k(e) {
    return (
        (0, d.e7)([p.Z], () => {
            var t;
            return p.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(H, { ...e }) : (0, r.jsx)(z, { ...e })
    );
}
