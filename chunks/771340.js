n.d(t, { Z: () => a });
var i = n(544891),
    r = n(570140),
    l = n(981631);
let a = {
    fetchRegions(e) {
        i.tn
            .get({
                url: l.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (t) =>
                    r.Z.dispatch({
                        type: "LOAD_REGIONS",
                        regions: t.body,
                        guildId: e,
                    }),
                () =>
                    r.Z.dispatch({
                        type: "LOAD_REGIONS",
                        regions: [],
                        guildId: e,
                    }),
            );
    },
    changeCallRegion(e, t) {
        i.tn.patch({
            url: l.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
};
