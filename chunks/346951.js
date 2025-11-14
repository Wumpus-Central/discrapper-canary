n.d(t, { R: () => l });
var r = n(544891),
    i = n(570140),
    a = n(669764),
    o = n(981631);
let s = 20;
function l(e) {
    let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
        n = t ? e : e.filter(a.Z.canFetch);
    if (0 === n.length) return;
    i.Z.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
        applicationIds: n,
    });
    let l = async (e) => {
        try {
            let t = await r.tn.get({
                url: o.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                query: { application_ids: e },
                rejectWithError: !0,
            });
            i.Z.dispatch({
                type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
                applicationIds: e,
                supplementalGameData: t.body.supplemental_game_data,
            });
        } catch (t) {
            i.Z.dispatch({
                type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
                applicationIds: e,
            });
        }
    };
    for (; n.length > 0; ) l(n.splice(0, s));
}
