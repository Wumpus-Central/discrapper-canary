var i = r(544891),
    a = r(570140),
    o = r(981631);
n.Z = {
    fetch() {
        a.Z.dispatch({ type: 'USER_AUTHORIZED_APPS_REQUEST' }),
            i.tn
                .get({
                    url: o.ANM.OAUTH2_TOKENS,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) =>
                        a.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: e.body
                        }),
                    () =>
                        a.Z.dispatch({
                            type: 'USER_AUTHORIZED_APPS_UPDATE',
                            apps: []
                        })
                );
    },
    delete(e) {
        i.tn
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
