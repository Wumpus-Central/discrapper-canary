n.d(t, { Z: () => g });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    a = n(536442),
    s = n(142497),
    o = n(388032),
    c = n(785281),
    u = n(137707);
let d = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-xs/normal",
                className: c.inlineText,
                children: o.intl.string(o.t.GcZzp2),
            }),
            (0, l.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-xs/normal",
                className: c.inlineText,
                children: o.intl.string(o.t["/NEGrO"]),
            }),
            (0, l.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-xs/normal",
                className: c.inlineText,
                children: o.intl.string(o.t.eUbuHL),
            }),
            (0, l.jsx)(i.Text, {
                color: "header-primary",
                variant: "text-xs/normal",
                className: c.inlineText,
                children: o.intl.string(o.t.sCAZeI),
            }),
        ],
    });
function g(e) {
    let { onClick: t } = e;
    return (0, r.e7)([a.qc], () => !a.qc.hasHotspot(a.v6.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, l.jsxs)("div", {
              className: c.container,
              children: [
                  (0, l.jsxs)("div", {
                      className: c.content,
                      children: [
                          (0, l.jsxs)("div", {
                              className: c.textContainer,
                              children: [
                                  (0, l.jsx)(i.Heading, {
                                      variant: "heading-md/semibold",
                                      children: o.intl.string(o.t.Sx8Ezi),
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: c.descriptionText,
                                      children: o.intl.string(o.t.JUzPhm),
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: o.intl.format(o.t.Vh7rP7, { suggestionsHook: d }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: c.image,
                              children: (0, l.jsx)("img", {
                                  src: u,
                                  alt: o.intl.string(o.t["uIm/n4"]),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: c.footer,
                      children: (0, l.jsxs)(i.ButtonGroup, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, l.jsx)(i.Button, {
                                  onClick: t,
                                  variant: "secondary",
                                  text: o.intl.string(o.t["X/3SyA"]),
                              }),
                              (0, l.jsx)("div", {
                                  className: c.textButtonWrapper,
                                  children: (0, l.jsx)(i.Avr, {
                                      onClick: () => {
                                          s.Kw(a.v6.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: o.intl.string(o.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
