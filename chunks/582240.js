n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(311907),
    d = n(391973),
    s = n(684013),
    c = n(964486),
    u = n(555528),
    _ = n(531685),
    A = n(5463),
    h = n(365971),
    f = n(41984),
    g = n(129537),
    m = n(127242),
    b = n(968898),
    p = n(481484),
    v = n(545807),
    y = n(652215),
    w = n(685411);
let C = [],
    x = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: a,
                renderButtons: x,
                resizeValidation: E,
                containerRenderGate: I,
                className: L,
                dragContainerClassName: O,
            } = e,
            k = (0, o.bG)([u.A], () => u.A.getWidgetConfig(t.type), [t.type]),
            D = (0, b.RE)(t.id, b.X1),
            N = (0, p.A)(),
            [T, S] = i.useState(() => I?.stores ?? C);
        (0, c.Ay)(() => {
            S(I?.stores ?? C);
        });
        let P = (0, o.bG)(T, () => I?.shouldRender({ widget: t, locked: N }) ?? !0, [I, N, t]),
            j = (0, v.A)(),
            R = (0, o.bG)([_.A], () => _.A.windowSize((0, h.Q2)(j))),
            G = i.useCallback((e, t, n, r, i) => {
                let a = _.A.windowSize((0, h.Q2)((0, v.b)())),
                    l = (0, A.NO)(n, a),
                    o = (0, A.R9)(r, a);
                (0, d.uD)(t), (0, d.Ju)({ widgetId: t, anchor: l, size: o });
                let c = e === g.P.MOVE,
                    f = (0, A.Ly)(n, a.width, a.height, i.width, i.height);
                s.A.track(y.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !c,
                    was_dragged: c,
                    widget_type: u.A.getWidgetType(t),
                    window_width: a.width,
                    window_height: a.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: f.left,
                    widget_top: f.top,
                });
            }, []),
            M = i.useCallback((e) => {
                (0, d.uD)(e);
            }, []),
            { id: U, pinned: V, zIndex: W, size: B, anchor: K, minSize: Y } = t,
            F = i.useMemo(() => (0, A.fd)(B, R), [B, R]),
            H = (0, A.Nv)(K, R),
            { resizeX: z, resizeY: X, dragAnywhere: Z, constrainAutoSizeToExplicitResizeEvents: J } = k ?? {},
            Q = !N,
            q = V || !N,
            $ = i.useMemo(() => ({ minX: 0, minY: 0, maxX: R.width, maxY: R.height }), [R]),
            ee = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: L }),
                [t, n, L],
            ),
            et = i.useCallback(
                (e) =>
                    null != a || null != x
                        ? (0, r.jsxs)("div", { className: l()(w.vJ, D && w.vw), children: [a?.(t), x?.(t, e)] })
                        : null,
                [t, a, D, x],
            ),
            en = (0, o.bG)([m.A], () => m.A.hasRenderDebugMode(f.x7.WidgetAreas)),
            er = i.useMemo(() => {
                if (null != E) return (e) => E({ ...e, widget: t });
            }, [E, t]);
        return P
            ? (0, r.jsx)(g.A, {
                  className: l()({ [w.Yz]: en, [w.xu]: en && !V, [w.E]: en && V }, O),
                  id: U,
                  size: F,
                  anchor: H,
                  container: $,
                  minSize: Y ?? { width: 0, height: 0 },
                  hidden: !q,
                  locked: N,
                  resizeX: z ?? !1,
                  resizeY: X ?? !1,
                  style: { zIndex: W },
                  dragAnywhere: Z ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: J ?? !1,
                  active: Q,
                  onUpdate: G,
                  onClick: M,
                  targetWindow: j,
                  forceShowExtras: D,
                  renderExtras: et,
                  resizeValidation: er,
                  children: ee,
              })
            : null;
    });
