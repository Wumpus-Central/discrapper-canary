n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(604162),
    d = n(295907),
    m = n(16954);
function p(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function f(e, t, n) {
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
            onScrubBack: S,
            onScrubForward: y,
        } = e,
        [C, _] = o.useState(null),
        [x, j] = o.useState(null),
        [T, D] = o.useState(null),
        [P, R] = o.useState(!1),
        I = o.useRef(null),
        N = (e) => {
            (I.current = e), _(e);
        };
    o.useEffect(() => {
        null != C && (null == h ? D(null) : D(f(h, g, C)));
    }, [C, h, g]);
    let w = (0, c.Z)((e) => {
            N(e.contentRect);
        }),
        A = (0, s.y)(w);
    o.useLayoutEffect(() => {
        null != A.current && N(A.current.getBoundingClientRect());
    }, [A]),
        o.useEffect(() => {
            let e = () => {
                null != A.current && N(A.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [A]);
    let k = (e) => {
            j(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != S
                    ? (e.preventDefault(), e.stopPropagation(), S())
                    : t === d.mR.ArrowRight && null != y && (e.preventDefault(), e.stopPropagation(), y());
            },
            [S, y],
        ),
        M = null != x && null != C ? p(x, C, g) : 0,
        V = (0, u.yv)(M),
        Z = null != C ? C.right - f((t / 100) * g, g, C) : null,
        F = null != x && null != C ? C.right - x : null,
        B = null != T && null != C ? C.right - T : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: A,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    l && null != b && b(p(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    l && (null != A.current && N(A.current.getBoundingClientRect()), R(!0), k(e));
                },
                onMouseLeave: (e) => {
                    l && (R(!1), j(null));
                },
                onMouseMove: (e) => {
                    l && P && k(e);
                },
                onKeyDown: L,
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
                                          [m.bufferHovered]: P,
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
                        size: P ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n,
                    }),
                    P &&
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
                    P &&
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
