n.d(t, { Z: () => o });
var i = n(544891),
    s = n(570140),
    r = n(881052),
    l = n(981631);
let a = {
        [l.gkr.HOUSE_1]: 1,
        [l.gkr.HOUSE_2]: 2,
        [l.gkr.HOUSE_3]: 3
    },
    o = {
        joinHypeSquadOnline: (e) =>
            i.tn
                .post({
                    url: l.ANM.HYPESQUAD_ONLINE,
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
                    throw new r.yZ(e);
                }),
        leaveHypeSquadOnline: () =>
            i.tn
                .del({
                    url: l.ANM.HYPESQUAD_ONLINE,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(() => s.Z.dispatch({ type: 'HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS' }))
                .catch((e) => {
                    throw new r.yZ(e);
                })
    };
