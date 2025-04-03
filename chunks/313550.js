n.d(t, { Z: () => s }), n(47120), n(653041);
var r = n(192379),
    i = n(622545),
    a = n(817460),
    o = n(570533),
    l = n(388032);
function s(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: s } = e,
        c = 0,
        d = 0;
    for (let e of n.role_benefits.benefits) (0, a.rC)(e) ? (c += 1) : (0, a.lL)(e) && (d += 1);
    let u = n.role_id,
        _ = (0, o.Z)(s).filter((e) => e.roles.includes(u)).length;
    return r.useMemo(() => {
        let e = [];
        return !0 === t && e.push(l.NW.string(l.t.EhdV29)), 0 !== c && e.push(l.NW.formatToPlainString(l.t['p/l+BA'], { channelCount: c })), 0 !== d && e.push(l.NW.formatToPlainString(l.t.eXP5vr, { benefitCount: d })), 0 !== _ && e.push(l.NW.formatToPlainString(l.t.YjmQwc, { emojiCount: _ })), new i.Z(e);
    }, [c, d, _, t]);
}
