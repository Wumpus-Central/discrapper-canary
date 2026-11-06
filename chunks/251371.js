n.d(t, { A: () => I });
var i = n(477900),
    l = n(192308),
    s = n(309010),
    r = n(855986),
    a = n(73153),
    o = n(653868);
let d = new Map();
class c extends r.Ay.Store {
    static displayName = "GameOrganizationCharacterEligibilityStore";
    getCharacters(e) {
        return d.get(e) ?? null;
    }
}
let u = new c(a.h, {
    GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { code: t, characters: n } = e;
        (d = new Map(d)).set(t, n.map(o.w6));
    },
    LOGOUT: function () {
        if (0 === d.size) return !1;
        d = new Map();
    },
});
var m = n(580583),
    h = n(927813),
    g = n(664947),
    p = n(489452),
    A = n(652215);
let x = (0, r.UT)(u, {
    getQueryId: A.fic.GAME_ORGANIZATION_CHARACTER_ELIGIBILITY,
    staleAfter: h.A.Seconds.MINUTE,
    failureStaleAfter: h.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: p.A },
    get: (e) => (null != e ? u.getCharacters(e) : null),
    load: async (e) => {
        null != e && (await g.A.fetchCharacterEligibility(e));
    },
});
var f = n(673383);
async function I(e) {
    let t = await (async function (e) {
        let t = m.A.getInvite(e);
        if (t?.state !== f.Zb.RESOLVED || m.A.isJoinFlowPending(e)) return "noop";
        if (t.characterMode !== f.Wy.MULTI) return "eligible";
        let n = s.Ay.getChannelId();
        if (
            (await (async function (e, t) {
                a.h.dispatch({ type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: e, pending: !0 });
                try {
                    return await t();
                } finally {
                    a.h.dispatch({ type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: e, pending: !1 });
                }
            })(e, () => x.fetchMany([e])),
            s.Ay.getChannelId() !== n)
        )
            return "noop";
        let i = u.getCharacters(e);
        return null == i ? f.ru.ERROR : 0 === i.length ? f.ru.NO_CHARACTERS : "eligible";
    })(e);
    if ("noop" !== t) {
        if ("eligible" !== t)
            return void (0, l.mM)(
                async () => {
                    let { default: l } = await Promise.all([n.e(817670), n.e(358082)]).then(n.bind(n, 344774));
                    return (n) => (0, i.jsx)(l, { code: e, reason: t, ...n });
                },
                { modalKey: f.s5 },
            );
        (0, l.mM)(
            async () => {
                let { default: t } = await Promise.all([n.e(82721), n.e(817670), n.e(734954)]).then(n.bind(n, 406257));
                return (n) => (0, i.jsx)(t, { code: e, ...n });
            },
            { modalKey: f.Q_ },
        );
    }
}
