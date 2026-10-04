n.d(t, { $k: () => s, Xd: () => u, hj: () => o, uQ: () => a });
var i = n(652215),
    r = n(248675),
    l = n(375708);
class a extends Error {
    reason;
    status;
    constructor(e, t) {
        (super(`vibegrations create failed: ${e} [${t}]`),
            (this.name = "VibegrationsCreateError"),
            (this.reason = e),
            (this.status = t));
    }
}
function o(e) {
    if ("object" != typeof e || null === e) return "unknown";
    let { status: t, body: n } = e;
    if ("number" != typeof t) return "unknown";
    if (429 === t) return "rate_limited";
    let r = n?.code;
    return 409 === t && r === i.t02.TOO_MANY_VIBEGRATIONS_PROJECTS ? "project_limit" : "unknown";
}
function s(e) {
    let t = e?.status;
    return "number" == typeof t ? t : 0;
}
function u(e) {
    switch (e instanceof a ? e.reason : "unknown") {
        case "project_limit":
            return l.intl.string(r.default.Asusmn);
        case "rate_limited":
            return l.intl.string(r.default.DT6qly);
        default:
            return l.intl.string(r.default.KKkp5Y);
    }
}
