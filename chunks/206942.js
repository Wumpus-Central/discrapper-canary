n.d(e, { Z: () => I }), n(951288), n(647438);
var i = n(442837);
n(481060);
var l = n(292556),
    r = n(734934),
    u = n(509613),
    s = n(292959),
    a = n(313789),
    o = n(299426),
    c = n(407458),
    d = n(388032);
n(649926);
let E = {
        useLabel: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: r.p,
        useDisabledMessage: () => ((0, r.p)() ? d.intl.string(d.t.cIRG0s) : void 0),
    },
    S = {
        useLabel: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing",
    },
    O = (0, u.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
    }),
    T = (0, u.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t["+B0XLE"]),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    I = (0, u.$l)(a.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? d.intl.formatToPlainString(d.t["0JYT98"], { count: e })
                : d.intl.formatToPlainString(d.t.ji1uNt, { count: e }),
        ContextProvider: o.u,
        buildLayout: () => [(0, c.j)(E), O, (0, c.j)(S), T],
    });
