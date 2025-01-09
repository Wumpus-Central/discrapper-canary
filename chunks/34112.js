n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(999153),
    o = n(584922),
    c = n(866442),
    d = n(442837),
    u = n(481060),
    m = n(239091),
    h = n(493544),
    g = n(134433),
    x = n(91218),
    p = n(646892),
    f = n(741247),
    C = n(518738),
    v = n(549631),
    N = n(496675),
    _ = n(626135),
    I = n(480608),
    T = n(243730),
    j = n(130341),
    b = n(970129),
    E = n(712181),
    S = n(203377),
    R = n(981631),
    y = n(388032),
    A = n(107959),
    Z = n(147465);
let L = 'DRAGGABLE_ROLE';
function D(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: s, setSelectedSection: a, renderHeader: o, headerHeight: c, query: u } = e,
        m = (0, d.e7)([T.Z], () => T.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.e7)([N.Z], () => N.Z.getHighestRole(n), [n]),
        x = u.trim();
    r.useEffect(() => {
        (0, I.E)(n.id);
    }, [n.id]);
    let p = r.useRef(!1);
    r.useEffect(() => {
        if (!p.current && '' !== u.trimStart()) _.default.track(R.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (p.current = !0);
    }, [u]);
    let f = r.useMemo(() => s.filter((e) => (0, j.uo)(e, x)), [s, x]),
        C = r.useMemo(() => [...s, l], [s, l]),
        { draggingId: v, handleDragStart: b, handleDragReset: S, handleDragComplete: y } = (0, E.Z)(C),
        A = r.useCallback(
            (e) => {
                var r;
                let { row: l } = e;
                if (0 === f.length) return (0, i.jsx)(O, {}, 'empty-role');
                let o = f[l];
                return (0, i.jsx)(
                    M,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null !== (r = null == m ? void 0 : m[o.id]) && void 0 !== r ? r : 0,
                        onDragStart: b,
                        onDragReset: S,
                        onDragComplete: y,
                        disableHover: null != v,
                        disableDrag: s.length !== f.length,
                        setEditRoleId: t,
                        setSelectedSection: a
                    },
                    o.id
                );
            },
            [f, n, g, m, b, S, y, v, s, t, a]
        );
    return (0, i.jsx)(h.Xi, {
        sections: [Math.max(f.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: A
    });
}
function O() {
    return (0, i.jsxs)('div', {
        className: A.emptyRoles,
        children: [
            (0, i.jsx)('div', { className: Z.dragSpacing }),
            (0, i.jsx)(u.GroupIcon, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, i.jsx)(u.Text, {
                className: A.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: y.intl.string(y.t['vR7M+/'])
            })
        ]
    });
}
function M(e) {
    var t, l, c;
    let { role: d, guild: h, highestRole: x, currentPosition: C, memberCount: N, onDragStart: _, onDragReset: I, onDragComplete: T, disableHover: j, disableDrag: E, setEditRoleId: R, setSelectedSection: D } = e,
        O = (0, b.T)(h, x, d),
        M = null != O,
        [P, w] = r.useState(!1),
        B = r.useMemo(
            () => ({
                type: L,
                item: () => (
                    _(d.id),
                    {
                        id: d.id,
                        position: C
                    }
                ),
                canDrag: () => P && !M,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) {
                        I();
                        return;
                    }
                    T(n.roleId);
                }
            }),
            [d, _, I, T, M, P, C]
        ),
        [{ isDragging: U }, G] = (0, a.c)(B),
        F = r.useMemo(
            () => ({
                accept: L,
                canDrop: () => !M,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: d.id })
            }),
            [M, d]
        ),
        [{ dragSourcePosition: H }, z] = (0, o.L)(F),
        W = r.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            role: d,
                            guild: h
                        });
                });
            },
            [h, d]
        ),
        V = (0, f.useHasGuildRoleItems)(h, d);
    if (U)
        return (0, i.jsx)('div', {
            ref: G,
            className: s()(A.roleRow, A.roleRowDragging)
        });
    function Y() {
        R(d.id);
    }
    function K() {
        Y(), D(S.ZI.MEMBERS);
    }
    return (0, i.jsxs)(u.Clickable, {
        className: s()(A.roleRow, {
            [A.roleRowDisableHover]: j,
            [A.containerDragBefore]: null != H && C < H,
            [A.containerDragAfter]: null != H && C > H
        }),
        onClick: Y,
        onContextMenu: W,
        innerRef: (e) => G(z(e)),
        'data-dnd-name': d.name,
        'aria-label': y.intl.formatToPlainString(y.t.Vu0AcX, {
            name: d.name,
            count: ''.concat(N)
        }),
        children: [
            (0, i.jsx)('div', {
                className: s()(A.dragIcon, Z.dragSpacing, { [A.dragIconHidden]: M || E }),
                onMouseEnter: () => w(!0),
                onMouseLeave: () => w(!1),
                children: (0, i.jsx)(u.DragIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: s()(A.roleNameContainer, Z.roleNameSpacing),
                children: [
                    (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                        ? (0, i.jsx)(g.Z, {
                              className: A.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, i.jsx)(k, {
                              guildId: h.id,
                              role: d,
                              size: 24,
                              className: A.roleIcon,
                              defaultIconClassName: A.shield
                          }),
                    null != O
                        ? (0, i.jsx)(b.Z, {
                              className: A.lock,
                              tooltipText: O
                          })
                        : null,
                    (0, i.jsx)(u.Text, {
                        className: A.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null === (l = d.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null &&
                        (0, i.jsx)(v.Z, {
                            className: A.subscriptionRoleIcon,
                            'aria-label': y.intl.string(y.t.a2Ak8f)
                        }),
                    (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, i.jsx)(p.Z, {})
                ]
            }),
            (0, i.jsx)(u.Tooltip, {
                text: y.intl.string(y.t.CW75t7),
                'aria-label': y.intl.formatToPlainString(y.t.Fgs8fH, { count: ''.concat(N) }),
                position: 'right',
                children: (e) =>
                    (0, i.jsxs)(u.Clickable, {
                        ...e,
                        className: s()(A.memberCountContainer, Z.memberSpacing),
                        onClick: K,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                color: 'none',
                                children: N
                            }),
                            (0, i.jsx)(u.UserIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: A.person,
                                width: 20,
                                height: 20
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: s()(A.buttonsContainer, Z.buttonsSpacing),
                children: [
                    (0, i.jsx)(u.CircleIconButton, {
                        className: s()(A.circleButton, A.editButton),
                        tooltip: M ? y.intl.string(y.t['HO/oXl']) : y.intl.string(y.t.bt75u7),
                        color: u.CircleIconButtonColors.SECONDARY,
                        size: u.CircleIconButtonSizes.SIZE_36,
                        icon: M
                            ? (0, i.jsx)(u.EyeIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, i.jsx)(u.PencilIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: Y
                    }),
                    (0, i.jsx)(u.CircleIconButton, {
                        className: A.circleButton,
                        tooltip: y.intl.string(y.t.UKOtz8),
                        color: u.CircleIconButtonColors.SECONDARY,
                        size: u.CircleIconButtonSizes.SIZE_36,
                        icon: (0, i.jsx)(u.MoreHorizontalIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: W,
                        disabled: !V
                    })
                ]
            })
        ]
    });
}
function k(e) {
    var t;
    let { guildId: n, role: r, size: l, enableTooltip: a, className: o, defaultIconClassName: d } = e,
        m = (0, C.p9)({
            guildId: n,
            roleId: r.id,
            size: l
        });
    return null != m
        ? (0, i.jsx)(x.Z, {
              ...m,
              className: o,
              enableTooltip: a
          })
        : (0, i.jsx)(u.ShieldUserIcon, {
              size: 'custom',
              className: s()(o, d),
              color: null !== (t = r.colorString) && void 0 !== t ? t : (0, c.Rf)(R.p6O),
              width: l,
              height: l
          });
}
