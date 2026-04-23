"use strict";
n.d(t, { L: () => l, A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(844222),
    a = n(350535),
    o = n(642481);
function l(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: l,
            delay: d = 300,
            onShow: _,
            title: u,
            body: c,
            graphic: E,
            size: h = "md",
            actions: m,
            gradientColor: f,
        } = e,
        g = r.useContext(s.C),
        [p, A] = r.useState("closed"),
        I = r.useRef(null),
        T = r.useRef(!1),
        S = "opening-mouse" === p || "open-mouse" === p,
        N = "opening-keyboard" === p || "open-keyboard" === p,
        C = "open-mouse" === p || "open-keyboard" === p,
        R = (g.keyboardModeEnabled || N) && null != m,
        [O, y] = r.useState(0),
        v = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [i, s] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void s("top");
                    let n = e.current.getBoundingClientRect(),
                        i = window.innerWidth,
                        r = window.innerHeight,
                        a = { top: n.top, bottom: r - n.bottom, left: n.left, right: i - n.right },
                        o = ["top", "bottom", "right", "left"];
                    for (let e of o) if (a[e] >= t) return void s(e);
                    s(o.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
                }, [e, t, n]),
                i
            );
        })(n, l, p),
        D = r.useCallback(() => {
            null != I.current && (clearTimeout(I.current), (I.current = null));
        }, []),
        L = r.useCallback(
            (e) => {
                e && (T.current = !0), D(), A("closing");
            },
            [D],
        );
    r.useEffect(() => D, [D]);
    let b = r.useCallback(() => {
            ("closed" === p || "closing" === p) && (D(), A("opening-mouse"));
        }, [D, p]),
        w = r.useCallback(() => {
            S && L(!1);
        }, [L, S]),
        P = r.useCallback(() => {
            if (T.current || ("closed" !== p && "closing" !== p)) {
                T.current = !1;
                return;
            }
            D(), A("opening-keyboard");
        }, [D, p]),
        k = r.useCallback(() => {
            (R && "opening-keyboard" !== p) || L(!1);
        }, [L, p, R]);
    r.useEffect(() => {
        if ("opening-mouse" === p)
            return (
                (I.current = window.setTimeout(() => {
                    (I.current = null), A("open-mouse"), _?.();
                }, d)),
                D
            );
    }, [p, d, _, D]),
        r.useEffect(() => {
            if ("opening-keyboard" === p)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), A("open-keyboard"), _?.();
                    }, d)),
                    D
                );
        }, [p, d, _, D]),
        r.useEffect(() => {
            if ("closing" === p)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), A("closed");
                    }, 200)),
                    D
                );
        }, [p, D]),
        r.useEffect(() => {
            if (!C) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), L(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [C, L]);
    let M = r.useMemo(
            () =>
                null == m
                    ? m
                    : m.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), L(!1);
                          },
                      })),
            [m, L],
        ),
        U = r.useCallback((e) => {
            y(e);
        }, []);
    return (0, i.jsxs)("div", {
        onMouseEnter: b,
        onMouseLeave: w,
        onFocus: P,
        onBlur: k,
        children: [
            t,
            (0, i.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: C,
                position: v,
                align: "center",
                title: u,
                body: c,
                graphic: E,
                size: h,
                actions: M,
                gradientColor: f,
                showCloseButton: R,
                shouldTrapFocus: R,
                returnRef: R ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: O },
                onNudgeChange: U,
                onRequestClose: (e) => {
                    L(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let d = l;
