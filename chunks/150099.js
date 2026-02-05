n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(857182),
    o = n(572957),
    d = n(419056),
    c = n(985018),
    u = n(420779);
let m = (e) => {
    let { channelId: t, messageId: n } = e,
        m = (0, a.bG)([o.A], () => o.A.shouldShowBump(n), [n]),
        _ = l.useCallback(() => {
            s.A.dismissPublishBump(n), (0, d.A)(t, n);
        }, [t, n]),
        h = l.useCallback(() => {
            s.A.dismissPublishBump(n);
        }, [n]),
        p = l.useCallback(() => {
            s.A.permanentlyHidePublishBump(t);
        }, [t]);
    return m
        ? (0, i.jsxs)("div", {
              className: u.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: u.mp,
                      children: [
                          (0, i.jsx)(r.koX, { size: "xs", color: "currentColor", className: u.Kk }),
                          (0, i.jsx)(r.Heading, {
                              variant: "heading-sm/normal",
                              className: u.dS,
                              children: c.intl.string(c.t.hasZoU),
                          }),
                          (0, i.jsx)(r.Text, {
                              color: "text-brand",
                              className: u.mk,
                              variant: "text-sm/normal",
                              children: (0, i.jsx)(r.DUT, { onClick: _, children: c.intl.string(c.t.MFGE51) }),
                          }),
                          (0, i.jsx)(r.DUT, {
                              onClick: h,
                              children: (0, i.jsx)(r.aXh, { size: "xs", color: "currentColor", className: u.ut }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(r.Text, {
                      color: "text-muted",
                      className: u.qx,
                      variant: "text-sm/normal",
                      children: (0, i.jsx)(r.DUT, { onClick: p, children: c.intl.string(c.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
