n.d(t, {
    A: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(131346),
    c = n(744818),
    o = n(311907),
    d = n(990078),
    u = n(397927),
    f = n(442433),
    g = n(686956),
    b = n(964486),
    m = n(775602),
    p = n(63104),
    x = n(861197),
    h = n(967144),
    j = n(34457),
    O = n(576705),
    y = n(792831),
    v = n(396816),
    A = n(359837),
    E = n(533448),
    N = n(316506),
    _ = n(927573),
    S = n(652215),
    T = n(985018),
    I = n(971525);
let C = "DRAGGABLE_ROLE";

function P(e) {
    var t, i;
    let l,
        {
            guild: o,
            role: d,
            highestRole: g,
            selectedItem: b,
            onClick: m,
            currentPosition: x,
            onDragStart: O,
            onDragReset: y,
            onDragComplete: v,
            roleStyle: E,
        } = e,
        N = (0, A.c)(o, g, d),
        _ = (0, j.Oy)(d),
        T = null == N && !_,
        P = (null == (i = d.tags) ? void 0 : i.guild_connections) !== void 0,
        w = (0, h.X_)(o.id, d, d.colorStrings),
        [, R] = (0, a.i)({
            type: C,
            item: () => (
                O(d.id),
                {
                    id: d.id,
                    position: x,
                }
            ),
            canDrag: () => T,
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? y() : v(n.roleId);
            },
        }),
        [{ dragSourcePosition: D }, G] = (0, c.H)({
            accept: C,
            canDrop: () => T,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? {
                          dragSourcePosition: t.position,
                      }
                    : {
                          dragSourcePosition: null,
                      };
            },
            drop: () => ({
                roleId: d.id,
            }),
        }),
        L = null != (t = d.colorString) ? t : S.TpD;
    return (
        (l = P
            ? (0, r.jsx)(p.A, {
                  size: 12,
                  color: d.colorString,
                  className: I.Ev,
              })
            : "dot" === E
              ? (0, r.jsx)(u.WYI, {
                    color: L,
                    colors: w,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(u.RYH, {
                    color: L,
                    colors: w,
                })),
        (0, r.jsxs)(u.VQ0.Item, {
            className: s()(I.nM, {
                [I.qo]: null !== D && x < D,
                [I.BP]: null !== D && x > D,
            }),
            id: d.id,
            selectedItem: b,
            itemType: "side",
            onClick: m,
            onContextMenu: function (e) {
                (0, f.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (i = i =
                                {
                                    role: d,
                                    guild: o,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    };
                });
            },
            "aria-label": d.name,
            clickableRef: (e) => {
                var t;
                R(G(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                l,
                null != N
                    ? (0, r.jsx)(A.A, {
                          className: I.s2,
                          tooltipText: N,
                      })
                    : null,
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: _ ? "text-strong" : "interactive-text-active",
                    lineClamp: 1,
                    children: d.name,
                }),
            ],
        })
    );
}

function w(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        c = (0, o.bG)([v.A], () => v.A.roles),
        f = (0, o.bG)([O.A], () => O.A.getHighestRole(t)),
        p = (0, o.bG)([m.A], () => m.A.roleStyle),
        [h, j] = i.useState(c.length),
        { scrolledToTop: A, handleScroll: S } = (0, N.u)(),
        { handleDragStart: C, handleDragReset: w, handleDragComplete: R } = (0, E.A)(c),
        D = i.useRef(null),
        G = i.useCallback(
            (e) => {
                var t, n;
                let r = c.findIndex((t) => t.id === e);
                null == (n = D.current) ||
                    null == (t = n.getScrollerNode()) ||
                    t.scrollTo({
                        top: Math.max((r - 2) * 34, 0),
                    });
            },
            [c],
        );
    return (
        (0, b.Ay)(() => {
            G(n);
        }),
        i.useEffect(() => {
            c.length > h && G(n), c.length !== h && j(c.length);
        }, [c.length, h, j, G, n]),
        (0, r.jsx)(x.Ay.Sidebar, {
            className: I.pz,
            children: (0, r.jsxs)("div", {
                className: I.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(I.gn, {
                            [I.P6]: !A,
                        }),
                        children: [
                            (0, r.jsxs)(u.DUT, {
                                className: I.DD,
                                onClick: () => l(null),
                                children: [
                                    (0, r.jsx)(y.A, {
                                        direction: y.A.Directions.LEFT,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: I.Qw,
                                        variant: "text-md/semibold",
                                        color: "none",
                                        children: T.intl.string(T.t["13/7kX"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.m, {
                                position: "top",
                                "aria-label": T.intl.string(T.t.AbxKtv),
                                __unsupportedReactNodeAsText: (0, r.jsx)(u.Text, {
                                    className: I.YL,
                                    variant: "text-sm/normal",
                                    children: T.intl.string(T.t.AbxKtv),
                                }),
                                children: (0, r.jsx)(u.DUT, {
                                    className: I.Cm,
                                    onClick: () => {
                                        g.A.createRole(t.id), a(_.T$.DISPLAY);
                                    },
                                    children: (0, r.jsx)(u.j96, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.T7Y, {
                        className: I.p_,
                        ref: D,
                        onScroll: S,
                        children: (0, r.jsx)(u.VQ0, {
                            selectedItem: n,
                            onItemSelect: (e) => l(e),
                            orientation: "vertical",
                            children: c.map((e, i) =>
                                (0, r.jsx)(
                                    P,
                                    {
                                        guild: t,
                                        role: e,
                                        highestRole: f,
                                        selectedItem: n,
                                        onClick: () => l(e.id),
                                        currentPosition: i,
                                        onDragStart: C,
                                        onDragReset: w,
                                        onDragComplete: R,
                                        roleStyle: p,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
        })
    );
}
