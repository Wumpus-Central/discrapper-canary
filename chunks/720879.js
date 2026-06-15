n.d(t, { L: () => u, A: () => c });
var l = n(627968),
    r = n(64700),
    i = n(844222),
    a = n(775602),
    s = n(350535),
    o = n(642481),
    d = n(650583);
function u(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: u,
            delay: c = 300,
            onShow: m,
            title: g,
            body: f,
            graphic: p,
            size: h = "md",
            actions: _,
            gradientColor: x,
        } = e,
        b = r.useContext(i.C),
        [v, E] = r.useState("closed"),
        j = r.useRef(null),
        y = r.useRef(!1),
        A = "opening-mouse" === v || "open-mouse" === v,
        C = "opening-keyboard" === v || "open-keyboard" === v,
        I = "open-mouse" === v || "open-keyboard" === v,
        R = (b.keyboardModeEnabled || C) && null != _,
        [N, S] = r.useState(0),
        T = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [l, i] = r.useState("top");
            return (
                r.useEffect(() => {
                    if (null == e.current) return void i("top");
                    let n = e.current.getBoundingClientRect(),
                        l = window.innerWidth,
                        r = window.innerHeight,
                        a = { top: n.top, bottom: r - n.bottom, left: n.left, right: l - n.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (a[e] >= t) return void i(e);
                    i(s.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
                }, [e, t, n]),
                l
            );
        })(n, u, v),
        k = r.useCallback(() => {
            null != j.current && (clearTimeout(j.current), (j.current = null));
        }, []),
        B = r.useCallback(
            (e) => {
                e && (y.current = !0), k(), E("closing");
            },
            [k],
        );
    r.useEffect(() => k, [k]);
    let O = r.useCallback(() => {
            ("closed" === v || "closing" === v) && (k(), E("opening-mouse"));
        }, [k, v]),
        D = r.useCallback(() => {
            A && B(!1);
        }, [B, A]),
        w = r.useCallback(() => {
            if (y.current || !a.Ay.keyboardModeEnabled || ("closed" !== v && "closing" !== v)) {
                y.current = !1;
                return;
            }
            k(), E("opening-keyboard");
        }, [k, v]),
        U = r.useCallback(() => {
            (R && "opening-keyboard" !== v) || B(!1);
        }, [B, v, R]);
    r.useEffect(() => {
        if ("opening-mouse" === v)
            return (
                (j.current = window.setTimeout(() => {
                    (j.current = null), E("open-mouse"), m?.();
                }, c)),
                k
            );
    }, [v, c, m, k]),
        r.useEffect(() => {
            if ("opening-keyboard" === v)
                return (
                    (j.current = window.setTimeout(() => {
                        (j.current = null), E("open-keyboard"), m?.();
                    }, c)),
                    k
                );
        }, [v, c, m, k]),
        r.useEffect(() => {
            if ("closing" === v)
                return (
                    (j.current = window.setTimeout(() => {
                        (j.current = null), E("closed");
                    }, 200)),
                    k
                );
        }, [v, k]),
        r.useEffect(() => {
            if (!I) return;
            let e = (e) => {
                e.key === d.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), B(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [I, B]);
    let P = r.useMemo(
            () =>
                null == _
                    ? _
                    : _.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), B(!1);
                          },
                      })),
            [_, B],
        ),
        L = r.useCallback((e) => {
            S(e);
        }, []);
    return (0, l.jsxs)("div", {
        onMouseEnter: O,
        onMouseLeave: D,
        onFocus: w,
        onBlur: U,
        children: [
            t,
            (0, l.jsx)(o.j, {
                targetElementRef: n,
                shouldShow: I,
                position: T,
                align: "center",
                title: g,
                body: f,
                graphic: p,
                size: h,
                actions: P,
                gradientColor: x,
                showCloseButton: R,
                shouldTrapFocus: R,
                returnRef: R ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: N },
                onNudgeChange: L,
                onRequestClose: (e) => {
                    B(null != e && (0, s.sg)(e));
                },
            }),
        ],
    });
}
let c = u;
