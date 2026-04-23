n.d(t, { E: () => A });
var i = n(311907),
    s = n(264686),
    l = n(970931),
    a = n(419954),
    r = n(803224),
    o = n(780964),
    d = n(932055),
    u = n(985018);
let c = {
        useTitle: () => u.intl.string(u.t.jD1qzM),
        sound: "message1",
        useDisabled: l.kB,
        useDisabledMessage: () => ((0, l.kB)() ? u.intl.string(u.t.cIRG0s) : void 0),
    },
    g = { useTitle: () => u.intl.string(u.t.XBrJT6), sound: "call_ringing" },
    m = (0, a.zD)(o.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => u.intl.string(u.t.TzjwV9),
        useSubtitle: () => u.intl.format(u.t.OOiGCM, { onClick: () => (0, d.Jz)("message3") }),
        useValue: () => (0, i.bG)([r.A], () => r.A.getNotifyMessagesInSelectedChannel() && !r.A.getDisableAllSounds()),
        setValue: (e) => s.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, i.bG)([r.A], () => r.A.getDisableAllSounds()),
    }),
    _ = (0, a.zD)(o.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => u.intl.string(u.t["2ZhCOd"]),
        useSubtitle: () => u.intl.string(u.t.EAKdPr),
        useValue: () => (0, i.bG)([r.A], () => r.A.getDisableAllSounds()),
        setValue: (e) => s.default.toggleDisableAllSounds(e),
    }),
    A = (0, a.D1)(o.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                (0, d.vd)();
            };
        },
        buildLayout: () => [(0, d.i)(c), m, (0, d.i)(g), _],
    });
