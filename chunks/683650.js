n.d(t, {
    X: () => u,
    o: () => c,
});
var r,
    o = n(951288);
n(647438);
var s = n(497505),
    i = n(543433),
    a = n(46140),
    l = n(388032),
    u = (((r = {}).NOT_FOUND = "not_found"), (r.MOBILE_ONLY = "mobile_only"), r);
function c(e) {
    let { questId: t, reason: n = "not_found" } = e;
    return (0, o.jsx)(i.w, {
        questId: t,
        fallbackReason: a.V_.UNKNOWN_QUEST,
        bodyText: l.intl.string("mobile_only" === n ? l.t.Pag1gY : l.t.CTn0yc),
        questContent: s.jn.INVALID_QUEST_EMBED,
    });
}
