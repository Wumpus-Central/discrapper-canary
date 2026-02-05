i.d(e, { E: () => g });
var n = i(311907),
    l = i(264686),
    s = i(970931),
    r = i(419954),
    a = i(803224),
    u = i(780964),
    o = i(932055),
    d = i(985018);
let T = {
        useTitle: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => ((0, s.kB)() ? d.intl.string(d.t.cIRG0s) : void 0),
    },
    A = { useTitle: () => d.intl.string(d.t.XBrJT6), sound: "call_ringing" },
    S = (0, r.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useSubtitle: () => d.intl.format(d.t.OOiGCM, { onClick: () => (0, o.Jz)("message3") }),
        useValue: () => (0, n.bG)([a.A], () => a.A.getNotifyMessagesInSelectedChannel() && !a.A.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds()),
    }),
    E = (0, r.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    g = (0, r.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                (0, o.vd)();
            };
        },
        buildLayout: () => [(0, o.i)(T), S, (0, o.i)(A), E],
    });
