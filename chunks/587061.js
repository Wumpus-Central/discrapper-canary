n.d(t, { Z: () => y });
var i = n(192379),
    r = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(714338),
    l = n(857595),
    u = n(607070),
    c = n(627845),
    d = n(556296),
    f = n(5967),
    _ = n(13140),
    p = n(981631),
    h = n(420212);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== h.mR.Tab || t || __OVERLAY__ || (0, a.$s)() || c.Z.maybeShowKeyboardNavigationExplainerModal();
}
function g(e) {
    let t = _.C$('shift'),
        n = _.C$('tab');
    if (e.key === h.mR.Tab && e.shiftKey && null != t && null != n)
        return [
            [p.MoX.KEYBOARD_KEY, t],
            [p.MoX.KEYBOARD_KEY, n]
        ];
    let i = h.el.get(e.key);
    if (null != i) {
        let e = _.C$(i);
        if (null != e) return [[p.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function E(e, t) {
    var n, i;
    let r = (0, f.VG)(null === (n = (0, f.uB)(e)) || void 0 === n ? void 0 : n.activeElement);
    if ((r && e.key !== h.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== h.mR.Tab && e.shiftKey)) return;
    let a = g(e);
    null == a || d.Z.hasExactKeybind(a) || o.Z.hasBind(null !== (i = _.H9(a[0])) && void 0 !== i ? i : '') || ((0, l.Qj)(), r && !t && e.preventDefault());
}
function v() {
    (0, l.rf)();
}
let y = function (e, t) {
    let n = (0, r.e7)([u.Z], () => u.Z.keyboardModeEnabled);
    (0, s.JDz)(n);
    let a = (0, i.useCallback)(
        (e) => {
            E(e, t);
        },
        [t]
    );
    return (
        (0, i.useLayoutEffect)(
            () => (
                n ? (e.addEventListener('mousedown', v), e.addEventListener('keydown', m)) : e.addEventListener('keydown', a),
                () => {
                    n ? (e.removeEventListener('mousedown', v), e.removeEventListener('keydown', m)) : e.removeEventListener('keydown', a);
                }
            ),
            [e, a, n]
        ),
        n
    );
};
