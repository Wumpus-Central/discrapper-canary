s.d(t, { l: () => u, o: () => c });
var n,
    i = s(477900);
s(582128);
var a = s(738822),
    l = s(160185),
    r = s(190107),
    o = s(375708),
    c = (((n = {}).NOT_FOUND = "not_found"), (n.MOBILE_ONLY = "mobile_only"), n);
function u(e) {
    let { questId: t, reason: s = "not_found" } = e;
    return (0, i.jsx)(l.i, {
        questId: t,
        fallbackReason: r.eA.UNKNOWN_QUEST,
        bodyText: o.intl.string("mobile_only" === s ? o.t.Pag1gS : o.t.c9275Z),
        questContent: a.uF.INVALID_QUEST_EMBED,
    });
}
