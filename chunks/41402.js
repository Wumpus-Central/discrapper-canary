n.d(e, { A: () => A });
var i = n(477900);
n(582128);
var r = n(17928),
    l = n(477782),
    a = n(579872),
    d = n(435470),
    s = n(867455),
    o = n(406704),
    u = n(734057),
    c = n(746080),
    h = n(375708);
function A(t) {
    let e = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        n = (0, o.H_)(t),
        A = (0, d.Eh)(t);
    return e?.isForumLikeChannel() && n
        ? t.hasFlag(c.lx.PINNED)
            ? (0, i.jsx)(l.Dr, { id: "unpin-thread", label: h.intl.string(h.t.trD8ao), action: () => s.A.unpin(t) })
            : (0, i.jsx)(l.Dr, {
                  id: "pin-thread",
                  label: h.intl.string(h.t.EnaWhu),
                  action: function () {
                      null != A
                          ? a.A.show({
                                title: h.intl.string(h.t.IMbjxo),
                                body: h.intl.string(h.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await s.A.unpin(A), s.A.pin(t);
                                },
                            })
                          : s.A.pin(t);
                  },
              })
        : null;
}
