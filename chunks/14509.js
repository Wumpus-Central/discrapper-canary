n.d(t, {
    TT: () => c,
    _9: () => l,
    ml: () => u,
}),
    n(311907);
var r = n(71393),
    i = n(967198),
    a = n(276041);
let s = 3000,
    o = 3600000;
function l() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = null != e ? e : r.A,
        n = t.getGuild(a.$),
        i = (null == n ? void 0 : n.joinedAt) instanceof Date && Date.now() - n.joinedAt.getTime() <= o;
    return 1 === t.getGuildCount() && i;
}
function c(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.t && l();
}
function u(e) {
    return new Promise((t, n) => {
        if (i.A.getGuildId() === e) return void t();
        let r = setTimeout(() => {
                o(), n();
            }, s),
            a = () => {
                i.A.getGuildId() === e && (o(), t());
            },
            o = () => {
                i.A.removeChangeListener(a), clearTimeout(r);
            };
        i.A.addChangeListener(a);
    });
}
