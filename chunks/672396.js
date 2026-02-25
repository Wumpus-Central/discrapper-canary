"use strict";
n.d(t, { BR: () => s, Jr: () => r, KS: () => a, Kv: () => l, Li: () => u, Vo: () => i, uj: () => o });
var r = (function (e) {
    return (
        (e[(e.WELCOME = 0)] = "WELCOME"),
        (e[(e.NEWS = 1)] = "NEWS"),
        (e[(e.GO_LIVE_VOICE = 2)] = "GO_LIVE_VOICE"),
        (e[(e.GO_LIVE_NON_VOICE = 3)] = "GO_LIVE_NON_VOICE"),
        (e[(e.CONTENT_INVENTORY = 4)] = "CONTENT_INVENTORY"),
        e
    );
})({});
function i(e) {
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
var s = (function (e) {
        return (
            (e[(e.Nudge = 0)] = "Nudge"),
            (e[(e.TextChat = 1)] = "TextChat"),
            (e[(e.VoiceCall = 2)] = "VoiceCall"),
            (e[(e.Activity = 3)] = "Activity"),
            (e[(e.Clips = 4)] = "Clips"),
            (e[(e.Other = 5)] = "Other"),
            e
        );
    })({}),
    a = (function (e) {
        return (
            (e.NewsNudge = "News Nudge"),
            (e.WelcomeNudge = "Welcome Nudge"),
            (e.TextChat = "Text Chat"),
            (e.ActivityUserJoin = "Activity User Join"),
            (e.ActivityInvite = "Activity Invite"),
            (e.IncomingCall = "Incoming Call"),
            (e.GoLiveNudge = "Go Live Nudge"),
            (e.GoLiveNonVoiceNudge = "Go Live Non Voice Nudge"),
            (e.OverlayCrashed = "Overlay Crashed"),
            (e.ClipsReminderNotification = "Clips Reminder Notification"),
            (e.ClipsNotification = "Clips Notification"),
            (e.SendGameInvitesNotification = "Send Game Invites Notification"),
            (e.NowPlayingNotification = "Now Playing Notification"),
            (e.RequestToStream = "Request To Stream"),
            (e.StreamWatchNudge = "Stream Watch Nudge"),
            e
        );
    })({}),
    o = (function (e) {
        return (e[(e.Viewed = 0)] = "Viewed"), (e[(e.Clicked = 1)] = "Clicked"), e;
    })({});
let l = Object.freeze({
        LOW: "background-opacity-low",
        MEDIUM: "background-opacity-medium",
        HIGH: "background-opacity-high",
        FULL: "background-opacity-full",
        DISABLED: null,
    }),
    u = Object.freeze({ BOTTOM: 0, LOWER: 0.25, UPPER: 0.75, TOP: 1 });
