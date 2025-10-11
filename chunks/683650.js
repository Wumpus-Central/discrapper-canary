n.d(t, {
    X: () => c,
    o: () => u,
});
var r = n(951288);
n(647438);
var i = n(497505),
    a = n(937797),
    o = n(543433),
    s = n(46140),
    l = n(388032),
    c = (function (e) {
        return (e.NOT_FOUND = "not_found"), (e.MOBILE_ONLY = "mobile_only"), e;
    })({});
function u(e) {
    let { questId: t, reason: n = "not_found" } = e,
        { enabled: c } = a.m8.useConfig({ location: s.dr.EMBED_DESKTOP });
    return (0, r.jsx)(o.w, {
        questId: t,
        fallbackReason: s.V_.UNKNOWN_QUEST,
        bodyText: l.intl.string("mobile_only" === n ? l.t.Pag1gY : c ? l.t.c9275e : l.t.CTn0yc),
        questContent: i.jn.INVALID_QUEST_EMBED,
    });
}
