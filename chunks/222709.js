n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(528963),
    l = n(212342),
    c = n(742828),
    u = n(388032),
    d = n(455106);
let f = (e) => {
    let { channelId: t, messageId: n } = e,
        f = (0, a.e7)([l.Z], () => l.Z.shouldShowBump(n), [n]),
        p = i.useCallback(() => {
            s.Z.dismissPublishBump(n), (0, c.Z)(t, n);
        }, [t, n]),
        _ = i.useCallback(() => {
            s.Z.dismissPublishBump(n);
        }, [n]),
        m = i.useCallback(() => {
            s.Z.permanentlyHidePublishBump(t);
        }, [t]);
    return f
        ? (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: d.bumpBox,
                      children: [
                          (0, r.jsx)(o.MqZ, {
                              size: "xs",
                              color: "currentColor",
                              className: d.icon,
                          }),
                          (0, r.jsx)(o.Heading, {
                              variant: "heading-sm/normal",
                              className: d.tagline,
                              children: u.intl.string(u.t.hasZoU),
                          }),
                          (0, r.jsx)(o.Text, {
                              color: "text-brand",
                              className: d.publish,
                              variant: "text-sm/normal",
                              children: (0, r.jsx)(o.P3F, {
                                  onClick: p,
                                  children: u.intl.string(u.t.MFGE51),
                              }),
                          }),
                          (0, r.jsx)(o.P3F, {
                              onClick: _,
                              children: (0, r.jsx)(o.k$p, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: d.closeIcon,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(o.Text, {
                      color: "text-muted",
                      className: d.hidePermanently,
                      variant: "text-sm/normal",
                      children: (0, r.jsx)(o.P3F, {
                          onClick: m,
                          children: u.intl.string(u.t.efSkDm),
                      }),
                  }),
              ],
          })
        : null;
};
