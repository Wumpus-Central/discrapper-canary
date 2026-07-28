e.d(n, { A: () => A });
var i = e(477900);
e(582128);
var r = e(17928),
    l = e(477782),
    a = e(579872),
    d = e(435470),
    s = e(867455),
    o = e(406704),
    u = e(734057),
    c = e(746080),
    h = e(375708);
function A(t) {
    let n = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        e = (0, o.H_)(t),
        A = (0, d.Eh)(t);
    return n?.isForumLikeChannel() && e
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
