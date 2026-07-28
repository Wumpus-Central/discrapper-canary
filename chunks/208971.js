"use strict";
n.d(t, { G: () => _ });
var i = n(582128),
    r = n(17928),
    a = n(49491),
    s = n(311043),
    l = n(569926),
    o = n(287809),
    d = n(240248),
    c = n(827669),
    u = n(375708);
function _(e) {
    let t = i.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
    return (
        (0, l.x)(t),
        (0, r.bG)([s.A, o.default], () => {
            if ((0, d.uJ)(e) || 0 === t.length) return e;
            let n = o.default.getCurrentUser()?.nsfwAllowed;
            return e.replace(c.Dx, (e, t) => {
                let i = s.A.getGame(t);
                return (0, a.b)(i, n) ? u.intl.string(u.t["11pdXZ"]) : (i?.name ?? u.intl.string(u.t["11pdXZ"]));
            });
        }, [e, t])
    );
}
