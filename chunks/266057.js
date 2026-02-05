i.d(e, { S: () => o });
var n = i(652961),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(823894),
    u = i(985018);
let o = (0, l.Qx)(r.X.ANIMATE_STICKERS, {
    useTitle: () => u.intl.string(u.t["6NtAuJ"]),
    useSubtitle: () => (0, n.F)("animateStickers") ?? u.intl.string(u.t.GRa6U7),
    useOptions: () => [
        { name: u.intl.string(u.t["Xp+X2U"]), value: a.BJ.ALWAYS_ANIMATE },
        { name: u.intl.string(u.t.IlLT7e), desc: u.intl.string(u.t.bIW9Tl), value: a.BJ.ANIMATE_ON_INTERACTION },
        { name: u.intl.string(u.t.IGu8x3), value: a.BJ.NEVER_ANIMATE },
    ],
    useValue: () => s.S0.useSetting(),
    setValue: (t) => s.S0.updateSetting(t),
});
