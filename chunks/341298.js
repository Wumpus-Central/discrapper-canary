n.d(t, {
    g: () => l,
    mM: () => u,
    tr: () => c,
}),
    n(442837);
var r = n(430824),
    i = n(914010),
    a = n(558921);
let o = 3000,
    s = 3600000;
function l() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = null != e ? e : r.Z,
        n = t.getGuild(a.y),
        i = (null == n ? void 0 : n.joinedAt) instanceof Date && Date.now() - n.joinedAt.getTime() <= s;
    return 1 === t.getGuildCount() && i;
}
function c(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.g && l();
}
function u(e) {
    return new Promise((t, n) => {
        if (i.Z.getGuildId() === e) return void t();
        let r = setTimeout(() => {
                s(), n();
            }, o),
            a = () => {
                i.Z.getGuildId() === e && (s(), t());
            },
            s = () => {
                i.Z.removeChangeListener(a), clearTimeout(r);
            };
        i.Z.addChangeListener(a);
    });
}
