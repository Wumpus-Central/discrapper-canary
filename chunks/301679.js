t.d(n, { A: () => u, L: () => d });
var l = t(627968),
    r = t(64700),
    i = t(844222),
    a = t(350535),
    s = t(642481),
    o = t(525576);
function d(e) {
    let {
            children: n,
            targetElementRef: t,
            estimatedTooltipHeight: d,
            delay: u = 300,
            onShow: c,
            title: m,
            body: p,
            graphic: f,
            size: g = "md",
            actions: h,
            gradientColor: x,
        } = e,
        A = r.useContext(i.C),
        [E, j] = r.useState("closed"),
        v = r.useRef(null),
        C = r.useRef(!1),
        b = "opening-mouse" === E || "open-mouse" === E,
        R = "opening-keyboard" === E || "open-keyboard" === E,
        _ = "open-mouse" === E || "open-keyboard" === E,
        y = (A.keyboardModeEnabled || R) && null != h,
        [k, N] = r.useState(0),
        I = (0, o._)(t, d, E),
        S = r.useCallback(() => {
            null != v.current && (clearTimeout(v.current), (v.current = null));
        }, []),
        T = r.useCallback(
            (e) => {
                e && (C.current = !0), S(), j("closing");
            },
            [S],
        );
    r.useEffect(() => S, [S]);
    let D = r.useCallback(() => {
            ("closed" === E || "closing" === E) && (S(), j("opening-mouse"));
        }, [S, E]),
        O = r.useCallback(() => {
            b && T(!1);
        }, [T, b]),
        w = r.useCallback(() => {
            if (C.current || ("closed" !== E && "closing" !== E)) {
                C.current = !1;
                return;
            }
            S(), j("opening-keyboard");
        }, [S, E]),
        B = r.useCallback(() => {
            (y && "opening-keyboard" !== E) || T(!1);
        }, [T, E, y]);
    r.useEffect(() => {
        if ("opening-mouse" === E)
            return (
                (v.current = window.setTimeout(() => {
                    (v.current = null), j("open-mouse"), c?.();
                }, u)),
                S
            );
    }, [E, u, c, S]),
        r.useEffect(() => {
            if ("opening-keyboard" === E)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), j("open-keyboard"), c?.();
                    }, u)),
                    S
                );
        }, [E, u, c, S]),
        r.useEffect(() => {
            if ("closing" === E)
                return (
                    (v.current = window.setTimeout(() => {
                        (v.current = null), j("closed");
                    }, 200)),
                    S
                );
        }, [E, S]),
        r.useEffect(() => {
            if (!_) return;
            let e = (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), T(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [_, T]);
    let G = r.useMemo(
            () =>
                null == h
                    ? h
                    : h.map((e) => ({
                          ...e,
                          onClick: (n) => {
                              e.onClick?.(n), T(!1);
                          },
                      })),
            [h, T],
        ),
        L = r.useCallback((e) => {
            N(e);
        }, []);
    return (0, l.jsxs)("div", {
        onMouseEnter: D,
        onMouseLeave: O,
        onFocus: w,
        onBlur: B,
        children: [
            n,
            (0, l.jsx)(s.j, {
                targetElementRef: t,
                shouldShow: _,
                position: I,
                align: "center",
                title: m,
                body: p,
                graphic: f,
                size: g,
                actions: G,
                gradientColor: x,
                showCloseButton: y,
                shouldTrapFocus: y,
                returnRef: y ? t : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: k },
                onNudgeChange: L,
                onRequestClose: (e) => {
                    T(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let u = d;
