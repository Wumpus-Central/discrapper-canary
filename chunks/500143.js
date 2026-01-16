n.d(t, { Z: () => p }), n(388685), n(361932), n(187205);
var r = n(473749),
    i = n(296009),
    l = n(399606),
    a = n(251296),
    o = n(594174),
    c = n(823379),
    s = n(931847),
    u = n(836197),
    d = n(172416),
    f = n(517157),
    g = n(247397);
function p(e) {
    let t = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, f.Z)(null == t ? void 0 : t.id),
        p = (0, a.no)(e),
        m = (0, d.U)(e);
    return r.useMemo(() => {
        let e = new Set(n.filter((e) => e instanceof s.q).map((e) => e.applicationId)),
            t = new Set(n.map((e) => e.type));
        return g.rR.flatMap((n) =>
            n === i.l.APPLICATION
                ? null == p
                    ? []
                    : p.filter((t) => !e.has(t.applicationId)).map((e) => new s.q({ applicationId: e.applicationId }))
                : (0, u.Sr)(n)
                  ? !m || t.has(n)
                      ? []
                      : new u.zy({
                            type: n,
                            games: [],
                        })
                  : void (0, c.vE)(n),
        );
    }, [p, n, m]);
}
