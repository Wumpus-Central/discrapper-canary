n.d(e, { Z: () => o });
var i = n(509613),
    l = n(313789),
    r = n(299426),
    u = n(407458),
    s = n(388032);
let a = [
        {
            useLabel: () => s.intl.string(s.t.hK51Yg),
            sound: "deafen",
        },
        {
            useLabel: () => s.intl.string(s.t.XiejaJ),
            sound: "undeafen",
        },
        {
            useLabel: () => s.intl.string(s.t.w4m945),
            sound: "mute",
        },
        {
            useLabel: () => s.intl.string(s.t.YqAjXy),
            sound: "unmute",
        },
        {
            useLabel: () => s.intl.string(s.t.JoTq8n),
            sound: "camera_on",
        },
        {
            useLabel: () => s.intl.string(s.t["8P6tQ6"]),
            sound: "camera_off",
        },
        {
            useLabel: () => s.intl.string(s.t["juL9/L"]),
            sound: "disconnect",
        },
        {
            useLabel: () => s.intl.string(s.t.x98vQq),
            sound: "ptt_start",
        },
        {
            useLabel: () => s.intl.string(s.t["1HjRqC"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => s.intl.string(s.t["9JB1Ck"]),
            sound: "user_join",
        },
        {
            useLabel: () => s.intl.string(s.t.KUBBNt),
            sound: "user_leave",
        },
        {
            useLabel: () => s.intl.string(s.t.EZjqUT),
            sound: "user_moved",
        },
        {
            useLabel: () => s.intl.string(s.t.LnNlQh),
            sound: "call_calling",
        },
        {
            useLabel: () => s.intl.string(s.t.Nd8P5y),
            sound: "stream_started",
        },
        {
            useLabel: () => s.intl.string(s.t["9bYj+G"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => s.intl.string(s.t.KccUI1),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => s.intl.string(s.t.dsjkiN),
            sound: "stream_user_left",
        },
        {
            useLabel: () => s.intl.string(s.t.nFOcf9),
            sound: "activity_launch",
        },
        {
            useLabel: () => s.intl.string(s.t["a6lw/u"]),
            sound: "activity_end",
        },
        {
            useLabel: () => s.intl.string(s.t.KaFxrY),
            sound: "activity_user_join",
        },
        {
            useLabel: () => s.intl.string(s.t.S14z9n),
            sound: "activity_user_left",
        },
        {
            useLabel: () => s.intl.string(s.t.CP3DC3),
            sound: "reconnect",
        },
    ],
    o = (0, i.$l)(l.n.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? s.intl.formatToPlainString(s.t["0JYT98"], { count: e })
                : s.intl.formatToPlainString(s.t.ji1uNt, { count: e }),
        ContextProvider: r.u,
        buildLayout: () => a.map((t) => (0, u.j)(t)),
    });
