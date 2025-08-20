n.d(t, { Z: () => l });
var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(981631);
let s = {
        [o.gkr.HOUSE_1]: 1,
        [o.gkr.HOUSE_2]: 2,
        [o.gkr.HOUSE_3]: 3,
    },
    l = {
        joinHypeSquadOnline: (e) =>
            r.tn
                .post({
                    url: o.ANM.HYPESQUAD_ONLINE,
                    body: { house_id: s[e.houseID] },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(() =>
                    i.Z.dispatch({
                        type: "HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS",
                        houseID: e.houseID,
                    }),
                )
                .catch((e) => {
                    throw new a.yZ(e);
                }),
        leaveHypeSquadOnline: () =>
            r.tn
                .del({
                    url: o.ANM.HYPESQUAD_ONLINE,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(() => i.Z.dispatch({ type: "HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS" }))
                .catch((e) => {
                    throw new a.yZ(e);
                }),
    };
