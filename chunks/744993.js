n.d(t, {
    EC: () => i,
    LG: () => o,
    g$: () => s,
    po: () => l,
});
var a = n(570140),
    r = n(962774);
function l(e) {
    setTimeout(() => {
        a.Z.dispatch({
            type: "PORTKEY_FETCH_CATALOG_SUCCESS",
            guildId: e,
            catalog: r.kd.reduce((e, t) => ((e[t.id] = t), e), {}),
        });
    }, 5000);
}
function i(e) {
    setTimeout(() => {
        a.Z.dispatch({
            type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
            guildId: e,
            instances: r.qE.reduce((e, t) => ((e[t.gameId] = t), e), {}),
        });
    }, 5000);
}
function s(e) {
    a.Z.dispatch({
        type: "PORTKEY_ACCEPT_TOS",
        acceptedToS: e,
    });
}
function o(e, t) {
    a.Z.dispatch({
        type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
        pingUrl: e,
        state: t,
    });
}
