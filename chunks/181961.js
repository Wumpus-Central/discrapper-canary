l.d(t, { A: () => v });
var n = l(627968);
l(64700);
var i = l(311907),
    s = l(834730),
    a = l(534514),
    r = l(825484),
    d = l(821609),
    o = l(123292),
    c = l(450510),
    u = l(421838),
    x = l(985018),
    h = l(419836),
    m = l(728749);
let g = () =>
    (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t.GcZzp2),
            }),
            (0, n.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t["/NEGrO"]),
            }),
            (0, n.jsx)(s.E, {
                color: "text-strong",
                variant: "text-xs/normal",
                className: h.ln,
                children: x.intl.string(x.t.eUbuHL),
            }),
            (0, n.jsx)(s.E, {
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
        : (0, n.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, n.jsxs)("div", {
                      className: h.Qs,
                      children: [
                          (0, n.jsxs)("div", {
                              className: h.FS,
                              children: [
                                  (0, n.jsx)(a.D, {
                                      variant: "heading-md/semibold",
                                      children: x.intl.string(x.t.Sx8Ezi),
                                  }),
                                  (0, n.jsx)(s.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      className: h.ij,
                                      children: x.intl.string(x.t.JUzPhm),
                                  }),
                                  (0, n.jsx)(s.E, {
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: x.intl.format(x.t.Vh7rP7, { suggestionsHook: g }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: h.Sl,
                              children: (0, n.jsx)("img", { src: m, alt: x.intl.string(x.t["uIm/n4"]) }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: h.qr,
                      children: (0, n.jsxs)(r.e, {
                          direction: "horizontal",
                          size: "sm",
                          children: [
                              (0, n.jsx)(d.$, { onClick: t, variant: "secondary", text: x.intl.string(x.t["X/3SyA"]) }),
                              (0, n.jsx)("div", {
                                  className: h.zt,
                                  children: (0, n.jsx)(o.Q, {
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
