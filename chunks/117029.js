n.d(t, { A: () => S });
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
    p = n(106236),
    g = n(218429),
    f = n(964486),
    x = n(461782),
    h = n(916546),
    A = n(40056),
    v = n(375708),
    E = n(950183),
    C = n(507199);
function j(e) {
    e.preventDefault(), e.stopPropagation();
}
function I(e) {
    return (1 & e.buttons) == 1;
}
let S = i.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: S, onPreventIdle: _, onAllowIdle: N } = i.useContext(x.k3),
        {
            enabled: b,
            zoomLevel: y,
            minZoom: R,
            maxZoom: k,
            isDragging: D,
            isWheeling: T,
            isSlidering: w,
            setIsSlidering: L,
            doZoom: M,
            isZooming: O,
            videoAspectRatio: V,
            wrapperRef: G,
            panOffset: P,
            setPanOffset: F,
            clampPanOffset: H,
        } = i.useContext(A.e9),
        [U, z] = i.useState(!1),
        W = i.useRef(null),
        $ = y > R,
        B = i.useCallback(() => {
            _("interact");
        }, [_]),
        Y = i.useCallback(() => {
            z(!1), N("interact");
        }, [N]),
        Z = i.useMemo(() => {
            let e = 120 * Math.min(V, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [V]),
        Q = i.useCallback(
            (e) => {
                if (null == W.current || null == G.current) return;
                let t = W.current.getBoundingClientRect(),
                    n = G.current.clientWidth,
                    l = G.current.clientHeight,
                    i = e.x - t.left,
                    s = e.y - t.top;
                F(H({ x: (0.5 - i / t.width) * n * y, y: (0.5 - s / t.height) * l * y }));
            },
            [H, y, G, F],
        ),
        K = i.useCallback(
            (e) => {
                I(e) && (e.preventDefault(), e.stopPropagation(), z(!0), Q({ x: e.clientX, y: e.clientY }));
            },
            [Q],
        ),
        X = i.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), Q({ x: e.clientX, y: e.clientY }));
            },
            [U, Q],
        ),
        q = i.useCallback(
            (e) => {
                !U || I(e) || (e.preventDefault(), e.stopPropagation(), z(!1));
            },
            [U],
        ),
        J = h.Ay.getVideoComponent(),
        ee = i.useMemo(() => {
            let e = null != G.current ? G.current.clientWidth : 1,
                t = null != G.current ? G.current.clientHeight : 1,
                n = 1 / y,
                l = 1 / y,
                i = 0.5 - P.x / (e * y),
                s = 0.5 - P.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, a.clamp))(i - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, a.clamp))(s - l / 2, 0, 1 - l)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * l}%`,
                "--custom-zoom-indicator-transition":
                    D || U || T || w
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [D, U, T, w, P, y, G]),
        et = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(y - 0.25, A.qd, "button");
            },
            [M, y],
        ),
        en = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(y + 0.25, A.qd, "button");
            },
            [M, y],
        ),
        el = i.useRef(null),
        ei = i.useCallback(
            (e) => {
                L(!0),
                    M(e, A.qd, "slider"),
                    S(),
                    null == el.current && (el.current = new o.Ep()),
                    el.current.start(100, () => {
                        L(!1);
                    });
            },
            [M, S, L],
        );
    return ((0, f.l0)(() => {
        el.current?.stop();
    }),
    b && null != n)
        ? (0, l.jsxs)("div", {
              className: r()(C.ne, { [C.Ge]: O || $ }),
              onMouseEnter: B,
              onMouseLeave: Y,
              onClick: j,
              children: [
                  (O || $) &&
                      (0, l.jsx)(u.D, {
                          onClick: j,
                          onMouseEnter: B,
                          onMouseLeave: Y,
                          children: (0, l.jsxs)("div", {
                              ref: W,
                              className: C.Wc,
                              style: Z,
                              onPointerDown: function (e) {
                                  I(e) && e.currentTarget.setPointerCapture(e.pointerId);
                              },
                              onMouseDown: K,
                              onMouseMove: X,
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
                                              icon: m.V,
                                              onClick: et,
                                              disabled: y <= R,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, l.jsx)(p.A, {
                                          minValue: R,
                                          maxValue: k,
                                          initialValue: y,
                                          value: y,
                                          asValueChanges: ei,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, l.jsx)(c.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, l.jsx)(d.K, {
                                  icon: g.r,
                                  onClick: en,
                                  disabled: y >= k,
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
