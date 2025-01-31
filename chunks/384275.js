n.d(t, { Z: () => s });
var i = n(544891),
    r = n(570140),
    a = n(981631);
let s = {
    fetch() {
        r.Z.dispatch({ type: 'USER_AUTHORIZED_APPS_REQUEST' }),
            i.tn
                .get({
                    url: a.ANM.OAUTH2_TOKENS,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) =>
                        r.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: e.body
                        }),
                    () =>
                        r.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: []
                        })
                );
    },
    delete(e) {
        i.tn
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
