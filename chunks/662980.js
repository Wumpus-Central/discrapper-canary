n.d(t, { T: () => s, Y: () => l });
var i = n(228366),
    a = n(595332);
function s(e, t) {
    a.A.isChatOpen(e) !== t && i.h.dispatch({ type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: e, open: t });
}
function l(e, t) {
    i.h.dispatch({ type: "VIBEGRATIONS_APP_CHANNEL_CHAT_AUTO_OPENED", channelId: e, timestamp: t });
}
