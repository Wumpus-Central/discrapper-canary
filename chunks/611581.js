n.d(t, { S: () => d });
var i = n(419954),
    s = n(253932),
    l = n(780964),
    a = n(184151),
    r = n(823894),
    o = n(985018);
let d = (0, i.Qx)(l.X.ANIMATE_STICKERS, {
    useTitle: () => o.intl.string(o.t.sBHIh0),
    useSubtitle: () => (0, a.F)("animateStickers"),
    useOptions: () => [
        { name: o.intl.string(o.t["Xp+X2U"]), value: r.BJ.ALWAYS_ANIMATE },
        { name: o.intl.string(o.t.IlLT7e), desc: o.intl.string(o.t.bIW9Tl), value: r.BJ.ANIMATE_ON_INTERACTION },
        { name: o.intl.string(o.t.IGu8x3), value: r.BJ.NEVER_ANIMATE },
    ],
    useValue: () => s.S0.useSetting(),
    setValue: (e) => s.S0.updateSetting(e),
});
