n.d(t, { Y: () => d });
var i = n(419117),
    s = n(419954),
    l = n(780964),
    a = n(932055),
    r = n(985018);
let o = [
        { useTitle: () => r.intl.string(r.t.hK51Yg), sound: "deafen" },
        { useTitle: () => r.intl.string(r.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => r.intl.string(r.t.w4m945), sound: "mute" },
        { useTitle: () => r.intl.string(r.t.YqAjXy), sound: "unmute" },
        { useTitle: () => r.intl.string(r.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => r.intl.string(r.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => r.intl.string(r.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => r.intl.string(r.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => r.intl.string(r.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => r.intl.string(r.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => r.intl.string(r.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => r.intl.string(r.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => r.intl.string(r.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => r.intl.string(r.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => r.intl.string(r.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => r.intl.string(r.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => r.intl.string(r.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => r.intl.string(r.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => r.intl.string(r.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => r.intl.string(r.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => r.intl.string(r.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => r.intl.string(r.t.CP3DC3), sound: "reconnect" },
    ],
    d = (0, s.D1)(l.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? r.intl.formatToPlainString(r.t["0JYT98"], { count: t })
                : r.intl.formatToPlainString(r.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => (0, i.A)(l.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                (0, a.vd)();
            };
        },
        buildLayout: () => o.map((e) => (0, a.i)(e)),
    });
