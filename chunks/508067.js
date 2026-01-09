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
    m = n(238384);
function f(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function v(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: l,
            interactionEnabled: v,
            backgroundColor: E,
            preloadedBuffers: g,
            duration: h,
            maxSeekableTime: C,
            onClick: S,
            onScrubBack: b,
            onScrubForward: O,
        } = e,
        [_, x] = o.useState(null),
        [y, j] = o.useState(null),
        [P, D] = o.useState(null),
        [T, R] = o.useState(!1),
        N = o.useRef(null),
        I = (e) => {
            (N.current = e), x(e);
        };
    o.useEffect(() => {
        null != _ && (null == C ? D(null) : D(p(C, h, _)));
    }, [_, C, h]);
    let A = (0, c.Z)((e) => {
            I(e.contentRect);
        }),
        w = (0, s.y)(A);
    o.useLayoutEffect(() => {
        null != w.current && I(w.current.getBoundingClientRect());
    }, [w]),
        o.useEffect(() => {
            let e = () => {
                null != w.current && I(w.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [w]);
    let k = (e) => {
            j(e.clientX);
        },
        L = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != b
                    ? (e.preventDefault(), e.stopPropagation(), b())
                    : t === d.mR.ArrowRight && null != O && (e.preventDefault(), e.stopPropagation(), O());
            },
            [b, O],
        ),
        M = null != y && null != _ ? f(y, _, h) : 0,
        V = (0, u.yv)(M),
        Z = null != _ ? _.right - p((n / 100) * h, h, _) : null,
        F = null != y && null != _ ? _.right - y : null,
        B = null != P && null != _ ? _.right - P : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: w,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: v }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    v && null != S && S(f(e.clientX, e.currentTarget.getBoundingClientRect(), h));
                },
                onMouseEnter: (e) => {
                    v && (null != w.current && I(w.current.getBoundingClientRect()), R(!0), k(e));
                },
                onMouseLeave: (e) => {
                    v && (R(!1), j(null));
                },
                onMouseMove: (e) => {
                    v && T && k(e);
                },
                onKeyDown: L,
                tabIndex: v ? void 0 : -1,
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
                                      className: i()(m.buffer, m.rounded, { [m.bufferHovered]: T }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !v &&
                        null != B &&
                        B > 0 &&
                        (0, r.jsx)("div", {
                            className: i()(m.seekableBar, m.rounded),
                            style: {
                                right: null != B ? "".concat(B, "px") : "auto",
                                opacity: +(null != B),
                            },
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: i()(m.progress, m.rounded),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != E ? E : void 0,
                        size: T ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: l,
                    }),
                    T &&
                        null != V &&
                        t &&
                        (0, r.jsx)(a.Text, {
                            className: m.timeDisplay,
                            variant: "text-xs/normal",
                            style: {
                                right: null != F ? "".concat(F - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: V,
                        }),
                    T &&
                        v &&
                        null != Z &&
                        (0, r.jsx)("div", {
                            className: m.grabber,
                            style: { right: "".concat(Z - 6, "px") },
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.progressGlow,
                style: { width: "".concat(n, "%") },
            }),
        ],
    });
}
