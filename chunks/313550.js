n.d(t, { Z: () => l }), n(388685), n(539854);
var r = n(473749),
    i = n(622545),
    a = n(817460),
    o = n(570533),
    s = n(388032);
function l(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: l } = e,
        c = 0,
        u = 0;
    for (let e of n.role_benefits.benefits) (0, a.rC)(e) ? (c += 1) : (0, a.lL)(e) && (u += 1);
    let d = n.role_id,
        f = (0, o.Z)(l).filter((e) => e.roles.includes(d)).length;
    return r.useMemo(() => {
        let e = [];
        return (
            !0 === t && e.push(s.intl.string(s.t.EhdV2x)),
            0 !== c && e.push(s.intl.formatToPlainString(s.t["p/l+BI"], { channelCount: c })),
            0 !== u && e.push(s.intl.formatToPlainString(s.t.eXP5vt, { benefitCount: u })),
            0 !== f && e.push(s.intl.formatToPlainString(s.t.YjmQwW, { emojiCount: f })),
            new i.Z(e)
        );
    }, [c, u, f, t]);
}
