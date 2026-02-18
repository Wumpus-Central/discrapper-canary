t.d(a, { y: () => s });
var r = t(956817),
    n = t(217512),
    i = t(64700),
    o = t(959462),
    u = t(114099),
    l = t(47276);
function s(e) {
    var a;
    let t = (0, i.useRef)(void 0),
        {
            value: s,
            textValue: d,
            minValue: c,
            maxValue: m,
            isDisabled: h,
            isReadOnly: D,
            isRequired: y,
            onIncrement: p,
            onIncrementPage: g,
            onDecrement: f,
            onDecrementPage: v,
            onDecrementToMin: b,
            onIncrementToMax: A,
        } = e,
        $ = (0, l.o)((a = r.A) && a.__esModule ? a.default : a, "@react-aria/spinbutton");
    (0, i.useEffect)(() => () => clearTimeout(t.current), []);
    let w = (0, i.useRef)(!1),
        R = () => {
            w.current = !0;
        },
        P = () => {
            w.current = !1;
        },
        k = "" === d ? $.format("Empty") : (d || `${s}`).replace("-", "−");
    (0, i.useEffect)(() => {
        w.current && ((0, n.pA)("assertive"), (0, n.iP)(k, "assertive"));
    }, [k]);
    let x = (0, o.J)((e) => {
            clearTimeout(t.current),
                null == p || p(),
                (t.current = window.setTimeout(() => {
                    (void 0 === m || isNaN(m) || void 0 === s || isNaN(s) || s < m) && x(60);
                }, e));
        }),
        C = (0, o.J)((e) => {
            clearTimeout(t.current),
                null == f || f(),
                (t.current = window.setTimeout(() => {
                    (void 0 === c || isNaN(c) || void 0 === s || isNaN(s) || s > c) && C(60);
                }, e));
        }),
        E = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: S, removeAllGlobalListeners: F } = (0, u.A)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === s || isNaN(s) ? void 0 : s,
            "aria-valuetext": k,
            "aria-valuemin": c,
            "aria-valuemax": m,
            "aria-disabled": h || void 0,
            "aria-readonly": D || void 0,
            "aria-required": y || void 0,
            onKeyDown: (e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !D && !e.nativeEvent.isComposing)
                    switch (e.key) {
                        case "PageUp":
                            if (g) {
                                e.preventDefault(), null == g || g();
                                break;
                            }
                        case "ArrowUp":
                        case "Up":
                            p && (e.preventDefault(), null == p || p());
                            break;
                        case "PageDown":
                            if (v) {
                                e.preventDefault(), null == v || v();
                                break;
                            }
                        case "ArrowDown":
                        case "Down":
                            f && (e.preventDefault(), null == f || f());
                            break;
                        case "Home":
                            b && (e.preventDefault(), null == b || b());
                            break;
                        case "End":
                            A && (e.preventDefault(), null == A || A());
                    }
            },
            onFocus: R,
            onBlur: P,
        },
        incrementButtonProps: {
            onPressStart: () => {
                x(400), S(window, "contextmenu", E);
            },
            onPressEnd: () => {
                clearTimeout(t.current), F();
            },
            onFocus: R,
            onBlur: P,
        },
        decrementButtonProps: {
            onPressStart: () => {
                C(400), S(window, "contextmenu", E);
            },
            onPressEnd: () => {
                clearTimeout(t.current), F();
            },
            onFocus: R,
            onBlur: P,
        },
    };
}
