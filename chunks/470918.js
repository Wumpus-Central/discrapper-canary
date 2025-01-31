n.d(t, { V: () => s });
var i = n(544891),
    r = n(570140),
    a = n(981631);
async function s() {
    r.Z.dispatch({ type: 'USER_TENURE_REWARD_SYNC_START' });
    try {
        let e = await i.tn.post({
            url: a.ANM.TENURE_REWARD_SYNC,
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'USER_TENURE_REWARD_SYNC_SUCCESS',
            userTenureRewardStatus: e.body.tenure_reward_status
        });
    } catch (e) {
        r.Z.dispatch({ type: 'USER_TENURE_REWARD_SYNC_SUCCESS' });
    }
}
