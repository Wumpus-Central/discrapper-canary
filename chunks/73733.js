"use strict";
n.d(t, { y: () => c });
var r = n(956817),
    i = n(217512),
    a = n(64700),
    s = n(959462),
    o = n(114099),
    l = n(47276);
function u(e) {
    return e && e.__esModule ? e.default : e;
}
function c(e) {
    let t = (0, a.useRef)(void 0),
        {
            value: n,
            textValue: c,
            minValue: d,
            maxValue: _,
            isDisabled: f,
            isReadOnly: p,
            isRequired: h,
            onIncrement: m,
            onIncrementPage: g,
            onDecrement: E,
            onDecrementPage: A,
            onDecrementToMin: I,
            onIncrementToMax: T,
        } = e,
        y = (0, l.o)(u(r.A), "@react-aria/spinbutton"),
        S = () => clearTimeout(t.current);
    (0, a.useEffect)(() => () => S(), []);
    let v = (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !p && !e.nativeEvent.isComposing)
                switch (e.key) {
                    case "PageUp":
                        if (g) {
                            e.preventDefault(), null == g || g();
                            break;
                        }
                    case "ArrowUp":
                    case "Up":
                        m && (e.preventDefault(), null == m || m());
                        break;
                    case "PageDown":
                        if (A) {
                            e.preventDefault(), null == A || A();
                            break;
                        }
                    case "ArrowDown":
                    case "Down":
                        E && (e.preventDefault(), null == E || E());
                        break;
                    case "Home":
                        I && (e.preventDefault(), null == I || I());
                        break;
                    case "End":
                        T && (e.preventDefault(), null == T || T());
                }
        },
        C = (0, a.useRef)(!1),
        b = () => {
            C.current = !0;
        },
        N = () => {
            C.current = !1;
        },
        R = "" === c ? y.format("Empty") : (c || `${n}`).replace("-", "−");
    (0, a.useEffect)(() => {
        C.current && ((0, i.pA)("assertive"), (0, i.iP)(R, "assertive"));
    }, [R]);
    let O = (0, s.J)((e) => {
            S(),
                null == m || m(),
                (t.current = window.setTimeout(() => {
                    (void 0 === _ || isNaN(_) || void 0 === n || isNaN(n) || n < _) && O(60);
                }, e));
        }),
        D = (0, s.J)((e) => {
            S(),
                null == E || E(),
                (t.current = window.setTimeout(() => {
                    (void 0 === d || isNaN(d) || void 0 === n || isNaN(n) || n > d) && D(60);
                }, e));
        }),
        L = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: w, removeAllGlobalListeners: x } = (0, o.A)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
            "aria-valuetext": R,
            "aria-valuemin": d,
            "aria-valuemax": _,
            "aria-disabled": f || void 0,
            "aria-readonly": p || void 0,
            "aria-required": h || void 0,
            onKeyDown: v,
            onFocus: b,
            onBlur: N,
        },
        incrementButtonProps: {
            onPressStart: () => {
                O(400), w(window, "contextmenu", L);
            },
            onPressEnd: () => {
                S(), x();
            },
            onFocus: b,
            onBlur: N,
        },
        decrementButtonProps: {
            onPressStart: () => {
                D(400), w(window, "contextmenu", L);
            },
            onPressEnd: () => {
                S(), x();
            },
            onFocus: b,
            onBlur: N,
        },
    };
}
