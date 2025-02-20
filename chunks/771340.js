n.d(t, { Z: () => o });
var r = n(544891),
    i = n(570140),
    l = n(981631);
let o = {
    fetchRegions(e) {
        r.tn
            .get({
                url: l.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (t) =>
                    i.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: t.body,
                        guildId: e
                    }),
                () =>
                    i.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: [],
                        guildId: e
                    })
            );
    },
    changeCallRegion(e, t) {
        r.tn.patch({
            url: l.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
