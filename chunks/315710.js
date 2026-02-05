"use strict";
n.d(t, { O: () => o, t: () => s });
var r = n(64700),
    i = n(668447),
    a = n(844222);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = r.useContext(a.C),
        s = t.keyboardModeEnabled ?? n.keyboardModeEnabled,
        o = r.useRef(!1);
    o.current = !s || !0 === t.disable;
    let l = r.useMemo(() => t.attachTo ?? e.current?.ownerDocument ?? document, [t.attachTo, e]),
        u = r.useRef(null),
        c = t.disable ? u : e;
    return (0, i.Ay)(c, { ...t, disableReturnRef: o, attachTo: l });
}
function o(e) {
    let { keyboardModeEnabled: t } = e;
    return s(e.containerRef, { keyboardModeEnabled: t }), e.children;
}
