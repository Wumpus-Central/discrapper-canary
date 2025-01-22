var i = r(192379),
    a = r(442837),
    o = r(952265),
    s = r(481060),
    l = r(714338),
    u = r(857595),
    c = r(607070),
    d = r(627845),
    f = r(556296),
    p = r(5967),
    h = r(13140),
    _ = r(981631),
    m = r(420212);
function g(e) {
    let n = e.ctrlKey || e.altKey || e.metaKey;
    e.key === m.mR.Tab && !n && !__OVERLAY__ && !(0, o.$s)() && d.Z.maybeShowKeyboardNavigationExplainerModal();
}
function E(e) {
    let n = h.C$('shift'),
        r = h.C$('tab');
    if (e.key === m.mR.Tab && e.shiftKey && null != n && null != r)
        return [
            [_.MoX.KEYBOARD_KEY, n],
            [_.MoX.KEYBOARD_KEY, r]
        ];
    let i = m.el.get(e.key);
    if (null != i) {
        let e = h.C$(i);
        if (null != e) return [[_.MoX.KEYBOARD_KEY, e]];
    }
    return null;
}
function v(e, n) {
    var r, i;
    let a = (0, p.VG)(null === (r = (0, p.uB)(e)) || void 0 === r ? void 0 : r.activeElement);
    if ((a && e.key !== m.mR.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== m.mR.Tab && e.shiftKey)) return;
    let o = E(e);
    null != o && !f.Z.hasExactKeybind(o) && !l.Z.hasBind(null !== (i = h.H9(o[0])) && void 0 !== i ? i : '') && ((0, u.Qj)(), a && !n && e.preventDefault());
}
function y() {
    (0, u.rf)();
}
function b(e, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled);
    (0, s.useFocusJumpSectionManager)(r);
    let o = (0, i.useCallback)(
        (e) => {
            v(e, n);
        },
        [n]
    );
    return (
        (0, i.useLayoutEffect)(
            () => (
                r ? (e.addEventListener('mousedown', y), e.addEventListener('keydown', g)) : e.addEventListener('keydown', o),
                () => {
                    r ? (e.removeEventListener('mousedown', y), e.removeEventListener('keydown', g)) : e.removeEventListener('keydown', o);
                }
            ),
            [e, o, r]
        ),
        r
    );
}
n.Z = b;
