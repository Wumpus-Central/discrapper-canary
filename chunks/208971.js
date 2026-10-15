n.d(l, { G: () => m });
var t = n(582128),
    s = n(17928),
    i = n(49491),
    a = n(311043),
    r = n(569926),
    u = n(287809),
    o = n(240248),
    c = n(827669),
    d = n(105292);
function m(e) {
    let l = t.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
    return (
        (0, r.x)(l),
        (0, s.bG)(
            [a.A, u.default],
            () => {
                if ((0, o.uJ)(e) || 0 === l.length) return e;
                let n = u.default.getCurrentUser()?.nsfwAllowed;
                return e.replace(c.Dx, (e, l) => {
                    let t = a.A.getGame(l);
                    return (0, i.b)(t, n) ? d.intl.string(d.t["11pdXZ"]) : (t?.name ?? d.intl.string(d.t["11pdXZ"]));
                });
            },
            [e, l],
        )
    );
}
