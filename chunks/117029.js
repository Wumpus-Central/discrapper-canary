n.d(t, { A: () => j });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(451988),
    u = n(990078),
    c = n(939249),
    d = n(408278),
    m = n(92259),
    p = n(106236),
    g = n(218429),
    f = n(964486),
    h = n(461782),
    A = n(235058),
    x = n(40056),
    v = n(375708),
    E = n(473772),
    C = n(590782);
function I(e) {
    e.preventDefault(), e.stopPropagation();
}
function _(e) {
    return (1 & e.buttons) == 1;
}
let j = i.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: j, onPreventIdle: S, onAllowIdle: N } = i.useContext(h.k3),
        {
            enabled: b,
            zoomLevel: y,
            minZoom: w,
            maxZoom: T,
            isDragging: R,
            isWheeling: k,
            isSlidering: D,
            setIsSlidering: O,
            doZoom: L,
            isZooming: M,
            videoAspectRatio: F,
            wrapperRef: V,
            panOffset: P,
            setPanOffset: G,
            clampPanOffset: H,
        } = i.useContext(x.e9),
        [U, z] = i.useState(!1),
        W = i.useRef(null),
        $ = y > w,
        B = i.useCallback(() => {
            S("interact");
        }, [S]),
        Y = i.useCallback(() => {
            z(!1), N("interact");
        }, [N]),
        Z = i.useMemo(() => {
            let e = 120 * Math.min(F, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [F]),
        K = i.useCallback(
            (e) => {
                if (null == W.current || null == V.current) return;
                let t = W.current.getBoundingClientRect(),
                    n = V.current.clientWidth,
                    l = V.current.clientHeight,
                    i = e.x - t.left,
                    s = e.y - t.top;
                G(H({ x: (0.5 - i / t.width) * n * y, y: (0.5 - s / t.height) * l * y }));
            },
            [H, y, V, G],
        ),
        Q = i.useCallback(
            (e) => {
                _(e) && (e.preventDefault(), e.stopPropagation(), z(!0), K({ x: e.clientX, y: e.clientY }));
            },
            [K],
        ),
        X = i.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), K({ x: e.clientX, y: e.clientY }));
            },
            [U, K],
        ),
        q = i.useCallback(
            (e) => {
                !U || _(e) || (e.preventDefault(), e.stopPropagation(), z(!1));
            },
            [U],
        ),
        J = A.Ay.getVideoComponent(),
        ee = i.useMemo(() => {
            let e = null != V.current ? V.current.clientWidth : 1,
                t = null != V.current ? V.current.clientHeight : 1,
                n = 1 / y,
                l = 1 / y,
                i = 0.5 - P.x / (e * y),
                s = 0.5 - P.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, r.clamp))(i - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, r.clamp))(s - l / 2, 0, 1 - l)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * l}%`,
                "--custom-zoom-indicator-transition":
                    R || U || k || D
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [R, U, k, D, P, y, V]),
        et = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y - 0.25, x.qd, "button");
            },
            [L, y],
        ),
        en = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y + 0.25, x.qd, "button");
            },
            [L, y],
        ),
        el = i.useRef(null),
        ei = i.useCallback(
            (e) => {
                O(!0),
                    L(e, x.qd, "slider"),
                    j(),
                    null == el.current && (el.current = new o.Ep()),
                    el.current.start(100, () => {
                        O(!1);
                    });
            },
            [L, j, O],
        );
    return ((0, f.l0)(() => {
        el.current?.stop();
    }),
    b && null != n)
        ? (0, l.jsxs)("div", {
              className: a()(C.ne, { [C.Ge]: M || $ }),
              onMouseEnter: B,
              onMouseLeave: Y,
              onClick: I,
              children: [
                  (M || $) &&
                      (0, l.jsx)(c.D, {
                          onClick: I,
                          onMouseEnter: B,
                          onMouseLeave: Y,
                          children: (0, l.jsxs)("div", {
                              ref: W,
                              className: C.Wc,
                              style: Z,
                              onMouseDown: Q,
                              onMouseMove: X,
                              onMouseUp: q,
                              children: [
                                  (0, l.jsx)(J, {
                                      className: a()(C.BZ, { [E.mirror]: t }),
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
                          (M || $) &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(u.m, {
                                          text: v.intl.string(v.t.M6Cmwy),
                                          position: "top",
                                          children: (0, l.jsx)(d.K, {
                                              icon: m.V,
                                              onClick: et,
                                              disabled: y <= w,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, l.jsx)(p.A, {
                                          minValue: w,
                                          maxValue: T,
                                          initialValue: y,
                                          value: y,
                                          asValueChanges: ei,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, l.jsx)(u.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, l.jsx)(d.K, {
                                  icon: g.r,
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
