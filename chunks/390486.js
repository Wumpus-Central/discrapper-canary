var i = n(506774),
    r = n(148810),
    a = n(521502),
    s = n(380610);
let l = "recentBuildOverrides";
function o() {
    let e = i.w.get(l);
    return (Array.isArray(e) ? e : []).filter((e) => null == e.exp || e.exp > Date.now());
}
function d(e) {
    let t = [e, ...o().filter((t) => e.id !== t.id)].slice(0, 5);
    i.w.set(l, t);
}
n.d(
    t,
    {},
    {
        HP: o,
        R6: function (e, t) {
            null == t ||
                (null != e &&
                    null != e.targetBuildOverride.discord_web &&
                    d({
                        id: e.targetBuildOverride.discord_web.id,
                        type: e.targetBuildOverride.discord_web.type,
                        payload: t,
                        exp: Date.parse(e.expiresAt),
                        appliedAt: Date.now(),
                    }));
        },
        mk: async function (e) {
            if (null != e.payload) return (await (0, r.oA)(e.payload)).ok;
            let t = (await (0, s.bD)()) ?? a.A.getCurrentBuildOverride().overrides;
            return 200 === (await (0, r.Zk)({ ...t, discord_web: { type: e.type ?? "branch", id: e.id } })).status;
        },
        wY: function (e) {
            let t = o(),
                n = t[0];
            (n?.id === e.id && null != n.appliedAt) ||
                d({ ...t.find((t) => t.id === e.id), id: e.id, type: e.type, appliedAt: Date.now() });
        },
    },
);
