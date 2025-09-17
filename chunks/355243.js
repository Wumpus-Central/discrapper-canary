n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    s = n(393903),
    c = n(448986),
    u = n(604162),
    d = n(295907),
    f = n(16954);
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
            preloadedBuffers: g,
            duration: _,
            maxSeekableTime: C,
            onClick: E,
            onScrubBack: S,
            onScrubForward: b,
        } = e,
        [O, h] = o.useState(null),
        [y, j] = o.useState(null),
        [x, T] = o.useState(null),
        [D, P] = o.useState(!1),
        I = o.useRef(null),
        R = (e) => {
            (I.current = e), h(e);
        };
    o.useEffect(() => {
        null != O && (null == C ? T(null) : T(m(C, _, O)));
    }, [O, C, _]);
    let k = (0, c.Z)((e) => {
            R(e.contentRect);
        }),
        N = (0, s.y)(k);
    o.useLayoutEffect(() => {
        null != N.current && R(N.current.getBoundingClientRect());
    }, [N]),
        o.useEffect(() => {
            let e = () => {
                null != N.current && R(N.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [N]);
    let A = (e) => {
            j(e.clientX);
        },
        w = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === d.mR.ArrowLeft && null != S
                    ? (e.preventDefault(), e.stopPropagation(), S())
                    : t === d.mR.ArrowRight && null != b && (e.preventDefault(), e.stopPropagation(), b());
            },
            [S, b],
        ),
        L = null != y && null != O ? p(y, O, _) : 0,
        M = (0, u.yv)(L),
        B = null != O ? O.right - m((t / 100) * _, _, O) : null,
        V = null != y && null != O ? O.right - y : null,
        F = null != x && null != O ? O.right - x : null;
    return (0, r.jsxs)("div", {
        className: f.cont,
        ref: N,
        children: [
            (0, r.jsxs)(i.P3F, {
                className: l()(f.hitboxArea, { [f.interactionEnabled]: a }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    a && null != E && E(p(e.clientX, e.currentTarget.getBoundingClientRect(), _));
                },
                onMouseEnter: (e) => {
                    a && (null != N.current && R(N.current.getBoundingClientRect()), P(!0), A(e));
                },
                onMouseLeave: (e) => {
                    a && (P(!1), j(null));
                },
                onMouseMove: (e) => {
                    a && D && A(e);
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
                    null == g
                        ? void 0
                        : g.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: l()(f.buffer, { [f.bufferHovered]: D }),
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
                        size: D ? i.Exd.Sizes.XSMALL : i.Exd.Sizes.XXSMALL,
                        animate: n,
                    }),
                    D &&
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
                    D &&
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
