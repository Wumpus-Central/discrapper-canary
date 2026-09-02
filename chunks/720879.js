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
            body: g,
            graphic: E,
            size: p = "md",
            actions: b,
            gradientColor: h,
        } = e,
        x = l.useContext(r.C),
        [_, A] = l.useState("closed"),
        v = l.useRef(null),
        R = l.useRef(!1),
        N = "opening-mouse" === _ || "open-mouse" === _,
        I = "opening-keyboard" === _ || "open-keyboard" === _,
        j = "open-mouse" === _ || "open-keyboard" === _,
        T = (x.keyboardModeEnabled || I) && null != b,
        [y, C] = l.useState(0),
        S = (function (e) {
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
        })(n, c, _),
        D = l.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
        }, []),
        M = l.useCallback(
            (e) => {
                e && (R.current = !0), D(), A("closing");
            },
            [D],
        );
    l.useEffect(() => D, [D]);
    let P = l.useCallback(() => {
            ("closed" === _ || "closing" === _) && (D(), A("opening-mouse"));
        }, [D, _]),
        O = l.useCallback(() => {
            N && M(!1);
        }, [M, N]),
        U = l.useCallback(() => {
            if (R.current || !s.Ay.keyboardModeEnabled || ("closed" !== _ && "closing" !== _)) {
                R.current = !1;
                return;
            }
            D(), A("opening-keyboard");
        }, [D, _]),
        B = l.useCallback(() => {
            (T && "opening-keyboard" !== _) || M(!1);
        }, [M, _, T]);
    l.useEffect(() => {
        if ("opening-mouse" === _)
            return (
                (v.current = window.setTimeout(() => {
                    (v.current = null), A("open-mouse"), f?.();
                }, u)),
                D
            );
    }, [_, u, f, D]),
        l.useEffect(() => {
            if ("opening-keyboard" === _)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), A("open-keyboard"), f?.();
                    }, u)),
                    D
                );
        }, [_, u, f, D]),
        l.useEffect(() => {
            if ("closing" === _)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), A("closed");
                    }, 200)),
                    D
                );
        }, [_, D]),
        l.useEffect(() => {
            if (j)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [j, M]);
    let G = l.useMemo(
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
        k = l.useCallback((e) => {
            C(e);
        }, []);
    return (0, a.jsxs)("div", {
        onMouseEnter: P,
        onMouseLeave: O,
        onFocus: U,
        onBlur: B,
        children: [
            t,
            (0, a.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: j,
                position: S,
                align: "center",
                title: m,
                body: g,
                graphic: E,
                size: p,
                actions: G,
                gradientColor: h,
                showCloseButton: T,
                shouldTrapFocus: T,
                returnRef: T ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: y },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    M(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
