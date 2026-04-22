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
    h = n(430452),
    A = n(40056),
    x = n(985018),
    v = n(473772),
    I = n(590782);
function E(e) {
    e.preventDefault(), e.stopPropagation();
}
function C(e) {
    return (1 & e.buttons) == 1;
}
let j = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: a } = e,
        { onActive: j, onPreventIdle: N, onAllowIdle: y } = l.useContext(g.k3),
        {
            enabled: b,
            zoomLevel: S,
            minZoom: w,
            maxZoom: T,
            isDragging: k,
            isWheeling: R,
            isSlidering: L,
            setIsSlidering: D,
            doZoom: M,
            isZooming: O,
            videoAspectRatio: F,
            wrapperRef: V,
            panOffset: P,
            setPanOffset: G,
            clampPanOffset: H,
        } = l.useContext(A.e9),
        [U, W] = l.useState(!1),
        z = l.useRef(null),
        B = S > w,
        Z = l.useCallback(() => {
            N("interact");
        }, [N]),
        Y = l.useCallback(() => {
            W(!1), y("interact");
        }, [y]),
        $ = l.useMemo(() => {
            let e = 120 * Math.min(F, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [F]),
        Q = l.useCallback(
            (e) => {
                if (null == z.current || null == V.current) return;
                let t = z.current.getBoundingClientRect(),
                    n = V.current.clientWidth,
                    i = V.current.clientHeight,
                    l = e.x - t.left,
                    a = e.y - t.top;
                G(H({ x: (0.5 - l / t.width) * n * S, y: (0.5 - a / t.height) * i * S }));
            },
            [H, S, V, G],
        ),
        K = l.useCallback(
            (e) => {
                C(e) && (e.preventDefault(), e.stopPropagation(), W(!0), Q({ x: e.clientX, y: e.clientY }));
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
                !U || C(e) || (e.preventDefault(), e.stopPropagation(), W(!1));
            },
            [U],
        ),
        J = h.Ay.getVideoComponent(),
        ee = l.useMemo(() => {
            let e = null != V.current ? V.current.clientWidth : 1,
                t = null != V.current ? V.current.clientHeight : 1,
                n = 1 / S,
                i = 1 / S,
                l = 0.5 - P.x / (e * S),
                a = 0.5 - P.y / (t * S);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, s.clamp))(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, s.clamp))(a - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    k || U || R || L
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [k, U, R, L, P, S, V]),
        et = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(S - 0.25, A.qd, "button");
            },
            [M, S],
        ),
        en = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(S + 0.25, A.qd, "button");
            },
            [M, S],
        ),
        ei = l.useRef(null),
        el = l.useCallback(
            (e) => {
                D(!0),
                    M(e, A.qd, "slider"),
                    j(),
                    null == ei.current && (ei.current = new o.Ep()),
                    ei.current.start(100, () => {
                        D(!1);
                    });
            },
            [M, j, D],
        );
    return ((0, p.l0)(() => {
        ei.current?.stop();
    }),
    b && null != n)
        ? (0, i.jsxs)("div", {
              className: r()(I.ne, { [I.Ge]: O || B }),
              onMouseEnter: Z,
              onMouseLeave: Y,
              onClick: E,
              children: [
                  (O || B) &&
                      (0, i.jsx)(c.D, {
                          onClick: E,
                          onMouseEnter: Z,
                          onMouseLeave: Y,
                          children: (0, i.jsxs)("div", {
                              ref: z,
                              className: I.Wc,
                              style: $,
                              onMouseDown: K,
                              onMouseMove: X,
                              onMouseUp: q,
                              children: [
                                  (0, i.jsx)(J, {
                                      className: r()(I.BZ, { [v.mirror]: t }),
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
                          (O || B) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.m, {
                                          text: x.intl.string(x.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(u.K, {
                                              icon: _.V,
                                              onClick: et,
                                              disabled: S <= w,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": x.intl.string(x.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(f.A, {
                                          minValue: w,
                                          maxValue: T,
                                          initialValue: S,
                                          value: S,
                                          asValueChanges: el,
                                          onValueRender: (e) => `${Math.round(100 * e)}%`,
                                          "aria-label": x.intl.string(x.t.grzPmr),
                                      }),
                                  ],
                              }),
                          (0, i.jsx)(d.m, {
                              text: x.intl.string(x.t["9hMafy"]),
                              position: "top",
                              children: (0, i.jsx)(u.K, {
                                  icon: m.r,
                                  onClick: en,
                                  disabled: S >= T,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  "aria-label": x.intl.string(x.t["9hMafy"]),
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
});
