n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(604162),
    d = n(295907),
    m = n(16954);
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
            interactionEnabled: o,
            backgroundColor: v,
            preloadedBuffers: g,
            duration: E,
            maxSeekableTime: b,
            onClick: O,
            onScrubBack: h,
            onScrubForward: C,
        } = e,
        [S, _] = l.useState(null),
        [y, j] = l.useState(null),
        [x, T] = l.useState(null),
        [D, R] = l.useState(!1),
        P = l.useRef(null),
        I = (e) => {
            (P.current = e), _(e);
        };
    l.useEffect(() => {
        null != S && (null == b ? T(null) : T(p(b, E, S)));
    }, [S, b, E]);
    let N = (0, c.Z)((e) => {
            I(e.contentRect);
        }),
        k = (0, s.y)(N);
    l.useLayoutEffect(() => {
        null != k.current && I(k.current.getBoundingClientRect());
    }, [k]),
        l.useEffect(() => {
            let e = () => {
                null != k.current && I(k.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [k]);
    let w = (e) => {
            j(e.clientX);
        },
        A = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != h
                    ? (e.preventDefault(), e.stopPropagation(), h())
                    : t === d.mR.ArrowRight && null != C && (e.preventDefault(), e.stopPropagation(), C());
            },
            [h, C],
        ),
        L = null != y && null != S ? f(y, S, E) : 0,
        M = (0, u.yv)(L),
        V = null != S ? S.right - p((t / 100) * E, E, S) : null,
        Z = null != y && null != S ? S.right - y : null,
        B = null != x && null != S ? S.right - x : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: k,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: o }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    o && null != O && O(f(e.clientX, e.currentTarget.getBoundingClientRect(), E));
                },
                onMouseEnter: (e) => {
                    o && (null != k.current && I(k.current.getBoundingClientRect()), R(!0), w(e));
                },
                onMouseLeave: (e) => {
                    o && (R(!1), j(null));
                },
                onMouseMove: (e) => {
                    o && D && w(e);
                },
                onKeyDown: A,
                tabIndex: o ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12,
                    },
                },
                children: [
                    null == g
                        ? void 0
                        : g.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: i()(m.buffer, { [m.bufferHovered]: D }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !o &&
                        null != B &&
                        B > 0 &&
                        (0, r.jsx)("div", {
                            className: m.seekableBar,
                            style: {
                                right: null != B ? "".concat(B, "px") : "auto",
                                opacity: +(null != B),
                            },
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: m.progress,
                        percent: t,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != v ? v : void 0,
                        size: D ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: n,
                    }),
                    D &&
                        null != M &&
                        (0, r.jsx)(a.Text, {
                            className: m.timeDisplay,
                            variant: "text-xs/normal",
                            style: {
                                right: null != Z ? "".concat(Z - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: M,
                        }),
                    D &&
                        o &&
                        null != V &&
                        (0, r.jsx)("div", {
                            className: m.grabber,
                            style: { right: "".concat(V - 6, "px") },
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
