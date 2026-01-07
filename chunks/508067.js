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
            duration: O,
            rounded: h,
            maxSeekableTime: C,
            onClick: b,
            onScrubBack: S,
            onScrubForward: _,
        } = e,
        [y, x] = o.useState(null),
        [j, D] = o.useState(null),
        [P, T] = o.useState(null),
        [R, N] = o.useState(!1),
        I = o.useRef(null),
        A = (e) => {
            (I.current = e), x(e);
        };
    o.useEffect(() => {
        null != y && (null == C ? T(null) : T(p(C, O, y)));
    }, [y, C, O]);
    let L = (0, c.Z)((e) => {
            A(e.contentRect);
        }),
        w = (0, s.y)(L);
    o.useLayoutEffect(() => {
        null != w.current && A(w.current.getBoundingClientRect());
    }, [w]),
        o.useEffect(() => {
            let e = () => {
                null != w.current && A(w.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [w]);
    let k = (e) => {
            D(e.clientX);
        },
        M = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != S
                    ? (e.preventDefault(), e.stopPropagation(), S())
                    : t === d.mR.ArrowRight && null != _ && (e.preventDefault(), e.stopPropagation(), _());
            },
            [S, _],
        ),
        V = null != j && null != y ? f(j, y, O) : 0,
        Z = (0, u.yv)(V),
        F = null != y ? y.right - p((n / 100) * O, O, y) : null,
        B = null != j && null != y ? y.right - j : null,
        U = null != P && null != y ? y.right - P : null;
    return (0, r.jsxs)("div", {
        className: m.cont,
        ref: w,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: i()(m.hitboxArea, { [m.interactionEnabled]: v }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    v && null != b && b(f(e.clientX, e.currentTarget.getBoundingClientRect(), O));
                },
                onMouseEnter: (e) => {
                    v && (null != w.current && A(w.current.getBoundingClientRect()), N(!0), k(e));
                },
                onMouseLeave: (e) => {
                    v && (N(!1), D(null));
                },
                onMouseMove: (e) => {
                    v && R && k(e);
                },
                onKeyDown: M,
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
                                      className: i()(m.buffer, {
                                          [m.bufferHovered]: R,
                                          [m.rounded]: h,
                                      }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !v &&
                        null != U &&
                        U > 0 &&
                        (0, r.jsx)("div", {
                            className: i()(m.seekableBar, { [m.rounded]: h }),
                            style: {
                                right: null != U ? "".concat(U, "px") : "auto",
                                opacity: +(null != U),
                            },
                        }),
                    (0, r.jsx)(a.Exd, {
                        className: i()(m.progress, { [m.rounded]: h }),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != E ? E : void 0,
                        size: R ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL,
                        animate: l,
                    }),
                    R &&
                        null != Z &&
                        t &&
                        (0, r.jsx)(a.Text, {
                            className: m.timeDisplay,
                            variant: "text-xs/normal",
                            style: {
                                right: null != B ? "".concat(B - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: Z,
                        }),
                    R &&
                        v &&
                        null != F &&
                        (0, r.jsx)("div", {
                            className: m.grabber,
                            style: { right: "".concat(F - 6, "px") },
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
