n.d(t, {
    O: () => o,
    X: () => l,
});
var r = n(734057),
    i = n(383501),
    a = n(954571),
    s = n(652215),
    o = (function (e) {
        return (
            (e.MIC = "Mic"),
            (e.CAMERA = "Camera"),
            (e.DEAFEN = "Deafen"),
            (e.STREAM = "Stream"),
            (e.ACTIVITY = "Activity"),
            (e.SOUNDBOARD = "Soundboard"),
            (e.GIFTING = "Gifting"),
            (e.EMOJI = "Emoji"),
            (e.DISCONNECT = "Disconnect"),
            (e.LEAVE_ACTIVITY = "Leave Activity"),
            (e.STOP_WATCHING = "Stop Watching"),
            (e.POPOUT = "Popout"),
            (e.STAY_ON_TOP = "Stay On Top"),
            (e.FULL_SCREEN = "Full Screen"),
            (e.JOIN_CALL = "Join Call"),
            (e.JOIN_VIDEO_CALL = "Join Video Call"),
            (e.MORE = "More"),
            (e.CHAT = "Chat"),
            (e.INVITE = "Invite"),
            (e.FOCUS = "Focus"),
            (e.GRID = "Grid"),
            (e.CLIP = "Clip"),
            (e.VOLUME = "Volume"),
            (e.REQUEST_TO_SPEAK = "Request To Speak"),
            (e.SPEAK_ON_STAGE = "Speak on Stage"),
            (e.MOVE_TO_AUDIENCE = "Move to Audience"),
            (e.JOIN_STAGE = "Join Stage"),
            (e.LEAVE_STAGE = "Leave Stage"),
            (e.STAGE_MUSIC = "Stage Music"),
            (e.OPEN_REQUEST_TO_SPEAK_SIDEBAR = "Open Request To Speak Sidebar"),
            (e.KRISP = "Krisp"),
            (e.CHANNEL_LINK = "Channel Link"),
            (e.CONNECTION_STATUS = "Connection Status"),
            (e.VOICE_USER = "Voice User"),
            (e.STREAM_SETTINGS = "Stream Settings"),
            e
        );
    })({});

function l(e, t, n) {
    var o;
    let l = i.A.getChannelId(),
        c = i.A.getGuildId(),
        u = null == (o = r.A.getChannel(l)) ? void 0 : o.type;
    a.default.track(s.HAw.CALL_BUTTON_CLICKED, {
        location: e,
        button_name: t,
        toggled_active: n,
        guild_id: c,
        channel_id: l,
        channel_type: u,
    });
}
