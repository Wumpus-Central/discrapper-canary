n.d(t, { p: () => d });
var i = n(377941),
    r = n.n(i),
    a = n(323125),
    s = n(901123),
    l = n(746080);
function o(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new a.x(`:${r()(e)}(${t})${n ? "?" : ""}`);
}
let d = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = s.Cr.map(r()).join("|");
        return o(e, `${n}|\\d+`, { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...l.qW].map(r()).join("|");
        return o(e, `${n}|\\d+`, { optional: t });
    },
};
