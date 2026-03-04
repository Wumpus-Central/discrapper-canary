"use strict";
n.d(t, { A: () => d, c: () => _ });
var r = n(64700),
    i = n(633075),
    s = n(289173),
    a = n(950191),
    o = n(403362),
    l = n(916023),
    u = n(501838),
    c = n(188275);
function d(e) {
    let { displayProfile: t, location: n } = e,
        a = (0, l.kt)({ location: n }),
        d = r.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        _ = (0, u.gT)({ gameIds: c.sQ, userIds: d }),
        f = (0, u.K6)({ gameIds: c.sQ, userIds: d }),
        p = (0, u.l1)(d),
        h = r.useMemo(() => {
            if (t?.widgets == null) return !1;
            let e = new Set(
                t?.widgets
                    .map((e) =>
                        e instanceof s.Yy
                            ? e.games.map((e) => e.applicationId)
                            : e instanceof i.R
                              ? e.applicationId
                              : void 0,
                    )
                    .filter(o.Vq)
                    .flat(),
            );
            for (let t of c.sQ) if (e.has(t)) return !0;
            return !1;
        }, [t?.widgets]);
    return t?.application == null && a && (_ || f || p || h);
}
function _(e) {
    let { userId: t, location: n } = e;
    return d({ displayProfile: (0, a.Ay)(t), location: n });
}
