n.d(t, { E: () => x });
var i = n(311907),
    s = n(264686),
    l = n(970931),
    a = n(419954),
    r = n(803224),
    o = n(780964),
    d = n(932055),
    c = n(985018);
let u = {
        useTitle: () => c.intl.string(c.t.jD1qzM),
        sound: "message1",
        useDisabled: l.kB,
        useDisabledMessage: () => ((0, l.kB)() ? c.intl.string(c.t.cIRG0s) : void 0),
    },
    m = { useTitle: () => c.intl.string(c.t.XBrJT6), sound: "call_ringing" },
    g = (0, a.zD)(o.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => c.intl.string(c.t.TzjwV9),
        useSubtitle: () => c.intl.format(c.t.OOiGCM, { onClick: () => (0, d.Jz)("message3") }),
        useValue: () => (0, i.bG)([r.A], () => r.A.getNotifyMessagesInSelectedChannel() && !r.A.getDisableAllSounds()),
        setValue: (e) => s.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, i.bG)([r.A], () => r.A.getDisableAllSounds()),
    }),
    _ = (0, a.zD)(o.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => c.intl.string(c.t["2ZhCOd"]),
        useSubtitle: () => c.intl.string(c.t.EAKdPr),
        useValue: () => (0, i.bG)([r.A], () => r.A.getDisableAllSounds()),
        setValue: (e) => s.default.toggleDisableAllSounds(e),
    }),
    x = (0, a.D1)(o.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                (0, d.vd)();
            };
        },
        buildLayout: () => [(0, d.i)(u), g, (0, d.i)(m), _],
    });
