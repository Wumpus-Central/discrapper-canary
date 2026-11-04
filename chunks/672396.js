var i,
    r,
    a,
    s,
    l =
        (((i = {})[(i.WELCOME = 0)] = "WELCOME"),
        (i[(i.NEWS = 1)] = "NEWS"),
        (i[(i.GO_LIVE_VOICE = 2)] = "GO_LIVE_VOICE"),
        (i[(i.GO_LIVE_NON_VOICE = 3)] = "GO_LIVE_NON_VOICE"),
        (i[(i.CONTENT_INVENTORY = 4)] = "CONTENT_INVENTORY"),
        i),
    o =
        (((r = {})[(r.Nudge = 0)] = "Nudge"),
        (r[(r.TextChat = 1)] = "TextChat"),
        (r[(r.VoiceCall = 2)] = "VoiceCall"),
        (r[(r.Activity = 3)] = "Activity"),
        (r[(r.Clips = 4)] = "Clips"),
        (r[(r.Other = 5)] = "Other"),
        r),
    d =
        (((a = {}).NewsNudge = "News Nudge"),
        (a.WelcomeNudge = "Welcome Nudge"),
        (a.TextChat = "Text Chat"),
        (a.ActivityUserJoin = "Activity User Join"),
        (a.ActivityInvite = "Activity Invite"),
        (a.IncomingCall = "Incoming Call"),
        (a.GoLiveNudge = "Go Live Nudge"),
        (a.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge"),
        (a.OverlayCrashed = "Overlay Crashed"),
        (a.ClipsReminderNotification = "Clips Reminder Notification"),
        (a.ClipsNotification = "Clips Notification"),
        (a.ClipsDebugFeaturesEnabled = "Clips Debug Features Enabled"),
        (a.ClipsDebugAutoSignal = "Clips Debug Auto Signal"),
        (a.ClipsDebugSaveSuccess = "Clips Debug Save Success"),
        (a.ClipsDebugSaveError = "Clips Debug Save Error"),
        (a.ClipsDebugSaveNoOp = "Clips Debug Save No Op"),
        (a.ClipsDebugSaveTimeout = "Clips Debug Save Timeout"),
        (a.SendGameInvitesNotification = "Send Game Invites Notification"),
        (a.NowPlayingNotification = "Now Playing Notification"),
        (a.RequestToStream = "Request To Stream"),
        a),
    c = (((s = {})[(s.Viewed = 0)] = "Viewed"), (s[(s.Clicked = 1)] = "Clicked"), s);
let u = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null,
    }),
    _ = Object.freeze({ BOTTOM: 0, LOWER: 0.25, UPPER: 0.75, TOP: 1 });
n.d(
    t,
    {},
    {
        BR: o,
        Jr: l,
        KS: d,
        Kv: u,
        Li: _,
        Vo: function (e) {
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
                case "Clips Debug Features Enabled":
                case "Clips Debug Auto Signal":
                case "Clips Debug Save Success":
                case "Clips Debug Save Error":
                case "Clips Debug Save No Op":
                case "Clips Debug Save Timeout":
                    return 4;
                default:
                    return 5;
            }
        },
        uj: c,
    },
);
