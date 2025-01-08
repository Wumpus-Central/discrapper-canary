n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(999153),
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
    _ = n(496675),
    N = n(626135),
    I = n(480608),
    T = n(243730),
    j = n(130341),
    b = n(970129),
    S = n(712181),
    E = n(203377),
    R = n(981631),
    y = n(388032),
    A = n(107959),
    Z = n(147465);
let L = 'DRAGGABLE_ROLE';
function D(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: a, setSelectedSection: s, renderHeader: o, headerHeight: c, query: u } = e,
        m = (0, d.e7)([T.Z], () => T.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.e7)([_.Z], () => _.Z.getHighestRole(n), [n]),
        x = u.trim();
    r.useEffect(() => {
        (0, I.E)(n.id);
    }, [n.id]);
    let p = r.useRef(!1);
    r.useEffect(() => {
        if (!p.current && '' !== u.trimStart()) N.default.track(R.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (p.current = !0);
    }, [u]);
    let f = r.useMemo(() => a.filter((e) => (0, j.uo)(e, x)), [a, x]),
        C = r.useMemo(() => [...a, l], [a, l]),
        { draggingId: v, handleDragStart: b, handleDragReset: E, handleDragComplete: y } = (0, S.Z)(C),
        A = r.useCallback(
            (e) => {
                var r;
                let { row: l } = e;
                if (0 === f.length) return (0, i.jsx)(O, {}, 'empty-role');
                let o = f[l];
                return (0, i.jsx)(
                    k,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null !== (r = null == m ? void 0 : m[o.id]) && void 0 !== r ? r : 0,
                        onDragStart: b,
                        onDragReset: E,
                        onDragComplete: y,
                        disableHover: null != v,
                        disableDrag: a.length !== f.length,
                        setEditRoleId: t,
                        setSelectedSection: s
                    },
                    o.id
                );
            },
            [f, n, g, m, b, E, y, v, a, t, s]
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
function k(e) {
    var t, l, c;
    let { role: d, guild: h, highestRole: x, currentPosition: C, memberCount: _, onDragStart: N, onDragReset: I, onDragComplete: T, disableHover: j, disableDrag: S, setEditRoleId: R, setSelectedSection: D } = e,
        O = (0, b.T)(h, x, d),
        k = null != O,
        [P, w] = r.useState(!1),
        B = r.useMemo(
            () => ({
                type: L,
                item: () => (
                    N(d.id),
                    {
                        id: d.id,
                        position: C
                    }
                ),
                canDrag: () => P && !k,
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
            [d, N, I, T, k, P, C]
        ),
        [{ isDragging: U }, G] = (0, s.c)(B),
        F = r.useMemo(
            () => ({
                accept: L,
                canDrop: () => !k,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: d.id })
            }),
            [k, d]
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
            className: a()(A.roleRow, A.roleRowDragging)
        });
    function Y() {
        R(d.id);
    }
    function K() {
        Y(), D(E.ZI.MEMBERS);
    }
    return (0, i.jsxs)(u.Clickable, {
        className: a()(A.roleRow, {
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
            count: ''.concat(_)
        }),
        children: [
            (0, i.jsx)('div', {
                className: a()(A.dragIcon, Z.dragSpacing, { [A.dragIconHidden]: k || S }),
                onMouseEnter: () => w(!0),
                onMouseLeave: () => w(!1),
                children: (0, i.jsx)(u.DragIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: a()(A.roleNameContainer, Z.roleNameSpacing),
                children: [
                    (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                        ? (0, i.jsx)(g.Z, {
                              className: A.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, i.jsx)(M, {
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
                'aria-label': y.intl.formatToPlainString(y.t.Fgs8fH, { count: ''.concat(_) }),
                position: 'right',
                children: (e) =>
                    (0, i.jsxs)(u.Clickable, {
                        ...e,
                        className: a()(A.memberCountContainer, Z.memberSpacing),
                        onClick: K,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                color: 'none',
                                children: _
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
                className: a()(A.buttonsContainer, Z.buttonsSpacing),
                children: [
                    (0, i.jsx)(u.CircleIconButton, {
                        className: a()(A.circleButton, A.editButton),
                        tooltip: k ? y.intl.string(y.t['HO/oXl']) : y.intl.string(y.t.bt75u7),
                        color: u.CircleIconButtonColors.SECONDARY,
                        size: u.CircleIconButtonSizes.SIZE_36,
                        icon: k
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
function M(e) {
    var t;
    let { guildId: n, role: r, size: l, enableTooltip: s, className: o, defaultIconClassName: d } = e,
        m = (0, C.p9)({
            guildId: n,
            roleId: r.id,
            size: l
        });
    return null != m
        ? (0, i.jsx)(x.Z, {
              ...m,
              className: o,
              enableTooltip: s
          })
        : (0, i.jsx)(u.ShieldUserIcon, {
              size: 'custom',
              className: a()(o, d),
              color: null !== (t = r.colorString) && void 0 !== t ? t : (0, c.Rf)(R.p6O),
              width: l,
              height: l
          });
}
