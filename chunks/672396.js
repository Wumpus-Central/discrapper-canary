"use strict";
n.d(t, { BR: () => u, Jr: () => o, KS: () => c, Kv: () => _, Li: () => f, Vo: () => l, uj: () => d });
var i,
    r,
    s,
    a,
    o =
        (((i = {})[(i.WELCOME = 0)] = "WELCOME"),
        (i[(i.NEWS = 1)] = "NEWS"),
        (i[(i.GO_LIVE_VOICE = 2)] = "GO_LIVE_VOICE"),
        (i[(i.GO_LIVE_NON_VOICE = 3)] = "GO_LIVE_NON_VOICE"),
        (i[(i.CONTENT_INVENTORY = 4)] = "CONTENT_INVENTORY"),
        i);
function l(e) {
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
var u =
        (((r = {})[(r.Nudge = 0)] = "Nudge"),
        (r[(r.TextChat = 1)] = "TextChat"),
        (r[(r.VoiceCall = 2)] = "VoiceCall"),
        (r[(r.Activity = 3)] = "Activity"),
        (r[(r.Clips = 4)] = "Clips"),
        (r[(r.Other = 5)] = "Other"),
        r),
    c =
        (((s = {}).NewsNudge = "News Nudge"),
        (s.WelcomeNudge = "Welcome Nudge"),
        (s.TextChat = "Text Chat"),
        (s.ActivityUserJoin = "Activity User Join"),
        (s.ActivityInvite = "Activity Invite"),
        (s.IncomingCall = "Incoming Call"),
        (s.GoLiveNudge = "Go Live Nudge"),
        (s.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge"),
        (s.OverlayCrashed = "Overlay Crashed"),
        (s.ClipsReminderNotification = "Clips Reminder Notification"),
        (s.ClipsNotification = "Clips Notification"),
        (s.SendGameInvitesNotification = "Send Game Invites Notification"),
        (s.NowPlayingNotification = "Now Playing Notification"),
        (s.RequestToStream = "Request To Stream"),
        s),
    d = (((a = {})[(a.Viewed = 0)] = "Viewed"), (a[(a.Clicked = 1)] = "Clicked"), a);
let _ = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null,
    }),
    f = Object.freeze({ BOTTOM: 0, LOWER: 0.25, UPPER: 0.75, TOP: 1 });
