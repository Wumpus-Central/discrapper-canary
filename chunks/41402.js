var i = t(477900);
t(582128);
var r = t(855986),
    l = t(477782),
    a = t(579872),
    o = t(435470),
    d = t(7909),
    s = t(406704),
    u = t(734057),
    c = t(746080),
    h = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, r.bG)([u.A], () => u.A.getChannel(n.parent_id)),
                t = (0, s.H_)(n),
                m = (0, o.Eh)(n);
            return e?.isForumLikeChannel() && t
                ? n.hasFlag(c.lx.PINNED)
                    ? (0, i.jsx)(l.Dr, {
                          id: "unpin-thread",
                          label: h.intl.string(h.t.trD8ao),
                          action: () => d.A.unpin(n),
                      })
                    : (0, i.jsx)(l.Dr, {
                          id: "pin-thread",
                          label: h.intl.string(h.t.EnaWhu),
                          action: function () {
                              null != m
                                  ? a.A.show({
                                        title: h.intl.string(h.t.IMbjxo),
                                        body: h.intl.string(h.t["mi5+Vl"]),
                                        onConfirm: async () => {
                                            (await d.A.unpin(m), d.A.pin(n));
                                        },
                                    })
                                  : d.A.pin(n);
                          },
                      })
                : null;
        },
    },
);
