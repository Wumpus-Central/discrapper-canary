n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(73800),
    i = n(622545),
    l = n(817460),
    a = n(570533),
    s = n(388032);
function o(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: o } = e,
        c = 0,
        d = 0;
    for (let e of n.role_benefits.benefits) (0, l.rC)(e) ? (c += 1) : (0, l.lL)(e) && (d += 1);
    let u = n.role_id,
        m = (0, a.Z)(o).filter((e) => e.roles.includes(u)).length;
    return r.useMemo(() => {
        let e = [];
        return !0 === t && e.push(s.intl.string(s.t.EhdV29)), 0 !== c && e.push(s.intl.formatToPlainString(s.t['p/l+BA'], { channelCount: c })), 0 !== d && e.push(s.intl.formatToPlainString(s.t.eXP5vr, { benefitCount: d })), 0 !== m && e.push(s.intl.formatToPlainString(s.t.YjmQwc, { emojiCount: m })), new i.Z(e);
    }, [c, d, m, t]);
}
