"use strict";
n.d(t, { gY: () => c, Wc: () => d });
var r = n(288371),
    i = n(49924);
function a(e) {
    if (!e) return;
    let t = !0;
    return (n) => {
        e({
            ...n,
            preventDefault() {
                n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                t = !0;
            },
            continuePropagation() {
                t = !1;
            },
            isPropagationStopped: () => t,
        }),
            t && n.stopPropagation();
    };
}
var o = n(912167),
    s = n(334887),
    l = n(192734),
    u = n(582128);
let c = u.createContext(null);
function d(e, t) {
    let { focusProps: n } = (0, i.i)(e),
        { keyboardProps: s } = {
            keyboardProps: e.isDisabled ? {} : { onKeyDown: a(e.onKeyDown), onKeyUp: a(e.onKeyUp) },
        },
        d = (0, l.v)(n, s),
        f = (function (e) {
            let t = (0, u.useContext)(c) || {};
            (0, o.w)(t, e);
            let { ref: n, ...r } = t;
            return r;
        })(t),
        p = e.isDisabled ? {} : f,
        h = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        h.current && t.current && (0, r.l)(t.current), (h.current = !1);
    }, [t]);
    let m = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (m = void 0), { focusableProps: (0, l.v)({ ...d, tabIndex: m }, p) };
}
u.forwardRef(function (e, t) {
    let { children: n, ...r } = e,
        i = (0, s.U)(t),
        a = { ...r, ref: i };
    return u.createElement(c.Provider, { value: a }, n);
});
