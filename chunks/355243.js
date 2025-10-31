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
    m = n(412331);
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
            maxSeekableTime: O,
            onClick: b,
            onScrubBack: h,
            onScrubForward: S,
        } = e,
        [C, _] = o.useState(null),
        [y, j] = o.useState(null),
        [x, T] = o.useState(null),
        [D, P] = o.useState(!1),
        R = o.useRef(null),
        I = (e) => {
            (R.current = e), _(e);
        };
    o.useEffect(() => {
        null != C && (null == O ? T(null) : T(f(O, g, C)));
    }, [C, O, g]);
    let w = (0, c.Z)((e) => {
            I(e.contentRect);
        }),
        N = (0, s.y)(w);
    o.useLayoutEffect(() => {
        null != N.current && I(N.current.getBoundingClientRect());
    }, [N]),
        o.useEffect(() => {
            let e = () => {
                null != N.current && I(N.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [N]);
    let k = (e) => {
            j(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != h
                    ? (e.preventDefault(), e.stopPropagation(), h())
                    : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [h, S],
        ),
        A = null != y && null != C ? p(y, C, g) : 0,
        M = (0, u.yv)(A),
        V = null != C ? C.right - f((t / 100) * g, g, C) : null,
        Z = null != y && null != C ? C.right - y : null,
        B = null != x && null != C ? C.right - x : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: N,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: l }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    l && null != b && b(p(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    l && (null != N.current && I(N.current.getBoundingClientRect()), P(!0), k(e));
                },
                onMouseLeave: (e) => {
                    l && (P(!1), j(null));
                },
                onMouseMove: (e) => {
                    l && D && k(e);
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
                                      className: i()(m.buffer, { [m.bufferHovered]: D }),
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
                        l &&
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
