n.d(t, { y: () => o });
var r = n(427164);
let i = { enabled: !1 },
    a = (0, r.le)({
        name: "2025-08_search_autocomplete_fetch_frecency",
        kind: "user",
        defaultConfig: i,
        variations: { 1: { enabled: !0 } },
    });
function o(e) {
    let { location: t } = e,
        { enabled: n } = a.getConfig({ location: t });
    return n;
}
