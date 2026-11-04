var l = n(811091);
function i(e) {
    return [...e].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0));
}
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => l.default.compare(e.soundId, t.soundId));
    return t ? i(n) : n;
}
n.d(
    t,
    {},
    {
        IJ: function () {
            return r;
        },
        U9: r,
        XP: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return t ? i(e) : e;
        },
    },
);
