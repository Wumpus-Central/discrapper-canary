n.d(t, {
    l: () => c,
    o: () => l,
});
var r = n(627968);
n(64700);
var i = n(341915),
    a = n(665816),
    s = n(654487),
    o = n(985018),
    l = (function (e) {
        return (e.NOT_FOUND = "not_found"), (e.MOBILE_ONLY = "mobile_only"), e;
    })({});
function c(e) {
    let { questId: t, reason: n = "not_found" } = e;
    return (0, r.jsx)(a.i, {
        questId: t,
        fallbackReason: s.eA.UNKNOWN_QUEST,
        bodyText: o.intl.string("mobile_only" === n ? o.t.Pag1gS : o.t.c9275Z),
        questContent: i.uF.INVALID_QUEST_EMBED,
    });
}
