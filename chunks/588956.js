n.d(t, {
    K: () => s,
    Z: () => l,
});
var r = n(544891),
    i = n(570140),
    a = n(468208),
    o = n(981631);
async function s() {
    i.Z.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
    try {
        var e;
        let t =
            null !=
            (e = (
                await r.tn.get({
                    url: o.ANM.PROGRAM_REWARDS,
                    rejectWithError: !0,
                })
            ).body.rewards)
                ? e
                : [];
        i.Z.dispatch({
            type: "PROGRAM_REWARDS_FETCH_SUCCESS",
            programRewards: t,
        });
    } catch (e) {
        i.Z.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    }
}
async function l() {
    a.Z.shouldFetch() && (await s());
}
