n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(391973),
    d = n(684013),
    u = n(964486),
    c = n(555528),
    h = n(531685),
    A = n(5463),
    m = n(365971),
    g = n(41984),
    p = n(129537),
    f = n(127242),
    _ = n(968898),
    E = n(481484),
    x = n(545807),
    S = n(652215),
    I = n(121834);
let T = [],
    C = l.memo(function (e) {
        let {
                widget: t,
                renderWidget: n,
                renderTitle: a,
                renderButtons: C,
                resizeValidation: v,
                containerRenderGate: y,
                className: N,
                dragContainerClassName: O,
            } = e,
            b = (0, r.bG)([c.A], () => c.A.getWidgetConfig(t.type), [t.type]),
            j = (0, _.RE)(t.id, _.X1),
            w = (0, E.A)(),
            [L, R] = l.useState(() => y?.stores ?? T);
        (0, u.Ay)(() => {
            R(y?.stores ?? T);
        });
        let D = (0, r.bG)(L, () => y?.shouldRender({ widget: t, locked: w }) ?? !0, [y, w, t]),
            M = (0, x.A)(),
            k = (0, r.bG)([h.A], () => h.A.windowSize((0, m.Q2)(M))),
            z = l.useCallback((e, t, n, i, l) => {
                let a = h.A.windowSize((0, m.Q2)((0, x.b)())),
                    s = (0, A.NO)(n, a),
                    r = (0, A.R9)(i, a);
                (0, o.uD)(t), (0, o.Ju)({ widgetId: t, anchor: s, size: r });
                let u = e === p.P.MOVE,
                    g = (0, A.Ly)(n, a.width, a.height, l.width, l.height);
                d.A.track(S.HAw.OVERLAY_LAYOUT_UPDATED, {
                    was_resized: !u,
                    was_dragged: u,
                    widget_type: c.A.getWidgetType(t),
                    window_width: a.width,
                    window_height: a.height,
                    widget_width: l.width,
                    widget_height: l.height,
                    widget_left: g.left,
                    widget_top: g.top,
                });
            }, []),
            V = l.useCallback((e) => {
                (0, o.uD)(e);
            }, []),
            { id: U, pinned: P, zIndex: G, size: H, anchor: Y, minSize: F } = t,
            W = l.useMemo(() => (0, A.fd)(H, k), [H, k]),
            K = (0, A.Nv)(Y, k),
            { resizeX: Z, resizeY: B, dragAnywhere: X, constrainAutoSizeToExplicitResizeEvents: J } = b ?? {},
            Q = !w,
            q = P || !w,
            $ = l.useMemo(() => ({ minX: 0, minY: 0, maxX: k.width, maxY: k.height }), [k]),
            ee = l.useCallback(
                (e) => n({ ...e, widget: t, dragging: null != e.dragOperation, className: N }),
                [t, n, N],
            ),
            et = l.useCallback(
                (e) =>
                    null != a || null != C
                        ? (0, i.jsxs)("div", { className: s()(I.vJ, j && I.vw), children: [a?.(t), C?.(t, e)] })
                        : null,
                [t, a, j, C],
            ),
            en = (0, r.bG)([f.A], () => f.A.hasRenderDebugMode(g.x7.WidgetAreas)),
            ei = l.useMemo(() => {
                if (null != v) return (e) => v({ ...e, widget: t });
            }, [v, t]);
        return D
            ? (0, i.jsx)(p.A, {
                  className: s()({ [I.Yz]: en, [I.xu]: en && !P, [I.E]: en && P }, O),
                  id: U,
                  size: W,
                  anchor: K,
                  container: $,
                  minSize: F ?? { width: 0, height: 0 },
                  hidden: !q,
                  locked: w,
                  resizeX: Z ?? !1,
                  resizeY: B ?? !1,
                  style: { zIndex: G },
                  dragAnywhere: X ?? !1,
                  constrainAutoSizeToExplicitResizeEvents: J ?? !1,
                  active: Q,
                  onUpdate: z,
                  onClick: V,
                  targetWindow: M,
                  forceShowExtras: j,
                  renderExtras: et,
                  resizeValidation: ei,
                  children: ee,
              })
            : null;
    });
