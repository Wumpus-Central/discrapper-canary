n.d(t, {
    Z: function () {
        return Z;
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
    h = n(749210),
    g = n(493773),
    x = n(607070),
    p = n(605436),
    f = n(134433),
    C = n(325476),
    v = n(496675),
    I = n(671533),
    N = n(946724),
    _ = n(970129),
    T = n(712181),
    j = n(420966),
    b = n(203377),
    E = n(981631),
    S = n(388032),
    R = n(710553);
let y = 'DRAGGABLE_ROLE';
function A(e) {
    var t, r;
    let l,
        { guild: d, role: h, highestRole: g, selectedItem: x, onClick: C, currentPosition: v, onDragStart: I, onDragReset: N, onDragComplete: T, roleStyle: j } = e,
        b = (0, _.T)(d, g, h),
        S = (0, p.pM)(d.id, h.id),
        A = null == b && !S,
        Z = (null === (t = h.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
        [, L] = (0, a.c)({
            type: y,
            item: () => (
                I(h.id),
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
            accept: y,
            canDrop: () => A,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: h.id })
        }),
        M = null !== (r = h.colorString) && void 0 !== r ? r : (0, c.Rf)(E.p6O);
    return (
        (l = Z
            ? (0, i.jsx)(f.Z, {
                  size: 12,
                  color: h.colorString,
                  className: R.verifiedRoleIcon
              })
            : 'dot' === j
              ? (0, i.jsx)(u.RoleDot, {
                    color: M,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(u.RoleCircle, { color: M })),
        (0, i.jsxs)(u.TabBar.Item, {
            className: s()(R.row, {
                [R.dragBefore]: null !== D && v < D,
                [R.dragAfter]: null !== D && v > D
            }),
            id: h.id,
            selectedItem: x,
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
                null != b
                    ? (0, i.jsx)(_.Z, {
                          className: R.lock,
                          tooltipText: b
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: S ? 'header-primary' : 'interactive-active',
                    lineClamp: 1,
                    children: h.name
                })
            ]
        })
    );
}
function Z(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        o = (0, d.e7)([N.Z], () => N.Z.roles),
        c = (0, d.e7)([v.Z], () => v.Z.getHighestRole(t)),
        m = (0, d.e7)([x.Z], () => x.Z.roleStyle),
        [p, f] = r.useState(o.length),
        { scrolledToTop: _, handleScroll: E } = (0, j.V)(),
        { handleDragStart: y, handleDragReset: Z, handleDragComplete: L } = (0, T.Z)(o),
        D = r.useRef(null),
        O = r.useCallback(
            (e) => {
                var t, n;
                let i = o.findIndex((t) => t.id === e);
                null === (n = D.current) || void 0 === n || null === (t = n.getScrollerNode()) || void 0 === t || t.scrollTo({ top: Math.max((i - 2) * 34, 0) });
            },
            [o]
        );
    (0, g.Z)(() => {
        O(n);
    }),
        r.useEffect(() => {
            o.length > p && O(n), o.length !== p && f(o.length);
        }, [o.length, p, f, O, n]);
    let M = () => {
        h.Z.createRole(t.id), a(b.ZI.DISPLAY);
    };
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: R.sidebar,
        children: (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsxs)('div', {
                    className: s()(R.titleContainer, { [R.titleElevated]: !_ }),
                    children: [
                        (0, i.jsxs)(u.Clickable, {
                            className: R.title,
                            onClick: () => l(null),
                            children: [
                                (0, i.jsx)(I.Z, { direction: I.Z.Directions.LEFT }),
                                (0, i.jsx)(u.Text, {
                                    className: R.titleText,
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
                                className: R.tooltip,
                                variant: 'text-sm/normal',
                                children: S.intl.string(S.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, i.jsx)(u.Clickable, {
                                    className: R.addRole,
                                    ...e,
                                    onClick: M,
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
                    className: R.list,
                    ref: D,
                    onScroll: E,
                    children: (0, i.jsx)(u.TabBar, {
                        selectedItem: n,
                        onItemSelect: (e) => l(e),
                        orientation: 'vertical',
                        children: o.map((e, r) =>
                            (0, i.jsx)(
                                A,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: n,
                                    onClick: () => l(e.id),
                                    currentPosition: r,
                                    onDragStart: y,
                                    onDragReset: Z,
                                    onDragComplete: L,
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
