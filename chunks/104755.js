n.d(t, { s: () => s });
var r = n(544891),
    i = n(570140),
    a = n(973616),
    o = n(981631);
async function s(e) {
    try {
        let t = await r.tn.post({
                url: o.ANM.PLATFORM_APPLICATION,
                body: { sku: e },
                rejectWithError: !1
            }),
            n = 200 === t.status ? t.body.application : null;
        i.Z.dispatch({
            type: 'ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS',
            universeId: e,
            application: null != n ? a.ZP.createFromServer(n) : null
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE',
            universeId: e,
            error: t
        });
    }
}
