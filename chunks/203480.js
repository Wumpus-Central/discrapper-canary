n.d(t, { A: () => b });
var r = n(64700),
    i = n(621466),
    a = n(311907),
    s = n(192308),
    o = n(397927),
    l = n(775121),
    c = n(955572),
    u = n(775602),
    d = n(502229),
    f = n(532624),
    p = n(350535),
    _ = n(650583);
function h(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== _.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, s.hasAnyModalOpen)() ||
        d.A.maybeShowKeyboardNavigationExplainerModal();
}
function m(e) {
    let t = p.Cy("shift"),
        n = p.Cy("tab");
    if (e.key === _.N$.Tab && e.shiftKey && null != t && null != n)
        return [
            [_.zY.KEYBOARD_KEY, t],
            [_.zY.KEYBOARD_KEY, n],
        ];
    let r = _.G1.get(e.key);
    if (null != r) {
        let e = p.Cy(r);
        if (null != e) return [[_.zY.KEYBOARD_KEY, e]];
    }
    return null;
}
function g(e, t) {
    var n, r;
    let a = (0, i.Cw)(null == (r = (0, i.BF)(e)) ? void 0 : r.activeElement);
    if ((a && e.key !== _.N$.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== _.N$.Tab && e.shiftKey)) return;
    let s = m(e);
    null == s ||
        f.Ay.hasExactKeybind(s) ||
        l.A.hasBind(null != (n = p.Qd(s[0])) ? n : "") ||
        ((0, c.uS)(), a && !t && e.preventDefault());
}
function E() {
    (0, c.Bm)();
}
let b = function (e, t) {
    let n = (0, a.bG)([u.A], () => u.A.keyboardModeEnabled);
    (0, o.OpQ)(n);
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
                    ? (e.addEventListener("mousedown", E), e.addEventListener("keydown", h))
                    : e.addEventListener("keydown", i),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", E), e.removeEventListener("keydown", h))
                        : e.removeEventListener("keydown", i);
                }
            ),
            [e, i, n],
        ),
        n
    );
};
