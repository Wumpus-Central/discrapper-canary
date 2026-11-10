n.d(t, { A: () => u });
var i = n(477900),
    l = n(192308),
    s = n(309010),
    r = n(85506),
    a = n(580583),
    o = n(674008),
    d = n(73153),
    c = n(673383);
async function u(e) {
    let t = await (async function (e) {
        let t = a.A.getInvite(e);
        if (t?.state !== c.Zb.RESOLVED || a.A.isJoinFlowPending(e)) return "noop";
        if (t.characterMode !== c.Wy.MULTI) return "eligible";
        let n = s.Ay.getChannelId();
        if (
            (await (async function (e, t) {
                d.h.dispatch({ type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: e, pending: !0 });
                try {
                    return await t();
                } finally {
                    d.h.dispatch({ type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: e, pending: !1 });
                }
            })(e, () => o.P.fetchMany([e])),
            s.Ay.getChannelId() !== n)
        )
            return "noop";
        let i = r.A.getCharacters(e);
        return null == i ? c.ru.ERROR : 0 === i.length ? c.ru.NO_CHARACTERS : "eligible";
    })(e);
    if ("noop" !== t) {
        if ("eligible" !== t)
            return void (0, l.mM)(
                async () => {
                    let { default: l } = await Promise.all([n.e(817670), n.e(358082)]).then(n.bind(n, 344774));
                    return (n) => (0, i.jsx)(l, { code: e, reason: t, ...n });
                },
                { modalKey: c.s5 },
            );
        (0, l.mM)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e(709782),
                    n.e(82721),
                    n.e(817670),
                    n.e(53400),
                    n.e(650404),
                ]).then(n.bind(n, 634127));
                return (n) => (0, i.jsx)(t, { code: e, ...n });
            },
            { modalKey: c.Q_ },
        );
    }
}
