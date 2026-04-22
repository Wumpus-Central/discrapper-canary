"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(391973),
    d = n(684013),
    u = n(964486),
    c = n(555528),
    A = n(531685),
    h = n(5463),
    g = n(365971),
    f = n(41984),
    m = n(129537),
    v = n(127242),
    y = n(968898),
    p = n(481484),
    _ = n(545807),
    E = n(652215),
    w = n(685411);
let x = [],
    b = i.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: l,
                renderButtons: b,
                resizeValidation: C,
                containerRenderGate: I,
                className: O,
                dragContainerClassName: L,
            } = e,
            D = (0, s.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]),
            N = (0, y.RE)(t.id, y.X1),
            k = (0, p.A)(),
            [j, S] = i.useState(() => I?.stores ?? x);
        (0, u.Ay)(() => {
            S(I?.stores ?? x);
        });
        let P = (0, s.bG)(j, () => I?.shouldRender({ widget: t, locked: k }) ?? !0, [I, k, t]),
            R = (0, _.A)(),
            T = (0, s.bG)([A.A], () => A.A.windowSize((0, g.Q2)(R))),
            G = i.useCallback((e, t, n, r, i) => {
                let l = A.A.windowSize((0, g.Q2)((0, _.b)())),
                    a = (0, h.NO)(n, l),
                    s = (0, h.R9)(r, l);
                (0, o.uD)(t), (0, o.Ju)({ widgetId: t, anchor: a, size: s });
                let u = e === m.P.MOVE,
                    f = (0, h.Ly)(n, l.width, l.height, i.width, i.height);
                d.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: c.A.getWidgetType(t),
                    window_width: l.width,
                    window_height: l.height,
                    widget_width: i.width,
                    widget_height: i.height,
                    widget_left: f.left,
                    widget_top: f.top,
                });
            }, []),
            M = i.useCallback((e) => {
                (0, o.uD)(e);
            }, []),
            { id: U, pinned: V, zIndex: W, size: Y, anchor: K, minSize: B } = t,
            F = i.useMemo(() => (0, h.fd)(Y, T), [Y, T]),
            z = (0, h.Nv)(K, T),
            { resizeX: H, resizeY: X, dragAnywhere: Z, constrainAutoSizeToExplicitResizeEvents: J } = D ?? {},
            Q = !k,
            q = V || !k,
            $ = i.useMemo(() => ({ minX: 0, minY: 0, maxX: T.width, maxY: T.height }), [T]),
            ee = i.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: O }),
                [t, n, O],
            ),
            et = i.useCallback(
                (e) =>
                    null != l || null != b
                        ? (0, r.jsxs)("div", { className: a()(w.vJ, N && w.vw), children: [l?.(t), b?.(t, e)] })
                        : null,
                [t, l, N, b],
            ),
            en = (0, s.bG)([v.A], () => v.A.hasRenderDebugMode(f.x7.WidgetAreas)),
            er = i.useMemo(() => {
                if (null != C) return (e) => C({ ...e, widget: t });
            }, [C, t]);
        return P
            ? (0, r.jsx)(m.A, {
                  className: a()({ [w.Yz]: en, [w.xu]: en && !V, [w.E]: en && V }, L),
                  id: U,
                  size: F,
                  anchor: z,
                  container: $,
                  minSize: B ?? { width: 0, height: 0 },
                  hidden: !q,
                  locked: k,
                  resizeX: H ?? !1,
                  resizeY: X ?? !1,
                  style: { zIndex: W },
                  dragAnywhere: Z ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: J ?? !1,
                  active: Q,
                  onUpdate: G,
                  onClick: M,
                  targetWindow: R,
                  forceShowExtras: N,
                  renderExtras: et,
                  resizeValidation: er,
                  children: ee,
              })
            : null;
    });
