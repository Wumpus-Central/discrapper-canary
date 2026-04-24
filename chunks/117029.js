n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    o = n(451988),
    d = n(990078),
    c = n(939249),
    u = n(408278),
    _ = n(92259),
    f = n(106236),
    m = n(218429),
    p = n(964486),
    g = n(461782),
    h = n(969341),
    x = n(40056),
    v = n(985018),
    A = n(473772),
    I = n(590782);
function C(e) {
    e.preventDefault(), e.stopPropagation();
}
function E(e) {
    return (1 & e.buttons) == 1;
}
let j = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: a } = e,
        { onActive: j, onPreventIdle: b, onAllowIdle: N } = l.useContext(g.k3),
        {
            enabled: S,
            zoomLevel: y,
            minZoom: w,
            maxZoom: T,
            isDragging: R,
            isWheeling: k,
            isSlidering: M,
            setIsSlidering: D,
            doZoom: L,
            isZooming: O,
            videoAspectRatio: V,
            wrapperRef: P,
            panOffset: G,
            setPanOffset: F,
            clampPanOffset: H,
        } = l.useContext(x.e9),
        [U, W] = l.useState(!1),
        B = l.useRef(null),
        z = y > w,
        Z = l.useCallback(() => {
            b("interact");
        }, [b]),
        $ = l.useCallback(() => {
            W(!1), N("interact");
        }, [N]),
        Y = l.useMemo(() => {
            let e = 120 * Math.min(V, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [V]),
        Q = l.useCallback(
            (e) => {
                if (null == B.current || null == P.current) return;
                let t = B.current.getBoundingClientRect(),
                    n = P.current.clientWidth,
                    i = P.current.clientHeight,
                    l = e.x - t.left,
                    a = e.y - t.top;
                F(H({ x: (0.5 - l / t.width) * n * y, y: (0.5 - a / t.height) * i * y }));
            },
            [H, y, P, F],
        ),
        K = l.useCallback(
            (e) => {
                E(e) && (e.preventDefault(), e.stopPropagation(), W(!0), Q({ x: e.clientX, y: e.clientY }));
            },
            [Q],
        ),
        X = l.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), Q({ x: e.clientX, y: e.clientY }));
            },
            [U, Q],
        ),
        q = l.useCallback(
            (e) => {
                !U || E(e) || (e.preventDefault(), e.stopPropagation(), W(!1));
            },
            [U],
        ),
        J = h.Ay.getVideoComponent(),
        ee = l.useMemo(() => {
            let e = null != P.current ? P.current.clientWidth : 1,
                t = null != P.current ? P.current.clientHeight : 1,
                n = 1 / y,
                i = 1 / y,
                l = 0.5 - G.x / (e * y),
                a = 0.5 - G.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, s.clamp))(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, s.clamp))(a - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    R || U || k || M
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [R, U, k, M, G, y, P]),
        et = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y - 0.25, x.qd, "button");
            },
            [L, y],
        ),
        en = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y + 0.25, x.qd, "button");
            },
            [L, y],
        ),
        ei = l.useRef(null),
        el = l.useCallback(
            (e) => {
                D(!0),
                    L(e, x.qd, "slider"),
                    j(),
                    null == ei.current && (ei.current = new o.Ep()),
                    ei.current.start(100, () => {
                        D(!1);
                    });
            },
            [L, j, D],
        );
    return ((0, p.l0)(() => {
        ei.current?.stop();
    }),
    S && null != n)
        ? (0, i.jsxs)("div", {
              className: r()(I.ne, { [I.Ge]: O || z }),
              onMouseEnter: Z,
              onMouseLeave: $,
              onClick: C,
              children: [
                  (O || z) &&
                      (0, i.jsx)(c.D, {
                          onClick: C,
                          onMouseEnter: Z,
                          onMouseLeave: $,
                          children: (0, i.jsxs)("div", {
                              ref: B,
                              className: I.Wc,
                              style: Y,
                              onMouseDown: K,
                              onMouseMove: X,
                              onMouseUp: q,
                              children: [
                                  (0, i.jsx)(J, {
                                      className: r()(I.BZ, { [A.mirror]: t }),
                                      streamId: n,
                                      paused: a,
                                      reportContainerResized: !1,
                                  }),
                                  (0, i.jsx)("div", { className: I.xq, style: ee }),
                              ],
                          }),
                      }),
                  (0, i.jsxs)("div", {
                      className: I.xu,
                      children: [
                          (O || z) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.m, {
                                          text: v.intl.string(v.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(u.K, {
                                              icon: _.V,
                                              onClick: et,
                                              disabled: y <= w,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(f.A, {
                                          minValue: w,
                                          maxValue: T,
                                          initialValue: y,
                                          value: y,
                                          asValueChanges: el,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, i.jsx)(d.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, i.jsx)(u.K, {
                                  icon: m.r,
                                  onClick: en,
                                  disabled: y >= T,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  "aria-label": v.intl.string(v.t["9hMafy"]),
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
});
