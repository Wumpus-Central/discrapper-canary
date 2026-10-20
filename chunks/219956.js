n.d(t, { A2: () => f, ZA: () => h, eN: () => m, s9: () => c });
var l = n(17928),
    a = n(617617),
    r = n(573163),
    i = n(245179),
    s = n(404373),
    u = n(189714),
    o = n(722701);
function d(e) {
    return "changes" === e || "unpublished" === e;
}
function c(e, t) {
    return "in_progress" !== e && d(t);
}
let m = [i.A, r.Ay, a.A, o.A];
function f(e) {
    return (function (e) {
        let { thinking: t, unread: n, publishState: l } = e;
        return t ? "in_progress" : n ? "unread" : d(l) ? "draft" : "default";
    })({
        thinking: i.A.isThinking(e),
        unread: (0, s.tz)(e) && !(0, u.j)(a.A.settings, e),
        publishState: o.A.getPublishStatus(e)?.state ?? null,
    });
}
function h(e) {
    return (0, l.bG)(m, () => f(e), [e]);
}
