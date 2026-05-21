n.d(t, { L: () => d, A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(844222),
    a = n(350535),
    s = n(642481),
    o = n(650583);
function d(e) {
    let {
            children: t,
            targetElementRef: n,
            estimatedTooltipHeight: d,
            delay: u = 300,
            onShow: c,
            title: m,
            body: g,
            graphic: p,
            size: f = "md",
            actions: h,
            gradientColor: _,
        } = e,
        E = l.useContext(i.C),
        [x, v] = l.useState("closed"),
        R = l.useRef(null),
        b = l.useRef(!1),
        j = "opening-mouse" === x || "open-mouse" === x,
        C = "opening-keyboard" === x || "open-keyboard" === x,
        A = "open-mouse" === x || "open-keyboard" === x,
        y = (E.keyboardModeEnabled || C) && null != h,
        [I, O] = l.useState(0),
        T = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                n = arguments.length > 2 ? arguments[2] : void 0,
                [r, i] = l.useState("top");
            return (
                l.useEffect(() => {
                    if (null == e.current) return void i("top");
                    let n = e.current.getBoundingClientRect(),
                        r = window.innerWidth,
                        l = window.innerHeight,
                        a = { top: n.top, bottom: l - n.bottom, left: n.left, right: r - n.right },
                        s = ["top", "bottom", "right", "left"];
                    for (let e of s) if (a[e] >= t) return void i(e);
                    i(s.reduce((e, t) => (a[t] > a[e] ? t : e), "top"));
                }, [e, t, n]),
                r
            );
        })(n, d, x),
        S = l.useCallback(() => {
            null != R.current && (clearTimeout(R.current), (R.current = null));
        }, []),
        N = l.useCallback(
            (e) => {
                e && (b.current = !0), S(), v("closing");
            },
            [S],
        );
    l.useEffect(() => S, [S]);
    let D = l.useCallback(() => {
            ("closed" === x || "closing" === x) && (S(), v("opening-mouse"));
        }, [S, x]),
        U = l.useCallback(() => {
            j && N(!1);
        }, [N, j]),
        B = l.useCallback(() => {
            if (b.current || ("closed" !== x && "closing" !== x)) {
                b.current = !1;
                return;
            }
            S(), v("opening-keyboard");
        }, [S, x]),
        k = l.useCallback(() => {
            (y && "opening-keyboard" !== x) || N(!1);
        }, [N, x, y]);
    l.useEffect(() => {
        if ("opening-mouse" === x)
            return (
                (R.current = window.setTimeout(() => {
                    (R.current = null), v("open-mouse"), c?.();
                }, u)),
                S
            );
    }, [x, u, c, S]),
        l.useEffect(() => {
            if ("opening-keyboard" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), v("open-keyboard"), c?.();
                    }, u)),
                    S
                );
        }, [x, u, c, S]),
        l.useEffect(() => {
            if ("closing" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), v("closed");
                    }, 200)),
                    S
                );
        }, [x, S]),
        l.useEffect(() => {
            if (!A) return;
            let e = (e) => {
                e.key === o.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), N(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [A, N]);
    let L = l.useMemo(
            () =>
                null == h
                    ? h
                    : h.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), N(!1);
                          },
                      })),
            [h, N],
        ),
        P = l.useCallback((e) => {
            O(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: D,
        onMouseLeave: U,
        onFocus: B,
        onBlur: k,
        children: [
            t,
            (0, r.jsx)(s.j, {
                targetElementRef: n,
                shouldShow: A,
                position: T,
                align: "center",
                title: m,
                body: g,
                graphic: p,
                size: f,
                actions: L,
                gradientColor: _,
                showCloseButton: y,
                shouldTrapFocus: y,
                returnRef: y ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: I },
                onNudgeChange: P,
                onRequestClose: (e) => {
                    N(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let u = d;
