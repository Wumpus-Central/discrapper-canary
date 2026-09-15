n.d(t, { L: () => c, A: () => u });
var a = n(477900),
    l = n(582128),
    r = n(844222),
    i = n(775602),
    s = n(350535),
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
            graphic: p,
            size: E = "md",
            actions: b,
            gradientColor: h,
        } = e,
        x = l.useContext(r.C),
        [_, A] = l.useState("closed"),
        N = l.useRef(null),
        v = l.useRef(!1),
        R = "opening-mouse" === _ || "open-mouse" === _,
        I = "opening-keyboard" === _ || "open-keyboard" === _,
        j = "open-mouse" === _ || "open-keyboard" === _,
        y = (x.keyboardModeEnabled || I) && null != b,
        [T, C] = l.useState(0),
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
                        i = { top: n.top, bottom: l - n.bottom, left: n.left, right: a - n.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (i[e] >= t) return void r(e);
                    r(s.reduce((e, t) => (i[t] > i[e] ? t : e), "top"));
                }, [e, t, n]),
                a
            );
        })(n, c, _),
        D = l.useCallback(() => {
            null != N.current && (clearTimeout(N.current), (N.current = null));
        }, []),
        P = l.useCallback(
            (e) => {
                (e && (v.current = !0), D(), A("closing"));
            },
            [D],
        );
    l.useEffect(() => D, [D]);
    let M = l.useCallback(() => {
            ("closed" === _ || "closing" === _) && (D(), A("opening-mouse"));
        }, [D, _]),
        U = l.useCallback(() => {
            R && P(!1);
        }, [P, R]),
        O = l.useCallback(() => {
            if (v.current || !i.Ay.keyboardModeEnabled || ("closed" !== _ && "closing" !== _)) {
                v.current = !1;
                return;
            }
            (D(), A("opening-keyboard"));
        }, [D, _]),
        B = l.useCallback(() => {
            (y && "opening-keyboard" !== _) || P(!1);
        }, [P, _, y]);
    (l.useEffect(() => {
        if ("opening-mouse" === _)
            return (
                (N.current = window.setTimeout(() => {
                    ((N.current = null), A("open-mouse"), f?.());
                }, u)),
                D
            );
    }, [_, u, f, D]),
        l.useEffect(() => {
            if ("opening-keyboard" === _)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), A("open-keyboard"), f?.());
                    }, u)),
                    D
                );
        }, [_, u, f, D]),
        l.useEffect(() => {
            if ("closing" === _)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), A("closed"));
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
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), P(!0));
            }
        }, [j, P]));
    let G = l.useMemo(
            () =>
                null == b
                    ? b
                    : b.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              (e.onClick?.(t), P(!1));
                          },
                      })),
            [b, P],
        ),
        w = l.useCallback((e) => {
            C(e);
        }, []);
    return (0, a.jsxs)("div", {
        onMouseEnter: M,
        onMouseLeave: U,
        onFocus: O,
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
                graphic: p,
                size: E,
                actions: G,
                gradientColor: h,
                showCloseButton: y,
                shouldTrapFocus: y,
                returnRef: y ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: T },
                onNudgeChange: w,
                onRequestClose: (e) => {
                    P(null != e && (0, s.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
