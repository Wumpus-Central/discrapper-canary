n.d(t, { Z: () => o }), n(47120), n(653041);
var i = n(192379),
    l = n(622545),
    a = n(817460),
    r = n(570533),
    s = n(388032);
function o(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: o } = e,
        c = 0,
        d = 0;
    for (let e of n.role_benefits.benefits) (0, a.rC)(e) ? (c += 1) : (0, a.lL)(e) && (d += 1);
    let u = n.role_id,
        m = (0, r.Z)(o).filter((e) => e.roles.includes(u)).length;
    return i.useMemo(() => {
        let e = [];
        return !0 === t && e.push(s.intl.string(s.t.EhdV29)), 0 !== c && e.push(s.intl.formatToPlainString(s.t['p/l+BA'], { channelCount: c })), 0 !== d && e.push(s.intl.formatToPlainString(s.t.eXP5vr, { benefitCount: d })), 0 !== m && e.push(s.intl.formatToPlainString(s.t.YjmQwc, { emojiCount: m })), new l.Z(e);
    }, [c, d, m, t]);
}
