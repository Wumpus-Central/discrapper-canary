var i = t(477900);
t(582128);
var r = t(307301),
    s = t(834730),
    l = t(866665),
    o = t(939249),
    a = t(972748);
t.d(
    n,
    {},
    {
        d: function (e) {
            let { text: n, tooltipText: t, onClick: c, disabled: d } = e;
            return d
                ? (0, i.jsxs)("div", {
                      className: a.k,
                      children: [
                          (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: a.K }),
                          (0, i.jsx)(s.E, {
                              color: "interactive-text-active",
                              variant: "body-md/semibold",
                              children: n,
                          }),
                      ],
                  })
                : (0, i.jsx)(l.m, {
                      text: t,
                      shouldShow: null != t,
                      children: (0, i.jsxs)(o.D, {
                          className: a.k,
                          onClick: c,
                          children: [
                              (0, i.jsx)(r.j, { size: "md", color: "currentColor", className: a.K }),
                              (0, i.jsx)(s.E, {
                                  color: "interactive-text-active",
                                  variant: "body-md/semibold",
                                  children: n,
                              }),
                          ],
                      }),
                  });
        },
    },
);
