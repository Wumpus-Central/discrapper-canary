n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(857182),
    l = n(572957),
    c = n(419056),
    u = n(985018),
    d = n(420779);
let f = (e) => {
    let { channelId: t, messageId: n } = e,
        f = (0, a.bG)([l.A], () => l.A.shouldShowBump(n), [n]),
        p = i.useCallback(() => {
            o.A.dismissPublishBump(n), (0, c.A)(t, n);
        }, [t, n]),
        _ = i.useCallback(() => {
            o.A.dismissPublishBump(n);
        }, [n]),
        h = i.useCallback(() => {
            o.A.permanentlyHidePublishBump(t);
        }, [t]);
    return f
        ? (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.mp,
                      children: [
                          (0, r.jsx)(s.koX, {
                              size: "xs",
                              color: "currentColor",
                              className: d.Kk,
                          }),
                          (0, r.jsx)(s.Heading, {
                              variant: "heading-sm/normal",
                              className: d.dS,
                              children: u.intl.string(u.t.hasZoU),
                          }),
                          (0, r.jsx)(s.Text, {
                              color: "text-brand",
                              className: d.mk,
                              variant: "text-sm/normal",
                              children: (0, r.jsx)(s.DUT, {
                                  onClick: p,
                                  children: u.intl.string(u.t.MFGE51),
                              }),
                          }),
                          (0, r.jsx)(s.DUT, {
                              onClick: _,
                              children: (0, r.jsx)(s.aXh, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: d.ut,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(s.Text, {
                      color: "text-muted",
                      className: d.qx,
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(s.DUT, {
                          onClick: h,
                          children: u.intl.string(u.t.efSkDm),
                      }),
                  }),
              ],
          })
        : null;
};
