var t = n(582128),
    s = n(855986),
    a = n(49491),
    i = n(311043),
    r = n(454908),
    u = n(287809),
    o = n(240248),
    c = n(827669),
    d = n(792996);
n.d(
    l,
    {},
    {
        G: function (e) {
            let l = t.useMemo(() => (0, c.EZ)(e ?? ""), [e]);
            return (
                (0, r.x)(l),
                (0, s.bG)(
                    [i.A, u.default],
                    () => {
                        if ((0, o.uJ)(e) || 0 === l.length) return e;
                        let n = u.default.getCurrentUser()?.nsfwAllowed;
                        return e.replace(c.Dx, (e, l) => {
                            let t = i.A.getGame(l);
                            return (0, a.b)(t, n)
                                ? d.intl.string(d.t["11pdXZ"])
                                : (t?.name ?? d.intl.string(d.t["11pdXZ"]));
                        });
                    },
                    [e, l],
                )
            );
        },
    },
);
