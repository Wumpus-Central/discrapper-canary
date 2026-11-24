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
            onShow: m,
            title: f,
            body: g,
            graphic: p,
            size: E = "md",
            actions: h,
            gradientColor: b,
        } = e,
        x = l.useContext(r.C),
        [_, A] = l.useState("closed"),
        N = l.useRef(null),
        v = l.useRef(!1),
        R = "opening-mouse" === _ || "open-mouse" === _,
        j = "opening-keyboard" === _ || "open-keyboard" === _,
        y = "open-mouse" === _ || "open-keyboard" === _,
        I = (x.keyboardModeEnabled || j) && null != h,
        [T, S] = l.useState(0),
        C = (function (e) {
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
            null != N.current && (clearTimeout(N.current), (N.current = null));
        }, []),
        M = l.useCallback(
            (e) => {
                (e && (v.current = !0), D(), A("closing"));
            },
            [D],
        );
    l.useEffect(() => D, [D]);
    let P = l.useCallback(() => {
            ("closed" === _ || "closing" === _) && (D(), A("opening-mouse"));
        }, [D, _]),
        O = l.useCallback(() => {
            R && M(!1);
        }, [M, R]),
        U = l.useCallback(() => {
            if (v.current || !s.Ay.keyboardModeEnabled || ("closed" !== _ && "closing" !== _)) {
                v.current = !1;
                return;
            }
            (D(), A("opening-keyboard"));
        }, [D, _]),
        B = l.useCallback(() => {
            (I && "opening-keyboard" !== _) || M(!1);
        }, [M, _, I]);
    (l.useEffect(() => {
        if ("opening-mouse" === _)
            return (
                (N.current = window.setTimeout(() => {
                    ((N.current = null), A("open-mouse"), m?.());
                }, u)),
                D
            );
    }, [_, u, m, D]),
        l.useEffect(() => {
            if ("opening-keyboard" === _)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), A("open-keyboard"), m?.());
                    }, u)),
                    D
                );
        }, [_, u, m, D]),
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
            if (y)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [y, M]));
    let G = l.useMemo(
            () =>
                null == h
                    ? h
                    : h.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              (e.onClick?.(t), M(!1));
                          },
                      })),
            [h, M],
        ),
        k = l.useCallback((e) => {
            S(e);
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
                shouldShow: y,
                position: C,
                align: "center",
                title: f,
                body: g,
                graphic: p,
                size: E,
                actions: G,
                gradientColor: b,
                showCloseButton: I,
                shouldTrapFocus: I,
                returnRef: I ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: T },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    M(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
