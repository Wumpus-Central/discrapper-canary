n.d(t, { Z: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
let o = {
    fetch() {
        i.Z.dispatch({ type: 'USER_AUTHORIZED_APPS_REQUEST' }),
            r.tn
                .get({
                    url: a.ANM.OAUTH2_TOKENS,
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
                url: a.ANM.OAUTH2_TOKEN(e),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                this.fetch();
            });
    }
};
