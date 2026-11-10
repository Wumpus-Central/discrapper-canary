var i = n(582128),
    r = n(855986),
    a = n(617617),
    s = n(218461),
    l = n(513425),
    o = n(404373),
    d = n(260498),
    c = n(189714),
    u = n(722701);
let _ = [d.Ay, l.A, u.A, s.Ay, a.A];
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return d.Ay.isProjectDeleting(e) || (0, c.j)(a.A.settings, e)
        ? null
        : l.A.isThinking(e) || d.Ay.isProjectRunning(e) || u.A.getPublishStatus(e)?.publishing === !0
          ? "working"
          : (0, o.tz)(e)
            ? "unread"
            : t && null != l.A.getFinishedAt(e)
              ? "working"
              : null;
}
n.d(
    t,
    {},
    {
        AK: E,
        Nl: _,
        yX: function (e) {
            let [t, n] = i.useState(!1),
                a = (0, r.bG)(_, () => E(e, t), [e, t]);
            return (t !== ("working" === a) && n("working" === a), a);
        },
    },
);
