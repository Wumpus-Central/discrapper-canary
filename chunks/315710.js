"use strict";
n.d(t, { Ok: () => o, se: () => s, tj: () => l });
var i = n(582128),
    r = n(557361),
    a = n(844222);
function s() {
    return r.rx.isActive();
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = i.useContext(a.C),
        s = t.keyboardModeEnabled ?? n.keyboardModeEnabled,
        l = i.useRef(!1);
    l.current = !s || !0 === t.disable;
    let o = i.useMemo(() => t.attachTo ?? e.current?.ownerDocument ?? document, [t.attachTo, e]),
        d = i.useRef(null),
        c = t.disable ? d : e;
    return (0, r.Ay)(c, { ...t, disableReturnRef: l, attachTo: o });
}
function o(e) {
    let { keyboardModeEnabled: t } = e;
    return l(e.containerRef, { keyboardModeEnabled: t }), e.children;
}
