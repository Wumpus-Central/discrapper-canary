"use strict";
n.d(t, { Ok: () => c, se: () => o, tj: () => d });
var i = n(582128),
    r = n(557361),
    a = n(844222);
let s = "u" < typeof document ? void 0 : document,
    l = null == s ? () => void 0 : r.Ay;
function o() {
    return r.rx.isActive();
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = i.useContext(a.C),
        r = t.keyboardModeEnabled ?? n.keyboardModeEnabled,
        o = i.useRef(!1);
    o.current = !r || !0 === t.disable;
    let d = i.useMemo(() => t.attachTo ?? e.current?.ownerDocument ?? s, [t.attachTo, e]),
        c = i.useRef(null);
    return l(t.disable ? c : e, { ...t, disableReturnRef: o, attachTo: d });
}
function c(e) {
    let { keyboardModeEnabled: t } = e;
    return d(e.containerRef, { keyboardModeEnabled: t }), e.children;
}
