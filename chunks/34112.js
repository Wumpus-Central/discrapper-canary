(n.d(t, { Z: () => k }), n(781311), n(539338), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(562075),
    o = n(539202),
    c = n(442837),
    d = n(865672),
    u = n(481060),
    m = n(239091),
    g = n(493544),
    p = n(134433),
    h = n(91218),
    f = n(646892),
    x = n(741247),
    b = n(518738),
    j = n(549631),
    v = n(402235),
    _ = n(496675),
    O = n(626135),
    y = n(480608),
    C = n(243730),
    N = n(130341),
    I = n(970129),
    E = n(712181),
    S = n(203377),
    T = n(981631),
    P = n(388032),
    w = n(521219),
    R = n(587072);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function D(e, t) {
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
function k(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: l, otherRoles: a, setSelectedSection: s, renderHeader: o, headerHeight: d, query: u } = e,
        m = (0, c.e7)([C.Z], () => C.Z.getRoleMemberCount(n.id), [n.id]),
        p = (0, c.e7)([_.Z], () => _.Z.getHighestRole(n), [n]),
        h = u.trim();
    i.useEffect(() => {
        (0, y.E)(n.id);
    }, [n.id]);
    let f = i.useRef(!1);
    i.useEffect(() => {
        f.current || '' === u.trimStart() || (O.default.track(T.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (f.current = !0));
    }, [u]);
    let x = i.useMemo(() => a.filter((e) => (0, N.uo)(e, h)), [a, h]),
        b = i.useMemo(() => [...a, l], [a, l]),
        { draggingId: j, handleDragStart: v, handleDragReset: I, handleDragComplete: S } = (0, E.Z)(b),
        P = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === x.length) return (0, r.jsx)(L, {}, 'empty-role');
                let o = x[l];
                return (0, r.jsx)(
                    M,
                    {
                        role: o,
                        guild: n,
                        highestRole: p,
                        currentPosition: l,
                        memberCount: null != (i = null == m ? void 0 : m[o.id]) ? i : 0,
                        onDragStart: v,
                        onDragReset: I,
                        onDragComplete: S,
                        disableHover: null != j,
                        disableDrag: a.length !== x.length,
                        setEditRoleId: t,
                        setSelectedSection: s
                    },
                    o.id
                );
            },
            [x, n, p, m, v, I, S, j, a, t, s]
        );
    return (0, r.jsx)(g.Xi, {
        sections: [Math.max(x.length, 1)],
        sectionHeight: d,
        renderSection: o,
        rowHeight: 61,
        renderRow: P
    });
}
function L() {
    return (0, r.jsxs)('div', {
        className: w.emptyRoles,
        children: [
            (0, r.jsx)('div', { className: R.dragSpacing }),
            (0, r.jsx)(u.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, r.jsx)(u.Text, {
                className: w.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: P.intl.string(P.t['vR7M+/'])
            })
        ]
    });
}
function M(e) {
    var t, l, c;
    let { role: d, guild: g, highestRole: h, currentPosition: b, memberCount: v, onDragStart: _, onDragReset: O, onDragComplete: y, disableHover: C, disableDrag: N, setEditRoleId: E, setSelectedSection: T } = e,
        k = (0, I.T)(g, h, d),
        L = null != k,
        [M, U] = i.useState(!1),
        B = i.useMemo(
            () => ({
                type: A,
                item: () => (
                    _(d.id),
                    {
                        id: d.id,
                        position: b
                    }
                ),
                canDrag: () => M && !L,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void O();
                    y(n.roleId);
                }
            }),
            [d, _, O, y, L, M, b]
        ),
        [{ isDragging: F }, H] = (0, s.c)(B),
        z = i.useMemo(
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
        [{ dragSourcePosition: W }, V] = (0, o.L)(z),
        Y = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            D(Z({}, t), {
                                role: d,
                                guild: g
                            })
                        );
                });
            },
            [g, d]
        ),
        K = (0, x.e)(g, d);
    if (F)
        return (0, r.jsx)('div', {
            ref: (e) => {
                H(e);
            },
            className: a()(w.roleRow, w.roleRowDragging)
        });
    function q() {
        E(d.id);
    }
    function X() {
        (q(), T(S.ZI.MEMBERS));
    }
    return (0, r.jsxs)(u.P3F, {
        className: a()(w.roleRow, {
            [w.roleRowDisableHover]: C,
            [w.containerDragBefore]: null != W && b < W,
            [w.containerDragAfter]: null != W && b > W
        }),
        onClick: q,
        onContextMenu: Y,
        innerRef: (e) => {
            H(V(e));
        },
        'data-dnd-name': d.name,
        'aria-label': P.intl.formatToPlainString(P.t.Vu0AcX, {
            name: d.name,
            count: ''.concat(v)
        }),
        children: [
            (0, r.jsx)('div', {
                className: a()(w.dragIcon, R.dragSpacing, { [w.dragIconHidden]: L || N }),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1),
                children: (0, r.jsx)(u.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: a()(w.roleNameContainer, R.roleNameSpacing),
                children: [
                    (null == (t = d.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(p.Z, {
                              className: w.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, r.jsx)(G, {
                              guildId: g.id,
                              role: d,
                              size: 24,
                              className: w.roleIcon,
                              defaultIconClassName: w.shield
                          }),
                    null != k
                        ? (0, r.jsx)(I.Z, {
                              className: w.lock,
                              tooltipText: k
                          })
                        : null,
                    (0, r.jsx)(u.Text, {
                        className: w.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null == (l = d.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(j.Z, {
                            className: w.subscriptionRoleIcon,
                            'aria-label': P.intl.string(P.t.a2Ak8f)
                        }),
                    (null == (c = d.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(f.Z, {})
                ]
            }),
            (0, r.jsx)(u.ua7, {
                text: P.intl.string(P.t.CW75t7),
                'aria-label': P.intl.formatToPlainString(P.t.Fgs8fH, { count: ''.concat(v) }),
                position: 'right',
                children: (e) =>
                    (0, r.jsxs)(
                        u.P3F,
                        D(Z({}, e), {
                            className: a()(w.memberCountContainer, R.memberSpacing),
                            onClick: X,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'none',
                                    children: v
                                }),
                                (0, r.jsx)(u.tBG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: w.person,
                                    width: 20,
                                    height: 20
                                })
                            ]
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: a()(w.buttonsContainer, R.buttonsSpacing),
                children: [
                    (0, r.jsx)(u.ua7, {
                        text: L ? P.intl.string(P.t['HO/oXl']) : P.intl.string(P.t.bt75u7),
                        children: (e) =>
                            (0, r.jsx)(
                                u.hU,
                                D(Z({}, e), {
                                    variant: 'secondary',
                                    'aria-label': L ? P.intl.string(P.t['HO/oXl']) : P.intl.string(P.t.bt75u7),
                                    icon: L ? u.tEF : u.vdY,
                                    onClick: q
                                })
                            )
                    }),
                    (0, r.jsx)(u.ua7, {
                        text: P.intl.string(P.t.UKOtz8),
                        shouldShow: K,
                        children: (e) =>
                            (0, r.jsx)(
                                u.hU,
                                D(Z({}, e), {
                                    variant: 'secondary',
                                    'aria-label': P.intl.string(P.t.UKOtz8),
                                    icon: u.xhG,
                                    onClick: Y,
                                    disabled: !K
                                })
                            )
                    })
                ]
            })
        ]
    });
}
function G(e) {
    var t, n, i, l;
    let { guildId: s, role: o, size: c, enableTooltip: m, className: g, defaultIconClassName: p } = e,
        { hasGradient: f, stops: x, gradientId: j } = (0, d.De)(null == (t = o.colorStrings) ? void 0 : t.primaryColor, null == (n = o.colorStrings) ? void 0 : n.secondaryColor, null == (i = o.colorStrings) ? void 0 : i.tertiaryColor),
        _ = (0, v.yH)(s, o),
        O = (0, b.p9)({
            guildId: s,
            roleId: o.id,
            size: c
        });
    if (null != O)
        return (0, r.jsx)(
            h.Z,
            D(Z({}, O), {
                className: g,
                enableTooltip: m
            })
        );
    let y = null != (l = o.colorString) ? l : T.Pbq;
    return (
        _ && f && (y = 'url(#'.concat(j, ')')),
        (0, r.jsxs)(r.Fragment, {
            children: [
                _ &&
                    f &&
                    (0, r.jsx)('svg', {
                        width: '0',
                        height: '0',
                        style: { position: 'absolute' },
                        children: (0, r.jsx)('linearGradient', {
                            id: j,
                            x1: '0%',
                            y1: '0%',
                            x2: '0%',
                            y2: '100%',
                            children: x
                        })
                    }),
                (0, r.jsx)(u.lZ8, {
                    size: 'custom',
                    className: a()(g, p),
                    color: y,
                    width: c,
                    height: c
                })
            ]
        })
    );
}
