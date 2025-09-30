n.d(t, { t: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function o(e) {
    let { body: t } = await r.tn.get({
        url: a.ANM.ACTIVITIES_DISCORD_CONFIG(e),
        rejectWithError: !1,
    });
    i.Z.dispatch({
        type: "ACTIVITIES_DISCORD_CONFIG_FETCH_SUCCESS",
        experimentName: e,
        config: t,
    });
}
