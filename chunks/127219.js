s.d(t, { l: () => c, o: () => d });
var n,
    i = s(627968);
s(64700);
var a = s(507107),
    l = s(633224),
    o = s(654487),
    r = s(985018),
    d = (((n = {}).NOT_FOUND = "not_found"), (n.MOBILE_ONLY = "mobile_only"), n);
function c(e) {
    let { questId: t, reason: s = "not_found" } = e;
    return (0, i.jsx)(l.i, {
        questId: t,
        fallbackReason: o.eA.UNKNOWN_QUEST,
        bodyText: r.intl.string("mobile_only" === s ? r.t.Pag1gS : r.t.c9275Z),
        questContent: a.uF.INVALID_QUEST_EMBED,
    });
}
