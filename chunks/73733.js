t.d(a, { y: () => s });
var r = t(956817),
    n = t(217512),
    i = t(64700),
    l = t(959462),
    o = t(114099),
    u = t(47276);
function s(e) {
    var a;
    let t = (0, i.useRef)(void 0),
        {
            value: s,
            textValue: d,
            minValue: c,
            maxValue: m,
            isDisabled: h,
            isReadOnly: y,
            isRequired: D,
            onIncrement: p,
            onIncrementPage: g,
            onDecrement: v,
            onDecrementPage: f,
            onDecrementToMin: b,
            onIncrementToMax: A,
        } = e,
        R = (0, u.o)((a = r.A) && a.__esModule ? a.default : a, "@react-aria/spinbutton");
    (0, i.useEffect)(() => () => clearTimeout(t.current), []);
    let $ = (0, i.useRef)(!1),
        w = () => {
            $.current = !0;
        },
        P = () => {
            $.current = !1;
        },
        C = "" === d ? R.format("Empty") : (d || `${s}`).replace("-", "−");
    (0, i.useEffect)(() => {
        $.current && ((0, n.pA)("assertive"), (0, n.iP)(C, "assertive"));
    }, [C]);
    let k = (0, l.J)((e) => {
            clearTimeout(t.current),
                null == p || p(),
                (t.current = window.setTimeout(() => {
                    (void 0 === m || isNaN(m) || void 0 === s || isNaN(s) || s < m) && k(60);
                }, e));
        }),
        x = (0, l.J)((e) => {
            clearTimeout(t.current),
                null == v || v(),
                (t.current = window.setTimeout(() => {
                    (void 0 === c || isNaN(c) || void 0 === s || isNaN(s) || s > c) && x(60);
                }, e));
        }),
        E = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: S, removeAllGlobalListeners: V } = (0, o.A)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === s || isNaN(s) ? void 0 : s,
            "aria-valuetext": C,
            "aria-valuemin": c,
            "aria-valuemax": m,
            "aria-disabled": h || void 0,
            "aria-readonly": y || void 0,
            "aria-required": D || void 0,
            onKeyDown: (e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !y && !e.nativeEvent.isComposing)
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
                            if (f) {
                                e.preventDefault(), null == f || f();
                                break;
                            }
                        case "ArrowDown":
                        case "Down":
                            v && (e.preventDefault(), null == v || v());
                            break;
                        case "Home":
                            b && (e.preventDefault(), null == b || b());
                            break;
                        case "End":
                            A && (e.preventDefault(), null == A || A());
                    }
            },
            onFocus: w,
            onBlur: P,
        },
        incrementButtonProps: {
            onPressStart: () => {
                k(400), S(window, "contextmenu", E);
            },
            onPressEnd: () => {
                clearTimeout(t.current), V();
            },
            onFocus: w,
            onBlur: P,
        },
        decrementButtonProps: {
            onPressStart: () => {
                x(400), S(window, "contextmenu", E);
            },
            onPressEnd: () => {
                clearTimeout(t.current), V();
            },
            onFocus: w,
            onBlur: P,
        },
    };
}
