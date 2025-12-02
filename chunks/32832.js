n.d(e, { Z: () => g }), n(54381), n(473749);
var i = n(442837);
n(481060);
var l = n(292556),
    s = n(734934),
    r = n(509613),
    u = n(292959),
    a = n(313789),
    o = n(299426),
    c = n(407458),
    d = n(388032);
n(732213);
let E = {
        useLabel: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: s.p,
        useDisabledMessage: () => ((0, s.p)() ? d.intl.string(d.t.cIRG0s) : void 0),
    },
    S = {
        useLabel: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing",
    },
    I = (0, r.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useValue: () => (0, i.e7)([u.Z], () => u.Z.getNotifyMessagesInSelectedChannel() && !u.Z.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([u.Z], () => u.Z.getDisableAllSounds()),
    }),
    T = (0, r.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, i.e7)([u.Z], () => u.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    g = (0, r.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => d.intl.string(d.t.ONU22R),
        variant: "separators",
        ContextProvider: o.u,
        buildLayout: () => [(0, c.j)(E), I, (0, c.j)(S), T],
    });
