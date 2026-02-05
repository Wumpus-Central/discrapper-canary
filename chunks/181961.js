n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(450510),
    r = n(421838),
    d = n(985018),
    c = n(435493),
    o = n(728749);
let u = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: d.intl.string(d.t.GcZzp2),
            }),
            (0, l.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: d.intl.string(d.t["/NEGrO"]),
            }),
            (0, l.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: d.intl.string(d.t.eUbuHL),
            }),
            (0, l.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: c.ln,
                children: d.intl.string(d.t.sCAZeI),
            }),
        ],
    });
function x(e) {
    let { onClick: t } = e;
    return (0, i.bG)([a.HP], () => !a.HP.hasHotspot(a._2.STAGE_CHANNEL_UPSELL))
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
                                  (0, l.jsx)(s.Heading, {
                                      variant: "heading-md/semibold",
                                      children: d.intl.string(d.t.Sx8Ezi),
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: c.ij,
                                      children: d.intl.string(d.t.JUzPhm),
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: d.intl.format(d.t.Vh7rP7, { suggestionsHook: u }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: c.Sl,
                              children: (0, l.jsx)("img", { src: o, alt: d.intl.string(d.t["uIm/n4"]) }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: c.qr,
                      children: (0, l.jsxs)(s.ButtonGroup, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, l.jsx)(s.Button, {
                                  onClick: t,
                                  variant: "secondary",
                                  text: d.intl.string(d.t["X/3SyA"]),
                              }),
                              (0, l.jsx)("div", {
                                  className: c.zt,
                                  children: (0, l.jsx)(s.QWc, {
                                      onClick: () => {
                                          r.sF(a._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: d.intl.string(d.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
