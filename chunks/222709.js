n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(528963),
    s = n(143740),
    c = n(212342),
    u = n(388032),
    d = n(785188);
let p = (e) => {
    let { channelId: t, messageId: n } = e,
        p = (0, l.e7)([c.Z], () => c.Z.shouldShowBump(n), [n]),
        m = i.useCallback(() => {
            o.Z.dismissPublishBump(n), (0, s.Z)(t, n);
        }, [t, n]),
        f = i.useCallback(() => {
            o.Z.dismissPublishBump(n);
        }, [n]),
        g = i.useCallback(() => {
            o.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return p
        ? (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.bumpBox,
                      children: [
                          (0, r.jsx)(a.MqZ, {
                              size: "xs",
                              color: "currentColor",
                              className: d.icon,
                          }),
                          (0, r.jsx)(a.X6q, {
                              variant: "heading-sm/normal",
                              className: d.tagline,
                              children: u.intl.string(u.t.hasZoa),
                          }),
                          (0, r.jsx)(a.Text, {
                              color: "text-brand",
                              className: d.publish,
                              variant: "text-sm/normal",
                              children: (0, r.jsx)(a.P3F, {
                                  onClick: m,
                                  children: u.intl.string(u.t["MFGE5+"]),
                              }),
                          }),
                          (0, r.jsx)(a.P3F, {
                              onClick: f,
                              children: (0, r.jsx)(a.k$p, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: d.closeIcon,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(a.Text, {
                      color: "text-muted",
                      className: d.hidePermanently,
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(a.P3F, {
                          onClick: g,
                          children: u.intl.string(u.t.efSkDg),
                      }),
                  }),
              ],
          })
        : null;
};
