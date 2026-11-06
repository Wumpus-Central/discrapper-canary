var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
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
    x = n(754712),
    A = n(40056),
    v = n(792996),
    E = n(950183),
    C = n(507199);
function I(e) {
    (e.preventDefault(), e.stopPropagation());
}
function j(e) {
    return (1 & e.buttons) == 1;
}
let S = i.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: S, onPreventIdle: _, onAllowIdle: b } = i.useContext(h.k3),
        {
            enabled: N,
            zoomLevel: y,
            minZoom: T,
            maxZoom: L,
            isDragging: R,
            isWheeling: D,
            isSlidering: k,
            setIsSlidering: M,
            doZoom: w,
            isZooming: O,
            videoAspectRatio: G,
            wrapperRef: P,
            panOffset: V,
            setPanOffset: F,
            clampPanOffset: H,
        } = i.useContext(A.e9),
        [U, W] = i.useState(!1),
        z = i.useRef(null),
        $ = y > T,
        B = i.useCallback(() => {
            _("interact");
        }, [_]),
        Z = i.useCallback(() => {
            (W(!1), b("interact"));
        }, [b]),
        Y = i.useMemo(() => {
            let e = 120 * Math.min(G, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [G]),
        Q = i.useCallback(
            (e) => {
                if (null == z.current || null == P.current) return;
                let t = z.current.getBoundingClientRect(),
                    n = P.current.clientWidth,
                    l = P.current.clientHeight,
                    i = e.x - t.left,
                    s = e.y - t.top;
                F(H({ x: (0.5 - i / t.width) * n * y, y: (0.5 - s / t.height) * l * y }));
            },
            [H, y, P, F],
        ),
        X = i.useCallback(
            (e) => {
                j(e) && (e.preventDefault(), e.stopPropagation(), W(!0), Q({ x: e.clientX, y: e.clientY }));
            },
            [Q],
        ),
        K = i.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), Q({ x: e.clientX, y: e.clientY }));
            },
            [U, Q],
        ),
        q = i.useCallback(
            (e) => {
                !U || j(e) || (e.preventDefault(), e.stopPropagation(), W(!1));
            },
            [U],
        ),
        J = x.Ay.getVideoComponent(),
        ee = i.useMemo(() => {
            let e = null != P.current ? P.current.clientWidth : 1,
                t = null != P.current ? P.current.clientHeight : 1,
                n = 1 / y,
                l = 1 / y,
                i = 0.5 - V.x / (e * y),
                s = 0.5 - V.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * (0, a.clamp)(i - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * (0, a.clamp)(s - l / 2, 0, 1 - l)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * l}%`,
                "--custom-zoom-indicator-transition":
                    R || U || D || k
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [R, U, D, k, V, y, P]),
        et = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), w(y - 0.25, A.qd, "button"));
            },
            [w, y],
        ),
        en = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), w(y + 0.25, A.qd, "button"));
            },
            [w, y],
        ),
        el = i.useRef(null),
        ei = i.useCallback(
            (e) => {
                (M(!0),
                    w(e, A.qd, "slider"),
                    S(),
                    null == el.current && (el.current = new o.Ep()),
                    el.current.start(100, () => {
                        M(!1);
                    }));
            },
            [w, S, M],
        );
    return ((0, f.l0)(() => {
        el.current?.stop();
    }),
    N && null != n)
        ? (0, l.jsxs)("div", {
              className: r()(C.ne, { [C.Ge]: O || $ }),
              onMouseEnter: B,
              onMouseLeave: Z,
              onClick: I,
              children: [
                  (O || $) &&
                      (0, l.jsx)(u.D, {
                          onClick: I,
                          onMouseEnter: B,
                          onMouseLeave: Z,
                          children: (0, l.jsxs)("div", {
                              ref: z,
                              className: C.Wc,
                              style: Y,
                              onPointerDown: function (e) {
                                  j(e) && e.currentTarget.setPointerCapture(e.pointerId);
                              },
                              onMouseDown: X,
                              onMouseMove: K,
                              onMouseUp: q,
                              children: [
                                  (0, l.jsx)(J, {
                                      className: r()(C.BZ, { [E.mirror]: t }),
                                      streamId: n,
                                      paused: s,
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
                                              disabled: y <= T,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, l.jsx)(p.A, {
                                          minValue: T,
                                          maxValue: L,
                                          step: 0.01,
                                          value: y,
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
                                  disabled: y >= L,
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
n.d(t, {}, { A: S });
