n.d(t, { A: () => i });
var r = n(562465),
    l = n(652215);
let i = {
    async updateEstimate(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return (
            await r.Bo.get({
                url: l.Rsh.GUILD_PRUNE(e),
                query: {
                    days: t,
                    include_roles: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body.pruned;
    },
    prune: (e, t, n) =>
        r.Bo.post({
            url: l.Rsh.GUILD_PRUNE(e),
            body: {
                days: t,
                compute_prune_count: !1,
                include_roles: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
};
