n.d(e, { Z: () => O }), n(951288), n(647438);
var i = n(442837);
n(481060);
var l = n(292556),
    u = n(734934),
    r = n(509613),
    s = n(292959),
    a = n(313789),
    o = n(299426),
    c = n(407458),
    E = n(388032);
n(649926);
let S = {
        useLabel: () => E.intl.string(E.t.jD1qzM),
        sound: "message1",
        useDisabled: u.p,
        useDisabledMessage: () => ((0, u.p)() ? E.intl.string(E.t.cIRG0s) : void 0),
    },
    d = {
        useLabel: () => E.intl.string(E.t.XBrJT6),
        sound: "call_ringing",
    },
    T = (0, r.qs)(a.n.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => E.intl.string(E.t.TzjwV9),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getNotifyMessagesInSelectedChannel()),
        setValue: (t) => l.default.setNotifyMessagesInSelectedChannel(t),
    }),
    I = (0, r.qs)(a.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => E.intl.string(E.t["2ZhCOd"]),
        useSubtitle: () => E.intl.string(E.t["+B0XLE"]),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getDisableAllSounds()),
        setValue: (t) => l.default.toggleDisableAllSounds(t),
    }),
    O = (0, r.$l)(a.n.NOTIFICATION_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (t, e) =>
            t
                ? E.intl.formatToPlainString(E.t["0JYT98"], { count: e })
                : E.intl.formatToPlainString(E.t.ji1uNt, { count: e }),
        ContextProvider: o.u,
        buildLayout: () => [(0, c.j)(S), T, (0, c.j)(d), I],
    });
