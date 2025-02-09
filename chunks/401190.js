n.d(t, { Z: () => o });
var i = n(544891),
    s = n(570140),
    l = n(881052),
    r = n(981631);
let a = {
        [r.gkr.HOUSE_1]: 1,
        [r.gkr.HOUSE_2]: 2,
        [r.gkr.HOUSE_3]: 3
    },
    o = {
        joinHypeSquadOnline: (e) =>
            i.tn
                .post({
                    url: r.ANM.HYPESQUAD_ONLINE,
                    body: { house_id: a[e.houseID] },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() =>
                    s.Z.dispatch({
                        type: 'HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS',
                        houseID: e.houseID
                    })
                )
                .catch((e) => {
                    throw new l.yZ(e);
                }),
        leaveHypeSquadOnline: () =>
            i.tn
                .del({
                    url: r.ANM.HYPESQUAD_ONLINE,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => s.Z.dispatch({ type: 'HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS' }))
                .catch((e) => {
                    throw new l.yZ(e);
                })
    };
