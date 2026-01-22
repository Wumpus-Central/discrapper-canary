n.d(t, {
    A: () => g,
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    s = n(450510),
    a = n(421838),
    o = n(985018),
    c = n(435493),
    u = n(728749);
let d = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: o.intl.string(o.t.GcZzp2),
            }),
            (0, l.jsx)(i.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: o.intl.string(o.t["/NEGrO"]),
            }),
            (0, l.jsx)(i.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: o.intl.string(o.t.eUbuHL),
            }),
            (0, l.jsx)(i.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: o.intl.string(o.t.sCAZeI),
            }),
        ],
    });

function g(e) {
    let { onClick: t } = e;
    return (0, r.bG)([s.HP], () => !s.HP.hasHotspot(s._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, l.jsxs)("div", {
              className: c.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: c.Qs,
                      children: [
                          (0, l.jsxs)("div", {
                              className: c.FS,
                              children: [
                                  (0, l.jsx)(i.Heading, {
                                      variant: "heading-md/semibold",
                                      children: o.intl.string(o.t.Sx8Ezi),
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: c.ij,
                                      children: o.intl.string(o.t.JUzPhm),
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: o.intl.format(o.t.Vh7rP7, {
                                          suggestionsHook: d,
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: c.Sl,
                              children: (0, l.jsx)("img", {
                                  src: u,
                                  alt: o.intl.string(o.t["uIm/n4"]),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: c.qr,
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
                                  className: c.zt,
                                  children: (0, l.jsx)(i.QWc, {
                                      onClick: () => {
                                          a.sF(s._2.STAGE_CHANNEL_UPSELL);
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
