n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(282793),
    d = n(353149),
    f = n(388032),
    p = n(787411);
let _ = (e) => {
    let { alwaysWhite: t = !1 } = e,
        n = (0, c.Fg)(),
        i = (0, s.ap)(n);
    return (0, r.jsx)(o.u, {
        text: f.intl.formatToPlainString(d.default["5xN/C1"], { premiumGroupProductName: (0, u.sO)() }),
        children: (0, r.jsx)("div", {
            className: a()(p.guildBoostUnavailableNotice, { [p.lightTheme]: !t && i }),
            children: (0, r.jsx)(l.Text, {
                variant: "eyebrow",
                color: t ? "always-white" : void 0,
                className: p.guildBoostUnavailableNoticeText,
                children: f.intl.string(f.t["5nrJDO"]),
            }),
        }),
    });
};
