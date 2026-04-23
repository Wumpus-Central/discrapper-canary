i.d(n, { A: () => h });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(579872),
    s = i(435470),
    d = i(867455),
    o = i(406704),
    u = i(734057),
    c = i(746080),
    A = i(985018);
function h(t) {
    let n = (0, l.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        i = (0, o.H_)(t),
        h = (0, s.Eh)(t);
    return n?.isForumLikeChannel() && i
        ? t.hasFlag(c.lx.PINNED)
            ? (0, e.jsx)(r.Dr, { id: "unpin-thread", label: A.intl.string(A.t.trD8ao), action: () => d.A.unpin(t) })
            : (0, e.jsx)(r.Dr, {
                  id: "pin-thread",
                  label: A.intl.string(A.t.EnaWhu),
                  action: function () {
                      null != h
                          ? a.A.show({
                                title: A.intl.string(A.t.IMbjxo),
                                body: A.intl.string(A.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await d.A.unpin(h), d.A.pin(t);
                                },
                            })
                          : d.A.pin(t);
                  },
              })
        : null;
}
