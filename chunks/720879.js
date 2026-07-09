n.d(t, { L: () => c, A: () => u });
var a = n(627968),
    r = n(64700),
    l = n(844222),
    i = n(775602),
    s = n(350535),
    d = n(642481),
    o = n(650583);
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: u = 300,
            onShow: f,
            title: m,
            body: E,
            graphic: _,
            size: g = "md",
            actions: p,
            gradientColor: b,
        } = e,
        h = r.useContext(l.C),
        [A, R] = r.useState("closed"),
        v = r.useRef(null),
        x = r.useRef(!1),
        I = "opening-mouse" === A || "open-mouse" === A,
        N = "opening-keyboard" === A || "open-keyboard" === A,
        T = "open-mouse" === A || "open-keyboard" === A,
        j = (h.keyboardModeEnabled || N) && null != p,
        [S, M] = r.useState(0),
        C = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [a, l] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void l("top");
                    let n = e.current.getBoundingClientRect(),
                        a = window.innerWidth,
                        r = window.innerHeight,
                        i = { top: n.top, bottom: r - n.bottom, left: n.left, right: a - n.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (i[e] >= t) return void l(e);
                    l(s.reduce((e, t) => (i[t] > i[e] ? t : e), "top"));
                }, [e, t, n]),
                a
            );
        })(n, c, A),
        y = r.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
        }, []),
        D = r.useCallback(
            (e) => {
                e && (x.current = !0), y(), R("closing");
            },
            [y],
        );
    r.useEffect(() => y, [y]);
    let O = r.useCallback(() => {
            ("closed" === A || "closing" === A) && (y(), R("opening-mouse"));
        }, [y, A]),
        U = r.useCallback(() => {
            I && D(!1);
        }, [D, I]),
        P = r.useCallback(() => {
            if (x.current || !i.Ay.keyboardModeEnabled || ("closed" !== A && "closing" !== A)) {
                x.current = !1;
                return;
            }
            y(), R("opening-keyboard");
        }, [y, A]),
        B = r.useCallback(() => {
            (j && "opening-keyboard" !== A) || D(!1);
        }, [D, A, j]);
    r.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (v.current = window.setTimeout(() => {
                    (v.current = null), R("open-mouse"), f?.();
                }, u)),
                y
            );
    }, [A, u, f, y]),
        r.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), R("open-keyboard"), f?.();
                    }, u)),
                    y
                );
        }, [A, u, f, y]),
        r.useEffect(() => {
            if ("closing" === A)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), R("closed");
                    }, 200)),
                    y
                );
        }, [A, y]),
        r.useEffect(() => {
            if (T)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === o.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), D(!0));
            }
        }, [T, D]);
    let G = r.useMemo(
            () =>
                null == p
                    ? p
                    : p.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), D(!1);
                          },
                      })),
            [p, D],
        ),
        k = r.useCallback((e) => {
            M(e);
        }, []);
    return (0, a.jsxs)("div", {
        onMouseEnter: O,
        onMouseLeave: U,
        onFocus: P,
        onBlur: B,
        children: [
            t,
            (0, a.jsx)(d.j, {
                targetElementRef: n,
                shouldShow: T,
                position: C,
                align: "center",
                title: m,
                body: E,
                graphic: _,
                size: g,
                actions: G,
                gradientColor: b,
                showCloseButton: j,
                shouldTrapFocus: j,
                returnRef: j ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: S },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    D(null != e && (0, s.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
