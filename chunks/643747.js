n.d(t, { $: () => a, y: () => r });
var i = n(228366);
function r(e, t) {
    i.h.dispatch({ type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: e, channelId: t });
}
function a(e) {
    i.h.dispatch({ type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey: e });
}
