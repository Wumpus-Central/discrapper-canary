n.d(t, { Z: () => g }), n(388685), n(361932), n(187205);
var r = n(473749),
    i = n(296009),
    l = n(399606),
    a = n(251296),
    o = n(594174),
    c = n(823379),
    s = n(931847),
    u = n(836197),
    d = n(517157),
    f = n(247397);
function g(e) {
    let t = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, d.Z)(null == t ? void 0 : t.id),
        g = (0, a.no)(e);
    return r.useMemo(() => {
        let e = new Set(n.filter((e) => e instanceof s.q).map((e) => e.applicationId)),
            t = new Set(n.map((e) => e.type));
        return f.rR.flatMap((n) =>
            n === i.l.APPLICATION
                ? null == g
                    ? []
                    : g.filter((t) => !e.has(t.applicationId)).map((e) => new s.q({ applicationId: e.applicationId }))
                : (0, u.Sr)(n)
                  ? t.has(n)
                      ? []
                      : new u.zy({
                            type: n,
                            games: [],
                        })
                  : void (0, c.vE)(n),
        );
    }, [g, n]);
}
