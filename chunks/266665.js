(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(562075),
    o = n(539202),
    c = n(866442),
    d = n(442837),
    u = n(481060),
    m = n(239091),
    g = n(749210),
    p = n(493773),
    f = n(607070),
    h = n(605436),
    x = n(134433),
    b = n(325476),
    j = n(884902),
    v = n(496675),
    _ = n(671533),
    O = n(946724),
    y = n(970129),
    C = n(712181),
    N = n(420966),
    I = n(203377),
    E = n(981631),
    S = n(388032),
    T = n(563836);
function P(e) {
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
function w(e, t) {
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
let R = 'DRAGGABLE_ROLE';
function Z(e) {
    var t, i;
    let l,
        { guild: d, role: g, highestRole: p, selectedItem: f, onClick: b, currentPosition: v, onDragStart: _, onDragReset: O, onDragComplete: C, roleStyle: N } = e,
        I = (0, y.T)(d, p, g),
        S = (0, h.pM)(d.id, g.id),
        Z = null == I && !S,
        D = (null == (t = g.tags) ? void 0 : t.guild_connections) !== void 0,
        A = (0, j._f)(d.id, g, g.colorStrings),
        [, k] = (0, a.c)({
            type: R,
            item: () => (
                _(g.id),
                {
                    id: g.id,
                    position: v
                }
            ),
            canDrag: () => Z,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void O();
                C(n.roleId);
            }
        }),
        [{ dragSourcePosition: L }, M] = (0, o.L)({
            accept: R,
            canDrop: () => Z,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: g.id })
        }),
        G = null != (i = g.colorString) ? i : (0, c.Rf)(E.p6O);
    return (
        (l = D
            ? (0, r.jsx)(x.Z, {
                  size: 12,
                  color: g.colorString,
                  className: T.verifiedRoleIcon
              })
            : 'dot' === N
              ? (0, r.jsx)(u.FhE, {
                    color: G,
                    colors: A,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(u.xko, {
                    color: G,
                    colors: A
                })),
        (0, r.jsxs)(u.njP.Item, {
            className: s()(T.row, {
                [T.dragBefore]: null !== L && v < L,
                [T.dragAfter]: null !== L && v > L
            }),
            id: g.id,
            selectedItem: f,
            itemType: 'side',
            onClick: b,
            onContextMenu: function (e) {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(P({}, t), {
                                role: g,
                                guild: d
                            })
                        );
                });
            },
            'aria-label': g.name,
            clickableRef: (e) => {
                var t;
                k(M(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                l,
                null != I
                    ? (0, r.jsx)(y.Z, {
                          className: T.lock,
                          tooltipText: I
                      })
                    : null,
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: S ? 'header-primary' : 'interactive-active',
                    lineClamp: 1,
                    children: g.name
                })
            ]
        })
    );
}
function D(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        o = (0, d.e7)([O.Z], () => O.Z.roles),
        c = (0, d.e7)([v.Z], () => v.Z.getHighestRole(t)),
        m = (0, d.e7)([f.Z], () => f.Z.roleStyle),
        [h, x] = i.useState(o.length),
        { scrolledToTop: j, handleScroll: y } = (0, N.V)(),
        { handleDragStart: E, handleDragReset: R, handleDragComplete: D } = (0, C.Z)(o),
        A = i.useRef(null),
        k = i.useCallback(
            (e) => {
                var t, n;
                let r = o.findIndex((t) => t.id === e);
                null == (n = A.current) || null == (t = n.getScrollerNode()) || t.scrollTo({ top: Math.max((r - 2) * 34, 0) });
            },
            [o]
        );
    ((0, p.ZP)(() => {
        k(n);
    }),
        i.useEffect(() => {
            (o.length > h && k(n), o.length !== h && x(o.length));
        }, [o.length, h, x, k, n]));
    let L = () => {
        (g.Z.createRole(t.id), a(I.ZI.DISPLAY));
    };
    return (0, r.jsx)(b.ZP.Sidebar, {
        className: T.sidebar,
        children: (0, r.jsxs)('div', {
            className: T.container,
            children: [
                (0, r.jsxs)('div', {
                    className: s()(T.titleContainer, { [T.titleElevated]: !j }),
                    children: [
                        (0, r.jsxs)(u.P3F, {
                            className: T.title,
                            onClick: () => l(null),
                            children: [
                                (0, r.jsx)(_.Z, { direction: _.Z.Directions.LEFT }),
                                (0, r.jsx)(u.Text, {
                                    className: T.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: S.intl.string(S.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            position: 'top',
                            'aria-label': S.intl.string(S.t.AbxKtr),
                            text: (0, r.jsx)(u.Text, {
                                className: T.tooltip,
                                variant: 'text-sm/normal',
                                children: S.intl.string(S.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P3F,
                                    w(P({ className: T.addRole }, e), {
                                        onClick: L,
                                        children: (0, r.jsx)(u.qJs, {
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
                (0, r.jsx)(u.Den, {
                    className: T.list,
                    ref: A,
                    onScroll: y,
                    children: (0, r.jsx)(u.njP, {
                        selectedItem: n,
                        onItemSelect: (e) => l(e),
                        orientation: 'vertical',
                        children: o.map((e, i) =>
                            (0, r.jsx)(
                                Z,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: n,
                                    onClick: () => l(e.id),
                                    currentPosition: i,
                                    onDragStart: E,
                                    onDragReset: R,
                                    onDragComplete: D,
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
