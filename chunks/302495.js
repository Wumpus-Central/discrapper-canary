n.d(t, {
    p: () => c,
}),
    n(896048);
var r = n(418781),
    i = n.n(r),
    a = n(323125),
    s = n(901123),
    o = n(746080);

function l(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new a.x(
        ":"
            .concat(i()(e), "(")
            .concat(t, ")")
            .concat(n ? "?" : ""),
    );
}
let c = {
    guildId() {
        let { name: e = "guildId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = s.Cr.map(i()).join("|");
        return l(e, "".concat(n, "|\\d+"), {
            optional: t,
        });
    },
    channelId() {
        let { name: e = "channelId", optional: t = !1 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...o.qW].map(i()).join("|");
        return l(e, "".concat(n, "|\\d+"), {
            optional: t,
        });
    },
};
