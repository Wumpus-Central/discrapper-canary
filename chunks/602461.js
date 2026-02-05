"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(64700),
    i = n(805739),
    a = n(500345),
    s = n(320137),
    o = n(985018);
function l(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: l } = e,
        u = 0,
        c = 0;
    for (let e of n.role_benefits.benefits) (0, a.B1)(e) ? (u += 1) : (0, a.b1)(e) && (c += 1);
    let d = n.role_id,
        _ = (0, s.A)(l).filter((e) => e.roles.includes(d)).length;
    return r.useMemo(() => {
        let e = [];
        return (
            !0 === t && e.push(o.intl.string(o.t.EhdV2x)),
            0 !== u && e.push(o.intl.formatToPlainString(o.t["p/l+BI"], { channelCount: u })),
            0 !== c && e.push(o.intl.formatToPlainString(o.t.eXP5vt, { benefitCount: c })),
            0 !== _ && e.push(o.intl.formatToPlainString(o.t.YjmQwW, { emojiCount: _ })),
            new i.A(e)
        );
    }, [u, c, _, t]);
}
