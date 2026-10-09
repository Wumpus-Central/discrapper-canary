n.d(e, { $k: () => a, DS: () => _, hj: () => u, mG: () => o });
var i = n(652215),
    r = n(248675),
    l = n(660183);
class _ extends Error {
    reason;
    status;
    constructor(t, e) {
        (super(`vibegrations create failed: ${t} [${e}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = t),
            (this.status = e));
    }
}
function u(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: e, body: n } = t;
    if ("number" != typeof e) return "unknown";
    if (429 === e) return "rate_limited";
    let r = n?.code;
    return 409 === e && r === i.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function a(t) {
    let e = t?.status;
    return "number" == typeof e ? e : 0;
}
function o(t) {
    switch (t instanceof _ ? t.reason : "unknown") {
        case "project_limit":
            return l.intl.string(r.default["lh+h/p"]);
        case "rate_limited":
            return l.intl.string(r.default.zBENJU);
        default:
            return l.intl.string(r.default["9m86fn"]);
    }
}
