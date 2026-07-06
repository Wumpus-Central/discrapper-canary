"use strict";
n.d(t, { L: () => c, A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(844222),
    a = n(775602),
    o = n(350535),
    l = n(642481),
    u = n(650583);
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: d = 300,
            onShow: _,
            title: h,
            body: f,
            graphic: E,
            size: p = "md",
            actions: m,
            gradientColor: g,
        } = e,
        A = r.useContext(s.C),
        [I, T] = r.useState("closed"),
        S = r.useRef(null),
        N = r.useRef(!1),
        C = "opening-mouse" === I || "open-mouse" === I,
        y = "opening-keyboard" === I || "open-keyboard" === I,
        O = "open-mouse" === I || "open-keyboard" === I,
        R = (A.keyboardModeEnabled || y) && null != m,
        [v, b] = r.useState(0),
        L = (function (e) {
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
        })(n, c, I),
        D = r.useCallback(() => {
            null != S.current && (clearTimeout(S.current), (S.current = null));
        }, []),
        w = r.useCallback(
            (e) => {
                e && (N.current = !0), D(), T("closing");
            },
            [D],
        );
    r.useEffect(() => D, [D]);
    let P = r.useCallback(() => {
            ("closed" === I || "closing" === I) && (D(), T("opening-mouse"));
        }, [D, I]),
        M = r.useCallback(() => {
            C && w(!1);
        }, [w, C]),
        x = r.useCallback(() => {
            if (N.current || !a.Ay.keyboardModeEnabled || ("closed" !== I && "closing" !== I)) {
                N.current = !1;
                return;
            }
            D(), T("opening-keyboard");
        }, [D, I]),
        U = r.useCallback(() => {
            (R && "opening-keyboard" !== I) || w(!1);
        }, [w, I, R]);
    r.useEffect(() => {
        if ("opening-mouse" === I)
            return (
                (S.current = window.setTimeout(() => {
                    (S.current = null), T("open-mouse"), _?.();
                }, d)),
                D
            );
    }, [I, d, _, D]),
        r.useEffect(() => {
            if ("opening-keyboard" === I)
                return (
                    (S.current = window.setTimeout(() => {
                        (S.current = null), T("open-keyboard"), _?.();
                    }, d)),
                    D
                );
        }, [I, d, _, D]),
        r.useEffect(() => {
            if ("closing" === I)
                return (
                    (S.current = window.setTimeout(() => {
                        (S.current = null), T("closed");
                    }, 200)),
                    D
                );
        }, [I, D]),
        r.useEffect(() => {
            if (O)
                return (
                    document.addEventListener("keydown", e, !0),
                    () => {
                        document.removeEventListener("keydown", e, !0);
                    }
                );
            function e(e) {
                e.key === u.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), w(!0));
            }
        }, [O, w]);
    let k = r.useMemo(
            () =>
                null == m
                    ? m
                    : m.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), w(!1);
                          },
                      })),
            [m, w],
        ),
        G = r.useCallback((e) => {
            b(e);
        }, []);
    return (0, i.jsxs)("div", {
        onMouseEnter: P,
        onMouseLeave: M,
        onFocus: x,
        onBlur: U,
        children: [
            t,
            (0, i.jsx)(l.j, {
                targetElementRef: n,
                shouldShow: O,
                position: L,
                align: "center",
                title: h,
                body: f,
                graphic: E,
                size: p,
                actions: k,
                gradientColor: g,
                showCloseButton: R,
                shouldTrapFocus: R,
                returnRef: R ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: v },
                onNudgeChange: G,
                onRequestClose: (e) => {
                    w(null != e && (0, o.sg)(e));
                },
            }),
        ],
    });
}
let d = c;
