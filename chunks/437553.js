l.d(t, { A: () => a });
var n = l(562465),
    i = l(652215);
let a = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await n.Bo.get({
                url: i.Rsh.GUILD_PRUNE(e),
                query: { days: t, include_roles: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body.pruned;
    },
    async updateEstimateV2(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            l = arguments.length > 2 ? arguments[2] : void 0;
        await n.Bo.get({
            url: i.Rsh.GUILD_PRUNE_V2(e),
            query: { days: t, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    prune: (e, t, l) =>
        n.Bo.post({
            url: i.Rsh.GUILD_PRUNE(e),
            body: { days: t, compute_prune_count: !1, include_roles: l },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
};
