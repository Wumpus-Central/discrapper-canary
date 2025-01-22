n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(622545),
    l = n(817460),
    a = n(570533),
    o = n(388032);
function s(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: s } = e,
        c = 0,
        u = 0;
    for (let e of n.role_benefits.benefits) (0, l.rC)(e) ? (c += 1) : (0, l.lL)(e) && (u += 1);
    let d = n.role_id,
        m = (0, a.Z)(s).filter((e) => e.roles.includes(d)).length;
    return i.useMemo(() => {
        let e = [];
        return !0 === t && e.push(o.intl.string(o.t.EhdV29)), 0 !== c && e.push(o.intl.formatToPlainString(o.t['p/l+BA'], { channelCount: c })), 0 !== u && e.push(o.intl.formatToPlainString(o.t.eXP5vr, { benefitCount: u })), 0 !== m && e.push(o.intl.formatToPlainString(o.t.YjmQwc, { emojiCount: m })), new r.Z(e);
    }, [c, u, m, t]);
}
