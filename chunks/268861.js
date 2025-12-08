n.d(t, { Z: () => d }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(704215),
    o = n(481060),
    a = n(243778),
    s = n(921944),
    u = n(388032),
    c = n(303010);
function d(e) {
    let { locked: t } = e,
        [n, d] = (0, a.US)(t ? [] : [l.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === l.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
            return () => {
                n === l.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && d(s.L.AUTO_DISMISS);
            };
    }, [t, d, n]),
    t || n !== l.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX)
        ? null
        : (0, i.jsx)("div", {
              className: c.overlayBackgroundNux,
              children: (0, i.jsxs)("div", {
                  className: c.mainContainer,
                  children: [
                      (0, i.jsxs)("div", {
                          className: c.mainTitleContainer,
                          children: [
                              (0, i.jsx)(o.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: u.intl.string(u.t.jzjJQg),
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: u.intl.string(u.t["5dOfxb"]),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: c.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.qjv, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Dkj, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Odl, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: c.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.KY1, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: u.intl.string(u.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
