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
            graphic: p,
            size: E = "md",
            actions: h,
            gradientColor: x,
        } = e,
        b = l.useContext(r.C),
        [A, _] = l.useState("closed"),
        N = l.useRef(null),
        R = l.useRef(!1),
        v = "opening-mouse" === A || "open-mouse" === A,
        j = "opening-keyboard" === A || "open-keyboard" === A,
        I = "open-mouse" === A || "open-keyboard" === A,
        T = (b.keyboardModeEnabled || j) && null != h,
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
        })(n, c, A),
        D = l.useCallback(() => {
            null != N.current && (clearTimeout(N.current), (N.current = null));
        }, []),
        M = l.useCallback(
            (e) => {
                (e && (R.current = !0), D(), _("closing"));
            },
            [D],
        );
    l.useEffect(() => D, [D]);
    let O = l.useCallback(() => {
            ("closed" === A || "closing" === A) && (D(), _("opening-mouse"));
        }, [D, A]),
        P = l.useCallback(() => {
            v && M(!1);
        }, [M, v]),
        U = l.useCallback(() => {
            if (R.current || !s.Ay.keyboardModeEnabled || ("closed" !== A && "closing" !== A)) {
                R.current = !1;
                return;
            }
            (D(), _("opening-keyboard"));
        }, [D, A]),
        B = l.useCallback(() => {
            (T && "opening-keyboard" !== A) || M(!1);
        }, [M, A, T]);
    (l.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (N.current = window.setTimeout(() => {
                    ((N.current = null), _("open-mouse"), f?.());
                }, u)),
                D
            );
    }, [A, u, f, D]),
        l.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), _("open-keyboard"), f?.());
                    }, u)),
                    D
                );
        }, [A, u, f, D]),
        l.useEffect(() => {
            if ("closing" === A)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), _("closed"));
                    }, 200)),
                    D
                );
        }, [A, D]),
        l.useEffect(() => {
            if (I)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [I, M]));
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
        w = l.useCallback((e) => {
            C(e);
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
                shouldShow: I,
                position: S,
                align: "center",
                title: m,
                body: g,
                graphic: p,
                size: E,
                actions: G,
                gradientColor: x,
                showCloseButton: T,
                shouldTrapFocus: T,
                returnRef: T ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: y },
                onNudgeChange: w,
                onRequestClose: (e) => {
                    M(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
