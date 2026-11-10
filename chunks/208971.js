var t = n(582128),
    a = n(855986),
    s = n(49491),
    i = n(311043),
    r = n(454908),
    u = n(287809),
    o = n(240248),
    d = n(827669),
    c = n(792996);
n.d(
    l,
    {},
    {
        G: function (e) {
            let l = t.useMemo(() => (0, d.EZ)(e ?? ""), [e]);
            return (
                (0, r.x)(l),
                (0, a.bG)(
                    [i.A, u.default],
                    () => {
                        if ((0, o.uJ)(e) || 0 === l.length) return e;
                        let n = u.default.getCurrentUser()?.nsfwAllowed;
                        return e.replace(d.Dx, (e, l) => {
                            let t = i.A.getGame(l);
                            return (0, s.b)(t, n)
                                ? c.intl.string(c.t["11pdXZ"])
                                : (t?.name ?? c.intl.string(c.t["11pdXZ"]));
                        });
                    },
                    [e, l],
                )
            );
        },
    },
);
