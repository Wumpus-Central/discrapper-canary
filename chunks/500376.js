t.d(a, { G: () => s });
var u = t(297119),
    n = t(873505),
    r = t(647438),
    i = t(794760),
    o = t(803872),
    l = t(970185);
function s(e) {
    var a;
    let t = (0, r.useRef)(void 0),
        {
            value: s,
            textValue: d,
            minValue: c,
            maxValue: m,
            isDisabled: D,
            isReadOnly: h,
            isRequired: f,
            onIncrement: y,
            onIncrementPage: p,
            onDecrement: g,
            onDecrementPage: v,
            onDecrementToMin: b,
            onIncrementToMax: C,
        } = e,
        x = (0, l.q)((a = u.Z) && a.__esModule ? a.default : a, "@react-aria/spinbutton"),
        B = () => clearTimeout(t.current);
    (0, r.useEffect)(() => () => B(), []);
    let E = (0, r.useRef)(!1),
        F = () => {
            E.current = !0;
        },
        w = () => {
            E.current = !1;
        },
        $ = "" === d ? x.format("Empty") : (d || `${s}`).replace("-", "\u2212");
    (0, r.useEffect)(() => {
        E.current && ((0, n.gb)("assertive"), (0, n.xQ)($, "assertive"));
    }, [$]);
    let R = (0, i.i)((e) => {
            B(),
                null == y || y(),
                (t.current = window.setTimeout(() => {
                    (void 0 === m || isNaN(m) || void 0 === s || isNaN(s) || s < m) && R(60);
                }, e));
        }),
        Z = (0, i.i)((e) => {
            B(),
                null == g || g(),
                (t.current = window.setTimeout(() => {
                    (void 0 === c || isNaN(c) || void 0 === s || isNaN(s) || s > c) && Z(60);
                }, e));
        }),
        k = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: A, removeAllGlobalListeners: P } = (0, o.x)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === s || isNaN(s) ? void 0 : s,
            "aria-valuetext": $,
            "aria-valuemin": c,
            "aria-valuemax": m,
            "aria-disabled": D || void 0,
            "aria-readonly": h || void 0,
            "aria-required": f || void 0,
            onKeyDown: (e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !h && !e.nativeEvent.isComposing)
                    switch (e.key) {
                        case "PageUp":
                            if (p) {
                                e.preventDefault(), null == p || p();
                                break;
                            }
                        case "ArrowUp":
                        case "Up":
                            y && (e.preventDefault(), null == y || y());
                            break;
                        case "PageDown":
                            if (v) {
                                e.preventDefault(), null == v || v();
                                break;
                            }
                        case "ArrowDown":
                        case "Down":
                            g && (e.preventDefault(), null == g || g());
                            break;
                        case "Home":
                            b && (e.preventDefault(), null == b || b());
                            break;
                        case "End":
                            C && (e.preventDefault(), null == C || C());
                    }
            },
            onFocus: F,
            onBlur: w,
        },
        incrementButtonProps: {
            onPressStart: () => {
                R(400), A(window, "contextmenu", k);
            },
            onPressEnd: () => {
                B(), P();
            },
            onFocus: F,
            onBlur: w,
        },
        decrementButtonProps: {
            onPressStart: () => {
                Z(400), A(window, "contextmenu", k);
            },
            onPressEnd: () => {
                B(), P();
            },
            onFocus: F,
            onBlur: w,
        },
    };
}
