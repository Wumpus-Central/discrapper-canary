n.d(e, { Z: () => g }), n(54381), n(473749);
var i = n(442837);
n(481060);
var r = n(292556),
    l = n(734934),
    u = n(509613),
    s = n(292959),
    a = n(313789),
    o = n(299426),
    c = n(407458),
    d = n(388032);
n(732213);
let E = {
        useLabel: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: l.p,
        useDisabledMessage: () => ((0, l.p)() ? d.intl.string(d.t.cIRG0s) : void 0),
    },
    S = {
        useLabel: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing",
    },
    T = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getNotifyMessagesInSelectedChannel() && !s.Z.getDisableAllSounds()),
        setValue: (t) => r.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
    }),
    I = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
        setValue: (t) => r.default.toggleDisableAllSounds(t),
    }),
    g = (0, u.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => d.intl.string(d.t.ONU22R),
        variant: "separators",
        ContextProvider: o.u,
        buildLayout: () => [(0, c.j)(E), T, (0, c.j)(S), I],
    });
