n.d(t, { AK: () => c, Nl: () => d, sr: () => u });
var i = n(617617),
    r = n(573163),
    a = n(245179),
    s = n(404373),
    l = n(260498),
    o = n(189714);
let d = [l.Ay, a.A, r.Ay, i.A];
function c(e) {
    return l.Ay.isProjectDeleting(e) || (0, o.j)(i.A.settings, e)
        ? null
        : a.A.isThinking(e)
          ? "working"
          : (0, s.tz)(e)
            ? "unread"
            : null;
}
function u() {
    return l.Ay.getOwnedProjects().some((e) => null != c(e.id));
}
