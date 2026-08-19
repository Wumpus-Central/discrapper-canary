"use strict";
r.d(t, { gY: () => c, Wc: () => f });
var n = r(288371),
    o = r(49924);
function i(e) {
    if (!e) return;
    let t = !0;
    return (r) => {
        e({
            ...r,
            preventDefault() {
                r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
                t = !0;
            },
            continuePropagation() {
                t = !1;
            },
            isPropagationStopped: () => t,
        }),
            t && r.stopPropagation();
    };
}
var a = r(912167),
    s = r(334887),
    l = r(192734),
    u = r(582128);
let c = u.createContext(null);
function f(e, t) {
    let { focusProps: r } = (0, o.i)(e),
        { keyboardProps: s } = {
            keyboardProps: e.isDisabled ? {} : { onKeyDown: i(e.onKeyDown), onKeyUp: i(e.onKeyUp) },
        },
        f = (0, l.v)(r, s),
        p = (function (e) {
            let t = (0, u.useContext)(c) || {};
            (0, a.w)(t, e);
            let { ref: r, ...n } = t;
            return n;
        })(t),
        d = e.isDisabled ? {} : p,
        h = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        h.current && t.current && (0, n.l)(t.current), (h.current = !1);
    }, [t]);
    let m = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (m = void 0), { focusableProps: (0, l.v)({ ...f, tabIndex: m }, d) };
}
u.forwardRef(function (e, t) {
    let { children: r, ...n } = e,
        o = (0, s.U)(t),
        i = { ...n, ref: o };
    return u.createElement(c.Provider, { value: i }, r);
});
