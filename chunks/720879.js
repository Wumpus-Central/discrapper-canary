n.d(t, { L: () => c, A: () => u });
var a = n(627968),
    l = n(64700),
    r = n(844222),
    s = n(775602),
    i = n(350535),
    d = n(642481),
    o = n(650583);
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: u = 300,
            onShow: f,
            title: E,
            body: m,
            graphic: g,
            size: p = "md",
            actions: b,
            gradientColor: _,
        } = e,
        h = l.useContext(r.C),
        [A, R] = l.useState("closed"),
        x = l.useRef(null),
        N = l.useRef(!1),
        v = "opening-mouse" === A || "open-mouse" === A,
        I = "opening-keyboard" === A || "open-keyboard" === A,
        T = "open-mouse" === A || "open-keyboard" === A,
        j = (h.keyboardModeEnabled || I) && null != b,
        [C, S] = l.useState(0),
        D = (function (e) {
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
        })(n, c, A),
        y = l.useCallback(() => {
            null != x.current && (clearTimeout(x.current), (x.current = null));
        }, []),
        M = l.useCallback(
            (e) => {
                e && (N.current = !0), y(), R("closing");
            },
            [y],
        );
    l.useEffect(() => y, [y]);
    let O = l.useCallback(() => {
            ("closed" === A || "closing" === A) && (y(), R("opening-mouse"));
        }, [y, A]),
        P = l.useCallback(() => {
            v && M(!1);
        }, [M, v]),
        U = l.useCallback(() => {
            if (N.current || !s.Ay.keyboardModeEnabled || ("closed" !== A && "closing" !== A)) {
                N.current = !1;
                return;
            }
            y(), R("opening-keyboard");
        }, [y, A]),
        B = l.useCallback(() => {
            (j && "opening-keyboard" !== A) || M(!1);
        }, [M, A, j]);
    l.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (x.current = window.setTimeout(() => {
                    (x.current = null), R("open-mouse"), f?.();
                }, u)),
                y
            );
    }, [A, u, f, y]),
        l.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (x.current = window.setTimeout(() => {
                        (x.current = null), R("open-keyboard"), f?.();
                    }, u)),
                    y
                );
        }, [A, u, f, y]),
        l.useEffect(() => {
            if ("closing" === A)
                return (
                    (x.current = window.setTimeout(() => {
                        (x.current = null), R("closed");
                    }, 200)),
                    y
                );
        }, [A, y]),
        l.useEffect(() => {
            if (T)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === o.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
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
            (0, a.jsx)(d.j, {
                targetElementRef: n,
                shouldShow: T,
                position: D,
                align: "center",
                title: E,
                body: m,
                graphic: g,
                size: p,
                actions: k,
                gradientColor: _,
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
