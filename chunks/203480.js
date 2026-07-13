n.d(t, { A: () => A });
var r = n(64700),
    i = n(621466),
    s = n(17928),
    o = n(192308),
    l = n(312138),
    a = n(775121),
    c = n(955572),
    u = n(775602),
    d = n(502229),
    h = n(532624),
    f = n(350535),
    p = n(650583);
function m(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== p.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, o.hasAnyModalOpen)() ||
        d.A.maybeShowKeyboardNavigationExplainerModal();
}
function g() {
    (0, c.Bm)();
}
let A = function (e, t) {
    let n = (0, s.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
    (0, l.Op)(n);
    let o = (0, r.useCallback)(
        (e) => {
            !(function (e, t) {
                let n = (0, i.Cw)((0, i.BF)(e)?.activeElement);
                if (
                    (n && e.key !== p.N$.Tab) ||
                    e.ctrlKey ||
                    e.altKey ||
                    e.metaKey ||
                    (e.key !== p.N$.Tab && e.shiftKey)
                )
                    return;
                let r = (function (e) {
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
                })(e);
                null == r ||
                    h.Ay.hasExactKeybind(r) ||
                    a.A.hasBind(f.Qd(r[0]) ?? "") ||
                    ((0, c.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", g), e.addEventListener("keydown", m))
                    : e.addEventListener("keydown", o),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", g), e.removeEventListener("keydown", m))
                        : e.removeEventListener("keydown", o);
                }
            ),
            [e, o, n],
        ),
        n
    );
};
