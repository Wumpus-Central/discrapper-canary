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
            title: g,
            body: m,
            graphic: p,
            size: f = "md",
            actions: _,
            gradientColor: h,
        } = e,
        E = l.useContext(i.C),
        [x, v] = l.useState("closed"),
        R = l.useRef(null),
        b = l.useRef(!1),
        A = "opening-mouse" === x || "open-mouse" === x,
        C = "opening-keyboard" === x || "open-keyboard" === x,
        y = "open-mouse" === x || "open-keyboard" === x,
        I = (E.keyboardModeEnabled || C) && null != _,
        [j, T] = l.useState(0),
        S = (function (e) {
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
        O = l.useCallback(() => {
            null != R.current && (clearTimeout(R.current), (R.current = null));
        }, []),
        N = l.useCallback(
            (e) => {
                e && (b.current = !0), O(), v("closing");
            },
            [O],
        );
    l.useEffect(() => O, [O]);
    let U = l.useCallback(() => {
            ("closed" === x || "closing" === x) && (O(), v("opening-mouse"));
        }, [O, x]),
        B = l.useCallback(() => {
            A && N(!1);
        }, [N, A]),
        D = l.useCallback(() => {
            if (b.current || ("closed" !== x && "closing" !== x)) {
                b.current = !1;
                return;
            }
            O(), v("opening-keyboard");
        }, [O, x]),
        M = l.useCallback(() => {
            (I && "opening-keyboard" !== x) || N(!1);
        }, [N, x, I]);
    l.useEffect(() => {
        if ("opening-mouse" === x)
            return (
                (R.current = window.setTimeout(() => {
                    (R.current = null), v("open-mouse"), c?.();
                }, u)),
                O
            );
    }, [x, u, c, O]),
        l.useEffect(() => {
            if ("opening-keyboard" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), v("open-keyboard"), c?.();
                    }, u)),
                    O
                );
        }, [x, u, c, O]),
        l.useEffect(() => {
            if ("closing" === x)
                return (
                    (R.current = window.setTimeout(() => {
                        (R.current = null), v("closed");
                    }, 200)),
                    O
                );
        }, [x, O]),
        l.useEffect(() => {
            if (!y) return;
            let e = (e) => {
                e.key === o.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), N(!0));
            };
            return (
                document.addEventListener("keydown", e, !0),
                () => {
                    document.removeEventListener("keydown", e, !0);
                }
            );
        }, [y, N]);
    let P = l.useMemo(
            () =>
                null == _
                    ? _
                    : _.map((e) => ({
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), N(!1);
                          },
                      })),
            [_, N],
        ),
        k = l.useCallback((e) => {
            T(e);
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: U,
        onMouseLeave: B,
        onFocus: D,
        onBlur: M,
        children: [
            t,
            (0, r.jsx)(s.j, {
                targetElementRef: n,
                shouldShow: y,
                position: S,
                align: "center",
                title: g,
                body: m,
                graphic: p,
                size: f,
                actions: P,
                gradientColor: h,
                showCloseButton: I,
                shouldTrapFocus: I,
                returnRef: I ? n : void 0,
                isCaretHoverable: !0,
                caretConfig: { align: "custom", customOffset: j },
                onNudgeChange: k,
                onRequestClose: (e) => {
                    N(null != e && (0, a.sg)(e));
                },
            }),
        ],
    });
}
let u = d;
