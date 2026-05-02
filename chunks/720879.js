"use strict";
n.d(t, { L: () => l, A: () => u });
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
            delay: u = 300,
            onShow: c,
            title: d,
            body: _,
            graphic: f,
            size: h = "md",
            actions: p,
            gradientColor: E,
        } = e,
        m = r.useContext(s.C),
        [g, A] = r.useState("closed"),
        I = r.useRef(null),
        T = r.useRef(!1),
        S = "opening-mouse" === g || "open-mouse" === g,
        N = "opening-keyboard" === g || "open-keyboard" === g,
        y = "open-mouse" === g || "open-keyboard" === g,
        C = (m.keyboardModeEnabled || N) && null != p,
        [v, O] = r.useState(0),
        R = (function (e) {
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
        })(n, l, g),
        b = r.useCallback(() => {
            null != I.current && (clearTimeout(I.current), (I.current = null));
        }, []),
        D = r.useCallback(
            (e) => {
                e && (T.current = !0), b(), A("closing");
            },
            [b],
        );
    r.useEffect(() => b, [b]);
    let L = r.useCallback(() => {
            ("closed" === g || "closing" === g) && (b(), A("opening-mouse"));
        }, [b, g]),
        w = r.useCallback(() => {
            S && D(!1);
        }, [D, S]),
        M = r.useCallback(() => {
            if (T.current || ("closed" !== g && "closing" !== g)) {
                T.current = !1;
                return;
            }
            b(), A("opening-keyboard");
        }, [b, g]),
        P = r.useCallback(() => {
            (C && "opening-keyboard" !== g) || D(!1);
        }, [D, g, C]);
    r.useEffect(() => {
        if ("opening-mouse" === g)
            return (
                (I.current = window.setTimeout(() => {
                    (I.current = null), A("open-mouse"), c?.();
                }, u)),
                b
            );
    }, [g, u, c, b]),
        r.useEffect(() => {
            if ("opening-keyboard" === g)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), A("open-keyboard"), c?.();
                    }, u)),
                    b
                );
        }, [g, u, c, b]),
        r.useEffect(() => {
            if ("closing" === g)
                return (
                    (I.current = window.setTimeout(() => {
                        (I.current = null), A("closed");
                    }, 200)),
                    b
                );
        }, [g, b]),
        r.useEffect(() => {
            if (!y) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), D(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [y, D]);
    let x = r.useMemo(
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
        U = r.useCallback((e) => {
            O(e);
        }, []);
    return (0, i.jsxs)("div", {
        onMouseEnter: L,
        onMouseLeave: w,
        onFocus: M,
        onBlur: P,
        children: [
            t,
            (0, i.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: y,
                position: R,
                align: "center",
                title: d,
                body: _,
                graphic: f,
                size: h,
                actions: x,
                gradientColor: E,
                showCloseButton: C,
                shouldTrapFocus: C,
                returnRef: C ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: v },
                onNudgeChange: U,
                onRequestClose: (e) => {
                    D(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let u = l;
