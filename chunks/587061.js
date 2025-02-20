n.d(t, { Z: () => b });
var r = n(192379),
    i = n(442837),
    o = n(952265),
    a = n(481060),
    s = n(714338),
    l = n(857595),
    c = n(607070),
    u = n(627845),
    d = n(556296),
    f = n(5967),
    p = n(13140),
    _ = n(981631),
    h = n(420212);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== h.mR.Tab || t || __OVERLAY__ || (0, o.$s)() || u.Z.maybeShowKeyboardNavigationExplainerModal();
}
function g(e) {
    let t = p.C$('shift'),
        n = p.C$('tab');
    if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [_.MoX.KEYBOARD_KEY, t],
            [_.MoX.KEYBOARD_KEY, n]
        ];
    let r = h.el.get(e.key);
    if (null != r) {
        let e = p.C$(r);
        if (null != e) return [[_.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function E(e, t) {
    var n, r;
    let i = (0, f.VG)(null === (n = (0, f.uB)(e)) || void 0 === n ? void 0 : n.activeElement);
    if ((i && e.key !== h.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== h.mR.Tab && e.shiftKey)) return;
    let o = g(e);
    null == o || d.ZP.hasExactKeybind(o) || s.Z.hasBind(null !== (r = p.H9(o[0])) && void 0 !== r ? r : '') || ((0, l.Qj)(), i && !t && e.preventDefault());
}
function v() {
    (0, l.rf)();
}
let b = function (e, t) {
    let n = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled);
    (0, a.JDz)(n);
    let o = (0, r.useCallback)(
        (e) => {
            E(e, t);
        },
        [t]
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n ? (e.addEventListener('mousedown', v), e.addEventListener('keydown', m)) : e.addEventListener('keydown', o),
                () => {
                    n ? (e.removeEventListener('mousedown', v), e.removeEventListener('keydown', m)) : e.removeEventListener('keydown', o);
                }
            ),
            [e, o, n]
        ),
        n
    );
};
