n.d(e, { Z: () => O }), n(54381), n(473749);
var i = n(442837);
n(481060);
var l = n(292556),
    r = n(734934),
    u = n(509613),
    s = n(292959),
    a = n(313789),
    o = n(299426),
    c = n(407458),
    E = n(388032);
n(732213);
let d = {
        useLabel: () => E.intl.string(E.t.jD1qzM),
        sound: "message1",
        useDisabled: r.p,
        useDisabledMessage: () => ((0, r.p)() ? E.intl.string(E.t.cIRG0s) : void 0),
    },
    S = {
        useLabel: () => E.intl.string(E.t.XBrJT6),
        sound: "call_ringing",
    },
    T = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => E.intl.string(E.t.TzjwV9),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getNotifyMessagesInSelectedChannel() && !s.Z.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
    }),
    I = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => E.intl.string(E.t["2ZhCOd"]),
        useSubtitle: () => E.intl.string(E.t.EAKdPr),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    O = (0, u.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => E.intl.string(E.t.ONU22R),
        variant: "separators",
        ContextProvider: o.u,
        buildLayout: () => [(0, c.j)(d), T, (0, c.j)(S), I],
    });
