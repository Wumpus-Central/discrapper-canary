n.d(t, { G: () => u });
var r = n(344201),
    i = n(873505),
    a = n(473749),
    o = n(484948),
    s = n(920154),
    l = n(218769);
function c(e) {
    return e && e.__esModule ? e.default : e;
}
function u(e) {
    let t = (0, a.useRef)(void 0),
        {
            value: n,
            textValue: u,
            minValue: d,
            maxValue: f,
            isDisabled: p,
            isReadOnly: _,
            isRequired: m,
            onIncrement: h,
            onIncrementPage: g,
            onDecrement: E,
            onDecrementPage: b,
            onDecrementToMin: y,
            onIncrementToMax: O,
        } = e,
        v = (0, l.q)(c(r.Z), "@react-aria/spinbutton"),
        S = () => clearTimeout(t.current);
    (0, a.useEffect)(() => () => S(), []);
    let I = (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !_ && !e.nativeEvent.isComposing)
                switch (e.key) {
                    case "PageUp":
                        if (g) {
                            e.preventDefault(), null == g || g();
                            break;
                        }
                    case "ArrowUp":
                    case "Up":
                        h && (e.preventDefault(), null == h || h());
                        break;
                    case "PageDown":
                        if (b) {
                            e.preventDefault(), null == b || b();
                            break;
                        }
                    case "ArrowDown":
                    case "Down":
                        E && (e.preventDefault(), null == E || E());
                        break;
                    case "Home":
                        y && (e.preventDefault(), null == y || y());
                        break;
                    case "End":
                        O && (e.preventDefault(), null == O || O());
                }
        },
        T = (0, a.useRef)(!1),
        A = () => {
            T.current = !0;
        },
        C = () => {
            T.current = !1;
        },
        N = "" === u ? v.format("Empty") : (u || `${n}`).replace("-", "\u2212");
    (0, a.useEffect)(() => {
        T.current && ((0, i.gb)("assertive"), (0, i.xQ)(N, "assertive"));
    }, [N]);
    let P = (0, o.i)((e) => {
            S(),
                null == h || h(),
                (t.current = window.setTimeout(() => {
                    (void 0 === f || isNaN(f) || void 0 === n || isNaN(n) || n < f) && P(60);
                }, e));
        }),
        R = (0, o.i)((e) => {
            S(),
                null == E || E(),
                (t.current = window.setTimeout(() => {
                    (void 0 === d || isNaN(d) || void 0 === n || isNaN(n) || n > d) && R(60);
                }, e));
        }),
        D = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: w, removeAllGlobalListeners: x } = (0, s.x)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
            "aria-valuetext": N,
            "aria-valuemin": d,
            "aria-valuemax": f,
            "aria-disabled": p || void 0,
            "aria-readonly": _ || void 0,
            "aria-required": m || void 0,
            onKeyDown: I,
            onFocus: A,
            onBlur: C,
        },
        incrementButtonProps: {
            onPressStart: () => {
                P(400), w(window, "contextmenu", D);
            },
            onPressEnd: () => {
                S(), x();
            },
            onFocus: A,
            onBlur: C,
        },
        decrementButtonProps: {
            onPressStart: () => {
                R(400), w(window, "contextmenu", D);
            },
            onPressEnd: () => {
                S(), x();
            },
            onFocus: A,
            onBlur: C,
        },
    };
}
