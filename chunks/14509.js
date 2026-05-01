"use strict";
n.d(t, { TT: () => o, _9: () => a, ml: () => l }), n(17928);
var i = n(71393),
    r = n(967198),
    s = n(276041);
function a() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e ?? i.A,
        n = t.getGuild(s.$),
        r = n?.joinedAt instanceof Date && Date.now() - n.joinedAt.getTime() <= 36e5;
    return 1 === t.getGuildCount() && r;
}
function o(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.t && a();
}
function l(e) {
    return new Promise((t, n) => {
        if (r.A.getGuildId() === e) return void t();
        let i = setTimeout(() => {
                a(), n();
            }, 3e3),
            s = () => {
                r.A.getGuildId() === e && (a(), t());
            },
            a = () => {
                r.A.removeChangeListener(s), clearTimeout(i);
            };
        r.A.addChangeListener(s);
    });
}
