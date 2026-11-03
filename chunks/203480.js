n.d(t, { A: () => A });
var r = n(582128),
    i = n(621466),
    l = n(17928),
    s = n(192308),
    o = n(312138),
    a = n(775121),
    d = n(955572),
    u = n(775602),
    c = n(502229),
    h = n(532624),
    f = n(350535),
    g = n(650583);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== g.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, s.hasAnyModalOpen)() ||
        c.A.maybeShowKeyboardNavigationExplainerModal();
}
function p() {
    (0, d.Bm)();
}
let A = function (e, t) {
    let n = (0, l.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
    (0, o.Op)(n);
    let s = (0, r.useCallback)(
        (e) => {
            !(function (e, t) {
                let n = (0, i.Cw)((0, i.BF)(e)?.activeElement);
                if (
                    (n && e.key !== g.N$.Tab) ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.metaKey ||
                    (e.key !== g.N$.Tab && e.shiftKey)
                )
                    return;
                let r = (function (e) {
                    let t = f.Cy("shift"),
                        n = f.Cy("tab");
                    if (e.key === g.N$.Tab && e.shiftKey && null != t && null != n)
                        return [
                            [g.zY.KEYBOARD_KEY, t],
                            [g.zY.KEYBOARD_KEY, n],
                        ];
                    let r = g.G1.get(e.key);
                    if (null != r) {
                        let e = f.Cy(r);
                        if (null != e) return [[g.zY.KEYBOARD_KEY, e]];
                    }
                    return null;
                })(e);
                null == r ||
                    h.Ay.hasExactKeybind(r) ||
                    a.A.hasBind(f.Qd(r[0]) ?? "") ||
                    ((0, d.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", p), e.addEventListener("keydown", m))
                    : e.addEventListener("keydown", s),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", p), e.removeEventListener("keydown", m))
                        : e.removeEventListener("keydown", s);
                }
            ),
            [e, s, n],
        ),
        n
    );
};
