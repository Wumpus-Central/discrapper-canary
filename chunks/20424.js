"use strict";
n.d(t, { A: () => c, c: () => d });
var r = n(64700),
    i = n(633075),
    s = n(289173),
    a = n(950191),
    o = n(403362),
    l = n(501838),
    u = n(188275);
function c(e) {
    let { displayProfile: t } = e,
        n = r.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        a = (0, l.gT)({ gameIds: u.sQ, userIds: n }),
        c = (0, l.K6)({ gameIds: u.sQ, userIds: n }),
        d = (0, l.l1)(n),
        _ = r.useMemo(() => {
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
            for (let t of u.sQ) if (e.has(t)) return !0;
            return !1;
        }, [t?.widgets]);
    return t?.application == null && (a || c || d || _);
}
function d(e) {
    let { userId: t } = e;
    return c({ displayProfile: (0, a.Ay)(t) });
}
