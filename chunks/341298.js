r.d(n, {
    g: function () {
        return c;
    },
    mM: function () {
        return f;
    },
    tr: function () {
        return d;
    }
}),
    r(442837);
var i = r(430824),
    a = r(914010),
    o = r(369274),
    s = r(558921);
let l = 3000,
    u = 3600000;
function c(e) {
    let { guildStore: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = null != n ? n : i.Z,
        a = r.getGuild(s.y),
        l = (null == a ? void 0 : a.joinedAt) instanceof Date && Date.now() - a.joinedAt.getTime() <= u;
    return 1 === r.getGuildCount() && l && (0, o.Z)(e);
}
function d(e) {
    return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === s.g && c('app');
}
function f(e) {
    return new Promise((n, r) => {
        if (a.Z.getGuildId() === e) {
            n();
            return;
        }
        let i = setTimeout(() => {
                s(), r();
            }, l),
            o = () => {
                a.Z.getGuildId() === e && (s(), n());
            },
            s = () => {
                a.Z.removeChangeListener(o), clearTimeout(i);
            };
        a.Z.addChangeListener(o);
    });
}
