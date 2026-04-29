n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
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
    x = n(51760),
    A = n(40056),
    v = n(985018),
    E = n(473772),
    C = n(590782);
function I(e) {
    e.preventDefault(), e.stopPropagation();
}
function j(e) {
    return (1 & e.buttons) == 1;
}
let _ = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: _, onPreventIdle: S, onAllowIdle: N } = l.useContext(h.k3),
        {
            enabled: b,
            zoomLevel: y,
            minZoom: w,
            maxZoom: R,
            isDragging: k,
            isWheeling: T,
            isSlidering: D,
            setIsSlidering: O,
            doZoom: L,
            isZooming: M,
            videoAspectRatio: V,
            wrapperRef: P,
            panOffset: F,
            setPanOffset: G,
            clampPanOffset: H,
        } = l.useContext(A.e9),
        [U, z] = l.useState(!1),
        W = l.useRef(null),
        $ = y > w,
        B = l.useCallback(() => {
            S("interact");
        }, [S]),
        Y = l.useCallback(() => {
            z(!1), N("interact");
        }, [N]),
        Z = l.useMemo(() => {
            let e = 120 * Math.min(V, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [V]),
        Q = l.useCallback(
            (e) => {
                if (null == W.current || null == P.current) return;
                let t = W.current.getBoundingClientRect(),
                    n = P.current.clientWidth,
                    i = P.current.clientHeight,
                    l = e.x - t.left,
                    s = e.y - t.top;
                G(H({ x: (0.5 - l / t.width) * n * y, y: (0.5 - s / t.height) * i * y }));
            },
            [H, y, P, G],
        ),
        K = l.useCallback(
            (e) => {
                j(e) && (e.preventDefault(), e.stopPropagation(), z(!0), Q({ x: e.clientX, y: e.clientY }));
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
                !U || j(e) || (e.preventDefault(), e.stopPropagation(), z(!1));
            },
            [U],
        ),
        J = x.Ay.getVideoComponent(),
        ee = l.useMemo(() => {
            let e = null != P.current ? P.current.clientWidth : 1,
                t = null != P.current ? P.current.clientHeight : 1,
                n = 1 / y,
                i = 1 / y,
                l = 0.5 - F.x / (e * y),
                s = 0.5 - F.y / (t * y);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, r.clamp))(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, r.clamp))(s - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    k || U || T || D
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [k, U, T, D, F, y, P]),
        et = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y - 0.25, A.qd, "button");
            },
            [L, y],
        ),
        en = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L(y + 0.25, A.qd, "button");
            },
            [L, y],
        ),
        ei = l.useRef(null),
        el = l.useCallback(
            (e) => {
                O(!0),
                    L(e, A.qd, "slider"),
                    _(),
                    null == ei.current && (ei.current = new o.Ep()),
                    ei.current.start(100, () => {
                        O(!1);
                    });
            },
            [L, _, O],
        );
    return ((0, f.l0)(() => {
        ei.current?.stop();
    }),
    b && null != n)
        ? (0, i.jsxs)("div", {
              className: a()(C.ne, { [C.Ge]: M || $ }),
              onMouseEnter: B,
              onMouseLeave: Y,
              onClick: I,
              children: [
                  (M || $) &&
                      (0, i.jsx)(c.D, {
                          onClick: I,
                          onMouseEnter: B,
                          onMouseLeave: Y,
                          children: (0, i.jsxs)("div", {
                              ref: W,
                              className: C.Wc,
                              style: Z,
                              onMouseDown: K,
                              onMouseMove: X,
                              onMouseUp: q,
                              children: [
                                  (0, i.jsx)(J, {
                                      className: a()(C.BZ, { [E.mirror]: t }),
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
                          (M || $) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(u.m, {
                                          text: v.intl.string(v.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(d.K, {
                                              icon: m.V,
                                              onClick: et,
                                              disabled: y <= w,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": v.intl.string(v.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(p.A, {
                                          minValue: w,
                                          maxValue: R,
                                          initialValue: y,
                                          value: y,
                                          asValueChanges: el,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": v.intl.string(v.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, i.jsx)(u.m, {
                              text: v.intl.string(v.t["9hMafy"]),
                              position: "top",
                              children: (0, i.jsx)(d.K, {
                                  icon: g.r,
                                  onClick: en,
                                  disabled: y >= R,
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
