n.d(t, { TT: () => _, _9: () => s, ml: () => l }), n(17928);
var i = n(71393),
    r = n(967198),
    a = n(276041);
function s() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e ?? i.A,
        n = t.getGuild(a.$),
        r = n?.joinedAt instanceof Date && Date.now() - n.joinedAt.getTime() <= 36e5;
    return 1 === t.getGuildCount() && r;
}
function _(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.t && s();
}
function l(e) {
    return new Promise((t, n) => {
        if (r.A.getGuildId() === e) return void t();
        let i = setTimeout(() => {
                s(), n();
            }, 3e3),
            a = () => {
                r.A.getGuildId() === e && (s(), t());
            },
            s = () => {
                r.A.removeChangeListener(a), clearTimeout(i);
            };
        r.A.addChangeListener(a);
    });
}
