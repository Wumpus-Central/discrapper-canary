(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(562075),
    o = n(539202),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    m = n(749210),
    g = n(493773),
    p = n(607070),
    h = n(134433),
    f = n(325476),
    x = n(884902),
    b = n(345162),
    j = n(496675),
    v = n(671533),
    _ = n(946724),
    O = n(970129),
    y = n(712181),
    C = n(420966),
    N = n(203377),
    I = n(981631),
    E = n(388032),
    S = n(563836);
function T(e) {
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
function P(e, t) {
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
let w = 'DRAGGABLE_ROLE';
function R(e) {
    var t, i;
    let l,
        { guild: c, role: m, highestRole: g, selectedItem: p, onClick: f, currentPosition: j, onDragStart: v, onDragReset: _, onDragComplete: y, roleStyle: C } = e,
        N = (0, O.T)(c, g, m),
        E = (0, b.fI)(m),
        R = null == N && !E,
        Z = (null == (t = m.tags) ? void 0 : t.guild_connections) !== void 0,
        D = (0, x._f)(c.id, m, m.colorStrings),
        [, A] = (0, s.c)({
            type: w,
            item: () => (
                v(m.id),
                {
                    id: m.id,
                    position: j
                }
            ),
            canDrag: () => R,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void _();
                y(n.roleId);
            }
        }),
        [{ dragSourcePosition: k }, L] = (0, o.L)({
            accept: w,
            canDrop: () => R,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: m.id })
        }),
        M = null != (i = m.colorString) ? i : I.Pbq;
    return (
        (l = Z
            ? (0, r.jsx)(h.Z, {
                  size: 12,
                  color: m.colorString,
                  className: S.verifiedRoleIcon
              })
            : 'dot' === C
              ? (0, r.jsx)(d.FhE, {
                    color: M,
                    colors: D,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(d.xko, {
                    color: M,
                    colors: D
                })),
        (0, r.jsxs)(d.njP.Item, {
            className: a()(S.row, {
                [S.dragBefore]: null !== k && j < k,
                [S.dragAfter]: null !== k && j > k
            }),
            id: m.id,
            selectedItem: p,
            itemType: 'side',
            onClick: f,
            onContextMenu: function (e) {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            P(T({}, t), {
                                role: m,
                                guild: c
                            })
                        );
                });
            },
            'aria-label': m.name,
            clickableRef: (e) => {
                var t;
                A(L(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                l,
                null != N
                    ? (0, r.jsx)(O.Z, {
                          className: S.lock,
                          tooltipText: N
                      })
                    : null,
                (0, r.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    color: E ? 'header-primary' : 'interactive-active',
                    lineClamp: 1,
                    children: m.name
                })
            ]
        })
    );
}
function Z(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: s } = e,
        o = (0, c.e7)([_.Z], () => _.Z.roles),
        u = (0, c.e7)([j.Z], () => j.Z.getHighestRole(t)),
        h = (0, c.e7)([p.Z], () => p.Z.roleStyle),
        [x, b] = i.useState(o.length),
        { scrolledToTop: O, handleScroll: I } = (0, C.V)(),
        { handleDragStart: w, handleDragReset: Z, handleDragComplete: D } = (0, y.Z)(o),
        A = i.useRef(null),
        k = i.useCallback(
            (e) => {
                var t, n;
                let r = o.findIndex((t) => t.id === e);
                null == (n = A.current) || null == (t = n.getScrollerNode()) || t.scrollTo({ top: Math.max((r - 2) * 34, 0) });
            },
            [o]
        );
    ((0, g.ZP)(() => {
        k(n);
    }),
        i.useEffect(() => {
            (o.length > x && k(n), o.length !== x && b(o.length));
        }, [o.length, x, b, k, n]));
    let L = () => {
        (m.Z.createRole(t.id), s(N.ZI.DISPLAY));
    };
    return (0, r.jsx)(f.ZP.Sidebar, {
        className: S.sidebar,
        children: (0, r.jsxs)('div', {
            className: S.container,
            children: [
                (0, r.jsxs)('div', {
                    className: a()(S.titleContainer, { [S.titleElevated]: !O }),
                    children: [
                        (0, r.jsxs)(d.P3F, {
                            className: S.title,
                            onClick: () => l(null),
                            children: [
                                (0, r.jsx)(v.Z, { direction: v.Z.Directions.LEFT }),
                                (0, r.jsx)(d.Text, {
                                    className: S.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: E.intl.string(E.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, r.jsx)(d.ua7, {
                            position: 'top',
                            'aria-label': E.intl.string(E.t.AbxKtr),
                            text: (0, r.jsx)(d.Text, {
                                className: S.tooltip,
                                variant: 'text-sm/normal',
                                children: E.intl.string(E.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.P3F,
                                    P(T({ className: S.addRole }, e), {
                                        onClick: L,
                                        children: (0, r.jsx)(d.qJs, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 20,
                                            height: 20
                                        })
                                    })
                                )
                        })
                    ]
                }),
                (0, r.jsx)(d.Den, {
                    className: S.list,
                    ref: A,
                    onScroll: I,
                    children: (0, r.jsx)(d.njP, {
                        selectedItem: n,
                        onItemSelect: (e) => l(e),
                        orientation: 'vertical',
                        children: o.map((e, i) =>
                            (0, r.jsx)(
                                R,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: u,
                                    selectedItem: n,
                                    onClick: () => l(e.id),
                                    currentPosition: i,
                                    onDragStart: w,
                                    onDragReset: Z,
                                    onDragComplete: D,
                                    roleStyle: h
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
