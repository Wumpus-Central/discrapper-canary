n.d(t, { L: () => c, A: () => u });
var a = n(477900),
    r = n(582128),
    l = n(844222),
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
            actions: _,
            gradientColor: b,
        } = e,
        h = r.useContext(l.C),
        [A, R] = r.useState("closed"),
        x = r.useRef(null),
        I = r.useRef(!1),
        N = "opening-mouse" === A || "open-mouse" === A,
        v = "opening-keyboard" === A || "open-keyboard" === A,
        T = "open-mouse" === A || "open-keyboard" === A,
        S = (h.keyboardModeEnabled || v) && null != _,
        [D, j] = r.useState(0),
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
                        s = { top: n.top, bottom: r - n.bottom, left: n.left, right: a - n.right },
                        i = ["top", "bottom", "right", "left"];
                    for (let e of i) if (s[e] >= t) return void l(e);
                    l(i.reduce((e, t) => (s[t] > s[e] ? t : e), "top"));
                }, [e, t, n]),
                a
            );
        })(n, c, A),
        y = r.useCallback(() => {
            null != x.current && (clearTimeout(x.current), (x.current = null));
        }, []),
        M = r.useCallback(
            (e) => {
                e && (I.current = !0), y(), R("closing");
            },
            [y],
        );
    r.useEffect(() => y, [y]);
    let O = r.useCallback(() => {
            ("closed" === A || "closing" === A) && (y(), R("opening-mouse"));
        }, [y, A]),
        P = r.useCallback(() => {
            N && M(!1);
        }, [M, N]),
        U = r.useCallback(() => {
            if (I.current || !s.Ay.keyboardModeEnabled || ("closed" !== A && "closing" !== A)) {
                I.current = !1;
                return;
            }
            y(), R("opening-keyboard");
        }, [y, A]),
        B = r.useCallback(() => {
            (S && "opening-keyboard" !== A) || M(!1);
        }, [M, A, S]);
    r.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (x.current = window.setTimeout(() => {
                    (x.current = null), R("open-mouse"), f?.();
                }, u)),
                y
            );
    }, [A, u, f, y]),
        r.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (x.current = window.setTimeout(() => {
                        (x.current = null), R("open-keyboard"), f?.();
                    }, u)),
                    y
                );
        }, [A, u, f, y]),
        r.useEffect(() => {
            if ("closing" === A)
                return (
                    (x.current = window.setTimeout(() => {
                        (x.current = null), R("closed");
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
                e.key === o.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [T, M]);
    let G = r.useMemo(
            () =>
                null == _
                    ? _
                    : _.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), M(!1);
                          },
                      })),
            [_, M],
        ),
        k = r.useCallback((e) => {
            j(e);
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
                position: C,
                align: "center",
                title: E,
                body: m,
                graphic: g,
                size: p,
                actions: G,
                gradientColor: b,
                showCloseButton: S,
                shouldTrapFocus: S,
                returnRef: S ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: D },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    M(null != e && (0, i.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
