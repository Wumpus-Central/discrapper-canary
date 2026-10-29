n.d(t, { A: () => S });
var i = n(477900),
    l = n(582128),
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
    x = n(461782),
    h = n(999926),
    A = n(40056),
    v = n(105292),
    E = n(950183),
    C = n(507199);
function j(e) {
    (e.preventDefault(), e.stopPropagation());
}
function I(e) {
    return (1 & e.buttons) == 1;
}
let S = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: S, onPreventIdle: _, onAllowIdle: N } = l.useContext(x.k3),
        {
            enabled: b,
            zoomLevel: y,
            minZoom: T,
            maxZoom: L,
            isDragging: D,
            isWheeling: R,
            isSlidering: k,
            setIsSlidering: w,
            doZoom: M,
            isZooming: O,
            videoAspectRatio: G,
            wrapperRef: V,
            panOffset: P,
            setPanOffset: H,
            clampPanOffset: F,
        } = l.useContext(A.e9),
        [U, z] = l.useState(!1),
        W = l.useRef(null),
        $ = y > T,
        B = l.useCallback(() => {
            _("interact");
        }, [_]),
        Z = l.useCallback(() => {
            (z(!1), N("interact"));
        }, [N]),
        Y = l.useMemo(() => {
            let e = 120 * Math.min(G, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [G]),
        Q = l.useCallback(
            (e) => {
                if (null == W.current || null == V.current) return;
                let t = W.current.getBoundingClientRect(),
                    n = V.current.clientWidth,
                    i = V.current.clientHeight,
                    l = e.x - t.left,
                    s = e.y - t.top;
                H(F({ x: (0.5 - l / t.width) * n * y, y: (0.5 - s / t.height) * i * y }));
            },
            [F, y, V, H],
        ),
        K = l.useCallback(
            (e) => {
                I(e) && (e.preventDefault(), e.stopPropagation(), z(!0), Q({ x: e.clientX, y: e.clientY }));
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
                !U || I(e) || (e.preventDefault(), e.stopPropagation(), z(!1));
            },
            [U],
        ),
        J = h.Ay.getVideoComponent(),
        ee = l.useMemo(() => {
            let e = null != V.current ? V.current.clientWidth : 1,
                t = null != V.current ? V.current.clientHeight : 1,
                n = 1 / y,
                i = 1 / y,
                l = 0.5 - P.x / (e * y),
                s = 0.5 - P.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * (0, a.clamp)(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * (0, a.clamp)(s - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    D || U || R || k
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [D, U, R, k, P, y, V]),
        et = l.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), M(y - 0.25, A.qd, "button"));
            },
            [M, y],
        ),
        en = l.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), M(y + 0.25, A.qd, "button"));
            },
            [M, y],
        ),
        ei = l.useRef(null),
        el = l.useCallback(
            (e) => {
                (w(!0),
                    M(e, A.qd, "slider"),
                    S(),
                    null == ei.current && (ei.current = new o.Ep()),
                    ei.current.start(100, () => {
                        w(!1);
                    }));
            },
            [M, S, w],
        );
    return ((0, f.l0)(() => {
        ei.current?.stop();
    }),
    b && null != n)
        ? (0, i.jsxs)("div", {
              className: r()(C.ne, { [C.Ge]: O || $ }),
              onMouseEnter: B,
              onMouseLeave: Z,
              onClick: j,
              children: [
                  (O || $) &&
                      (0, i.jsx)(u.D, {
                          onClick: j,
                          onMouseEnter: B,
                          onMouseLeave: Z,
                          children: (0, i.jsxs)("div", {
                              ref: W,
                              className: C.Wc,
                              style: Y,
                              onPointerDown: function (e) {
                                  I(e) && e.currentTarget.setPointerCapture(e.pointerId);
                              },
                              onMouseDown: K,
                              onMouseMove: X,
                              onMouseUp: q,
                              children: [
                                  (0, i.jsx)(J, {
                                      className: r()(C.BZ, { [E.mirror]: t }),
                                      streamId: n,
                                      paused: s,
                                      reportContainerResized: !1,
                                  }),
                                  (0, i.jsx)("div", { className: C.xq, style: ee }),
                              ],
                          }),
                      }),
                  (0, i.jsxs)("div", {
                      className: C.xu,
                      children: [
                          (O || $) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.m, {
                                          text: v.intl.string(v.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(d.K, {
                                              icon: m.V,
                                              onClick: et,
                                              disabled: y <= T,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(p.A, {
                                          minValue: T,
                                          maxValue: L,
                                          step: 0.01,
                                          value: y,
                                          onChange: el,
                                          formatValue: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, i.jsx)(c.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, i.jsx)(d.K, {
                                  icon: g.r,
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
