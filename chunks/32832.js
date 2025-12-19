n.d(e, { u: () => _ }), n(54381), n(473749);
var i = n(442837);
n(481060);
var l = n(292556),
    s = n(734934),
    u = n(509613),
    r = n(292959),
    a = n(313789),
    o = n(407458),
    T = n(388032);
n(530049);
let S = {
        useTitle: () => T.intl.string(T.t.jD1qzM),
        sound: "message1",
        useDisabled: s.p,
        useDisabledMessage: () => ((0, s.p)() ? T.intl.string(T.t.cIRG0s) : void 0),
    },
    c = {
        useTitle: () => T.intl.string(T.t.XBrJT6),
        sound: "call_ringing",
    },
    E = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => T.intl.string(T.t.TzjwV9),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getNotifyMessagesInSelectedChannel() && !r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
    }),
    d = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => T.intl.string(T.t["2ZhCOd"]),
        useSubtitle: () => T.intl.string(T.t.EAKdPr),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    _ = (0, u.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => T.intl.string(T.t.ONU22R),
        variant: "separators",
        initialize: function () {
            return () => {
                (0, o.WY)();
            };
        },
        buildLayout: () => [(0, o.j$)(S), E, (0, o.j$)(c), d],
    });
