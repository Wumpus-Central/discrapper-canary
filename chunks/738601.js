n.d(t, { AK: () => _, Nl: () => u, yX: () => E });
var i = n(582128),
    r = n(17928),
    a = n(617617),
    s = n(573163),
    l = n(245179),
    o = n(404373),
    d = n(260498),
    c = n(189714);
let u = [d.Ay, l.A, s.Ay, a.A];
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return d.Ay.isProjectDeleting(e) || (0, c.j)(a.A.settings, e)
        ? null
        : l.A.isThinking(e)
          ? "working"
          : (0, o.tz)(e)
            ? "unread"
            : t && null != l.A.getFinishedAt(e)
              ? "working"
              : null;
}
function E(e) {
    let [t, n] = i.useState(!1),
        a = (0, r.bG)(u, () => _(e, t), [e, t]);
    return (t !== ("working" === a) && n("working" === a), a);
}
