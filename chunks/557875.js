function r(e) {
    let t = [],
        n = new Set();
    for (let r of e) {
        let e =
            "string" != typeof r.type || "" === r.type || "string" != typeof r.label || "" === r.label.trim()
                ? null
                : r.configured
                  ? "authorize"
                  : "finish-setup";
        null == e || n.has(r.type) || (n.add(r.type), t.push({ connection: r, offer: e }));
    }
    return t;
}
function i(e, t) {
    if (e.has(t)) return null;
    let n = new Set(e);
    return n.add(t), n;
}
function s(e, t) {
    if (!e.has(t)) return e;
    let n = new Set(e);
    return n.delete(t), n;
}
n.d(t, { K9: () => i, Q6: () => s, Xl: () => r, ls: () => l, rG: () => a, rq: () => c }), n(321073);
let o = new Set([
    "bad_request",
    "bad_connection_type",
    "unknown_project",
    "not_declared",
    "not_configured",
    "not_deployed",
    "child_error",
    "child_malformed",
    "child_unavailable",
]);
function a(e) {
    return "string" == typeof e && o.has(e) ? e : null;
}
function l(e, t) {
    switch (t) {
        case "not_configured":
            return "not_configured";
        case "not_deployed":
            return "not_deployed";
        case "not_declared":
        case "unknown_project":
            return "not_declared";
        case "child_error":
        case "child_malformed":
        case "child_unavailable":
            return "unavailable";
        case "bad_request":
        case "bad_connection_type":
            return "unknown";
    }
    return 404 === e ? "not_declared" : e >= 500 ? "unavailable" : "unknown";
}
function c(e) {
    return "not_configured" === e ? "setup" : "generic";
}
