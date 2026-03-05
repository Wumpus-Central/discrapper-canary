"use strict";
n.d(t, { A: () => o });
var l = n(64700),
    a = n(311907),
    r = n(733391),
    s = n(832163),
    i = n(916023);
function o(e) {
    let { guildId: t, location: n } = e,
        o = (0, i.kt)({ location: n }),
        c = (0, a.bG)([s.A], () => (null != t ? s.A.getStorefrontData(t) : void 0), [t]);
    return (
        l.useEffect(() => {
            null != t && o && (0, r.Rw)(t, { eager: !1 });
        }, [t, c, o]),
        c
    );
}
