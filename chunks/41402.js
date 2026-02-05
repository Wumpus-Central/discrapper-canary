n.d(e, { A: () => g });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(579872),
    s = n(435470),
    d = n(867455),
    o = n(406704),
    u = n(734057),
    c = n(746080),
    A = n(985018);
function g(t) {
    let e = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        n = (0, o.H_)(t),
        g = (0, s.Eh)(t);
    return e?.isForumLikeChannel() && n
        ? t.hasFlag(c.lx.PINNED)
            ? (0, i.jsx)(l.Drp, { id: "unpin-thread", label: A.intl.string(A.t.trD8ao), action: () => d.A.unpin(t) })
            : (0, i.jsx)(l.Drp, {
                  id: "pin-thread",
                  label: A.intl.string(A.t.EnaWhu),
                  action: function () {
                      null != g
                          ? a.A.show({
                                title: A.intl.string(A.t.IMbjxo),
                                body: A.intl.string(A.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await d.A.unpin(g), d.A.pin(t);
                                },
                            })
                          : d.A.pin(t);
                  },
              })
        : null;
}
