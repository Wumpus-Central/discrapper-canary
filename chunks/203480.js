"use strict";
n.d(t, { A: () => f });
var i = n(64700),
    r = n(621466),
    a = n(17928),
    s = n(192308),
    l = n(312138),
    o = n(775121),
    d = n(955572),
    c = n(775602),
    u = n(502229),
    _ = n(532624),
    E = n(350535),
    A = n(650583);
function h(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== A.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, s.hasAnyModalOpen)() ||
        u.A.maybeShowKeyboardNavigationExplainerModal();
}
function I() {
    (0, d.Bm)();
}
let f = function (e, t) {
    let n = (0, a.bG)([c.Ay], () => c.Ay.keyboardModeEnabled);
    (0, l.Op)(n);
    let s = (0, i.useCallback)(
        (e) => {
            !(function (e, t) {
                let n = (0, r.Cw)((0, r.BF)(e)?.activeElement);
                if (
                    (n && e.key !== A.N$.Tab) ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.metaKey ||
                    (e.key !== A.N$.Tab && e.shiftKey)
                )
                    return;
                let i = (function (e) {
                    let t = E.Cy("shift"),
                        n = E.Cy("tab");
                    if (e.key === A.N$.Tab && e.shiftKey && null != t && null != n)
                        return [
                            [A.zY.KEYBOARD_KEY, t],
                            [A.zY.KEYBOARD_KEY, n],
                        ];
                    let i = A.G1.get(e.key);
                    if (null != i) {
                        let e = E.Cy(i);
                        if (null != e) return [[A.zY.KEYBOARD_KEY, e]];
                    }
                    return null;
                })(e);
                null == i ||
                    _.Ay.hasExactKeybind(i) ||
                    o.A.hasBind(E.Qd(i[0]) ?? "") ||
                    ((0, d.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, i.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", I), e.addEventListener("keydown", h))
                    : e.addEventListener("keydown", s),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", I), e.removeEventListener("keydown", h))
                        : e.removeEventListener("keydown", s);
                }
            ),
            [e, s, n],
        ),
        n
    );
};
