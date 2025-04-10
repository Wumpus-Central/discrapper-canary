n.d(t, { Z: () => Z }), n(388685);
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
    g = n(749210),
    p = n(493773),
    f = n(607070),
    h = n(605436),
    b = n(134433),
    x = n(325476),
    j = n(884902),
    N = n(496675),
    v = n(671533),
    _ = n(946724),
    y = n(970129),
    O = n(712181),
    C = n(420966),
    I = n(203377),
    E = n(981631),
    S = n(388032),
    T = n(563836);
function P(e) {
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
function D(e) {
    var t, i;
    let s,
        { guild: d, role: g, highestRole: p, selectedItem: f, onClick: x, currentPosition: N, onDragStart: v, onDragReset: _, onDragComplete: O, roleStyle: C } = e,
        I = (0, y.T)(d, p, g),
        S = (0, h.pM)(d.id, g.id),
        D = null == I && !S,
        Z = (null == (t = g.tags) ? void 0 : t.guild_connections) !== void 0,
        k = (0, j.X)(d.id, g.colorStrings),
        [, A] = (0, l.c)({
            type: R,
            item: () => (
                v(g.id),
                {
                    id: g.id,
                    position: N
                }
            ),
            canDrag: () => D,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void _();
                O(n.roleId);
            }
        }),
        [{ dragSourcePosition: W }, L] = (0, o.L)({
            accept: R,
            canDrop: () => D,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: g.id })
        }),
        M = null != (i = g.colorString) ? i : (0, c.Rf)(E.p6O);
    return (
        (s = Z
            ? (0, r.jsx)(b.Z, {
                  size: 12,
                  color: g.colorString,
                  className: T.verifiedRoleIcon
              })
            : 'dot' === C
              ? (0, r.jsx)(u.FhE, {
                    color: M,
                    colors: k,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(u.xko, {
                    color: M,
                    colors: k
                })),
        (0, r.jsxs)(u.njP.Item, {
            className: a()(T.row, {
                [T.dragBefore]: null !== W && N < W,
                [T.dragAfter]: null !== W && N > W
            }),
            id: g.id,
            selectedItem: f,
            itemType: 'side',
            onClick: x,
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
                A(L(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                s,
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
function Z(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: s, setSelectedSection: l } = e,
        o = (0, d.e7)([_.Z], () => _.Z.roles),
        c = (0, d.e7)([N.Z], () => N.Z.getHighestRole(t)),
        m = (0, d.e7)([f.Z], () => f.Z.roleStyle),
        [h, b] = i.useState(o.length),
        { scrolledToTop: j, handleScroll: y } = (0, C.V)(),
        { handleDragStart: E, handleDragReset: R, handleDragComplete: Z } = (0, O.Z)(o),
        k = i.useRef(null),
        A = i.useCallback(
            (e) => {
                var t, n;
                let r = o.findIndex((t) => t.id === e);
                null == (n = k.current) || null == (t = n.getScrollerNode()) || t.scrollTo({ top: Math.max((r - 2) * 34, 0) });
            },
            [o]
        );
    (0, p.ZP)(() => {
        A(n);
    }),
        i.useEffect(() => {
            o.length > h && A(n), o.length !== h && b(o.length);
        }, [o.length, h, b, A, n]);
    let W = () => {
        g.Z.createRole(t.id), l(I.ZI.DISPLAY);
    };
    return (0, r.jsx)(x.ZP.Sidebar, {
        className: T.sidebar,
        children: (0, r.jsxs)('div', {
            className: T.container,
            children: [
                (0, r.jsxs)('div', {
                    className: a()(T.titleContainer, { [T.titleElevated]: !j }),
                    children: [
                        (0, r.jsxs)(u.P3F, {
                            className: T.title,
                            onClick: () => s(null),
                            children: [
                                (0, r.jsx)(v.Z, { direction: v.Z.Directions.LEFT }),
                                (0, r.jsx)(u.Text, {
                                    className: T.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: S.NW.string(S.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            position: 'top',
                            'aria-label': S.NW.string(S.t.AbxKtr),
                            text: (0, r.jsx)(u.Text, {
                                className: T.tooltip,
                                variant: 'text-sm/normal',
                                children: S.NW.string(S.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P3F,
                                    w(P({ className: T.addRole }, e), {
                                        onClick: W,
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
                    ref: k,
                    onScroll: y,
                    children: (0, r.jsx)(u.njP, {
                        selectedItem: n,
                        onItemSelect: (e) => s(e),
                        orientation: 'vertical',
                        children: o.map((e, i) =>
                            (0, r.jsx)(
                                D,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: n,
                                    onClick: () => s(e.id),
                                    currentPosition: i,
                                    onDragStart: E,
                                    onDragReset: R,
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
