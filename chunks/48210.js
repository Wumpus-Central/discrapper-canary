l.d(t, { Z: () => i });
var n = l(544891),
    a = l(981631);
let i = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await n.tn.get({
                url: a.ANM.GUILD_PRUNE(e),
                query: {
                    days: t,
                    include_roles: l
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body.pruned;
    },
    prune: (e, t, l) =>
        n.tn.post({
            url: a.ANM.GUILD_PRUNE(e),
            body: {
                days: t,
                compute_prune_count: !1,
                include_roles: l
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
};
