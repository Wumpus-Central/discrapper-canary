n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(778492),
    r = n(534514),
    o = n(834730),
    d = n(939249),
    c = n(285796),
    u = n(857182),
    m = n(572957),
    _ = n(419056),
    h = n(985018),
    p = n(676544);
let g = (e) => {
    let { channelId: t, messageId: n } = e,
        g = (0, a.bG)([m.A], () => m.A.shouldShowBump(n), [n]),
        A = l.useCallback(() => {
            u.A.dismissPublishBump(n), (0, _.A)(t, n);
        }, [t, n]),
        f = l.useCallback(() => {
            u.A.dismissPublishBump(n);
        }, [n]),
        x = l.useCallback(() => {
            u.A.permanentlyHidePublishBump(t);
        }, [t]);
    return g
        ? (0, i.jsxs)("div", {
              className: p.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: p.mp,
                      children: [
                          (0, i.jsx)(s.k, { size: "xs", color: "currentColor", className: p.Kk }),
                          (0, i.jsx)(r.D, {
                              variant: "heading-sm/normal",
                              className: p.dS,
                              children: h.intl.string(h.t.hasZoU),
                          }),
                          (0, i.jsx)(o.E, {
                              color: "text-brand",
                              className: p.mk,
                              variant: "text-sm/normal",
                              children: (0, i.jsx)(d.D, { onClick: A, children: h.intl.string(h.t.MFGE51) }),
                          }),
                          (0, i.jsx)(d.D, {
                              onClick: f,
                              children: (0, i.jsx)(c.a, { size: "xs", color: "currentColor", className: p.ut }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(o.E, {
                      color: "text-muted",
                      className: p.qx,
                      variant: "text-sm/normal",
                      children: (0, i.jsx)(d.D, { onClick: x, children: h.intl.string(h.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
