i.d(t, { A: () => c }), i(321073);
var l = i(64700),
    n = i(805739),
    s = i(500345),
    a = i(320137),
    r = i(985018);
function c(e) {
    let { includeFlairAsBenefit: t, listing: i, guildId: c } = e,
        d = 0,
        o = 0;
    for (let e of i.role_benefits.benefits) (0, s.B1)(e) ? (d += 1) : (0, s.b1)(e) && (o += 1);
    let u = i.role_id,
        m = (0, a.A)(c).filter((e) => e.roles.includes(u)).length;
    return l.useMemo(() => {
        let e = [];
        return (
            !0 === t && e.push(r.intl.string(r.t.EhdV2x)),
            0 !== d && e.push(r.intl.formatToPlainString(r.t["p/l+BI"], { channelCount: d })),
            0 !== o && e.push(r.intl.formatToPlainString(r.t.eXP5vt, { benefitCount: o })),
            0 !== m && e.push(r.intl.formatToPlainString(r.t.YjmQwW, { emojiCount: m })),
            new n.A(e)
        );
    }, [d, o, m, t]);
}
