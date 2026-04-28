l.d(t, { A: () => o });
var n = l(636537),
    i = l(228366),
    r = l(652215);
let o = {
    fetchRegions(e) {
        n.Bo.get({ url: r.Rsh.REGIONS(e), retries: 1, oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => i.h.dispatch({ type: "LOAD_REGIONS", regions: t.body, guildId: e }),
            () => i.h.dispatch({ type: "LOAD_REGIONS", regions: [], guildId: e }),
        );
    },
    changeCallRegion(e, t) {
        n.Bo.patch({ url: r.Rsh.CALL(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
    },
};
