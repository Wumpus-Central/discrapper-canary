n.d(t, { G: () => m });
var l = n(582128),
    i = n(17928),
    s = n(49491),
    a = n(311043),
    r = n(569926),
    o = n(287809),
    u = n(240248),
    d = n(827669),
    c = n(375708);
function m(e) {
    let t = l.useMemo(() => (0, d.EZ)(e ?? ""), [e]);
    return (
        (0, r.x)(t),
        (0, i.bG)(
            [a.A, o.default],
            () => {
                if ((0, u.uJ)(e) || 0 === t.length) return e;
                let n = o.default.getCurrentUser()?.nsfwAllowed;
                return e.replace(d.Dx, (e, t) => {
                    let l = a.A.getGame(t);
                    return (0, s.b)(l, n) ? c.intl.string(c.t["11pdXZ"]) : (l?.name ?? c.intl.string(c.t["11pdXZ"]));
                });
            },
            [e, t],
        )
    );
}
