"use strict";
s.d(t, { tR: () => o }), s(323874), s(14289), s(35956);
var n = s(64700),
    r = s(960488),
    l = s(976860),
    a = s(840065),
    i = s(652215);
function o() {
    let { search: e } = (0, r.zy)(),
        t = (0, r.g)(),
        s = n.useMemo(() => new URLSearchParams(e), [e]).get("source"),
        o = null != s ? parseInt(s, 10) : null;
    return {
        onClose: n.useCallback(() => {
            if (0 === o) {
                (0, l.aX)(), (0, a.openUserSettings)();
                return;
            }
            (0, l.EL)() ? (0, l.aX)() : (0, l.pX)(i.BVt.APP);
        }, [o]),
        source: o,
        ...t,
    };
}
