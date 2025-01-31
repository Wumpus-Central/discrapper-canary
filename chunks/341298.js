n.d(t, {
    g: () => u,
    mM: () => d,
    tr: () => c
}),
    n(442837);
var i = n(430824),
    r = n(914010),
    a = n(369274),
    s = n(558921);
let o = 3000,
    l = 3600000;
function u(e) {
    let { guildStore: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = null != t ? t : i.Z,
        r = n.getGuild(s.y),
        o = (null == r ? void 0 : r.joinedAt) instanceof Date && Date.now() - r.joinedAt.getTime() <= l;
    return 1 === n.getGuildCount() && o && (0, a.Z)(e);
}
function c(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.g && u('app');
}
function d(e) {
    return new Promise((t, n) => {
        if (r.Z.getGuildId() === e) {
            t();
            return;
        }
        let i = setTimeout(() => {
                s(), n();
            }, o),
            a = () => {
                r.Z.getGuildId() === e && (s(), t());
            },
            s = () => {
                r.Z.removeChangeListener(a), clearTimeout(i);
            };
        r.Z.addChangeListener(a);
    });
}
