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
function _(e) {
    e.preventDefault(), e.stopPropagation();
}
function E(e) {
    return (1 & e.buttons) == 1;
}
let x = l.memo(function (e) {
    let { mirror: t = !1, streamId: n, paused: s } = e,
        { onActive: x, onPreventIdle: C, onAllowIdle: S } = l.useContext(h.k3),
        {
            enabled: I,
            zoomLevel: T,
            minZoom: N,
            maxZoom: y,
            isDragging: b,
            isWheeling: v,
            isSlidering: j,
            setIsSlidering: R,
            doZoom: M,
            isZooming: D,
            videoAspectRatio: O,
            wrapperRef: L,
            panOffset: P,
            setPanOffset: w,
            clampPanOffset: k,
        } = l.useContext(A.e9),
        [U, G] = l.useState(!1),
        F = l.useRef(null),
        H = T > N,
        B = l.useCallback(() => {
            C("interact");
        }, [C]),
        V = l.useCallback(() => {
            G(!1), S("interact");
        }, [S]),
        K = l.useMemo(() => {
            let e = 120 * Math.min(O, 32 / 9);
            return { "--custom-zoom-minimap-width": `${e}px`, "--custom-zoom-minimap-height": "120px" };
        }, [O]),
        z = l.useCallback(
            (e) => {
                if (null == F.current || null == L.current) return;
                let t = F.current.getBoundingClientRect(),
                    n = L.current.clientWidth,
                    i = L.current.clientHeight,
                    l = e.x - t.left,
                    s = e.y - t.top;
                w(k({ x: (0.5 - l / t.width) * n * T, y: (0.5 - s / t.height) * i * T }));
            },
            [k, T, L, w],
        ),
        W = l.useCallback(
            (e) => {
                E(e) && (e.preventDefault(), e.stopPropagation(), G(!0), z({ x: e.clientX, y: e.clientY }));
            },
            [z],
        ),
        Y = l.useCallback(
            (e) => {
                U && (e.preventDefault(), e.stopPropagation(), z({ x: e.clientX, y: e.clientY }));
            },
            [U, z],
        ),
        q = l.useCallback(
            (e) => {
                !U || E(e) || (e.preventDefault(), e.stopPropagation(), G(!1));
            },
            [U],
        ),
        J = m.Ay.getVideoComponent(),
        $ = l.useMemo(() => {
            let e = null != L.current ? L.current.clientWidth : 1,
                t = null != L.current ? L.current.clientHeight : 1,
                n = 1 / T,
                i = 1 / T,
                l = 0.5 - P.x / (e * T),
                s = 0.5 - P.y / (t * T);
            return {
                "--custom-zoom-indicator-left": `${100 * ((0, r.clamp))(l - n / 2, 0, 1 - n)}%`,
                "--custom-zoom-indicator-top": `${100 * ((0, r.clamp))(s - i / 2, 0, 1 - i)}%`,
                "--custom-zoom-indicator-width": `${100 * n}%`,
                "--custom-zoom-indicator-height": `${100 * i}%`,
                "--custom-zoom-indicator-transition":
                    b || U || v || j
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [b, U, v, j, P, T, L]),
        Z = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(T - 0.25, A.qd, "button");
            },
            [M, T],
        ),
        X = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M(T + 0.25, A.qd, "button");
            },
            [M, T],
        ),
        Q = l.useRef(null),
        ee = l.useCallback(
            (e) => {
                R(!0),
                    M(e, A.qd, "slider"),
                    x(),
                    null == Q.current && (Q.current = new o.Ep()),
                    Q.current.start(100, () => {
                        R(!1);
                    });
            },
            [M, x, R],
        );
    return ((0, u.l0)(() => {
        Q.current?.stop();
    }),
    I && null != n)
        ? (0, i.jsxs)("div", {
              className: a()(f.ne, { [f.Ge]: D || H }),
              onMouseEnter: B,
              onMouseLeave: V,
              onClick: _,
              children: [
                  (D || H) &&
                      (0, i.jsx)(d.DUT, {
                          onClick: _,
                          onMouseEnter: B,
                          onMouseLeave: V,
                          children: (0, i.jsxs)("div", {
                              ref: F,
                              className: f.Wc,
                              style: K,
                              onMouseDown: W,
                              onMouseMove: Y,
                              onMouseUp: q,
                              children: [
                                  (0, i.jsx)(J, {
                                      className: a()(f.BZ, { [p.mirror]: t }),
                                      streamId: n,
                                      paused: s,
                                      reportContainerResized: !1,
                                  }),
                                  (0, i.jsx)("div", { className: f.xq, style: $ }),
                              ],
                          }),
                      }),
                  (0, i.jsxs)("div", {
                      className: f.xu,
                      children: [
                          (D || H) &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.m_, {
                                          text: g.intl.string(g.t.M6Cmwy),
                                          position: "top",
                                          children: (0, i.jsx)(d.K0, {
                                              icon: d.V0_,
                                              onClick: Z,
                                              disabled: T <= N,
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              "aria-label": g.intl.string(g.t.M6Cmwy),
                                          }),
                                      }),
                                      (0, i.jsx)(d.Apm, {
                                          minValue: N,
                                          maxValue: y,
                                          initialValue: T,
                                          value: T,
                                          asValueChanges: ee,
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
                                  onClick: X,
                                  disabled: T >= y,
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
