n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(604162),
    d = n(420212),
    f = n(412331);
function p(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function m(e, t, n) {
    return n.left + (e / t) * n.width;
}
function v(e) {
    let {
            percent: t,
            animate: n,
            interactionEnabled: a,
            backgroundColor: v,
            preloadedBuffers: C,
            duration: E,
            maxSeekableTime: _,
            onClick: g,
            onScrubBack: S,
            onScrubForward: O,
        } = e,
        [b, h] = o.useState(null),
        [y, j] = o.useState(null),
        [T, x] = o.useState(null),
        [P, D] = o.useState(!1),
        R = o.useRef(null),
        I = (e) => {
            (R.current = e), h(e);
        };
    o.useEffect(() => {
        null != b && (null == _ ? x(null) : x(m(_, E, b)));
    }, [b, _, E]);
    let N = (0, c.Z)((e) => {
            I(e.contentRect);
        }),
        k = (0, s.y)(N);
    o.useLayoutEffect(() => {
        null != k.current && I(k.current.getBoundingClientRect());
    }, [k]),
        o.useEffect(() => {
            let e = () => {
                null != k.current && I(k.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [k]);
    let A = (e) => {
            j(e.clientX);
        },
        w = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != S
                    ? (e.preventDefault(), e.stopPropagation(), S())
                    : t === d.mR.ArrowRight && null != O && (e.preventDefault(), e.stopPropagation(), O());
            },
            [S, O],
        ),
        L = null != y && null != b ? p(y, b, E) : 0,
        M = (0, u.yv)(L),
        B = null != b ? b.right - m((t / 100) * E, E, b) : null,
        V = null != y && null != b ? b.right - y : null,
        F = null != T && null != b ? b.right - T : null;
    return (0, r.jsxs)("div", {
        className: f.cont,
        ref: k,
        children: [
            (0, r.jsxs)(i.P3F, {
                className: l()(f.hitboxArea, { [f.interactionEnabled]: a }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    a && null != g && g(p(e.clientX, e.currentTarget.getBoundingClientRect(), E));
                },
                onMouseEnter: (e) => {
                    a && (null != k.current && I(k.current.getBoundingClientRect()), D(!0), A(e));
                },
                onMouseLeave: (e) => {
                    a && (D(!1), j(null));
                },
                onMouseMove: (e) => {
                    a && P && A(e);
                },
                onKeyDown: w,
                tabIndex: a ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12,
                    },
                },
                children: [
                    null == C
                        ? void 0
                        : C.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: l()(f.buffer, { [f.bufferHovered]: P }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !a &&
                        null != F &&
                        F > 0 &&
                        (0, r.jsx)("div", {
                            className: f.seekableBar,
                            style: {
                                right: null != F ? "".concat(F, "px") : "auto",
                                opacity: +(null != F),
                            },
                        }),
                    (0, r.jsx)(i.Exd, {
                        className: f.progress,
                        percent: t,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != v ? v : void 0,
                        size: P ? i.Exd.Sizes.XSMALL : i.Exd.Sizes.XXSMALL,
                        animate: n,
                    }),
                    P &&
                        null != M &&
                        (0, r.jsx)(i.Text, {
                            className: f.timeDisplay,
                            variant: "text-xs/normal",
                            style: {
                                right: null != V ? "".concat(V - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: M,
                        }),
                    P &&
                        a &&
                        null != B &&
                        (0, r.jsx)("div", {
                            className: f.grabber,
                            style: { right: "".concat(B - 6, "px") },
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: f.progressGlow,
                style: { width: "".concat(t, "%") },
            }),
        ],
    });
}
