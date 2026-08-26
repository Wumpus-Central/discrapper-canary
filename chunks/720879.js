n.d(t, { L: () => c, A: () => u });
var a = n(477900),
    l = n(582128),
    r = n(844222),
    s = n(775602),
    i = n(350535),
    o = n(642481),
    d = n(650583);
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: u = 300,
            onShow: f,
            title: m,
            body: E,
            graphic: g,
            size: p = "md",
            actions: b,
            gradientColor: h,
        } = e,
        _ = l.useContext(r.C),
        [x, A] = l.useState("closed"),
        R = l.useRef(null),
        v = l.useRef(!1),
        N = "opening-mouse" === x || "open-mouse" === x,
        I = "opening-keyboard" === x || "open-keyboard" === x,
        T = "open-mouse" === x || "open-keyboard" === x,
        j = (_.keyboardModeEnabled || I) && null != b,
        [C, S] = l.useState(0),
        y = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [a, r] = l.useState("top");
            return (
                l.useEffect(() => {
                    if (null == e.current) return void r("top");
                    let n = e.current.getBoundingClientRect(),
                        a = window.innerWidth,
                        l = window.innerHeight,
                        s = { top: n.top, bottom: l - n.bottom, left: n.left, right: a - n.right },
                        i = ["top", "bottom", "right", "left"];
                    for (let e of i) if (s[e] >= t) return void r(e);
                    r(i.reduce((e, t) => (s[t] > s[e] ? t : e), "top"));
                }, [e, t, n]),
                a
            );
        })(n, c, x),
        D = l.useCallback(() => {
            null != R.current && (clearTimeout(R.current), (R.current = null));
        }, []),
        M = l.useCallback(
            (e) => {
                e && (v.current = !0), D(), A("closing");
            },
            [D],
        );
    l.useEffect(() => D, [D]);
    let O = l.useCallback(() => {
            ("closed" === x || "closing" === x) && (D(), A("opening-mouse"));
        }, [D, x]),
        P = l.useCallback(() => {
            N && M(!1);
        }, [M, N]),
        U = l.useCallback(() => {
            if (v.current || !s.Ay.keyboardModeEnabled || ("closed" !== x && "closing" !== x)) {
                v.current = !1;
                return;
            }
            D(), A("opening-keyboard");
        }, [D, x]),
        B = l.useCallback(() => {
            (j && "opening-keyboard" !== x) || M(!1);
        }, [M, x, j]);
    l.useEffect(() => {
        if ("opening-mouse" === x)
            return (
                (R.current = window.setTimeout(() => {
                    (R.current = null), A("open-mouse"), f?.();
                }, u)),
                D
            );
    }, [x, u, f, D]),
        l.useEffect(() => {
            if ("opening-keyboard" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), A("open-keyboard"), f?.();
                    }, u)),
                    D
                );
        }, [x, u, f, D]),
        l.useEffect(() => {
            if ("closing" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), A("closed");
                    }, 200)),
                    D
                );
        }, [x, D]),
        l.useEffect(() => {
            if (T)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [T, M]);
    let k = l.useMemo(
            () =>
                null == b
                    ? b
                    : b.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), M(!1);
                          },
                      })),
            [b, M],
        ),
        G = l.useCallback((e) => {
            S(e);
        }, []);
    return (0, a.jsxs)("div", {
        onMouseEnter: O,
        onMouseLeave: P,
        onFocus: U,
        onBlur: B,
        children: [
            t,
            (0, a.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: T,
                position: y,
                align: "center",
                title: m,
                body: E,
                graphic: g,
                size: p,
                actions: k,
                gradientColor: h,
                showCloseButton: j,
                shouldTrapFocus: j,
                returnRef: j ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: C },
                onNudgeChange: G,
                onRequestClose: (e) => {
                    M(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
