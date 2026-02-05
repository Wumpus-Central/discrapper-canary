"use strict";
n.d(t, { A: () => A });
var r = n(64700),
    i = n(621466),
    a = n(311907),
    s = n(192308),
    o = n(397927),
    l = n(775121),
    u = n(955572),
    c = n(775602),
    d = n(502229),
    _ = n(532624),
    f = n(350535),
    p = n(650583);
function h(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== p.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, s.hasAnyModalOpen)() ||
        d.A.maybeShowKeyboardNavigationExplainerModal();
}
function m(e) {
    let t = f.Cy("shift"),
        n = f.Cy("tab");
    if (e.key === p.N$.Tab && e.shiftKey && null != t && null != n)
        return [
            [p.zY.KEYBOARD_KEY, t],
            [p.zY.KEYBOARD_KEY, n],
        ];
    let r = p.G1.get(e.key);
    if (null != r) {
        let e = f.Cy(r);
        if (null != e) return [[p.zY.KEYBOARD_KEY, e]];
    }
    return null;
}
function g(e, t) {
    let n = (0, i.Cw)((0, i.BF)(e)?.activeElement);
    if ((n && e.key !== p.N$.Tab) || e.ctrlKey || e.altKey || e.metaKey || (e.key !== p.N$.Tab && e.shiftKey)) return;
    let r = m(e);
    null == r ||
        _.Ay.hasExactKeybind(r) ||
        l.A.hasBind(f.Qd(r[0]) ?? "") ||
        ((0, u.uS)(), n && !t && e.preventDefault());
}
function E() {
    (0, u.Bm)();
}
let A = function (e, t) {
    let n = (0, a.bG)([c.A], () => c.A.keyboardModeEnabled);
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
