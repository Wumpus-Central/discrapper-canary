n.d(t, { Z: () => D }), n(47120);
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
    _ = n(741247),
    C = n(518738),
    f = n(549631),
    v = n(496675),
    N = n(626135),
    j = n(480608),
    I = n(243730),
    E = n(130341),
    b = n(970129),
    T = n(712181),
    S = n(203377),
    R = n(981631),
    Z = n(388032),
    y = n(107959),
    A = n(147465);
let L = 'DRAGGABLE_ROLE';
function D(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: s, setSelectedSection: a, renderHeader: o, headerHeight: c, query: u } = e,
        m = (0, d.e7)([I.Z], () => I.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.e7)([v.Z], () => v.Z.getHighestRole(n), [n]),
        x = u.trim();
    r.useEffect(() => {
        (0, j.E)(n.id);
    }, [n.id]);
    let p = r.useRef(!1);
    r.useEffect(() => {
        !p.current && '' !== u.trimStart() && (N.default.track(R.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (p.current = !0));
    }, [u]);
    let _ = r.useMemo(() => s.filter((e) => (0, E.uo)(e, x)), [s, x]),
        C = r.useMemo(() => [...s, l], [s, l]),
        { draggingId: f, handleDragStart: b, handleDragReset: S, handleDragComplete: Z } = (0, T.Z)(C),
        y = r.useCallback(
            (e) => {
                var r;
                let { row: l } = e;
                if (0 === _.length) return (0, i.jsx)(O, {}, 'empty-role');
                let o = _[l];
                return (0, i.jsx)(
                    k,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null !== (r = null == m ? void 0 : m[o.id]) && void 0 !== r ? r : 0,
                        onDragStart: b,
                        onDragReset: S,
                        onDragComplete: Z,
                        disableHover: null != f,
                        disableDrag: s.length !== _.length,
                        setEditRoleId: t,
                        setSelectedSection: a
                    },
                    o.id
                );
            },
            [_, n, g, m, b, S, Z, f, s, t, a]
        );
    return (0, i.jsx)(h.Xi, {
        sections: [Math.max(_.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: y
    });
}
function O() {
    return (0, i.jsxs)('div', {
        className: y.emptyRoles,
        children: [
            (0, i.jsx)('div', { className: A.dragSpacing }),
            (0, i.jsx)(u.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, i.jsx)(u.Text, {
                className: y.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: Z.intl.string(Z.t['vR7M+/'])
            })
        ]
    });
}
function k(e) {
    var t, l, c;
    let { role: d, guild: h, highestRole: x, currentPosition: C, memberCount: v, onDragStart: N, onDragReset: j, onDragComplete: I, disableHover: E, disableDrag: T, setEditRoleId: R, setSelectedSection: D } = e,
        O = (0, b.T)(h, x, d),
        k = null != O,
        [w, M] = r.useState(!1),
        U = r.useMemo(
            () => ({
                type: L,
                item: () => (
                    N(d.id),
                    {
                        id: d.id,
                        position: C
                    }
                ),
                canDrag: () => w && !k,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) {
                        j();
                        return;
                    }
                    I(n.roleId);
                }
            }),
            [d, N, j, I, k, w, C]
        ),
        [{ isDragging: G }, B] = (0, a.c)(U),
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
        [{ dragSourcePosition: z }, H] = (0, o.L)(F),
        V = r.useCallback(
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
        W = (0, _.e)(h, d);
    if (G)
        return (0, i.jsx)('div', {
            ref: B,
            className: s()(y.roleRow, y.roleRowDragging)
        });
    function Y() {
        R(d.id);
    }
    function K() {
        Y(), D(S.ZI.MEMBERS);
    }
    return (0, i.jsxs)(u.P3F, {
        className: s()(y.roleRow, {
            [y.roleRowDisableHover]: E,
            [y.containerDragBefore]: null != z && C < z,
            [y.containerDragAfter]: null != z && C > z
        }),
        onClick: Y,
        onContextMenu: V,
        innerRef: (e) => B(H(e)),
        'data-dnd-name': d.name,
        'aria-label': Z.intl.formatToPlainString(Z.t.Vu0AcX, {
            name: d.name,
            count: ''.concat(v)
        }),
        children: [
            (0, i.jsx)('div', {
                className: s()(y.dragIcon, A.dragSpacing, { [y.dragIconHidden]: k || T }),
                onMouseEnter: () => M(!0),
                onMouseLeave: () => M(!1),
                children: (0, i.jsx)(u.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                className: s()(y.roleNameContainer, A.roleNameSpacing),
                children: [
                    (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                        ? (0, i.jsx)(g.Z, {
                              className: y.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, i.jsx)(P, {
                              guildId: h.id,
                              role: d,
                              size: 24,
                              className: y.roleIcon,
                              defaultIconClassName: y.shield
                          }),
                    null != O
                        ? (0, i.jsx)(b.Z, {
                              className: y.lock,
                              tooltipText: O
                          })
                        : null,
                    (0, i.jsx)(u.Text, {
                        className: y.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null === (l = d.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null &&
                        (0, i.jsx)(f.Z, {
                            className: y.subscriptionRoleIcon,
                            'aria-label': Z.intl.string(Z.t.a2Ak8f)
                        }),
                    (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, i.jsx)(p.Z, {})
                ]
            }),
            (0, i.jsx)(u.ua7, {
                text: Z.intl.string(Z.t.CW75t7),
                'aria-label': Z.intl.formatToPlainString(Z.t.Fgs8fH, { count: ''.concat(v) }),
                position: 'right',
                children: (e) =>
                    (0, i.jsxs)(u.P3F, {
                        ...e,
                        className: s()(y.memberCountContainer, A.memberSpacing),
                        onClick: K,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                color: 'none',
                                children: v
                            }),
                            (0, i.jsx)(u.tBG, {
                                size: 'custom',
                                color: 'currentColor',
                                className: y.person,
                                width: 20,
                                height: 20
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: s()(y.buttonsContainer, A.buttonsSpacing),
                children: [
                    (0, i.jsx)(u.M0o, {
                        className: s()(y.circleButton, y.editButton),
                        tooltip: k ? Z.intl.string(Z.t['HO/oXl']) : Z.intl.string(Z.t.bt75u7),
                        color: u.YX$.SECONDARY,
                        size: u.tT7.SIZE_36,
                        icon: k
                            ? (0, i.jsx)(u.tEF, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, i.jsx)(u.vdY, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: Y
                    }),
                    (0, i.jsx)(u.M0o, {
                        className: y.circleButton,
                        tooltip: Z.intl.string(Z.t.UKOtz8),
                        color: u.YX$.SECONDARY,
                        size: u.tT7.SIZE_36,
                        icon: (0, i.jsx)(u.xhG, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: V,
                        disabled: !W
                    })
                ]
            })
        ]
    });
}
function P(e) {
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
        : (0, i.jsx)(u.lZ8, {
              size: 'custom',
              className: s()(o, d),
              color: null !== (t = r.colorString) && void 0 !== t ? t : (0, c.Rf)(R.p6O),
              width: l,
              height: l
          });
}
