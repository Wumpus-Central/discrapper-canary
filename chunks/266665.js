n.d(t, { Z: () => A }), n(47120);
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
    _ = n(134433),
    C = n(325476),
    f = n(496675),
    v = n(671533),
    N = n(946724),
    j = n(970129),
    I = n(712181),
    E = n(420966),
    b = n(203377),
    T = n(981631),
    S = n(388032),
    R = n(456232);
let Z = 'DRAGGABLE_ROLE';
function y(e) {
    var t, r;
    let l,
        { guild: d, role: h, highestRole: g, selectedItem: x, onClick: C, currentPosition: f, onDragStart: v, onDragReset: N, onDragComplete: I, roleStyle: E } = e,
        b = (0, j.T)(d, g, h),
        S = (0, p.pM)(d.id, h.id),
        y = null == b && !S,
        A = (null === (t = h.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
        [, L] = (0, a.c)({
            type: Z,
            item: () => (
                v(h.id),
                {
                    id: h.id,
                    position: f
                }
            ),
            canDrag: () => y,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) {
                    N();
                    return;
                }
                I(n.roleId);
            }
        }),
        [{ dragSourcePosition: D }, O] = (0, o.L)({
            accept: Z,
            canDrop: () => y,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: h.id })
        }),
        k = null !== (r = h.colorString) && void 0 !== r ? r : (0, c.Rf)(T.p6O);
    return (
        (l = A
            ? (0, i.jsx)(_.Z, {
                  size: 12,
                  color: h.colorString,
                  className: R.verifiedRoleIcon
              })
            : 'dot' === E
              ? (0, i.jsx)(u.FhE, {
                    color: k,
                    background: !1,
                    tooltip: !1
                })
              : (0, i.jsx)(u.xko, { color: k })),
        (0, i.jsxs)(u.njP.Item, {
            className: s()(R.row, {
                [R.dragBefore]: null !== D && f < D,
                [R.dragAfter]: null !== D && f > D
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
                    ? (0, i.jsx)(j.Z, {
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
function A(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        o = (0, d.e7)([N.Z], () => N.Z.roles),
        c = (0, d.e7)([f.Z], () => f.Z.getHighestRole(t)),
        m = (0, d.e7)([x.Z], () => x.Z.roleStyle),
        [p, _] = r.useState(o.length),
        { scrolledToTop: j, handleScroll: T } = (0, E.V)(),
        { handleDragStart: Z, handleDragReset: A, handleDragComplete: L } = (0, I.Z)(o),
        D = r.useRef(null),
        O = r.useCallback(
            (e) => {
                var t, n;
                let i = o.findIndex((t) => t.id === e);
                null === (n = D.current) || void 0 === n || null === (t = n.getScrollerNode()) || void 0 === t || t.scrollTo({ top: Math.max((i - 2) * 34, 0) });
            },
            [o]
        );
    (0, g.ZP)(() => {
        O(n);
    }),
        r.useEffect(() => {
            o.length > p && O(n), o.length !== p && _(o.length);
        }, [o.length, p, _, O, n]);
    let k = () => {
        h.Z.createRole(t.id), a(b.ZI.DISPLAY);
    };
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: R.sidebar,
        children: (0, i.jsxs)('div', {
            className: R.container,
            children: [
                (0, i.jsxs)('div', {
                    className: s()(R.titleContainer, { [R.titleElevated]: !j }),
                    children: [
                        (0, i.jsxs)(u.P3F, {
                            className: R.title,
                            onClick: () => l(null),
                            children: [
                                (0, i.jsx)(v.Z, { direction: v.Z.Directions.LEFT }),
                                (0, i.jsx)(u.Text, {
                                    className: R.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: S.intl.string(S.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, i.jsx)(u.ua7, {
                            position: 'top',
                            'aria-label': S.intl.string(S.t.AbxKtr),
                            text: (0, i.jsx)(u.Text, {
                                className: R.tooltip,
                                variant: 'text-sm/normal',
                                children: S.intl.string(S.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, i.jsx)(u.P3F, {
                                    className: R.addRole,
                                    ...e,
                                    onClick: k,
                                    children: (0, i.jsx)(u.qJs, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                })
                        })
                    ]
                }),
                (0, i.jsx)(u.Den, {
                    className: R.list,
                    ref: D,
                    onScroll: T,
                    children: (0, i.jsx)(u.njP, {
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
                                    onDragStart: Z,
                                    onDragReset: A,
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
