n.d(t, { A: () => a });
var i = n(562465),
    l = n(73153),
    s = n(652215);
let a = {
    fetchRegions(e) {
        i.Bo.get({ url: s.Rsh.REGIONS(e), retries: 1, oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => l.h.dispatch({ type: "LOAD_REGIONS", regions: t.body, guildId: e }),
            () => l.h.dispatch({ type: "LOAD_REGIONS", regions: [], guildId: e }),
        );
    },
    changeCallRegion(e, t) {
        i.Bo.patch({ url: s.Rsh.CALL(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
    },
};
