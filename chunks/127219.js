n.d(t, {
    l: () => u,
    o: () => c,
});
var r,
    i = n(627968);
n(64700);
var l = n(341915),
    a = n(665816),
    s = n(654487),
    o = n(985018),
    c = (((r = {}).NOT_FOUND = "not_found"), (r.MOBILE_ONLY = "mobile_only"), r);

function u(e) {
    let { questId: t, reason: n = "not_found" } = e;
    return (0, i.jsx)(a.i, {
        questId: t,
        fallbackReason: s.eA.UNKNOWN_QUEST,
        bodyText: o.intl.string("mobile_only" === n ? o.t.Pag1gS : o.t.c9275Z),
        questContent: l.uF.INVALID_QUEST_EMBED,
    });
}
