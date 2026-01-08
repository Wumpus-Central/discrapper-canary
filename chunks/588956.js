n.d(t, { Z: () => l });
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
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    a.Z.shouldFetch(e) && (await s());
}
