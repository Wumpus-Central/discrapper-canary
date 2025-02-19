n.d(t, { Z: () => A }), n(566702), n(595690), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(999153),
    o = n(584922),
    c = n(866442),
    d = n(442837),
    u = n(481060),
    m = n(239091),
    p = n(493544),
    g = n(134433),
    h = n(91218),
    f = n(646892),
    b = n(741247),
    x = n(518738),
    j = n(549631),
    N = n(496675),
    v = n(626135),
    _ = n(480608),
    O = n(243730),
    y = n(130341),
    C = n(970129),
    I = n(712181),
    E = n(203377),
    S = n(981631),
    T = n(388032),
    P = n(78060),
    w = n(287776);
function R(e) {
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
let Z = 'DRAGGABLE_ROLE';
function A(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: s, otherRoles: a, setSelectedSection: l, renderHeader: o, headerHeight: c, query: u } = e,
        m = (0, d.e7)([O.Z], () => O.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.e7)([N.Z], () => N.Z.getHighestRole(n), [n]),
        h = u.trim();
    i.useEffect(() => {
        (0, _.E)(n.id);
    }, [n.id]);
    let f = i.useRef(!1);
    i.useEffect(() => {
        !f.current && '' !== u.trimStart() && (v.default.track(S.rMx.SEARCH_STARTED, { search_type: 'Roles' }), (f.current = !0));
    }, [u]);
    let b = i.useMemo(() => a.filter((e) => (0, y.uo)(e, h)), [a, h]),
        x = i.useMemo(() => [...a, s], [a, s]),
        { draggingId: j, handleDragStart: C, handleDragReset: E, handleDragComplete: T } = (0, I.Z)(x),
        P = i.useCallback(
            (e) => {
                var i;
                let { row: s } = e;
                if (0 === b.length) return (0, r.jsx)(k, {}, 'empty-role');
                let o = b[s];
                return (0, r.jsx)(
                    W,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: s,
                        memberCount: null !== (i = null == m ? void 0 : m[o.id]) && void 0 !== i ? i : 0,
                        onDragStart: C,
                        onDragReset: E,
                        onDragComplete: T,
                        disableHover: null != j,
                        disableDrag: a.length !== b.length,
                        setEditRoleId: t,
                        setSelectedSection: l
                    },
                    o.id
                );
            },
            [b, n, g, m, C, E, T, j, a, t, l]
        );
    return (0, r.jsx)(p.Xi, {
        sections: [Math.max(b.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: P
    });
}
function k() {
    return (0, r.jsxs)('div', {
        className: P.emptyRoles,
        children: [
            (0, r.jsx)('div', { className: w.dragSpacing }),
            (0, r.jsx)(u.BFJ, {
                size: 'md',
                color: 'currentColor'
            }),
            (0, r.jsx)(u.Text, {
                className: P.emptyRolesText,
                variant: 'text-md/semibold',
                color: 'text-muted',
                children: T.NW.string(T.t['vR7M+/'])
            })
        ]
    });
}
function W(e) {
    var t, s, c;
    let { role: d, guild: p, highestRole: h, currentPosition: x, memberCount: N, onDragStart: v, onDragReset: _, onDragComplete: O, disableHover: y, disableDrag: I, setEditRoleId: S, setSelectedSection: A } = e,
        k = (0, C.T)(p, h, d),
        W = null != k,
        [M, U] = i.useState(!1),
        G = i.useMemo(
            () => ({
                type: Z,
                item: () => (
                    v(d.id),
                    {
                        id: d.id,
                        position: x
                    }
                ),
                canDrag: () => M && !W,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) {
                        _();
                        return;
                    }
                    O(n.roleId);
                }
            }),
            [d, v, _, O, W, M, x]
        ),
        [{ isDragging: B }, F] = (0, l.c)(G),
        z = i.useMemo(
            () => ({
                accept: Z,
                canDrop: () => !W,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: d.id })
            }),
            [W, d]
        ),
        [{ dragSourcePosition: H }, V] = (0, o.L)(z),
        Y = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            D(R({}, t), {
                                role: d,
                                guild: p
                            })
                        );
                });
            },
            [p, d]
        ),
        K = (0, b.e)(p, d);
    if (B)
        return (0, r.jsx)('div', {
            ref: F,
            className: a()(P.roleRow, P.roleRowDragging)
        });
    function q() {
        S(d.id);
    }
    function X() {
        q(), A(E.ZI.MEMBERS);
    }
    return (0, r.jsxs)(u.P3F, {
        className: a()(P.roleRow, {
            [P.roleRowDisableHover]: y,
            [P.containerDragBefore]: null != H && x < H,
            [P.containerDragAfter]: null != H && x > H
        }),
        onClick: q,
        onContextMenu: Y,
        innerRef: (e) => F(V(e)),
        'data-dnd-name': d.name,
        'aria-label': T.NW.formatToPlainString(T.t.Vu0AcX, {
            name: d.name,
            count: ''.concat(N)
        }),
        children: [
            (0, r.jsx)('div', {
                className: a()(P.dragIcon, w.dragSpacing, { [P.dragIconHidden]: W || I }),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1),
                children: (0, r.jsx)(u.Vni, {
                    size: 'xs',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: a()(P.roleNameContainer, w.roleNameSpacing),
                children: [
                    (null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(g.Z, {
                              className: P.roleFlowerStar,
                              color: d.colorString,
                              size: 24
                          })
                        : (0, r.jsx)(L, {
                              guildId: p.id,
                              role: d,
                              size: 24,
                              className: P.roleIcon,
                              defaultIconClassName: P.shield
                          }),
                    null != k
                        ? (0, r.jsx)(C.Z, {
                              className: P.lock,
                              tooltipText: k
                          })
                        : null,
                    (0, r.jsx)(u.Text, {
                        className: P.roleName,
                        color: 'header-primary',
                        variant: 'text-md/medium',
                        children: d.name
                    }),
                    (null === (s = d.tags) || void 0 === s ? void 0 : s.subscription_listing_id) != null &&
                        (0, r.jsx)(j.Z, {
                            className: P.subscriptionRoleIcon,
                            'aria-label': T.NW.string(T.t.a2Ak8f)
                        }),
                    (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(f.Z, {})
                ]
            }),
            (0, r.jsx)(u.ua7, {
                text: T.NW.string(T.t.CW75t7),
                'aria-label': T.NW.formatToPlainString(T.t.Fgs8fH, { count: ''.concat(N) }),
                position: 'right',
                children: (e) =>
                    (0, r.jsxs)(
                        u.P3F,
                        D(R({}, e), {
                            className: a()(P.memberCountContainer, w.memberSpacing),
                            onClick: X,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'none',
                                    children: N
                                }),
                                (0, r.jsx)(u.tBG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: P.person,
                                    width: 20,
                                    height: 20
                                })
                            ]
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: a()(P.buttonsContainer, w.buttonsSpacing),
                children: [
                    (0, r.jsx)(u.M0o, {
                        className: a()(P.circleButton, P.editButton),
                        tooltip: W ? T.NW.string(T.t['HO/oXl']) : T.NW.string(T.t.bt75u7),
                        color: u.YX$.SECONDARY,
                        size: u.tT7.SIZE_36,
                        icon: W
                            ? (0, r.jsx)(u.tEF, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              })
                            : (0, r.jsx)(u.vdY, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20,
                                  height: 20
                              }),
                        onClick: q
                    }),
                    (0, r.jsx)(u.M0o, {
                        className: P.circleButton,
                        tooltip: T.NW.string(T.t.UKOtz8),
                        color: u.YX$.SECONDARY,
                        size: u.tT7.SIZE_36,
                        icon: (0, r.jsx)(u.xhG, {
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
function L(e) {
    var t;
    let { guildId: n, role: i, size: s, enableTooltip: l, className: o, defaultIconClassName: d } = e,
        m = (0, x.p9)({
            guildId: n,
            roleId: i.id,
            size: s
        });
    return null != m
        ? (0, r.jsx)(
              h.Z,
              D(R({}, m), {
                  className: o,
                  enableTooltip: l
              })
          )
        : (0, r.jsx)(u.lZ8, {
              size: 'custom',
              className: a()(o, d),
              color: null !== (t = i.colorString) && void 0 !== t ? t : (0, c.Rf)(S.p6O),
              width: s,
              height: s
          });
}
