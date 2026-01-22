i.d(e, {
    S: () => o,
});
var n = i(652961),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(823894),
    a = i(985018);
let o = (0, l.Qx)(r.X.ANIMATE_STICKERS, {
    useTitle: () => a.intl.string(a.t["6NtAuJ"]),
    useSubtitle: () => {
        var t;
        return null != (t = (0, n.F)("animateStickers")) ? t : a.intl.string(a.t.GRa6U7);
    },
    useOptions: () => [
        {
            name: a.intl.string(a.t["Xp+X2U"]),
            value: u.BJ.ALWAYS_ANIMATE,
        },
        {
            name: a.intl.string(a.t.IlLT7e),
            desc: a.intl.string(a.t.bIW9Tl),
            value: u.BJ.ANIMATE_ON_INTERACTION,
        },
        {
            name: a.intl.string(a.t.IGu8x3),
            value: u.BJ.NEVER_ANIMATE,
        },
    ],
    useValue: () => s.S0.useSetting(),
    setValue: (t) => s.S0.updateSetting(t),
});
