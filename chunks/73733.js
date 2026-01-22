n.d(t, { y: () => u });
var r = n(956817),
    i = n(217512),
    a = n(64700),
    s = n(959462),
    o = n(114099),
    l = n(47276);
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
            isRequired: h,
            onIncrement: m,
            onIncrementPage: g,
            onDecrement: E,
            onDecrementPage: b,
            onDecrementToMin: y,
            onIncrementToMax: O,
        } = e,
        A = (0, l.o)(c(r.A), "@react-aria/spinbutton"),
        v = () => clearTimeout(t.current);
    (0, a.useEffect)(() => () => v(), []);
    let S = (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !_ && !e.nativeEvent.isComposing)
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
        I = (0, a.useRef)(!1),
        T = () => {
            I.current = !0;
        },
        C = () => {
            I.current = !1;
        },
        N = "" === u ? A.format("Empty") : (u || `${n}`).replace("-", "\u2212");
    (0, a.useEffect)(() => {
        I.current && ((0, i.pA)("assertive"), (0, i.iP)(N, "assertive"));
    }, [N]);
    let R = (0, s.J)((e) => {
            v(),
                null == m || m(),
                (t.current = window.setTimeout(() => {
                    (void 0 === f || isNaN(f) || void 0 === n || isNaN(n) || n < f) && R(60);
                }, e));
        }),
        w = (0, s.J)((e) => {
            v(),
                null == E || E(),
                (t.current = window.setTimeout(() => {
                    (void 0 === d || isNaN(d) || void 0 === n || isNaN(n) || n > d) && w(60);
                }, e));
        }),
        P = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: D, removeAllGlobalListeners: x } = (0, o.A)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
            "aria-valuetext": N,
            "aria-valuemin": d,
            "aria-valuemax": f,
            "aria-disabled": p || void 0,
            "aria-readonly": _ || void 0,
            "aria-required": h || void 0,
            onKeyDown: S,
            onFocus: T,
            onBlur: C,
        },
        incrementButtonProps: {
            onPressStart: () => {
                R(400), D(window, "contextmenu", P);
            },
            onPressEnd: () => {
                v(), x();
            },
            onFocus: T,
            onBlur: C,
        },
        decrementButtonProps: {
            onPressStart: () => {
                w(400), D(window, "contextmenu", P);
            },
            onPressEnd: () => {
                v(), x();
            },
            onFocus: T,
            onBlur: C,
        },
    };
}
