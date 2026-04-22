"use strict";
n.d(t, { A: () => m });
var r = n(64700),
    i = n(621466),
    s = n(311907),
    a = n(192308),
    o = n(312138),
    l = n(775121),
    u = n(955572),
    d = n(775602),
    c = n(502229),
    _ = n(532624),
    f = n(350535),
    E = n(650583);
function h(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== E.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, a.hasAnyModalOpen)() ||
        c.A.maybeShowKeyboardNavigationExplainerModal();
}
function p() {
    (0, u.Bm)();
}
let m = function (e, t) {
    let n = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled);
    (0, o.Op)(n);
    let a = (0, r.useCallback)(
        (e) => {
            !(function (e, t) {
                let n = (0, i.Cw)((0, i.BF)(e)?.activeElement);
                if (
                    (n && e.key !== E.N$.Tab) ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.metaKey ||
                    (e.key !== E.N$.Tab && e.shiftKey)
                )
                    return;
                let r = (function (e) {
                    let t = f.Cy("shift"),
                        n = f.Cy("tab");
                    if (e.key === E.N$.Tab && e.shiftKey && null != t && null != n)
                        return [
                            [E.zY.KEYBOARD_KEY, t],
                            [E.zY.KEYBOARD_KEY, n],
                        ];
                    let r = E.G1.get(e.key);
                    if (null != r) {
                        let e = f.Cy(r);
                        if (null != e) return [[E.zY.KEYBOARD_KEY, e]];
                    }
                    return null;
                })(e);
                null == r ||
                    _.Ay.hasExactKeybind(r) ||
                    l.A.hasBind(f.Qd(r[0]) ?? "") ||
                    ((0, u.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", p), e.addEventListener("keydown", h))
                    : e.addEventListener("keydown", a),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", p), e.removeEventListener("keydown", h))
                        : e.removeEventListener("keydown", a);
                }
            ),
            [e, a, n],
        ),
        n
    );
};
