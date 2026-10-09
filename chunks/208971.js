n.d(t, { G: () => m });
var l = n(582128),
    s = n(17928),
    i = n(49491),
    a = n(311043),
    r = n(569926),
    o = n(287809),
    u = n(240248),
    c = n(827669),
    d = n(660183);
function m(e) {
    let t = l.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
    return (
        (0, r.x)(t),
        (0, s.bG)(
            [a.A, o.default],
            () => {
                if ((0, u.uJ)(e) || 0 === t.length) return e;
                let n = o.default.getCurrentUser()?.nsfwAllowed;
                return e.replace(c.Dx, (e, t) => {
                    let l = a.A.getGame(t);
                    return (0, i.b)(l, n) ? d.intl.string(d.t["11pdXZ"]) : (l?.name ?? d.intl.string(d.t["11pdXZ"]));
                });
            },
            [e, t],
        )
    );
}
