n.d(e, { $k: () => l, DS: () => o, hj: () => a, mG: () => u });
var i = n(652215),
    r = n(248675),
    _ = n(375708);
class o extends Error {
    reason;
    status;
    constructor(t, e) {
        (super(`vibegrations create failed: ${t} [${e}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = t),
            (this.status = e));
    }
}
function a(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: e, body: n } = t;
    if ("number" != typeof e) return "unknown";
    if (429 === e) return "rate_limited";
    let r = n?.code;
    return 409 === e && r === i.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function l(t) {
    let e = t?.status;
    return "number" == typeof e ? e : 0;
}
function u(t) {
    switch (t instanceof o ? t.reason : "unknown") {
        case "project_limit":
            return _.intl.string(r.default["lh+h/p"]);
        case "rate_limited":
            return _.intl.string(r.default.zBENJU);
        default:
            return _.intl.string(r.default["9m86fn"]);
    }
}
