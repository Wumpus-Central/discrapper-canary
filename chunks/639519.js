n.d(e, { $k: () => a, DS: () => u, hj: () => o, mG: () => c });
var r = n(652215),
    i = n(248675),
    l = n(660183);
class u extends Error {
    reason;
    status;
    constructor(t, e) {
        (super(`vibegrations create failed: ${t} [${e}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = t),
            (this.status = e));
    }
}
function o(t) {
    if ("object" != typeof t || null === t) return "unknown";
    let { status: e, body: n } = t;
    if ("number" != typeof e) return "unknown";
    if (429 === e) return "rate_limited";
    let i = n?.code;
    return 409 === e && i === r.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function a(t) {
    let e = t?.status;
    return "number" == typeof e ? e : 0;
}
function c(t) {
    switch (t instanceof u ? t.reason : "unknown") {
        case "project_limit":
            return l.intl.string(i.default["lh+h/p"]);
        case "rate_limited":
            return l.intl.string(i.default.zBENJU);
        default:
            return l.intl.string(i.default["9m86fn"]);
    }
}
