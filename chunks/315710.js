"use strict";
n.d(t, { O: () => o, t: () => a });
var i = n(64700),
    r = n(825437),
    s = n(844222);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = i.useContext(s.C),
        a = t.keyboardModeEnabled ?? n.keyboardModeEnabled,
        o = i.useRef(!1);
    o.current = !a || !0 === t.disable;
    let l = i.useMemo(() => t.attachTo ?? e.current?.ownerDocument ?? document, [t.attachTo, e]),
        u = i.useRef(null),
        c = t.disable ? u : e;
    return (0, r.Ay)(c, { ...t, disableReturnRef: o, attachTo: l });
}
function o(e) {
    let { keyboardModeEnabled: t } = e;
    return a(e.containerRef, { keyboardModeEnabled: t }), e.children;
}
