n.d(e, { u: () => g }), n(54381), n(473749);
var i = n(442837);
n(481060);
var l = n(292556),
    s = n(734934),
    u = n(509613),
    r = n(292959),
    a = n(313789),
    o = n(407458),
    S = n(388032);
n(530049);
let T = {
        useTitle: () => S.intl.string(S.t.jD1qzM),
        sound: "message1",
        useDisabled: s.p,
        useDisabledMessage: () => ((0, s.p)() ? S.intl.string(S.t.cIRG0s) : void 0),
    },
    c = {
        useTitle: () => S.intl.string(S.t.XBrJT6),
        sound: "call_ringing",
    },
    E = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => S.intl.string(S.t.TzjwV9),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getNotifyMessagesInSelectedChannel() && !r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
    }),
    d = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => S.intl.string(S.t["2ZhCOd"]),
        useSubtitle: () => S.intl.string(S.t.EAKdPr),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    g = (0, u.Uc)(a.n.NOTIFICATION_SOUNDS_FIELD_SET, {
        useTitle: () => S.intl.string(S.t.ONU22R),
        variant: "separators",
        initialize: function () {
            return () => {
                (0, o.WY)();
            };
        },
        buildLayout: () => [(0, o.j$)(T), E, (0, o.j$)(c), d],
    });
