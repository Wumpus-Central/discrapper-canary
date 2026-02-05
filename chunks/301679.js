"use strict";
n.d(t, { A: () => d, L: () => c });
var r = n(627968),
    i = n(64700),
    a = n(844222),
    s = n(350535),
    o = n(642481),
    l = n(525576);
let u = 200;
function c(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: c,
            delay: d = 300,
            onShow: _,
            title: f,
            body: p,
            graphic: h,
            size: m = "md",
            actions: g,
            gradientColor: E,
        } = e,
        A = i.useContext(a.C),
        [I, T] = i.useState("closed"),
        y = i.useRef(null),
        S = i.useRef(!1),
        v = "opening-mouse" === I || "open-mouse" === I,
        C = "opening-keyboard" === I || "open-keyboard" === I,
        b = "open-mouse" === I || "open-keyboard" === I,
        N = (A.keyboardModeEnabled || C) && null != g,
        R = N,
        [O, D] = i.useState(0),
        L = (0, l._)(n, c, I),
        w = i.useCallback(() => {
            null != y.current && (clearTimeout(y.current), (y.current = null));
        }, []),
        x = i.useCallback(
            (e) => {
                e && (S.current = !0), w(), T("closing");
            },
            [w],
        );
    i.useEffect(() => w, [w]);
    let P = i.useCallback(() => {
            ("closed" === I || "closing" === I) && (w(), T("opening-mouse"));
        }, [w, I]),
        M = i.useCallback(() => {
            v && x(!1);
        }, [x, v]),
        k = i.useCallback(() => {
            if (S.current || ("closed" !== I && "closing" !== I)) {
                S.current = !1;
                return;
            }
            w(), T("opening-keyboard");
        }, [w, I]),
        U = i.useCallback(() => {
            (N && "opening-keyboard" !== I) || x(!1);
        }, [x, I, N]);
    i.useEffect(() => {
        if ("opening-mouse" === I)
            return (
                (y.current = window.setTimeout(() => {
                    (y.current = null), T("open-mouse"), _?.();
                }, d)),
                w
            );
    }, [I, d, _, w]),
        i.useEffect(() => {
            if ("opening-keyboard" === I)
                return (
                    (y.current = window.setTimeout(() => {
                        (y.current = null), T("open-keyboard"), _?.();
                    }, d)),
                    w
                );
        }, [I, d, _, w]),
        i.useEffect(() => {
            if ("closing" === I)
                return (
                    (y.current = window.setTimeout(() => {
                        (y.current = null), T("closed");
                    }, u)),
                    w
                );
        }, [I, w]),
        i.useEffect(() => {
            if (!b) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), x(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [b, x]);
    let G = i.useMemo(
            () =>
                null == g
                    ? g
                    : g.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), x(!1);
                          },
                      })),
            [g, x],
        ),
        V = i.useCallback((e) => {
            D(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: P,
        onMouseLeave: M,
        onFocus: k,
        onBlur: U,
        children: [
            t,
            (0, r.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: b,
                position: L,
                align: "center",
                title: f,
                body: p,
                graphic: h,
                size: m,
                actions: G,
                gradientColor: E,
                showCloseButton: R,
                shouldTrapFocus: N,
                returnRef: N ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: O },
                onNudgeChange: V,
                onRequestClose: (e) => {
                    x(null != e && (0, s.sg)(e));
                },
            }),
        ],
    });
}
let d = c;
