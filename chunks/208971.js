"use strict";
n.d(t, { G: () => h });
var l = n(582128),
    i = n(17928),
    s = n(49491),
    r = n(311043),
    a = n(569926),
    o = n(287809),
    u = n(240248),
    c = n(827669),
    d = n(375708);
function h(e) {
    let t = l.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
    return (
        (0, a.x)(t),
        (0, i.bG)([r.A, o.default], () => {
            if ((0, u.uJ)(e) || 0 === t.length) return e;
            let n = o.default.getCurrentUser()?.nsfwAllowed;
            return e.replace(c.Dx, (e, t) => {
                let l = r.A.getGame(t);
                return (0, s.b)(l, n) ? d.intl.string(d.t["11pdXZ"]) : (l?.name ?? d.intl.string(d.t["11pdXZ"]));
            });
        }, [e, t])
    );
}
