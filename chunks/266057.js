i.d(e, { S: () => d });
var n = i(652961),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(358776),
    u = i(823894),
    o = i(985018);
let d = (0, l.Qx)(r.X.ANIMATE_STICKERS, {
    useTitle: () => ((0, a.bp)("AnimateStickers") ? o.intl.string(o.t.sBHIh0) : o.intl.string(o.t["6NtAuJ"])),
    useSubtitle: () => {
        let t = (0, n.F)("animateStickers"),
            e = (0, a.bp)("AnimateStickers");
        return t ?? (e ? void 0 : o.intl.string(o.t.GRa6U7));
    },
    useOptions: () => [
        { name: o.intl.string(o.t["Xp+X2U"]), value: u.BJ.ALWAYS_ANIMATE },
        { name: o.intl.string(o.t.IlLT7e), desc: o.intl.string(o.t.bIW9Tl), value: u.BJ.ANIMATE_ON_INTERACTION },
        { name: o.intl.string(o.t.IGu8x3), value: u.BJ.NEVER_ANIMATE },
    ],
    useValue: () => s.S0.useSetting(),
    setValue: (t) => s.S0.updateSetting(t),
});
