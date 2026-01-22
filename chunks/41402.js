i.d(n, { A: () => A });
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(579872),
    d = i(435470),
    s = i(867455),
    o = i(406704),
    u = i(734057),
    c = i(746080),
    h = i(985018);
function A(t) {
    let n = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
        i = (0, o.H_)(t),
        A = (0, d.Eh)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && i
        ? t.hasFlag(c.lx.PINNED)
            ? (0, e.jsx)(l.Drp, {
                  id: "unpin-thread",
                  label: h.intl.string(h.t.trD8ao),
                  action: () => s.A.unpin(t),
              })
            : (0, e.jsx)(l.Drp, {
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
