n.d(t, { Z: () => a });
var r = n(544891),
    i = n(570140),
    o = n(981631);
let a = {
    fetch() {
        i.Z.dispatch({ type: 'USER_AUTHORIZED_APPS_REQUEST' }),
            r.tn
                .get({
                    url: o.ANM.OAUTH2_TOKENS,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) =>
                        i.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: e.body
                        }),
                    () =>
                        i.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: []
                        })
                );
    },
    delete(e) {
        r.tn
            .del({
                url: o.ANM.OAUTH2_TOKEN(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                this.fetch();
            });
    }
};
