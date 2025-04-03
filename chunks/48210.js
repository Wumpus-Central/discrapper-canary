n.d(t, { Z: () => o });
var r = n(544891),
    l = n(981631);
let o = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await r.tn.get({
                url: l.ANM.GUILD_PRUNE(e),
                query: {
                    days: t,
                    include_roles: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body.pruned;
    },
    prune: (e, t, n) =>
        r.tn.post({
            url: l.ANM.GUILD_PRUNE(e),
            body: {
                days: t,
                compute_prune_count: !1,
                include_roles: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
};
