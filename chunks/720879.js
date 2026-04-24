t.d(n, { L: () => o, A: () => d });
var l = t(627968),
    r = t(64700),
    i = t(844222),
    a = t(350535),
    s = t(642481);
function o(e) {
    let {
            children: n,
            targetElementRef: t,
            estimatedTooltipHeight: o,
            delay: d = 300,
            onShow: u,
            title: c,
            body: m,
            graphic: f,
            size: p = "md",
            actions: g,
            gradientColor: h,
        } = e,
        x = r.useContext(i.C),
        [j, v] = r.useState("closed"),
        C = r.useRef(null),
        E = r.useRef(!1),
        b = "opening-mouse" === j || "open-mouse" === j,
        A = "opening-keyboard" === j || "open-keyboard" === j,
        y = "open-mouse" === j || "open-keyboard" === j,
        R = (x.keyboardModeEnabled || A) && null != g,
        [_, k] = r.useState(0),
        N = (function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                t = arguments.length > 2 ? arguments[2] : void 0,
                [l, i] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void i("top");
                    let t = e.current.getBoundingClientRect(),
                        l = window.innerWidth,
                        r = window.innerHeight,
                        a = { top: t.top, bottom: r - t.bottom, left: t.left, right: l - t.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (a[e] >= n) return void i(e);
                    i(s.reduce((e, n) => (a[n] > a[e] ? n : e), "top"));
                }, [e, n, t]),
                l
            );
        })(t, o, j),
        I = r.useCallback(() => {
            null != C.current && (clearTimeout(C.current), (C.current = null));
        }, []),
        D = r.useCallback(
            (e) => {
                e && (E.current = !0), I(), v("closing");
            },
            [I],
        );
    r.useEffect(() => I, [I]);
    let S = r.useCallback(() => {
            ("closed" === j || "closing" === j) && (I(), v("opening-mouse"));
        }, [I, j]),
        T = r.useCallback(() => {
            b && D(!1);
        }, [D, b]),
        O = r.useCallback(() => {
            if (E.current || ("closed" !== j && "closing" !== j)) {
                E.current = !1;
                return;
            }
            I(), v("opening-keyboard");
        }, [I, j]),
        w = r.useCallback(() => {
            (R && "opening-keyboard" !== j) || D(!1);
        }, [D, j, R]);
    r.useEffect(() => {
        if ("opening-mouse" === j)
            return (
                (C.current = window.setTimeout(() => {
                    (C.current = null), v("open-mouse"), u?.();
                }, d)),
                I
            );
    }, [j, d, u, I]),
        r.useEffect(() => {
            if ("opening-keyboard" === j)
                return (
                    (C.current = window.setTimeout(() => {
                        (C.current = null), v("open-keyboard"), u?.();
                    }, d)),
                    I
                );
        }, [j, d, u, I]),
        r.useEffect(() => {
            if ("closing" === j)
                return (
                    (C.current = window.setTimeout(() => {
                        (C.current = null), v("closed");
                    }, 200)),
                    I
                );
        }, [j, I]),
        r.useEffect(() => {
            if (!y) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), D(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [y, D]);
    let B = r.useMemo(
            () =>
                null == g
                    ? g
                    : g.map((e) => ({
                          ...e,
                          onClick: (n) => {
                              e.onClick?.(n), D(!1);
                          },
                      })),
            [g, D],
        ),
        G = r.useCallback((e) => {
            k(e);
        }, []);
    return (0, l.jsxs)("div", {
        onMouseEnter: S,
        onMouseLeave: T,
        onFocus: O,
        onBlur: w,
        children: [
            n,
            (0, l.jsx)(s.j, {
                targetElementRef: t,
                shouldShow: y,
                position: N,
                align: "center",
                title: c,
                body: m,
                graphic: f,
                size: p,
                actions: B,
                gradientColor: h,
                showCloseButton: R,
                shouldTrapFocus: R,
                returnRef: R ? t : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: _ },
                onNudgeChange: G,
                onRequestClose: (e) => {
                    D(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let d = o;
