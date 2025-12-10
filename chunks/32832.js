n.d(e, { u: () => g }), n(54381), n(473749);
var i = n(442837);
n(481060);
var l = n(292556),
    s = n(734934),
    u = n(509613),
    r = n(292959),
    a = n(313789),
    o = n(407458),
    c = n(388032);
n(732213);
let d = {
        useTitle: () => c.intl.string(c.t.jD1qzM),
        sound: "message1",
        useDisabled: s.p,
        useDisabledMessage: () => ((0, s.p)() ? c.intl.string(c.t.cIRG0s) : void 0),
    },
    S = {
        useTitle: () => c.intl.string(c.t.XBrJT6),
        sound: "call_ringing",
    },
    T = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => c.intl.string(c.t.TzjwV9),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getNotifyMessagesInSelectedChannel() && !r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
    }),
    E = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => c.intl.string(c.t["2ZhCOd"]),
        useSubtitle: () => c.intl.string(c.t.EAKdPr),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    g = (0, u.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => c.intl.string(c.t.ONU22R),
        variant: "separators",
        initialize: function () {
            return () => {
                (0, o.WY)();
            };
        },
        buildLayout: () => [(0, o.j$)(d), T, (0, o.j$)(S), E],
    });
