var i = e(477900);
e(582128);
var r = e(855986),
    a = e(477782),
    l = e(579872),
    d = e(435470),
    s = e(7909),
    o = e(406704),
    u = e(734057),
    c = e(746080),
    h = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
                e = (0, o.H_)(t),
                A = (0, d.Eh)(t);
            return n?.isForumLikeChannel() && e
                ? t.hasFlag(c.lx.PINNED)
                    ? (0, i.jsx)(a.Dr, {
                          id: "unpin-thread",
                          label: h.intl.string(h.t.trD8ao),
                          action: () => s.A.unpin(t),
                      })
                    : (0, i.jsx)(a.Dr, {
                          id: "pin-thread",
                          label: h.intl.string(h.t.EnaWhu),
                          action: function () {
                              null != A
                                  ? l.A.show({
                                        title: h.intl.string(h.t.IMbjxo),
                                        body: h.intl.string(h.t["mi5+Vl"]),
                                        onConfirm: async () => {
                                            (await s.A.unpin(A), s.A.pin(t));
                                        },
                                    })
                                  : s.A.pin(t);
                          },
                      })
                : null;
        },
    },
);
