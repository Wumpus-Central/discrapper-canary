n.d(t, { BR: () => d, Jr: () => l, KS: () => c, Kv: () => E, Li: () => u, Vo: () => o, uj: () => _ });
var i,
    a,
    r,
    s,
    l =
        (((i = {})[(i.WELCOME = 0)] = "WELCOME"),
        (i[(i.NEWS = 1)] = "NEWS"),
        (i[(i.GO_LIVE_VOICE = 2)] = "GO_LIVE_VOICE"),
        (i[(i.GO_LIVE_NON_VOICE = 3)] = "GO_LIVE_NON_VOICE"),
        (i[(i.CONTENT_INVENTORY = 4)] = "CONTENT_INVENTORY"),
        i);
function o(e) {
    switch (e) {
        case "News Nudge":
        case "Welcome Nudge":
        case "Go Live Nudge":
        case "Go Live Non Voice Nudge":
            return 0;
        case "Text Chat":
            return 1;
        case "Activity User Join":
        case "Activity Invite":
            return 3;
        case "Incoming Call":
            return 2;
        case "Clips Reminder Notification":
        case "Clips Notification":
            return 4;
        default:
            return 5;
    }
}
var d =
        (((a = {})[(a.Nudge = 0)] = "Nudge"),
        (a[(a.TextChat = 1)] = "TextChat"),
        (a[(a.VoiceCall = 2)] = "VoiceCall"),
        (a[(a.Activity = 3)] = "Activity"),
        (a[(a.Clips = 4)] = "Clips"),
        (a[(a.Other = 5)] = "Other"),
        a),
    c =
        (((r = {}).NewsNudge = "News Nudge"),
        (r.WelcomeNudge = "Welcome Nudge"),
        (r.TextChat = "Text Chat"),
        (r.ActivityUserJoin = "Activity User Join"),
        (r.ActivityInvite = "Activity Invite"),
        (r.IncomingCall = "Incoming Call"),
        (r.GoLiveNudge = "Go Live Nudge"),
        (r.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge"),
        (r.OverlayCrashed = "Overlay Crashed"),
        (r.ClipsReminderNotification = "Clips Reminder Notification"),
        (r.ClipsNotification = "Clips Notification"),
        (r.SendGameInvitesNotification = "Send Game Invites Notification"),
        (r.NowPlayingNotification = "Now Playing Notification"),
        (r.RequestToStream = "Request To Stream"),
        r),
    _ = (((s = {})[(s.Viewed = 0)] = "Viewed"), (s[(s.Clicked = 1)] = "Clicked"), s);
let E = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null,
    }),
    u = Object.freeze({ BOTTOM: 0, LOWER: 0.25, UPPER: 0.75, TOP: 1 });
