n.d(t, { A2: () => x, ZA: () => g, eN: () => h, s9: () => m, yy: () => f });
var l = n(17928),
    a = n(617617),
    r = n(573163),
    i = n(245179),
    s = n(404373),
    u = n(260498),
    d = n(189714),
    o = n(722701);
function c(e) {
    return "nothing_built" === e || "not_live" === e || "live_outdated" === e;
}
function m(e, t) {
    return "in_progress" !== e && "deleting" !== e && c(t);
}
function f(e) {
    if (null == e.updated_at) return null;
    let t = Date.parse(e.updated_at);
    return Number.isNaN(t) ? null : t;
}
let h = [u.Ay, i.A, r.Ay, a.A, o.A];
function x(e) {
    return (function (e) {
        let { deleting: t = !1, thinking: n, unread: l, publishState: a } = e;
        return t ? "deleting" : n ? "in_progress" : l ? "unread" : c(a) ? "draft" : "default";
    })({
        deleting: u.Ay.isProjectDeleting(e),
        thinking: i.A.isThinking(e),
        unread: (0, s.tz)(e) && !(0, d.j)(a.A.settings, e),
        publishState: o.A.getPublishStatus(e)?.publishState ?? null,
    });
}
function g(e) {
    return (0, l.bG)(h, () => x(e), [e]);
}
