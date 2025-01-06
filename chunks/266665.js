n.d(t, {
    Z: function () {
        return A;
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
    h = n(749210),
    g = n(607070),
    x = n(605436),
    p = n(134433),
    f = n(325476),
    C = n(496675),
    v = n(671533),
    _ = n(946724),
    I = n(970129),
    N = n(712181),
    T = n(420966),
    j = n(203377),
    b = n(981631),
    S = n(388032),
    E = n(710553);
let R = 'DRAGGABLE_ROLE';
function y(e) {
    var t, r;
    let l,
        { guild: d, role: h, highestRole: g, selectedItem: f, onClick: C, currentPosition: v, onDragStart: _, onDragReset: N, onDragComplete: T, roleStyle: j } = e,
        S = (0, I.T)(d, g, h),
        y = (0, x.pM)(d.id, h.id),
        A = null == S && !y,
        Z = (null === (t = h.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
        [, L] = (0, s.c)({
            type: R,
            item: () => (
                _(h.id),
                {
                    id: h.id,
                    position: v
                }
            ),
            canDrag: () => A,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) {
                    N();
                    return;
                }
                T(n.roleId);
            }
        }),
        [{ dragSourcePosition: D }, O] = (0, o.L)({
            accept: R,
            canDrop: () => A,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: h.id })
        }),
        P = null !== (r = h.colorString) && void 0 !== r ? r : (0, c.Rf)(b.p6O);
    return (
        (l = Z
            ? (0, i.jsx)(p.Z, {
                  size: 12,
                  color: h.colorString,
                  className: E.verifiedRoleIcon
              })
            : 'dot' === j
              ? (0, i.jsx)(u.RoleDot, {
                    color: P,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(u.RoleCircle, { color: P })),
        (0, i.jsxs)(u.TabBar.Item, {
            className: a()(E.row, {
                [E.dragBefore]: null !== D && v < D,
                [E.dragAfter]: null !== D && v > D
            }),
            id: h.id,
            selectedItem: f,
            itemType: 'side',
            onClick: C,
            onContextMenu: function (e) {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            role: h,
                            guild: d
                        });
                });
            },
            'aria-label': h.name,
            clickableRef: (e) => {
                var t;
                return L(O(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null));
            },
            children: [
                l,
                null != S
                    ? (0, i.jsx)(I.Z, {
                          className: E.lock,
                          tooltipText: S
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: y ? 'header-primary' : 'interactive-active',
                    lineClamp: 1,
                    children: h.name
                })
            ]
        })
    );
}
function A(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: s } = e,
        o = (0, d.e7)([_.Z], () => _.Z.roles),
        c = (0, d.e7)([C.Z], () => C.Z.getHighestRole(t)),
        m = (0, d.e7)([g.Z], () => g.Z.roleStyle),
        [x, p] = r.useState(o.length),
        { scrolledToTop: I, handleScroll: b } = (0, T.V)(),
        { handleDragStart: R, handleDragReset: A, handleDragComplete: Z } = (0, N.Z)(o),
        L = r.useRef(null),
        D = r.useCallback(
            (e) => {
                var t, n;
                let i = o.findIndex((t) => t.id === e);
                null === (n = L.current) || void 0 === n || null === (t = n.getScrollerNode()) || void 0 === t || t.scrollTo({ top: Math.max((i - 2) * 34, 0) });
            },
            [o]
        );
    r.useEffect(() => {
        D(n);
    }, []),
        r.useEffect(() => {
            o.length > x && D(n), o.length !== x && p(o.length);
        }, [o.length, x, p, D, n]);
    let O = () => {
        h.Z.createRole(t.id), s(j.ZI.DISPLAY);
    };
    return (0, i.jsx)(f.ZP.Sidebar, {
        className: E.sidebar,
        children: (0, i.jsxs)('div', {
            className: E.container,
            children: [
                (0, i.jsxs)('div', {
                    className: a()(E.titleContainer, { [E.titleElevated]: !I }),
                    children: [
                        (0, i.jsxs)(u.Clickable, {
                            className: E.title,
                            onClick: () => l(null),
                            children: [
                                (0, i.jsx)(v.Z, { direction: v.Z.Directions.LEFT }),
                                (0, i.jsx)(u.Text, {
                                    className: E.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: S.intl.string(S.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, i.jsx)(u.Tooltip, {
                            position: 'top',
                            'aria-label': S.intl.string(S.t.AbxKtr),
                            text: (0, i.jsx)(u.Text, {
                                className: E.tooltip,
                                variant: 'text-sm/normal',
                                children: S.intl.string(S.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, i.jsx)(u.Clickable, {
                                    className: E.addRole,
                                    ...e,
                                    onClick: O,
                                    children: (0, i.jsx)(u.PlusSmallIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                })
                        })
                    ]
                }),
                (0, i.jsx)(u.AdvancedScroller, {
                    className: E.list,
                    ref: L,
                    onScroll: b,
                    children: (0, i.jsx)(u.TabBar, {
                        selectedItem: n,
                        onItemSelect: (e) => l(e),
                        orientation: 'vertical',
                        children: o.map((e, r) =>
                            (0, i.jsx)(
                                y,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: n,
                                    onClick: () => l(e.id),
                                    currentPosition: r,
                                    onDragStart: R,
                                    onDragReset: A,
                                    onDragComplete: Z,
                                    roleStyle: m
                                },
                                e.id
                            )
                        )
                    })
                })
            ]
        })
    });
}
