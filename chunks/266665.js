n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(100568),
    o = n(417865),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    m = n(239091),
    g = n(749210),
    p = n(493773),
    f = n(607070),
    h = n(134433),
    x = n(325476),
    b = n(884902),
    j = n(345162),
    _ = n(496675),
    v = n(671533),
    C = n(103576),
    O = n(970129),
    y = n(712181),
    N = n(420966),
    E = n(203377),
    I = n(981631),
    S = n(388032),
    T = n(612894);
let P = "DRAGGABLE_ROLE";
function w(e) {
    var t, i;
    let l,
        {
            guild: c,
            role: d,
            highestRole: g,
            selectedItem: p,
            onClick: f,
            currentPosition: x,
            onDragStart: _,
            onDragReset: v,
            onDragComplete: C,
            roleStyle: y,
        } = e,
        N = (0, O.T)(c, g, d),
        E = (0, j.fI)(d),
        S = null == N && !E,
        w = (null == (t = d.tags) ? void 0 : t.guild_connections) !== void 0,
        R = (0, b._f)(c.id, d, d.colorStrings),
        [, Z] = (0, a.c)({
            type: P,
            item: () => (
                _(d.id),
                {
                    id: d.id,
                    position: x,
                }
            ),
            canDrag: () => S,
            end: (e, t) => {
                let n = t.getDropResult();
                if (null == n) return void v();
                C(n.roleId);
            },
        }),
        [{ dragSourcePosition: D }, A] = (0, o.L)({
            accept: P,
            canDrop: () => S,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? { dragSourcePosition: t.position }
                    : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: d.id }),
        }),
        L = null != (i = d.colorString) ? i : I.Pbq;
    return (
        (l = w
            ? (0, r.jsx)(h.Z, {
                  size: 12,
                  color: d.colorString,
                  className: T.verifiedRoleIcon,
              })
            : "dot" === y
              ? (0, r.jsx)(u.FhE, {
                    color: L,
                    colors: R,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(u.xko, {
                    color: L,
                    colors: R,
                })),
        (0, r.jsxs)(u.njP.Item, {
            className: s()(T.row, {
                [T.dragBefore]: null !== D && x < D,
                [T.dragAfter]: null !== D && x > D,
            }),
            id: d.id,
            selectedItem: p,
            itemType: "side",
            onClick: f,
            onContextMenu: function (e) {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
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
                                    guild: c,
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
                Z(A(null != (t = null == e ? void 0 : e.ref) ? t : null));
            },
            children: [
                l,
                null != N
                    ? (0, r.jsx)(O.Z, {
                          className: T.lock,
                          tooltipText: N,
                      })
                    : null,
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: E ? "header-primary" : "interactive-active",
                    lineClamp: 1,
                    children: d.name,
                }),
            ],
        })
    );
}
function R(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        o = (0, c.e7)([C.Z], () => C.Z.roles),
        m = (0, c.e7)([_.Z], () => _.Z.getHighestRole(t)),
        h = (0, c.e7)([f.Z], () => f.Z.roleStyle),
        [b, j] = i.useState(o.length),
        { scrolledToTop: O, handleScroll: I } = (0, N.V)(),
        { handleDragStart: P, handleDragReset: R, handleDragComplete: Z } = (0, y.Z)(o),
        D = i.useRef(null),
        A = i.useCallback(
            (e) => {
                var t, n;
                let r = o.findIndex((t) => t.id === e);
                null == (n = D.current) ||
                    null == (t = n.getScrollerNode()) ||
                    t.scrollTo({ top: Math.max((r - 2) * 34, 0) });
            },
            [o],
        );
    return (
        (0, p.ZP)(() => {
            A(n);
        }),
        i.useEffect(() => {
            o.length > b && A(n), o.length !== b && j(o.length);
        }, [o.length, b, j, A, n]),
        (0, r.jsx)(x.ZP.Sidebar, {
            className: T.sidebar,
            children: (0, r.jsxs)("div", {
                className: T.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: s()(T.titleContainer, { [T.titleElevated]: !O }),
                        children: [
                            (0, r.jsxs)(u.P3F, {
                                className: T.title,
                                onClick: () => l(null),
                                children: [
                                    (0, r.jsx)(v.Z, { direction: v.Z.Directions.LEFT }),
                                    (0, r.jsx)(u.Text, {
                                        className: T.titleText,
                                        variant: "text-md/semibold",
                                        color: "none",
                                        children: S.intl.string(S.t["13/7kZ"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.u, {
                                position: "top",
                                "aria-label": S.intl.string(S.t.AbxKtr),
                                __unsupportedReactNodeAsText: (0, r.jsx)(u.Text, {
                                    className: T.tooltip,
                                    variant: "text-sm/normal",
                                    children: S.intl.string(S.t.AbxKtr),
                                }),
                                children: (0, r.jsx)(u.P3F, {
                                    className: T.addRole,
                                    onClick: () => {
                                        g.Z.createRole(t.id), a(E.ZI.DISPLAY);
                                    },
                                    children: (0, r.jsx)(u.qJs, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.Den, {
                        className: T.list,
                        ref: D,
                        onScroll: I,
                        children: (0, r.jsx)(u.njP, {
                            selectedItem: n,
                            onItemSelect: (e) => l(e),
                            orientation: "vertical",
                            children: o.map((e, i) =>
                                (0, r.jsx)(
                                    w,
                                    {
                                        guild: t,
                                        role: e,
                                        highestRole: m,
                                        selectedItem: n,
                                        onClick: () => l(e.id),
                                        currentPosition: i,
                                        onDragStart: P,
                                        onDragReset: R,
                                        onDragComplete: Z,
                                        roleStyle: h,
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
