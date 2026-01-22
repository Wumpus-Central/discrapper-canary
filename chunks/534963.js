n.d(t, { A: () => a });
var r = n(562465),
    l = n(73153),
    i = n(652215);
let a = {
    fetchRegions(e) {
        r.Bo.get({
            url: i.Rsh.REGIONS(e),
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (t) =>
                l.h.dispatch({
                    type: "LOAD_REGIONS",
                    regions: t.body,
                    guildId: e,
                }),
            () =>
                l.h.dispatch({
                    type: "LOAD_REGIONS",
                    regions: [],
                    guildId: e,
                }),
        );
    },
    changeCallRegion(e, t) {
        r.Bo.patch({
            url: i.Rsh.CALL(e),
            body: { region: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
};
