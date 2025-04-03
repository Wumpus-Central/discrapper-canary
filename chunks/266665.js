n.d(t, { Z: () => Z }), n(47120);
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
    h = n(607070),
    f = n(605436),
    b = n(134433),
    x = n(325476),
    j = n(496675),
    N = n(671533),
    _ = n(946724),
    v = n(970129),
    C = n(712181),
    O = n(420966),
    y = n(203377),
    I = n(981631),
    E = n(388032),
    S = n(563836);
function T(e) {
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
    let s,
        { guild: d, role: g, highestRole: p, selectedItem: h, onClick: x, currentPosition: j, onDragStart: N, onDragReset: _, onDragComplete: C, roleStyle: O } = e,
        y = (0, v.T)(d, p, g),
        E = (0, f.pM)(d.id, g.id),
        R = null == y && !E,
        Z = (null == (t = g.tags) ? void 0 : t.guild_connections) !== void 0,
        [, D] = (0, l.c)({
            type: w,
            item: () => (
                N(g.id),
                {
                    id: g.id,
                    position: j
                }
            ),
            canDrag: () => R,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void _();
                C(n.roleId);
            }
        }),
        [{ dragSourcePosition: A }, k] = (0, o.L)({
            accept: w,
            canDrop: () => R,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop() ? { dragSourcePosition: t.position } : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: g.id })
        }),
        W = null != (i = g.colorString) ? i : (0, c.Rf)(I.p6O);
    return (
        (s = Z
            ? (0, r.jsx)(b.Z, {
                  size: 12,
                  color: g.colorString,
                  className: S.verifiedRoleIcon
              })
            : 'dot' === O
              ? (0, r.jsx)(u.FhE, {
                    color: W,
                    background: !1,
                    tooltip: !1
                })
              : (0, r.jsx)(u.xko, { color: W })),
        (0, r.jsxs)(u.njP.Item, {
            className: a()(S.row, {
                [S.dragBefore]: null !== A && j < A,
                [S.dragAfter]: null !== A && j > A
            }),
            id: g.id,
            selectedItem: h,
            itemType: 'side',
            onClick: x,
            onContextMenu: function (e) {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            P(T({}, t), {
                                role: g,
                                guild: d
                            })
                        );
                });
            },
            'aria-label': g.name,
            clickableRef: (e) => {
                var t;
                return D(k(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                s,
                null != y
                    ? (0, r.jsx)(v.Z, {
                          className: S.lock,
                          tooltipText: y
                      })
                    : null,
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: E ? 'header-primary' : 'interactive-active',
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
        c = (0, d.e7)([j.Z], () => j.Z.getHighestRole(t)),
        m = (0, d.e7)([h.Z], () => h.Z.roleStyle),
        [f, b] = i.useState(o.length),
        { scrolledToTop: v, handleScroll: I } = (0, O.V)(),
        { handleDragStart: w, handleDragReset: Z, handleDragComplete: D } = (0, C.Z)(o),
        A = i.useRef(null),
        k = i.useCallback(
            (e) => {
                var t, n;
                let r = o.findIndex((t) => t.id === e);
                null == (n = A.current) || null == (t = n.getScrollerNode()) || t.scrollTo({ top: Math.max((r - 2) * 34, 0) });
            },
            [o]
        );
    (0, p.ZP)(() => {
        k(n);
    }),
        i.useEffect(() => {
            o.length > f && k(n), o.length !== f && b(o.length);
        }, [o.length, f, b, k, n]);
    let W = () => {
        g.Z.createRole(t.id), l(y.ZI.DISPLAY);
    };
    return (0, r.jsx)(x.ZP.Sidebar, {
        className: S.sidebar,
        children: (0, r.jsxs)('div', {
            className: S.container,
            children: [
                (0, r.jsxs)('div', {
                    className: a()(S.titleContainer, { [S.titleElevated]: !v }),
                    children: [
                        (0, r.jsxs)(u.P3F, {
                            className: S.title,
                            onClick: () => s(null),
                            children: [
                                (0, r.jsx)(N.Z, { direction: N.Z.Directions.LEFT }),
                                (0, r.jsx)(u.Text, {
                                    className: S.titleText,
                                    variant: 'text-md/semibold',
                                    color: 'none',
                                    children: E.NW.string(E.t['13/7kZ'])
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            position: 'top',
                            'aria-label': E.NW.string(E.t.AbxKtr),
                            text: (0, r.jsx)(u.Text, {
                                className: S.tooltip,
                                variant: 'text-sm/normal',
                                children: E.NW.string(E.t.AbxKtr)
                            }),
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P3F,
                                    P(T({ className: S.addRole }, e), {
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
                    className: S.list,
                    ref: A,
                    onScroll: I,
                    children: (0, r.jsx)(u.njP, {
                        selectedItem: n,
                        onItemSelect: (e) => s(e),
                        orientation: 'vertical',
                        children: o.map((e, i) =>
                            (0, r.jsx)(
                                R,
                                {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: n,
                                    onClick: () => s(e.id),
                                    currentPosition: i,
                                    onDragStart: w,
                                    onDragReset: Z,
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
