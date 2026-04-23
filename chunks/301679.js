"use strict";
n.d(t, { A: () => c, L: () => u });
var r = n(627968),
    i = n(64700),
    s = n(844222),
    a = n(350535),
    o = n(642481),
    l = n(525576);
function u(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: u,
            delay: c = 300,
            onShow: d,
            title: _,
            body: f,
            graphic: p,
            size: h = "md",
            actions: E,
            gradientColor: m,
        } = e,
        g = i.useContext(s.C),
        [A, I] = i.useState("closed"),
        T = i.useRef(null),
        S = i.useRef(!1),
        y = "opening-mouse" === A || "open-mouse" === A,
        N = "opening-keyboard" === A || "open-keyboard" === A,
        v = "open-mouse" === A || "open-keyboard" === A,
        C = (g.keyboardModeEnabled || N) && null != E,
        [O, R] = i.useState(0),
        b = (0, l._)(n, u, A),
        D = i.useCallback(() => {
            null != T.current && (clearTimeout(T.current), (T.current = null));
        }, []),
        L = i.useCallback(
            (e) => {
                e && (S.current = !0), D(), I("closing");
            },
            [D],
        );
    i.useEffect(() => D, [D]);
    let w = i.useCallback(() => {
            ("closed" === A || "closing" === A) && (D(), I("opening-mouse"));
        }, [D, A]),
        M = i.useCallback(() => {
            y && L(!1);
        }, [L, y]),
        P = i.useCallback(() => {
            if (S.current || ("closed" !== A && "closing" !== A)) {
                S.current = !1;
                return;
            }
            D(), I("opening-keyboard");
        }, [D, A]),
        x = i.useCallback(() => {
            (C && "opening-keyboard" !== A) || L(!1);
        }, [L, A, C]);
    i.useEffect(() => {
        if ("opening-mouse" === A)
            return (
                (T.current = window.setTimeout(() => {
                    (T.current = null), I("open-mouse"), d?.();
                }, c)),
                D
            );
    }, [A, c, d, D]),
        i.useEffect(() => {
            if ("opening-keyboard" === A)
                return (
                    (T.current = window.setTimeout(() => {
                        (T.current = null), I("open-keyboard"), d?.();
                    }, c)),
                    D
                );
        }, [A, c, d, D]),
        i.useEffect(() => {
            if ("closing" === A)
                return (
                    (T.current = window.setTimeout(() => {
                        (T.current = null), I("closed");
                    }, 200)),
                    D
                );
        }, [A, D]),
        i.useEffect(() => {
            if (!v) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), L(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [v, L]);
    let k = i.useMemo(
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
        U = i.useCallback((e) => {
            R(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: w,
        onMouseLeave: M,
        onFocus: P,
        onBlur: x,
        children: [
            t,
            (0, r.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: v,
                position: b,
                align: "center",
                title: _,
                body: f,
                graphic: p,
                size: h,
                actions: k,
                gradientColor: m,
                showCloseButton: C,
                shouldTrapFocus: C,
                returnRef: C ? n : void 0,
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
let c = u;
