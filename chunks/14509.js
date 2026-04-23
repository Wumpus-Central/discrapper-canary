"use strict";
n.d(t, { TT: () => o, _9: () => a, ml: () => l }), n(311907);
var r = n(71393),
    i = n(967198),
    s = n(276041);
function a() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e ?? r.A,
        n = t.getGuild(s.$),
        i = n?.joinedAt instanceof Date && Date.now() - n.joinedAt.getTime() <= 36e5;
    return 1 === t.getGuildCount() && i;
}
function o(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.t && a();
}
function l(e) {
    return new Promise((t, n) => {
        if (i.A.getGuildId() === e) return void t();
        let r = setTimeout(() => {
                a(), n();
            }, 3e3),
            s = () => {
                i.A.getGuildId() === e && (a(), t());
            },
            a = () => {
                i.A.removeChangeListener(s), clearTimeout(r);
            };
        i.A.addChangeListener(s);
    });
}
