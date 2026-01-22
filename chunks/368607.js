i.d(e, { u: () => _ }), i(627968), i(64700);
var n = i(311907);
i(397927);
var l = i(264686),
    s = i(970931),
    r = i(419954),
    u = i(803224),
    a = i(780964),
    o = i(932055),
    T = i(985018);
i(467183);
let A = {
        useTitle: () => T.intl.string(T.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => ((0, s.kB)() ? T.intl.string(T.t.cIRG0s) : void 0),
    },
    S = {
        useTitle: () => T.intl.string(T.t.XBrJT6),
        sound: "call_ringing",
    },
    E = (0, r.zD)(a.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => T.intl.string(T.t.TzjwV9),
        useValue: () => (0, n.bG)([u.A], () => u.A.getNotifyMessagesInSelectedChannel() && !u.A.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
    }),
    d = (0, r.zD)(a.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => T.intl.string(T.t["2ZhCOd"]),
        useSubtitle: () => T.intl.string(T.t.EAKdPr),
        useValue: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    _ = (0, r.FW)(a.X.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => T.intl.string(T.t.ONU22R),
        variant: "separators",
        initialize: function () {
            return () => {
                (0, o.vd)();
            };
        },
        buildLayout: () => [(0, o.i)(A), E, (0, o.i)(S), d],
    });
