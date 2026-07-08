n.d(t, { Y: () => m });
var r = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(192308),
    l = n(822123),
    o = n(976860),
    u = n(780964),
    c = n(766075),
    d = n(287809),
    p = n(166403),
    b = n(652215);
function m() {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, s.bG)([p.A], () => p.A.getPremiumTypeSubscription());
    return i.useCallback(
        (i) => {
            if (null == e) return void (0, o.pX)(b.BVt.LOGIN, { source: "premium_subscribe_button" });
            if (t?.status === b.Dmq.ACCOUNT_HOLD) {
                (0, l.xf)(), (0, c.openUserSettings)(u.X.NITRO_PANEL);
                return;
            }
            e.isClaimed()
                ? e.verified
                    ? i()
                    : (0, a.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("54681"),
                              n.e("74913"),
                              n.e("12206"),
                              n.e("90406"),
                          ]).then(n.bind(n, 661925));
                          return (t) => {
                              let { onClose: n, ...i } = t;
                              return (0, r.jsx)(e, { ...i, onClose: n });
                          };
                      })
                : (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("17487"),
                          n.e("12206"),
                          n.e("9998"),
                          n.e("80388"),
                      ]).then(n.bind(n, 195759));
                      return (t) => {
                          let { onClose: n, ...i } = t;
                          return (0, r.jsx)(e, { ...i, onClose: n });
                      };
                  });
        },
        [e, t],
    );
}
