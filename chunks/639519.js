n.d(t, { $k: () => o, DS: () => s, hj: () => l, mG: () => d });
var i = n(652215),
    r = n(261425),
    a = n(105292);
class s extends Error {
    reason;
    status;
    constructor(e, t) {
        (super(`conjure create failed: ${e} [${t}]`),
            (this.name = "ConjureCreateError"),
            (this.reason = e),
            (this.status = t));
    }
}
function l(e) {
    if ("object" != typeof e || null === e) return "unknown";
    let { status: t, body: n } = e;
    if ("number" != typeof t) return "unknown";
    if (429 === t) return "rate_limited";
    let r = n?.code;
    return 409 === t && r === i.t02.TOO_MANY_CONJURE_PROJECTS ? "project_limit" : "unknown";
}
function o(e) {
    let t = e?.status;
    return "number" == typeof t ? t : 0;
}
function d(e) {
    switch (e instanceof s ? e.reason : "unknown") {
        case "project_limit":
            return a.intl.string(r.default["lh+h/p"]);
        case "rate_limited":
            return a.intl.string(r.default.zBENJU);
        default:
            return a.intl.string(r.default["9m86fn"]);
    }
}
