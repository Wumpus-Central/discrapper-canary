n.d(t, { L: () => o, A: () => d });
var l = n(627968),
    r = n(64700),
    i = n(844222),
    a = n(350535),
    s = n(642481);
function o(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: o,
            delay: d = 300,
            onShow: u,
            title: c,
            body: E,
            graphic: _,
            size: m = "md",
            actions: g,
            gradientColor: p,
        } = e,
        f = r.useContext(i.C),
        [h, R] = r.useState("closed"),
        v = r.useRef(null),
        x = r.useRef(!1),
        A = "opening-mouse" === h || "open-mouse" === h,
        O = "opening-keyboard" === h || "open-keyboard" === h,
        I = "open-mouse" === h || "open-keyboard" === h,
        b = (f.keyboardModeEnabled || O) && null != g,
        [U, C] = r.useState(0),
        T = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [l, i] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void i("top");
                    let n = e.current.getBoundingClientRect(),
                        l = window.innerWidth,
                        r = window.innerHeight,
                        a = { top: n.top, bottom: r - n.bottom, left: n.left, right: l - n.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (a[e] >= t) return void i(e);
                    i(s.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
                }, [e, t, n]),
                l
            );
        })(n, o, h),
        S = r.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
        }, []),
        j = r.useCallback(
            (e) => {
                e && (x.current = !0), S(), R("closing");
            },
            [S],
        );
    r.useEffect(() => S, [S]);
    let D = r.useCallback(() => {
            ("closed" === h || "closing" === h) && (S(), R("opening-mouse"));
        }, [S, h]),
        L = r.useCallback(() => {
            A && j(!1);
        }, [j, A]),
        y = r.useCallback(() => {
            if (x.current || ("closed" !== h && "closing" !== h)) {
                x.current = !1;
                return;
            }
            S(), R("opening-keyboard");
        }, [S, h]),
        N = r.useCallback(() => {
            (b && "opening-keyboard" !== h) || j(!1);
        }, [j, h, b]);
    r.useEffect(() => {
        if ("opening-mouse" === h)
            return (
                (v.current = window.setTimeout(() => {
                    (v.current = null), R("open-mouse"), u?.();
                }, d)),
                S
            );
    }, [h, d, u, S]),
        r.useEffect(() => {
            if ("opening-keyboard" === h)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), R("open-keyboard"), u?.();
                    }, d)),
                    S
                );
        }, [h, d, u, S]),
        r.useEffect(() => {
            if ("closing" === h)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), R("closed");
                    }, 200)),
                    S
                );
        }, [h, S]),
        r.useEffect(() => {
            if (!I) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), j(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [I, j]);
    let P = r.useMemo(
            () =>
                null == g
                    ? g
                    : g.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), j(!1);
                          },
                      })),
            [g, j],
        ),
        B = r.useCallback((e) => {
            C(e);
        }, []);
    return (0, l.jsxs)("div", {
        onMouseEnter: D,
        onMouseLeave: L,
        onFocus: y,
        onBlur: N,
        children: [
            t,
            (0, l.jsx)(s.j, {
                targetElementRef: n,
                shouldShow: I,
                position: T,
                align: "center",
                title: c,
                body: E,
                graphic: _,
                size: m,
                actions: P,
                gradientColor: p,
                showCloseButton: b,
                shouldTrapFocus: b,
                returnRef: b ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: U },
                onNudgeChange: B,
                onRequestClose: (e) => {
                    j(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let d = o;
