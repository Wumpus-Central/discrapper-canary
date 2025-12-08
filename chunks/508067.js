n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(939389),
    d = n(295907),
    m = n(171214);
function f(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function v(e) {
    let {
            percent: t,
            animate: n,
            interactionEnabled: l,
            backgroundColor: v,
            preloadedBuffers: E,
            duration: g,
            rounded: O,
            maxSeekableTime: h,
            onClick: b,
            onScrubBack: C,
            onScrubForward: S,
        } = e,
        [_, y] = o.useState(null),
        [x, j] = o.useState(null),
        [P, D] = o.useState(null),
        [R, T] = o.useState(!1),
        I = o.useRef(null),
        N = (e) => {
            (I.current = e), y(e);
        };
    o.useEffect(() => {
        null != _ && (null == h ? D(null) : D(p(h, g, _)));
    }, [_, h, g]);
    let A = (0, c.Z)((e) => {
            N(e.contentRect);
        }),
        w = (0, s.y)(A);
    o.useLayoutEffect(() => {
        null != w.current && N(w.current.getBoundingClientRect());
    }, [w]),
        o.useEffect(() => {
            let e = () => {
                null != w.current && N(w.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [w]);
    let L = (e) => {
            j(e.clientX);
        },
        k = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != C
                    ? (e.preventDefault(), e.stopPropagation(), C())
                    : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [C, S],
        ),
        M = null != x && null != _ ? f(x, _, g) : 0,
        V = (0, u.yv)(M),
        Z = null != _ ? _.right - p((t / 100) * g, g, _) : null,
        F = null != x && null != _ ? _.right - x : null,
        B = null != P && null != _ ? _.right - P : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: w,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    l && null != b && b(f(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    l && (null != w.current && N(w.current.getBoundingClientRect()), T(!0), L(e));
                },
                onMouseLeave: (e) => {
                    l && (T(!1), j(null));
                },
                onMouseMove: (e) => {
                    l && R && L(e);
                },
                onKeyDown: k,
                tabIndex: l ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12,
                    },
                },
                children: [
                    null == E
                        ? void 0
                        : E.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: i()(m.buffer, {
                                          [m.bufferHovered]: R,
                                          [m.rounded]: O,
                                      }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !l &&
                        null != B &&
                        B > 0 &&
                        (0, r.jsx)("div", {
                            className: i()(m.seekableBar, { [m.rounded]: O }),
                            style: {
                                right: null != B ? "".concat(B, "px") : "auto",
                                opacity: +(null != B),
                            },
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: i()(m.progress, { [m.rounded]: O }),
                        percent: t,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != v ? v : void 0,
                        size: R ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n,
                    }),
                    R &&
                        null != V &&
                        (0, r.jsx)(a.Text, {
                            className: m.timeDisplay,
                            variant: "text-xs/normal",
                            style: {
                                right: null != F ? "".concat(F - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: V,
                        }),
                    R &&
                        l &&
                        null != Z &&
                        (0, r.jsx)("div", {
                            className: m.grabber,
                            style: { right: "".concat(Z - 6, "px") },
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.progressGlow,
                style: { width: "".concat(t, "%") },
            }),
        ],
    });
}
