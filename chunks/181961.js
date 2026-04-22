n.d(t, { A: () => v });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(834730),
    r = n(534514),
    a = n(825484),
    d = n(821609),
    o = n(123292),
    c = n(450510),
    u = n(421838),
    x = n(985018),
    h = n(419836),
    m = n(728749);
let g = () =>
    (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t.GcZzp2),
            }),
            (0, l.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t["/NEGrO"]),
            }),
            (0, l.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t.eUbuHL),
            }),
            (0, l.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t.sCAZeI),
            }),
        ],
    });
function v(e) {
    let { onClick: t } = e;
    return (0, i.bG)([c.HP], () => !c.HP.hasHotspot(c._2.STAGE_CHANNEL_UPSELL))
        ? null
        : (0, l.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: h.Qs,
                      children: [
                          (0, l.jsxs)("div", {
                              className: h.FS,
                              children: [
                                  (0, l.jsx)(r.D, {
                                      variant: "heading-md/semibold",
                                      children: x.intl.string(x.t.Sx8Ezi),
                                  }),
                                  (0, l.jsx)(s.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: h.ij,
                                      children: x.intl.string(x.t.JUzPhm),
                                  }),
                                  (0, l.jsx)(s.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: x.intl.format(x.t.Vh7rP7, { suggestionsHook: g }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: h.Sl,
                              children: (0, l.jsx)("img", { src: m, alt: x.intl.string(x.t["uIm/n4"]) }),
                          }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: h.qr,
                      children: (0, l.jsxs)(a.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, l.jsx)(d.$, { onClick: t, variant: "secondary", text: x.intl.string(x.t["X/3SyA"]) }),
                              (0, l.jsx)("div", {
                                  className: h.zt,
                                  children: (0, l.jsx)(o.Q, {
                                      onClick: () => {
                                          u.sF(c._2.STAGE_CHANNEL_UPSELL);
                                      },
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: x.intl.string(x.t["5E9SB9"]),
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
