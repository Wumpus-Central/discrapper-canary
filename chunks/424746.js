n.d(t, { L: () => c, A: () => u });
var a = n(477900),
    r = n(582128),
    l = n(844222),
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
        x = r.useContext(l.C),
        [A, _] = r.useState("closed"),
        N = r.useRef(null),
        R = r.useRef(!1),
        v = "opening-mouse" === A || "open-mouse" === A,
        j = "opening-keyboard" === A || "open-keyboard" === A,
        I = "open-mouse" === A || "open-keyboard" === A,
        y = (x.keyboardModeEnabled || j) && null != h,
        [T, C] = r.useState(0),
        S = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [a, l] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void l("top");
                    let n = e.current.getBoundingClientRect(),
                        a = window.innerWidth,
                        r = window.innerHeight,
                        s = { top: n.top, bottom: r - n.bottom, left: n.left, right: a - n.right },
                        i = ["top", "bottom", "right", "left"];
                    for (let e of i) if (s[e] >= t) return void l(e);
                    l(i.reduce((e, t) => (s[t] > s[e] ? t : e), "top"));
                }, [e, t, n]),
                a
            );
        })(n, c, A),
        D = r.useCallback(() => {
            null != N.current && (clearTimeout(N.current), (N.current = null));
        }, []),
        P = r.useCallback(
            (e) => {
                (e && (R.current = !0), D(), _("closing"));
            },
            [D],
        );
    r.useEffect(() => D, [D]);
    let M = r.useCallback(() => {
            ("closed" === A || "closing" === A) && (D(), _("opening-mouse"));
        }, [D, A]),
        O = r.useCallback(() => {
            v && P(!1);
        }, [P, v]),
        U = r.useCallback(() => {
            if (R.current || !s.Ay.keyboardModeEnabled || ("closed" !== A && "closing" !== A)) {
                R.current = !1;
                return;
            }
            (D(), _("opening-keyboard"));
        }, [D, A]),
        B = r.useCallback(() => {
            (y && "opening-keyboard" !== A) || P(!1);
        }, [P, A, y]);
    (r.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (N.current = window.setTimeout(() => {
                    ((N.current = null), _("open-mouse"), m?.());
                }, u)),
                D
            );
    }, [A, u, m, D]),
        r.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), _("open-keyboard"), m?.());
                    }, u)),
                    D
                );
        }, [A, u, m, D]),
        r.useEffect(() => {
            if ("closing" === A)
                return (
                    (N.current = window.setTimeout(() => {
                        ((N.current = null), _("closed"));
                    }, 200)),
                    D
                );
        }, [A, D]),
        r.useEffect(() => {
            if (I)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), P(!0));
            }
        }, [I, P]));
    let G = r.useMemo(
            () =>
                null == h
                    ? h
                    : h.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              (e.onClick?.(t), P(!1));
                          },
                      })),
            [h, P],
        ),
        w = r.useCallback((e) => {
            C(e);
        }, []);
    return (0, a.jsxs)("div", {
        onMouseEnter: M,
        onMouseLeave: O,
        onFocus: U,
        onBlur: B,
        children: [
            t,
            (0, a.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: I,
                position: S,
                align: "center",
                title: f,
                body: g,
                graphic: p,
                size: E,
                actions: G,
                gradientColor: b,
                showCloseButton: y,
                shouldTrapFocus: y,
                returnRef: y ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: T },
                onNudgeChange: w,
                onRequestClose: (e) => {
                    P(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
