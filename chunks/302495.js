E.d(t, { p: () => a });
var r = E(418781),
    S = E.n(r),
    _ = E(323125),
    T = E(901123),
    n = E(746080);
function s(e, t) {
    let { optional: E = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new _.x(`:${S()(e)}(${t})${E ? "?" : ""}`);
}
let a = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = T.Cr.map(S()).join("|");
        return s(e, `${E}|\\d+`, { optional: t });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            E = [...n.qW].map(S()).join("|");
        return s(e, `${E}|\\d+`, { optional: t });
    },
};
