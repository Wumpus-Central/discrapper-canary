n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(451988),
    c = n(435371),
    d = n(397927),
    u = n(964486),
    h = n(461782),
    m = n(430452),
    A = n(40056),
    g = n(985018),
    p = n(463689),
    f = n(654305);
let _ = { x: 0, y: 0 };
function E(e) {
    e.preventDefault(), e.stopPropagation();
}
function C(e) {
    return (1 & e.buttons) == 1;
}
let x = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: x, onPreventIdle: S, onAllowIdle: T } = l.useContext(h.k3),
        {
            enabled: I,
            zoomLevel: N,
            minZoom: v,
            maxZoom: y,
            isDragging: b,
            isWheeling: j,
            isSlidering: R,
            setIsSlidering: M,
            doZoom: D,
            isZooming: O,
            videoAspectRatio: L,
            wrapperRef: P,
            panOffset: w,
            setPanOffset: k,
            clampPanOffset: U,
        } = l.useContext(A.e),
        [G, F] = l.useState(!1),
        H = l.useRef(null),
        B = N > v,
        V = l.useCallback(() => {
            S("interact");
        }, [S]),
        K = l.useCallback(() => {
            F(!1), T("interact");
        }, [T]),
        W = l.useMemo(() => {
            let e = 120 * Math.min(L, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [L]),
        z = l.useCallback(
            (e) => {
                if (null == H.current || null == P.current) return;
                let t = H.current.getBoundingClientRect(),
                    n = P.current.clientWidth,
                    i = P.current.clientHeight,
                    l = e.x - t.left,
                    s = e.y - t.top;
                k(U({ x: (0.5 - l / t.width) * n * N, y: (0.5 - s / t.height) * i * N }));
            },
            [U, N, P, k],
        ),
        Y = l.useCallback(
            (e) => {
                C(e) && (e.preventDefault(), e.stopPropagation(), F(!0), z({ x: e.clientX, y: e.clientY }));
            },
            [z],
        ),
        q = l.useCallback(
            (e) => {
                G && (e.preventDefault(), e.stopPropagation(), z({ x: e.clientX, y: e.clientY }));
            },
            [G, z],
        ),
        J = l.useCallback(
            (e) => {
                !G || C(e) || (e.preventDefault(), e.stopPropagation(), F(!1));
            },
            [G],
        ),
        $ = m.Ay.getVideoComponent(),
        Z = l.useMemo(() => {
            let e = null != P.current ? P.current.clientWidth : 1,
                t = null != P.current ? P.current.clientHeight : 1,
                n = 1 / N,
                i = 1 / N,
                l = 0.5 - w.x / (e * N),
                s = 0.5 - w.y / (t * N);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, r.clamp))(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, r.clamp))(s - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    b || G || j || R
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [b, G, j, R, w, N, P]),
        X = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), D(N - 0.25, _, "button");
            },
            [D, N],
        ),
        Q = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), D(N + 0.25, _, "button");
            },
            [D, N],
        ),
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                M(!0),
                    D(e, _, "slider"),
                    x(),
                    null == ee.current && (ee.current = new o.Ep()),
                    ee.current.start(100, () => {
                        M(!1);
                    });
            },
            [D, x, M],
        );
    return ((0, u.l0)(() => {
        ee.current?.stop();
    }),
    I && null != n)
        ? (0, i.jsxs)("div", {
              className: a()(f.ne, { [f.Ge]: O || B }),
              onMouseEnter: V,
              onMouseLeave: K,
              onClick: E,
              children: [
                  (O || B) &&
                      (0, i.jsx)(d.DUT, {
                          onClick: E,
                          onMouseEnter: V,
                          onMouseLeave: K,
                          children: (0, i.jsxs)("div", {
                              ref: H,
                              className: f.Wc,
                              style: W,
                              onMouseDown: Y,
                              onMouseMove: q,
                              onMouseUp: J,
                              children: [
                                  (0, i.jsx)($, {
                                      className: a()(f.BZ, { [p.mirror]: t }),
                                      streamId: n,
                                      paused: s,
                                      reportContainerResized: !1,
                                  }),
                                  (0, i.jsx)("div", { className: f.xq, style: Z }),
                              ],
                          }),
                      }),
                  (0, i.jsxs)("div", {
                      className: f.xu,
                      children: [
                          (O || B) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.m_, {
                                          text: g.intl.string(g.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(d.K0, {
                                              icon: d.V0_,
                                              onClick: X,
                                              disabled: N <= v,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": g.intl.string(g.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(d.Apm, {
                                          minValue: v,
                                          maxValue: y,
                                          initialValue: N,
                                          value: N,
                                          asValueChanges: et,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": g.intl.string(g.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, i.jsx)(c.m_, {
                              text: g.intl.string(g.t["9hMafy"]),
                              position: "top",
                              children: (0, i.jsx)(d.K0, {
                                  icon: d.r1u,
                                  onClick: Q,
                                  disabled: N >= y,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  "aria-label": g.intl.string(g.t["9hMafy"]),
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
});
