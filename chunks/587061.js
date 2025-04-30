n.d(t, { Z: () => y });
var r = n(73800),
    i = n(442837),
    a = n(952265),
    o = n(481060),
    s = n(714338),
    l = n(857595),
    c = n(607070),
    u = n(627845),
    d = n(556296),
    f = n(5967),
    _ = n(13140),
    p = n(981631),
    h = n(420212);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== h.mR.Tab || t || __OVERLAY__ || (0, a.$s)() || u.Z.maybeShowKeyboardNavigationExplainerModal();
}
function g(e) {
    let t = _.C$('shift'),
        n = _.C$('tab');
    if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [p.MoX.KEYBOARD_KEY, t],
            [p.MoX.KEYBOARD_KEY, n]
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
    let i = (0, f.VG)(null == (n = (0, f.uB)(e)) ? void 0 : n.activeElement);
    if ((i && e.key !== h.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== h.mR.Tab && e.shiftKey)) return;
    let a = g(e);
    null == a || d.ZP.hasExactKeybind(a) || s.Z.hasBind(null != (r = _.H9(a[0])) ? r : '') || ((0, l.Qj)(), i && !t && e.preventDefault());
}
function b() {
    (0, l.rf)();
}
let y = function (e, t) {
    let n = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled);
    (0, o.JDz)(n);
    let a = (0, r.useCallback)(
        (e) => {
            E(e, t);
        },
        [t]
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n ? (e.addEventListener('mousedown', b), e.addEventListener('keydown', m)) : e.addEventListener('keydown', a),
                () => {
                    n ? (e.removeEventListener('mousedown', b), e.removeEventListener('keydown', m)) : e.removeEventListener('keydown', a);
                }
            ),
            [e, a, n]
        ),
        n
    );
};
