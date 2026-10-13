e.d(n, { $k: () => o, DS: () => s, hj: () => l, mG: () => a });
var r = e(652215),
    u = e(248675),
    i = e(660183);
class s extends Error {
    reason;
    status;
    constructor(t, n) {
        (super(`vibegrations create failed: ${t} [${n}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = t),
            (this.status = n));
    }
}
function l(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: n, body: e } = t;
    if ("number" != typeof n) return "unknown";
    if (429 === n) return "rate_limited";
    let u = e?.code;
    return 409 === n && u === r.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function o(t) {
    let n = t?.status;
    return "number" == typeof n ? n : 0;
}
function a(t) {
    switch (t instanceof s ? t.reason : "unknown") {
        case "project_limit":
            return i.intl.string(u.default["lh+h/p"]);
        case "rate_limited":
            return i.intl.string(u.default.zBENJU);
        default:
            return i.intl.string(u.default["9m86fn"]);
    }
}
