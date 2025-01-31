n.d(t, { Z: () => r });
var i = n(544891),
    l = n(570140),
    a = n(981631);
let r = {
    fetchRegions(e) {
        i.tn
            .get({
                url: a.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (t) =>
                    l.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: t.body,
                        guildId: e
                    }),
                () =>
                    l.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: [],
                        guildId: e
                    })
            );
    },
    changeCallRegion(e, t) {
        i.tn.patch({
            url: a.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    }
};
