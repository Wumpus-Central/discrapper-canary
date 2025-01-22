r.d(n, {
    V: function () {
        return s;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(981631);
async function s() {
    a.Z.dispatch({ type: 'USER_TENURE_REWARD_SYNC_START' });
    try {
        let e = await i.tn.post({
            url: o.ANM.TENURE_REWARD_SYNC,
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'USER_TENURE_REWARD_SYNC_SUCCESS',
            userTenureRewardStatus: e.body.tenure_reward_status
        });
    } catch (e) {
        a.Z.dispatch({ type: 'USER_TENURE_REWARD_SYNC_SUCCESS' });
    }
}
