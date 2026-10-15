e.d(n, { $k: () => o, DS: () => s, hj: () => l, mG: () => c });
var u = e(652215),
    r = e(261425),
    i = e(105292);
class s extends Error {
    reason;
    status;
    constructor(t, n) {
        (super(`conjure create failed: ${t} [${n}]`),
            (this.name = "ConjureCreateError"),
            (this.reason = t),
            (this.status = n));
    }
}
function l(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: n, body: e } = t;
    if ("number" != typeof n) return "unknown";
    if (429 === n) return "rate_limited";
    let r = e?.code;
    return 409 === n && r === u.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function o(t) {
    let n = t?.status;
    return "number" == typeof n ? n : 0;
}
function c(t) {
    switch (t instanceof s ? t.reason : "unknown") {
        case "project_limit":
            return i.intl.string(r.default["lh+h/p"]);
        case "rate_limited":
            return i.intl.string(r.default.zBENJU);
        default:
            return i.intl.string(r.default["9m86fn"]);
    }
}
