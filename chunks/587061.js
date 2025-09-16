n.d(t, { Z: () => y });
var r = n(647438),
    i = n(374470),
    a = n(442837),
    o = n(952265),
    s = n(481060),
    l = n(714338),
    c = n(857595),
    u = n(607070),
    d = n(627845),
    f = n(556296),
    _ = n(13140),
    p = n(981631),
    h = n(420212);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== h.mR.Tab || t || __OVERLAY__ || (0, o.$s)() || d.Z.maybeShowKeyboardNavigationExplainerModal();
}
function g(e) {
    let t = _.C$("shift"),
        n = _.C$("tab");
    if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [p.MoX.KEYBOARD_KEY, t],
            [p.MoX.KEYBOARD_KEY, n],
        ];
    let r = h.el.get(e.key);
    if (null != r) {
        let e = _.C$(r);
        if (null != e) return [[p.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function E(e, t) {
    var n, r;
    let a = (0, i.VG)(null == (n = (0, i.uB)(e)) ? void 0 : n.activeElement);
    if ((a && e.key !== h.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== h.mR.Tab && e.shiftKey)) return;
    let o = g(e);
    null == o ||
        f.ZP.hasExactKeybind(o) ||
        l.Z.hasBind(null != (r = _.H9(o[0])) ? r : "") ||
        ((0, c.Qj)(), a && !t && e.preventDefault());
}
function b() {
    (0, c.rf)();
}
let y = function (e, t) {
    let n = (0, a.e7)([u.Z], () => u.Z.keyboardModeEnabled);
    (0, s.JDz)(n);
    let i = (0, r.useCallback)(
        (e) => {
            E(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", b), e.addEventListener("keydown", m))
                    : e.addEventListener("keydown", i),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", b), e.removeEventListener("keydown", m))
                        : e.removeEventListener("keydown", i);
                }
            ),
            [e, i, n],
        ),
        n
    );
};
