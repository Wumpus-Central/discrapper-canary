var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n(451988),
    u = n(939249),
    c = n(866665),
    d = n(408278),
    m = n(92259),
    p = n(893007),
    g = n(218429),
    f = n(964486),
    h = n(461782),
    A = n(988468),
    x = n(40056),
    v = n(792996),
    E = n(950183),
    C = n(507199);
function j(e) {
    (e.preventDefault(), e.stopPropagation());
}
function S(e) {
    return (1 & e.buttons) == 1;
}
let b = i.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: r } = e,
        { onActive: b, onPreventIdle: I, onAllowIdle: y } = i.useContext(h.k3),
        {
            enabled: _,
            zoomLevel: N,
            minZoom: w,
            maxZoom: k,
            isDragging: R,
            isWheeling: L,
            isSlidering: T,
            setIsSlidering: D,
            doZoom: M,
            isZooming: O,
            videoAspectRatio: P,
            wrapperRef: G,
            panOffset: V,
            setPanOffset: F,
            clampPanOffset: H,
        } = i.useContext(x.e9),
        [U, z] = i.useState(!1),
        W = i.useRef(null),
        $ = N > w,
        B = i.useCallback(() => {
            I("interact");
        }, [I]),
        K = i.useCallback(() => {
            (z(!1), y("interact"));
        }, [y]),
        Y = i.useMemo(() => {
            let e = 120 * Math.min(P, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [P]),
        Z = i.useCallback(
            (e) => {
                if (null == W.current || null == G.current) return;
                let t = W.current.getBoundingClientRect(),
                    n = G.current.clientWidth,
                    l = G.current.clientHeight,
                    i = e.x - t.left,
                    r = e.y - t.top;
                F(H({ x: (0.5 - i / t.width) * n * N, y: (0.5 - r / t.height) * l * N }));
            },
            [H, N, G, F],
        ),
        X = i.useCallback(
            (e) => {
                S(e) && (e.preventDefault(), e.stopPropagation(), z(!0), Z({ x: e.clientX, y: e.clientY }));
            },
            [Z],
        ),
        Q = i.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), Z({ x: e.clientX, y: e.clientY }));
            },
            [U, Z],
        ),
        q = i.useCallback(
            (e) => {
                !U || S(e) || (e.preventDefault(), e.stopPropagation(), z(!1));
            },
            [U],
        ),
        J = A.Ay.getVideoComponent(),
        ee = i.useMemo(() => {
            let e = null != G.current ? G.current.clientWidth : 1,
                t = null != G.current ? G.current.clientHeight : 1,
                n = 1 / N,
                l = 1 / N,
                i = 0.5 - V.x / (e * N),
                r = 0.5 - V.y / (t * N);
            return {
                "--custom-zoom-indicator-left": `${100 * (0, a.clamp)(i - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * (0, a.clamp)(r - l / 2, 0, 1 - l)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * l}%`,
                "--custom-zoom-indicator-transition":
                    R || U || L || T
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [R, U, L, T, V, N, G]),
        et = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), M(N - 0.25, x.qd, "button"));
            },
            [M, N],
        ),
        en = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), M(N + 0.25, x.qd, "button"));
            },
            [M, N],
        ),
        el = i.useRef(null),
        ei = i.useCallback(
            (e) => {
                (D(!0),
                    M(e, x.qd, "slider"),
                    b(),
                    null == el.current && (el.current = new o.Ep()),
                    el.current.start(100, () => {
                        D(!1);
                    }));
            },
            [M, b, D],
        );
    return ((0, f.l0)(() => {
        el.current?.stop();
    }),
    _ && null != n)
        ? (0, l.jsxs)("div", {
              className: s()(C.ne, { [C.Ge]: O || $ }),
              onMouseEnter: B,
              onMouseLeave: K,
              onClick: j,
              children: [
                  (O || $) &&
                      (0, l.jsx)(u.D, {
                          onClick: j,
                          onMouseEnter: B,
                          onMouseLeave: K,
                          children: (0, l.jsxs)("div", {
                              ref: W,
                              className: C.Wc,
                              style: Y,
                              onPointerDown: function (e) {
                                  S(e) && e.currentTarget.setPointerCapture(e.pointerId);
                              },
                              onMouseDown: X,
                              onMouseMove: Q,
                              onMouseUp: q,
                              children: [
                                  (0, l.jsx)(J, {
                                      className: s()(C.BZ, { [E.mirror]: t }),
                                      streamId: n,
                                      paused: r,
                                      reportContainerResized: !1,
                                  }),
                                  (0, l.jsx)("div", { className: C.xq, style: ee }),
                              ],
                          }),
                      }),
                  (0, l.jsxs)("div", {
                      className: C.xu,
                      children: [
                          (O || $) &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(c.m, {
                                          text: v.intl.string(v.t.M6Cmwy),
                                          position: "top",
                                          children: (0, l.jsx)(d.K, {
                                              icon: m.MagnifyingGlassMinusIcon,
                                              onClick: et,
                                              disabled: N <= w,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, l.jsx)(p.A, {
                                          minValue: w,
                                          maxValue: k,
                                          step: 0.01,
                                          value: N,
                                          onChange: ei,
                                          formatValue: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, l.jsx)(c.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, l.jsx)(d.K, {
                                  icon: g.MagnifyingGlassPlusIcon,
                                  onClick: en,
                                  disabled: N >= k,
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
n.d(t, {}, { A: b });
