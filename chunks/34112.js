n.d(t, { Z: () => L }), n(781311), n(539338), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(562075),
    o = n(539202),
    c = n(866442),
    d = n(442837),
    u = n(865672),
    m = n(481060),
    g = n(239091),
    p = n(493544),
    f = n(134433),
    h = n(91218),
    x = n(646892),
    b = n(741247),
    j = n(518738),
    _ = n(549631),
    v = n(402235),
    O = n(496675),
    C = n(626135),
    y = n(480608),
    N = n(243730),
    I = n(130341),
    E = n(970129),
    S = n(712181),
    T = n(203377),
    P = n(981631),
    w = n(388032),
    R = n(521219),
    Z = n(587072);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
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
let A = 'DRAGGABLE_ROLE';
function L(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: s, setSelectedSection: a, renderHeader: o, headerHeight: c, query: u } = e,
        m = (0, d.e7)([N.Z], () => N.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.e7)([O.Z], () => O.Z.getHighestRole(n), [n]),
        f = u.trim();
    i.useEffect(() => {
        (0, y.E)(n.id);
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current || '' === u.trimStart() || (C.default.track(P.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (h.current = !0));
    }, [u]);
    let x = i.useMemo(() => s.filter((e) => (0, I.uo)(e, f)), [s, f]),
        b = i.useMemo(() => [...s, l], [s, l]),
        { draggingId: j, handleDragStart: _, handleDragReset: v, handleDragComplete: E } = (0, S.Z)(b),
        T = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === x.length) return (0, r.jsx)(M, {}, 'empty-role');
                let o = x[l];
                return (0, r.jsx)(
                    G,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null != (i = null == m ? void 0 : m[o.id]) ? i : 0,
                        onDragStart: _,
                        onDragReset: v,
                        onDragComplete: E,
                        disableHover: null != j,
                        disableDrag: s.length !== x.length,
                        setEditRoleId: t,
                        setSelectedSection: a
                    },
                    o.id
                );
            },
            [x, n, g, m, _, v, E, j, s, t, a]
        );
    return (0, r.jsx)(p.Xi, {
        sections: [Math.max(x.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: T
    });
}
function M() {
    return (0, r.jsxs)('div', {
        className: R.emptyRoles,
        children: [
            (0, r.jsx)('div', { className: Z.dragSpacing }),
            (0, r.jsx)(m.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, r.jsx)(m.Text, {
                className: R.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: w.intl.string(w.t['vR7M+/'])
            })
        ]
    });
}
function G(e) {
    var t, l, c;
    let { role: d, guild: u, highestRole: p, currentPosition: h, memberCount: j, onDragStart: v, onDragReset: O, onDragComplete: C, disableHover: y, disableDrag: N, setEditRoleId: I, setSelectedSection: S } = e,
        P = (0, E.T)(u, p, d),
        L = null != P,
        [M, G] = i.useState(!1),
        B = i.useMemo(
            () => ({
                type: A,
                item: () => (
                    v(d.id),
                    {
                        id: d.id,
                        position: h
                    }
                ),
                canDrag: () => M && !L,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void O();
                    C(n.roleId);
                }
            }),
            [d, v, O, C, L, M, h]
        ),
        [{ isDragging: F }, z] = (0, a.c)(B),
        H = i.useMemo(
            () => ({
                accept: A,
                canDrop: () => !L,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: d.id })
            }),
            [L, d]
        ),
        [{ dragSourcePosition: V }, W] = (0, o.L)(H),
        Y = i.useCallback(
            (e) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(D({}, t), {
                                role: d,
                                guild: u
                            })
                        );
                });
            },
            [u, d]
        ),
        K = (0, b.e)(u, d);
    if (F)
        return (0, r.jsx)('div', {
            ref: (e) => {
                z(e);
            },
            className: s()(R.roleRow, R.roleRowDragging)
        });
    function X() {
        I(d.id);
    }
    function q() {
        X(), S(T.ZI.MEMBERS);
    }
    return (0, r.jsxs)(m.P3F, {
        className: s()(R.roleRow, {
            [R.roleRowDisableHover]: y,
            [R.containerDragBefore]: null != V && h < V,
            [R.containerDragAfter]: null != V && h > V
        }),
        onClick: X,
        onContextMenu: Y,
        innerRef: (e) => {
            z(W(e));
        },
        'data-dnd-name': d.name,
        'aria-label': w.intl.formatToPlainString(w.t.Vu0AcX, {
            name: d.name,
            count: ''.concat(j)
        }),
        children: [
            (0, r.jsx)('div', {
                className: s()(R.dragIcon, Z.dragSpacing, { [R.dragIconHidden]: L || N }),
                onMouseEnter: () => G(!0),
                onMouseLeave: () => G(!1),
                children: (0, r.jsx)(m.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: s()(R.roleNameContainer, Z.roleNameSpacing),
                children: [
                    (null == (t = d.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(f.Z, {
                              className: R.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, r.jsx)(U, {
                              guildId: u.id,
                              role: d,
                              size: 24,
                              className: R.roleIcon,
                              defaultIconClassName: R.shield
                          }),
                    null != P
                        ? (0, r.jsx)(E.Z, {
                              className: R.lock,
                              tooltipText: P
                          })
                        : null,
                    (0, r.jsx)(m.Text, {
                        className: R.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null == (l = d.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(_.Z, {
                            className: R.subscriptionRoleIcon,
                            'aria-label': w.intl.string(w.t.a2Ak8f)
                        }),
                    (null == (c = d.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(x.Z, {})
                ]
            }),
            (0, r.jsx)(m.ua7, {
                text: w.intl.string(w.t.CW75t7),
                'aria-label': w.intl.formatToPlainString(w.t.Fgs8fH, { count: ''.concat(j) }),
                position: 'right',
                children: (e) =>
                    (0, r.jsxs)(
                        m.P3F,
                        k(D({}, e), {
                            className: s()(R.memberCountContainer, Z.memberSpacing),
                            onClick: q,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'none',
                                    children: j
                                }),
                                (0, r.jsx)(m.tBG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: R.person,
                                    width: 20,
                                    height: 20
                                })
                            ]
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: s()(R.buttonsContainer, Z.buttonsSpacing),
                children: [
                    (0, r.jsx)(m.M0o, {
                        className: s()(R.circleButton, R.editButton),
                        tooltip: L ? w.intl.string(w.t['HO/oXl']) : w.intl.string(w.t.bt75u7),
                        color: m.YX$.SECONDARY,
                        size: m.tT7.SIZE_36,
                        icon: L
                            ? (0, r.jsx)(m.tEF, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, r.jsx)(m.vdY, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: X
                    }),
                    (0, r.jsx)(m.M0o, {
                        className: R.circleButton,
                        tooltip: w.intl.string(w.t.UKOtz8),
                        color: m.YX$.SECONDARY,
                        size: m.tT7.SIZE_36,
                        icon: (0, r.jsx)(m.xhG, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        }),
                        onClick: Y,
                        disabled: !K
                    })
                ]
            })
        ]
    });
}
function U(e) {
    var t, n, i, l;
    let { guildId: a, role: o, size: d, enableTooltip: g, className: p, defaultIconClassName: f } = e,
        { hasGradient: x, stops: b, gradientId: _ } = (0, u.De)(null == (t = o.colorStrings) ? void 0 : t.primaryColor, null == (n = o.colorStrings) ? void 0 : n.secondaryColor, null == (i = o.colorStrings) ? void 0 : i.tertiaryColor),
        O = (0, v.yH)(a, o),
        C = (0, j.p9)({
            guildId: a,
            roleId: o.id,
            size: d
        });
    if (null != C)
        return (0, r.jsx)(
            h.Z,
            k(D({}, C), {
                className: p,
                enableTooltip: g
            })
        );
    let y = null != (l = o.colorString) ? l : (0, c.Rf)(P.p6O);
    return (
        O && x && (y = 'url(#'.concat(_, ')')),
        (0, r.jsxs)(r.Fragment, {
            children: [
                O &&
                    x &&
                    (0, r.jsx)('svg', {
                        width: '0',
                        height: '0',
                        style: { position: 'absolute' },
                        children: (0, r.jsx)('linearGradient', {
                            id: _,
                            x1: '0%',
                            y1: '0%',
                            x2: '0%',
                            y2: '100%',
                            children: b
                        })
                    }),
                (0, r.jsx)(m.lZ8, {
                    size: 'custom',
                    className: s()(p, f),
                    color: y,
                    width: d,
                    height: d
                })
            ]
        })
    );
}
