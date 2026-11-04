var r = n(477900),
    i = n(582128),
    s = n(855986),
    a = n(192308),
    l = n(822123),
    u = n(976860),
    o = n(780964),
    c = n(766075),
    d = n(287809),
    p = n(166403),
    m = n(652215);
n.d(
    t,
    {},
    {
        Y: function () {
            let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
                t = (0, s.bG)([p.A], () => p.A.getPremiumTypeSubscription());
            return i.useCallback(
                (i) => {
                    if (null == e) return void (0, u.pX)(m.BVt.LOGIN, { source: "premium_subscribe_button" });
                    if (t?.status === m.Dmq.ACCOUNT_HOLD) {
                        ((0, l.xf)(), (0, c.openUserSettings)(o.X.NITRO_PANEL));
                        return;
                    }
                    e.isClaimed()
                        ? e.verified
                            ? i()
                            : (0, a.mM)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e(928873),
                                      n.e(874913),
                                      n.e(112206),
                                      n.e(590406),
                                  ]).then(n.bind(n, 661925));
                                  return (t) => {
                                      let { onClose: n, ...i } = t;
                                      return (0, r.jsx)(e, { ...i, onClose: n });
                                  };
                              })
                        : (0, a.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e(671464),
                                  n.e(112206),
                                  n.e(709998),
                                  n.e(480388),
                              ]).then(n.bind(n, 195759));
                              return (t) => {
                                  let { onClose: n, ...i } = t;
                                  return (0, r.jsx)(e, { ...i, onClose: n });
                              };
                          });
                },
                [e, t],
            );
        },
    },
);
