n.d(t, { W: () => c });
var r = n(951288);
n(647438);
var i = n(497505),
    a = n(937797),
    o = n(543433),
    s = n(46140),
    l = n(388032);
function c(e) {
    let { questId: t } = e,
        { enabled: n } = a.m8.useConfig({ location: s.dr.EMBED_DESKTOP });
    return (0, r.jsx)(o.w, {
        questId: t,
        fallbackReason: s.V_.EXCLUDED_QUEST,
        bodyText: l.intl.string(n ? l.t.NIliWV : l.t.nuWSYW),
        questContent: i.jn.EXCLUDED_QUEST_EMBED,
    });
}
