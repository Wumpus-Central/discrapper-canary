var i = n(136722),
    r = n(155718);
n(392054);
var a = n(376092);
function s(e, t) {
    return `${e}:${t}`;
}
n.d(
    t,
    {},
    {
        Eu: s,
        UZ: function (e) {
            return Object.fromEntries(e.map((e) => [s(e.id, e.type), e]));
        },
        eR: function (e) {
            return a.Q.filter((t) => i.zy(e, t));
        },
        p6: function (e, t) {
            return e === r.kc.CHAT ? "/" + t : t;
        },
    },
);
