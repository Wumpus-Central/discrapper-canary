"use strict";
s.d(t, { tR: () => o }), s(323874), s(14289), s(35956);
var n = s(64700),
    l = s(873263),
    r = s(976860),
    a = s(858897),
    i = s(652215);
function o() {
    let { search: e } = (0, l.zy)(),
        t = (0, l.g)(),
        s = n.useMemo(() => new URLSearchParams(e), [e]).get("source"),
        o = null != s ? parseInt(s, 10) : null;
    return {
        onClose: n.useCallback(() => {
            if (0 === o) {
                (0, r.aX)(), (0, a.openUserSettings)();
                return;
            }
            (0, r.EL)() ? (0, r.aX)() : (0, r.pX)(i.BVt.APP);
        }, [o]),
        source: o,
        ...t,
    };
}
