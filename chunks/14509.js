"use strict";
n.d(t, { TT: () => u, _9: () => l, ml: () => c }), n(311907);
var r = n(71393),
    i = n(967198),
    a = n(276041);
let s = 3e3,
    o = 36e5;
function l() {
    let { guildStore: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e ?? r.A,
        n = t.getGuild(a.$),
        i = n?.joinedAt instanceof Date && Date.now() - n.joinedAt.getTime() <= o;
    return 1 === t.getGuildCount() && i;
}
function u(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === a.t && l();
}
function c(e) {
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
