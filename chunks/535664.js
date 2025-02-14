n.d(t, {
    C: () => s,
    u: () => r
});
var i = n(570140);
let s = (e, t) => {
        i.Z.dispatch({
            type: 'SET_PREMIUM_TYPE_OVERRIDE',
            premiumType: e
        }),
            i.Z.dispatch({
                type: 'UPDATE_CLIENT_PREMIUM_TYPE',
                user: t
            });
    },
    r = (e) => {
        i.Z.dispatch({
            type: 'SET_CREATED_AT_OVERRIDE',
            createdAt: e
        });
    };
