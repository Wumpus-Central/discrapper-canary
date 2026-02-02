n.d(t, {
    A: () => I,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(391973),
    u = n(684013),
    c = n(964486),
    d = n(555528),
    h = n(531685),
    p = n(5463),
    f = n(365971),
    g = n(41984),
    m = n(129537),
    y = n(127242),
    A = n(968898),
    v = n(481484),
    b = n(545807),
    E = n(652215),
    O = n(121834);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = [],
    I = r.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: l,
                renderButtons: I,
                resizeValidation: j,
                containerRenderGate: T,
                className: C,
                dragContainerClassName: N,
            } = e,
            w = (0, s.bG)([d.A], () => d.A.getWidgetConfig(t.type), [t.type]),
            P = (0, A.RE)(t.id, A.X1),
            D = (0, v.A)(),
            [R, k] = r.useState(() => {
                var e;
                return null != (e = null == T ? void 0 : T.stores) ? e : S;
            });
        (0, c.Ay)(() => {
            var e;
            k(null != (e = null == T ? void 0 : T.stores) ? e : S);
        });
        let M = (0, s.bG)(R, () => {
                var e;
                return (
                    null ==
                        (e =
                            null == T
                                ? void 0
                                : T.shouldRender({
                                      widget: t,
                                      locked: D,
                                  })) || e
                );
            }, [T, D, t]),
            L = (0, b.A)(),
            U = (0, s.bG)([h.A], () => h.A.windowSize((0, f.Q2)(L))),
            G = r.useCallback((e, t, n, i, r) => {
                let l = h.A.windowSize((0, f.Q2)((0, b.b)())),
                    a = (0, p.NO)(n, l),
                    s = (0, p.R9)(i, l);
                (0, o.uD)(t),
                    (0, o.Ju)({
                        widgetId: t,
                        anchor: a,
                        size: s,
                    });
                let c = e === m.P.MOVE,
                    g = (0, p.Ly)(n, l.width, l.height, r.width, r.height);
                u.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: d.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: r.width,
                    widget_height: r.height,
                    widget_left: g.left,
                    widget_top: g.top,
                });
            }, []),
            V = r.useCallback((e) => {
                (0, o.uD)(e);
            }, []),
            { id: z, pinned: F, zIndex: H, size: Y, anchor: K, minSize: W } = t,
            B = r.useMemo(() => (0, p.fd)(Y, U), [Y, U]),
            Z = (0, p.Nv)(K, U),
            {
                resizeX: X,
                resizeY: J,
                dragAnywhere: Q,
                constrainAutoSizeToExplicitResizeEvents: q,
            } = null != w ? w : {},
            $ = !D,
            ee = F || !D,
            et = r.useMemo(
                () => ({
                    minX: 0,
                    minY: 0,
                    maxX: U.width,
                    maxY: U.height,
                }),
                [U],
            ),
            en = r.useCallback(
                (e) =>
                    n(
                        _(x({}, e), {
                            widget: t,
                            dragging: null != e.dragOperation,
                            className: C,
                        }),
                    ),
                [t, n, C],
            ),
            ei = r.useCallback(
                (e) =>
                    null != l || null != I
                        ? (0, i.jsxs)("div", {
                              className: a()(O.vJ, P && O.vw),
                              children: [null == l ? void 0 : l(t), null == I ? void 0 : I(t, e)],
                          })
                        : null,
                [t, l, P, I],
            ),
            er = (0, s.bG)([y.A], () => y.A.hasRenderDebugMode(g.x7.WidgetAreas)),
            el = r.useMemo(() => {
                if (null != j)
                    return (e) =>
                        j(
                            _(x({}, e), {
                                widget: t,
                            }),
                        );
            }, [j, t]);
        return M
            ? (0, i.jsx)(m.A, {
                  className: a()(
                      {
                          [O.Yz]: er,
                          [O.xu]: er && !F,
                          [O.E]: er && F,
                      },
                      N,
                  ),
                  id: z,
                  size: B,
                  anchor: Z,
                  container: et,
                  minSize:
                      null != W
                          ? W
                          : {
                                width: 0,
                                height: 0,
                            },
                  hidden: !ee,
                  locked: D,
                  resizeX: null != X && X,
                  resizeY: null != J && J,
                  style: {
                      zIndex: H,
                  },
                  dragAnywhere: null != Q && Q,
                  constrainAutoSizeToExplicitResizeEvents: null != q && q,
                  active: $,
                  onUpdate: G,
                  onClick: V,
                  targetWindow: L,
                  forceShowExtras: P,
                  renderExtras: ei,
                  resizeValidation: el,
                  children: en,
              })
            : null;
    });
