n.d(t, { S: () => c });
var i = n(419954),
    s = n(253932),
    l = n(780964),
    a = n(358776),
    r = n(184151),
    o = n(823894),
    d = n(985018);
let c = (0, i.Qx)(l.X.ANIMATE_STICKERS, {
    useTitle: () => ((0, a.bp)("AnimateStickers") ? d.intl.string(d.t.sBHIh0) : d.intl.string(d.t["6NtAuJ"])),
    useSubtitle: () => {
        let e = (0, r.F)("animateStickers"),
            t = (0, a.bp)("AnimateStickers");
        return e ?? (t ? void 0 : d.intl.string(d.t.GRa6U7));
    },
    useOptions: () => [
        { name: d.intl.string(d.t["Xp+X2U"]), value: o.BJ.ALWAYS_ANIMATE },
        { name: d.intl.string(d.t.IlLT7e), desc: d.intl.string(d.t.bIW9Tl), value: o.BJ.ANIMATE_ON_INTERACTION },
        { name: d.intl.string(d.t.IGu8x3), value: o.BJ.NEVER_ANIMATE },
    ],
    useValue: () => s.S0.useSetting(),
    setValue: (e) => s.S0.updateSetting(e),
});
