"use strict";
n.d(t, { L: () => u, A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(844222),
    a = n(350535),
    o = n(642481),
    l = n(650583);
function u(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: u,
            delay: c = 300,
            onShow: d,
            title: _,
            body: f,
            graphic: h,
            size: p = "md",
            actions: E,
            gradientColor: m,
        } = e,
        g = r.useContext(s.C),
        [A, I] = r.useState("closed"),
        T = r.useRef(null),
        S = r.useRef(!1),
        N = "opening-mouse" === A || "open-mouse" === A,
        y = "opening-keyboard" === A || "open-keyboard" === A,
        C = "open-mouse" === A || "open-keyboard" === A,
        v = (g.keyboardModeEnabled || y) && null != E,
        [O, R] = r.useState(0),
        b = (function (e) {
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
        })(n, u, A),
        D = r.useCallback(() => {
            null != T.current && (clearTimeout(T.current), (T.current = null));
        }, []),
        L = r.useCallback(
            (e) => {
                e && (S.current = !0), D(), I("closing");
            },
            [D],
        );
    r.useEffect(() => D, [D]);
    let w = r.useCallback(() => {
            ("closed" === A || "closing" === A) && (D(), I("opening-mouse"));
        }, [D, A]),
        M = r.useCallback(() => {
            N && L(!1);
        }, [L, N]),
        P = r.useCallback(() => {
            if (S.current || ("closed" !== A && "closing" !== A)) {
                S.current = !1;
                return;
            }
            D(), I("opening-keyboard");
        }, [D, A]),
        x = r.useCallback(() => {
            (v && "opening-keyboard" !== A) || L(!1);
        }, [L, A, v]);
    r.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (T.current = window.setTimeout(() => {
                    (T.current = null), I("open-mouse"), d?.();
                }, c)),
                D
            );
    }, [A, c, d, D]),
        r.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (T.current = window.setTimeout(() => {
                        (T.current = null), I("open-keyboard"), d?.();
                    }, c)),
                    D
                );
        }, [A, c, d, D]),
        r.useEffect(() => {
            if ("closing" === A)
                return (
                    (T.current = window.setTimeout(() => {
                        (T.current = null), I("closed");
                    }, 200)),
                    D
                );
        }, [A, D]),
        r.useEffect(() => {
            if (!C) return;
            let e = (e) => {
                e.key === l.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), L(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [C, L]);
    let U = r.useMemo(
            () =>
                null == E
                    ? E
                    : E.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), L(!1);
                          },
                      })),
            [E, L],
        ),
        k = r.useCallback((e) => {
            R(e);
        }, []);
    return (0, i.jsxs)("div", {
        onMouseEnter: w,
        onMouseLeave: M,
        onFocus: P,
        onBlur: x,
        children: [
            t,
            (0, i.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: C,
                position: b,
                align: "center",
                title: _,
                body: f,
                graphic: h,
                size: p,
                actions: U,
                gradientColor: m,
                showCloseButton: v,
                shouldTrapFocus: v,
                returnRef: v ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: O },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    L(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let c = u;
