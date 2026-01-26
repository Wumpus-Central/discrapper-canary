i.d(e, {
    E: () => _,
});
var n = i(311907),
    l = i(264686),
    s = i(970931),
    r = i(419954),
    u = i(803224),
    a = i(780964),
    o = i(932055),
    T = i(985018);
let A = {
        useTitle: () => T.intl.string(T.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => ((0, s.kB)() ? T.intl.string(T.t.cIRG0s) : void 0),
    },
    d = {
        useTitle: () => T.intl.string(T.t.XBrJT6),
        sound: "call_ringing",
    },
    S = (0, r.zD)(a.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => T.intl.string(T.t.TzjwV9),
        useSubtitle: () =>
            T.intl.format(T.t.OOiGCM, {
                onClick: () => (0, o.Jz)("message3"),
            }),
        useValue: () => (0, n.bG)([u.A], () => u.A.getNotifyMessagesInSelectedChannel() && !u.A.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
    }),
    E = (0, r.zD)(a.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => T.intl.string(T.t["2ZhCOd"]),
        useSubtitle: () => T.intl.string(T.t.EAKdPr),
        useValue: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    _ = (0, r.D1)(a.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                (0, o.vd)();
            };
        },
        buildLayout: () => [(0, o.i)(A), S, (0, o.i)(d), E],
    });
