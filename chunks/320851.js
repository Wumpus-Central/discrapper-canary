n.d(e, { J: () => o });
var i = n(323472),
    l = n(509613),
    s = n(313789),
    u = n(407458),
    r = n(388032);
let a = [
        {
            useTitle: () => r.intl.string(r.t.hK51Yg),
            sound: "deafen",
        },
        {
            useTitle: () => r.intl.string(r.t.XiejaJ),
            sound: "undeafen",
        },
        {
            useTitle: () => r.intl.string(r.t.w4m945),
            sound: "mute",
        },
        {
            useTitle: () => r.intl.string(r.t.YqAjXy),
            sound: "unmute",
        },
        {
            useTitle: () => r.intl.string(r.t.JoTq8n),
            sound: "camera_on",
        },
        {
            useTitle: () => r.intl.string(r.t["8P6tQ6"]),
            sound: "camera_off",
        },
        {
            useTitle: () => r.intl.string(r.t["juL9/L"]),
            sound: "disconnect",
        },
        {
            useTitle: () => r.intl.string(r.t.x98vQq),
            sound: "ptt_start",
        },
        {
            useTitle: () => r.intl.string(r.t["1HjRqC"]),
            sound: "ptt_stop",
        },
        {
            useTitle: () => r.intl.string(r.t["9JB1Ck"]),
            sound: "user_join",
        },
        {
            useTitle: () => r.intl.string(r.t.KUBBNt),
            sound: "user_leave",
        },
        {
            useTitle: () => r.intl.string(r.t.EZjqUT),
            sound: "user_moved",
        },
        {
            useTitle: () => r.intl.string(r.t.LnNlQh),
            sound: "call_calling",
        },
        {
            useTitle: () => r.intl.string(r.t.Nd8P5y),
            sound: "stream_started",
        },
        {
            useTitle: () => r.intl.string(r.t["9bYj+G"]),
            sound: "stream_ended",
        },
        {
            useTitle: () => r.intl.string(r.t.KccUI1),
            sound: "stream_user_joined",
        },
        {
            useTitle: () => r.intl.string(r.t.dsjkiN),
            sound: "stream_user_left",
        },
        {
            useTitle: () => r.intl.string(r.t.nFOcf9),
            sound: "activity_launch",
        },
        {
            useTitle: () => r.intl.string(r.t["a6lw/u"]),
            sound: "activity_end",
        },
        {
            useTitle: () => r.intl.string(r.t.KaFxrY),
            sound: "activity_user_join",
        },
        {
            useTitle: () => r.intl.string(r.t.S14z9n),
            sound: "activity_user_left",
        },
        {
            useTitle: () => r.intl.string(r.t.CP3DC3),
            sound: "reconnect",
        },
    ],
    o = (0, l.$l)(s.n.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? r.intl.formatToPlainString(r.t["0JYT98"], { count: e })
                : r.intl.formatToPlainString(r.t.ji1uNt, { count: e }),
        useCollapsedSubtitle: () => (0, i.u)(s.n.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                (0, u.WY)();
            };
        },
        buildLayout: () => a.map((t) => (0, u.j$)(t)),
    });
