"use strict";
n.d(t, { L: () => c, A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(844222),
    s = n(775602),
    l = n(350535),
    o = n(642481),
    d = n(650583);
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: u = 300,
            onShow: _,
            title: E,
            body: A,
            graphic: h,
            size: I = "md",
            actions: f,
            gradientColor: p,
        } = e,
        T = r.useContext(a.C),
        [m, g] = r.useState("closed"),
        S = r.useRef(null),
        N = r.useRef(!1),
        C = "opening-mouse" === m || "open-mouse" === m,
        O = "opening-keyboard" === m || "open-keyboard" === m,
        R = "open-mouse" === m || "open-keyboard" === m,
        L = (T.keyboardModeEnabled || O) && null != f,
        [D, y] = r.useState(0),
        v = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [i, a] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void a("top");
                    let n = e.current.getBoundingClientRect(),
                        i = window.innerWidth,
                        r = window.innerHeight,
                        s = { top: n.top, bottom: r - n.bottom, left: n.left, right: i - n.right },
                        l = ["top", "bottom", "right", "left"];
                    for (let e of l) if (s[e] >= t) return void a(e);
                    a(l.reduce((e, t) => (s[t] > s[e] ? t : e), "top"));
                }, [e, t, n]),
                i
            );
        })(n, c, m),
        b = r.useCallback(() => {
            null != S.current && (clearTimeout(S.current), (S.current = null));
        }, []),
        M = r.useCallback(
            (e) => {
                e && (N.current = !0), b(), g("closing");
            },
            [b],
        );
    r.useEffect(() => b, [b]);
    let P = r.useCallback(() => {
            ("closed" === m || "closing" === m) && (b(), g("opening-mouse"));
        }, [b, m]),
        U = r.useCallback(() => {
            C && M(!1);
        }, [M, C]),
        w = r.useCallback(() => {
            if (N.current || !s.Ay.keyboardModeEnabled || ("closed" !== m && "closing" !== m)) {
                N.current = !1;
                return;
            }
            b(), g("opening-keyboard");
        }, [b, m]),
        G = r.useCallback(() => {
            (L && "opening-keyboard" !== m) || M(!1);
        }, [M, m, L]);
    r.useEffect(() => {
        if ("opening-mouse" === m)
            return (
                (S.current = window.setTimeout(() => {
                    (S.current = null), g("open-mouse"), _?.();
                }, u)),
                b
            );
    }, [m, u, _, b]),
        r.useEffect(() => {
            if ("opening-keyboard" === m)
                return (
                    (S.current = window.setTimeout(() => {
                        (S.current = null), g("open-keyboard"), _?.();
                    }, u)),
                    b
                );
        }, [m, u, _, b]),
        r.useEffect(() => {
            if ("closing" === m)
                return (
                    (S.current = window.setTimeout(() => {
                        (S.current = null), g("closed");
                    }, 200)),
                    b
                );
        }, [m, b]),
        r.useEffect(() => {
            if (R)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), M(!0));
            }
        }, [R, M]);
    let x = r.useMemo(
            () =>
                null == f
                    ? f
                    : f.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), M(!1);
                          },
                      })),
            [f, M],
        ),
        k = r.useCallback((e) => {
            y(e);
        }, []);
    return (0, i.jsxs)("div", {
        onMouseEnter: P,
        onMouseLeave: U,
        onFocus: w,
        onBlur: G,
        children: [
            t,
            (0, i.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: R,
                position: v,
                align: "center",
                title: E,
                body: A,
                graphic: h,
                size: I,
                actions: x,
                gradientColor: p,
                showCloseButton: L,
                shouldTrapFocus: L,
                returnRef: L ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: D },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    M(null != e && (0, l.sg)(e));
                },
            }),
        ],
    });
}
let u = c;
