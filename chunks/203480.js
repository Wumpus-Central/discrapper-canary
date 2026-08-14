n.d(t, { A: () => A });
var r = n(582128),
    i = n(621466),
    s = n(17928),
    o = n(192308),
    l = n(312138),
    a = n(775121),
    c = n(955572),
    d = n(775602),
    u = n(502229),
    h = n(532624),
    f = n(350535),
    g = n(650583);
function p(e) {
    let t = e.ctrlKey || e.altKey || e.metaKey;
    e.key !== g.N$.Tab ||
        t ||
        __OVERLAY__ ||
        (0, o.hasAnyModalOpen)() ||
        u.A.maybeShowKeyboardNavigationExplainerModal();
}
function m() {
    (0, c.Bm)();
}
let A = function (e, t) {
    let n = (0, s.bG)([d.Ay], () => d.Ay.keyboardModeEnabled);
    (0, l.Op)(n);
    let o = (0, r.useCallback)(
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
                    ((0, c.uS)(), n && !t && e.preventDefault());
            })(e, t);
        },
        [t],
    );
    return (
        (0, r.useLayoutEffect)(
            () => (
                n
                    ? (e.addEventListener("mousedown", m), e.addEventListener("keydown", p))
                    : e.addEventListener("keydown", o),
                () => {
                    n
                        ? (e.removeEventListener("mousedown", m), e.removeEventListener("keydown", p))
                        : e.removeEventListener("keydown", o);
                }
            ),
            [e, o, n],
        ),
        n
    );
};
