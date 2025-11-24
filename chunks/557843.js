n.d(t, {
    W: () => c,
    X: () => l,
});
var r = n(54381);
n(473749);
var i = n(49436),
    a = n(874365),
    o = n(324805),
    s = n(388032),
    l = (function (e) {
        return (e.NOT_FOUND = "not_found"), (e.MOBILE_ONLY = "mobile_only"), e;
    })({});
function c(e) {
    let { questId: t, reason: n = "not_found" } = e;
    return (0, r.jsx)(a.S, {
        questId: t,
        fallbackReason: o.V_.UNKNOWN_QUEST,
        bodyText: s.intl.string("mobile_only" === n ? s.t.Pag1gS : s.t.c9275Z),
        questContent: i.jn.INVALID_QUEST_EMBED,
    });
}
