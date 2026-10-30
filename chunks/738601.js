n.d(t, { AK: () => E, Nl: () => _, yX: () => A });
var i = n(582128),
    r = n(17928),
    a = n(617617),
    s = n(573163),
    l = n(245179),
    o = n(404373),
    d = n(260498),
    c = n(189714),
    u = n(722701);
let _ = [d.Ay, l.A, u.A, s.Ay, a.A];
function E(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return d.Ay.isProjectDeleting(e) || (0, c.j)(a.A.settings, e)
        ? null
        : l.A.isThinking(e) || u.A.getPublishStatus(e)?.publishing === !0
          ? "working"
          : (0, o.tz)(e) || ((t = d.Ay.getProject(e)), t?.install_scope_setup != null && (0, d.PV)(t))
            ? "unread"
            : n && null != l.A.getFinishedAt(e)
              ? "working"
              : null;
}
function A(e) {
    let [t, n] = i.useState(!1),
        a = (0, r.bG)(_, () => E(e, t), [e, t]);
    return (t !== ("working" === a) && n("working" === a), a);
}
