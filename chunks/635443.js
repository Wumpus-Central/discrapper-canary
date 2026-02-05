t.d(n, { A: () => c });
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(308528),
    s = t(734057),
    d = t(287809),
    o = t(985018);
function c(e, n) {
    let t = (0, l.bG)([d.default], () => d.default.getCurrentUser(), []),
        c = (0, l.bG)([s.A], () => s.A.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == t || !c.isOwner(t.id) || !c.recipients?.includes(e)
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "remove",
              label: o.intl.string(o.t["n5zMI+"]),
              action: () => a.A.removeRecipient(n, e),
              color: "danger",
          });
}
