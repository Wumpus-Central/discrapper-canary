n.d(e, { A2: () => A, B$: () => f, eN: () => h, yy: () => c });
var i = n(17928),
    r = n(617617),
    u = n(573163),
    l = n(245179),
    a = n(404373),
    d = n(260498),
    s = n(189714),
    p = n(722701),
    g = n(811587);
function o(t) {
    return "nothing_built" === t || "not_live" === t || "live_outdated" === t;
}
function c(t) {
    if (null == t.updated_at) return null;
    let e = Date.parse(t.updated_at);
    return Number.isNaN(e) ? null : e;
}
let h = [d.Ay, l.A, u.Ay, r.A, p.A];
function A(t) {
    return (function (t) {
        let { deleting: e = !1, thinking: n, unread: i, publishState: r } = t;
        return e ? "deleting" : n ? "in_progress" : i ? "unread" : o(r) ? "draft" : "default";
    })({
        deleting: d.Ay.isProjectDeleting(t),
        thinking: l.A.isThinking(t),
        unread: (0, a.tz)(t) && !(0, s.j)(r.A.settings, t),
        publishState: p.A.getPublishStatus(t)?.publishState ?? null,
    });
}
function f(t) {
    let e = t.id,
        n = (t.supported_surfaces?.length ?? 0) > 0;
    return (0, i.cf)(
        h,
        () => ({
            status: (function (t) {
                let { thinking: e, publishState: n, everPublished: i } = t;
                return e
                    ? "in_progress"
                    : null != n && o(n)
                      ? "draft"
                      : (null != n && (0, g.lE)(n)) || i
                        ? "published"
                        : "draft";
            })({
                thinking: l.A.isThinking(e),
                publishState: p.A.getPublishStatus(e)?.publishState ?? null,
                everPublished: n,
            }),
            unread: (0, a.tz)(e) && !(0, s.j)(r.A.settings, e),
            deleting: d.Ay.isProjectDeleting(e),
        }),
        [e, n],
    );
}
