i.d(n, { A: () => c });
var t = i(627968);
i(64700);
var l = i(311907),
    r = i(477782),
    s = i(308528),
    d = i(734057),
    a = i(287809),
    o = i(985018);
function c(e, n) {
    let i = (0, l.bG)([a.default], () => a.default.getCurrentUser(), []),
        c = (0, l.bG)([d.A], () => d.A.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == i || !c.isOwner(i.id) || !c.recipients?.includes(e)
        ? null
        : (0, t.jsx)(r.Dr, {
              id: "remove",
              label: o.intl.string(o.t["n5zMI+"]),
              action: () => s.A.removeRecipient(n, e),
              color: "danger",
          });
}
