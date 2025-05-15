n.d(t, {
    g: () => c,
    mM: () => d,
    tr: () => u
}),
    n(442837);
var r = n(430824),
    i = n(914010),
    a = n(369274),
    o = n(558921);
let s = 3000,
    l = 3600000;
function c(e) {
    let { guildStore: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = null != t ? t : r.Z,
        i = n.getGuild(o.y),
        s = (null == i ? void 0 : i.joinedAt) instanceof Date && Date.now() - i.joinedAt.getTime() <= l;
    return 1 === n.getGuildCount() && s && (0, a.Z)(e);
}
function u(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === o.g && c('app');
}
function d(e) {
    return new Promise((t, n) => {
        if (i.Z.getGuildId() === e) return void t();
        let r = setTimeout(() => {
                o(), n();
            }, s),
            a = () => {
                i.Z.getGuildId() === e && (o(), t());
            },
            o = () => {
                i.Z.removeChangeListener(a), clearTimeout(r);
            };
        i.Z.addChangeListener(a);
    });
}
