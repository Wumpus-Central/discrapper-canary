"use strict";
n.d(t, { A: () => d, c: () => _ });
var r = n(64700),
    i = n(311907),
    s = n(633075),
    a = n(289173),
    o = n(950191),
    l = n(403362),
    u = n(832163),
    c = n(501838);
function d(e) {
    let { displayProfile: t } = e,
        n = r.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        o = (0, c.gT)({ userIds: n }),
        d = (0, c.K6)({ userIds: n }),
        _ = (0, c.l1)(n),
        f = (0, i.bG)([u.A], () => u.A.getStorefrontDetectableGameAndApplicationIds()),
        p = r.useMemo(() => {
            if (t?.widgets == null) return !1;
            let e = new Set(
                t?.widgets
                    .map((e) =>
                        e instanceof a.Yy
                            ? e.games.map((e) => e.applicationId)
                            : e instanceof s.R
                              ? e.applicationId
                              : void 0,
                    )
                    .filter(l.Vq)
                    .flat(),
            );
            for (let t of f) if (e.has(t)) return !0;
            return !1;
        }, [t?.widgets, f]);
    return t?.application == null && (o || d || _ || p);
}
function _(e) {
    let { userId: t } = e;
    return d({ displayProfile: (0, o.Ay)(t) });
}
