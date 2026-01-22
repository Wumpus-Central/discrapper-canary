n.d(t, { v: () => l });
var r = n(562465),
    i = n(73153),
    a = n(524799),
    s = n(652215);
let o = 20;
function l(e) {
    let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
        n = t ? e : e.filter(a.A.canFetch);
    if (0 === n.length) return;
    i.h.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
        applicationIds: n,
    });
    let l = async (e) => {
        try {
            let t = await r.Bo.get({
                url: s.Rsh.APPLICATIONS_GAMES_SUPPLEMENTAL,
                query: { application_ids: e },
                rejectWithError: !0,
            });
            i.h.dispatch({
                type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
                applicationIds: e,
                supplementalGameData: t.body.supplemental_game_data,
            });
        } catch (t) {
            i.h.dispatch({
                type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
                applicationIds: e,
            });
        }
    };
    for (; n.length > 0; ) l(n.splice(0, o));
}
