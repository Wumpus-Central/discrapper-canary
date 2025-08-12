n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    l = n(528963),
    c = n(143740),
    u = n(212342),
    d = n(388032),
    f = n(577490);
let _ = (e) => {
    let { channelId: t, messageId: n } = e,
        _ = (0, o.e7)([u.Z], () => u.Z.shouldShowBump(n), [n]),
        p = i.useCallback(() => {
            l.Z.dismissPublishBump(n), (0, c.Z)(t, n);
        }, [t, n]),
        h = i.useCallback(() => {
            l.Z.dismissPublishBump(n);
        }, [n]),
        m = i.useCallback(() => {
            l.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return _
        ? (0, r.jsxs)("div", {
              className: f.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: f.bumpBox,
                      children: [
                          (0, r.jsx)(s.MqZ, {
                              size: "xs",
                              color: "currentColor",
                              className: f.icon,
                          }),
                          (0, r.jsx)(s.X6q, {
                              variant: "heading-sm/normal",
                              className: f.tagline,
                              children: d.intl.string(d.t.hasZoa),
                          }),
                          (0, r.jsx)(a.zx, {
                              color: a.zx.Colors.LINK,
                              look: a.zx.Looks.LINK,
                              size: a.zx.Sizes.MIN,
                              className: f.publish,
                              onClick: p,
                              children: d.intl.string(d.t["MFGE5+"]),
                          }),
                          (0, r.jsx)(s.P3F, {
                              onClick: h,
                              children: (0, r.jsx)(s.k$p, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: f.closeIcon,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(s.Text, {
                      color: "text-muted",
                      className: f.hidePermanently,
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(s.P3F, {
                          onClick: m,
                          children: d.intl.string(d.t.efSkDg),
                      }),
                  }),
              ],
          })
        : null;
};
