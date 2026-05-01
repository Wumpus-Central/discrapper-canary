n.d(t, { TT: () => l, _9: () => s, ml: () => o }), n(17928);
var i = n(71393),
    a = n(967198),
    r = n(276041);
function s() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e ?? i.A,
        n = t.getGuild(r.$),
        a = n?.joinedAt instanceof Date && Date.now() - n.joinedAt.getTime() <= 36e5;
    return 1 === t.getGuildCount() && a;
}
function l(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === r.t && s();
}
function o(e) {
    return new Promise((t, n) => {
        if (a.A.getGuildId() === e) return void t();
        let i = setTimeout(() => {
                s(), n();
            }, 3e3),
            r = () => {
                a.A.getGuildId() === e && (s(), t());
            },
            s = () => {
                a.A.removeChangeListener(r), clearTimeout(i);
            };
        a.A.addChangeListener(r);
    });
}
