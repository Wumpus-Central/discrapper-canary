n.d(e, { Z: () => c });
var i = n(323472),
    r = n(509613),
    l = n(313789),
    u = n(299426),
    s = n(407458),
    a = n(388032);
let o = [
        {
            useLabel: () => a.intl.string(a.t.hK51Yg),
            sound: "deafen",
        },
        {
            useLabel: () => a.intl.string(a.t.XiejaJ),
            sound: "undeafen",
        },
        {
            useLabel: () => a.intl.string(a.t.w4m945),
            sound: "mute",
        },
        {
            useLabel: () => a.intl.string(a.t.YqAjXy),
            sound: "unmute",
        },
        {
            useLabel: () => a.intl.string(a.t.JoTq8n),
            sound: "camera_on",
        },
        {
            useLabel: () => a.intl.string(a.t["8P6tQ6"]),
            sound: "camera_off",
        },
        {
            useLabel: () => a.intl.string(a.t["juL9/L"]),
            sound: "disconnect",
        },
        {
            useLabel: () => a.intl.string(a.t.x98vQq),
            sound: "ptt_start",
        },
        {
            useLabel: () => a.intl.string(a.t["1HjRqC"]),
            sound: "ptt_stop",
        },
        {
            useLabel: () => a.intl.string(a.t["9JB1Ck"]),
            sound: "user_join",
        },
        {
            useLabel: () => a.intl.string(a.t.KUBBNt),
            sound: "user_leave",
        },
        {
            useLabel: () => a.intl.string(a.t.EZjqUT),
            sound: "user_moved",
        },
        {
            useLabel: () => a.intl.string(a.t.LnNlQh),
            sound: "call_calling",
        },
        {
            useLabel: () => a.intl.string(a.t.Nd8P5y),
            sound: "stream_started",
        },
        {
            useLabel: () => a.intl.string(a.t["9bYj+G"]),
            sound: "stream_ended",
        },
        {
            useLabel: () => a.intl.string(a.t.KccUI1),
            sound: "stream_user_joined",
        },
        {
            useLabel: () => a.intl.string(a.t.dsjkiN),
            sound: "stream_user_left",
        },
        {
            useLabel: () => a.intl.string(a.t.nFOcf9),
            sound: "activity_launch",
        },
        {
            useLabel: () => a.intl.string(a.t["a6lw/u"]),
            sound: "activity_end",
        },
        {
            useLabel: () => a.intl.string(a.t.KaFxrY),
            sound: "activity_user_join",
        },
        {
            useLabel: () => a.intl.string(a.t.S14z9n),
            sound: "activity_user_left",
        },
        {
            useLabel: () => a.intl.string(a.t.CP3DC3),
            sound: "reconnect",
        },
    ],
    c = (0, r.$l)(l.n.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? a.intl.formatToPlainString(a.t["0JYT98"], { count: e })
                : a.intl.formatToPlainString(a.t.ji1uNt, { count: e }),
        useCollapsedSubtitle: () => (0, i.u)(l.n.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        ContextProvider: u.u,
        buildLayout: () => o.map((t) => (0, s.j)(t)),
    });
