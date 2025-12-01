n.d(t, { Z: () => b });
var r = n(473749),
    i = n(374470),
    a = n(442837),
    o = n(952265),
    s = n(481060),
    l = n(714338),
    c = n(857595),
    u = n(607070),
    d = n(627845),
    f = n(556296),
    p = n(13140),
    _ = n(295907);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== _.mR.Tab || t || __OVERLAY__ || (0, o.$s)() || d.Z.maybeShowKeyboardNavigationExplainerModal();
}
function h(e) {
    let t = p.C$("shift"),
        n = p.C$("tab");
    if (e.key === _.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [_.Mo.KEYBOARD_KEY, t],
            [_.Mo.KEYBOARD_KEY, n],
        ];
    let r = _.el.get(e.key);
    if (null != r) {
        let e = p.C$(r);
        if (null != e) return [[_.Mo.KEYBOARD_KEY, e]];
    }
    return null;
}
function g(e, t) {
    var n, r;
    let a = (0, i.VG)(null == (n = (0, i.uB)(e)) ? void 0 : n.activeElement);
    if ((a && e.key !== _.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== _.mR.Tab && e.shiftKey)) return;
    let o = h(e);
    null == o ||
        f.ZP.hasExactKeybind(o) ||
        l.Z.hasBind(null != (r = p.H9(o[0])) ? r : "") ||
        ((0, c.Qj)(), a && !t && e.preventDefault());
}
function E() {
    (0, c.rf)();
}
let b = function (e, t) {
    let n = (0, a.e7)([u.Z], () => u.Z.keyboardModeEnabled);
    (0, s.JDz)(n);
    let i = (0, r.useCallback)(
        (e) => {
            g(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", E), e.addEventListener("keydown", m))
                    : e.addEventListener("keydown", i),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", E), e.removeEventListener("keydown", m))
                        : e.removeEventListener("keydown", i);
                }
            ),
            [e, i, n],
        ),
        n
    );
};
