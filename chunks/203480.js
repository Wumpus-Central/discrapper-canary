"use strict";
n.d(t, { A: () => g });
var i = n(64700),
    r = n(621466),
    s = n(17928),
    a = n(192308),
    o = n(312138),
    l = n(775121),
    d = n(955572),
    _ = n(775602),
    u = n(502229),
    c = n(532624),
    E = n(350535),
    h = n(650583);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== h.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, a.hasAnyModalOpen)() ||
        u.A.maybeShowKeyboardNavigationExplainerModal();
}
function f() {
    (0, d.Bm)();
}
let g = function (e, t) {
    let n = (0, s.bG)([_.A], () => _.A.keyboardModeEnabled);
    (0, o.Op)(n);
    let a = (0, i.useCallback)(
        (e) => {
            !(function (e, t) {
                let n = (0, r.Cw)((0, r.BF)(e)?.activeElement);
                if (
                    (n && e.key !== h.N$.Tab) ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.metaKey ||
                    (e.key !== h.N$.Tab && e.shiftKey)
                )
                    return;
                let i = (function (e) {
                    let t = E.Cy("shift"),
                        n = E.Cy("tab");
                    if (e.key === h.N$.Tab && e.shiftKey && null != t && null != n)
                        return [
                            [h.zY.KEYBOARD_KEY, t],
                            [h.zY.KEYBOARD_KEY, n],
                        ];
                    let i = h.G1.get(e.key);
                    if (null != i) {
                        let e = E.Cy(i);
                        if (null != e) return [[h.zY.KEYBOARD_KEY, e]];
                    }
                    return null;
                })(e);
                null == i ||
                    c.Ay.hasExactKeybind(i) ||
                    l.A.hasBind(E.Qd(i[0]) ?? "") ||
                    ((0, d.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, i.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", f), e.addEventListener("keydown", m))
                    : e.addEventListener("keydown", a),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", f), e.removeEventListener("keydown", m))
                        : e.removeEventListener("keydown", a);
                }
            ),
            [e, a, n],
        ),
        n
    );
};
