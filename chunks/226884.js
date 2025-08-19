n.d(t, { Z: () => s });
var a = n(951288),
    l = n(442837),
    r = n(481060),
    i = n(37234),
    o = n(594174),
    c = n(981631);
function s() {
    return (0, l.e7)([o.default], () => {
        var e;
        return (null == (e = o.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0;
    })
        ? (0, a.jsx)(
              r.kSQ,
              {
                  children: (0, a.jsx)(r.sNh, {
                      id: "mana-playground",
                      label: "Mana Playground",
                      action: () => {
                          (0, i.jN)(c.S9g.MANA_PLAYGROUND);
                      },
                  }),
              },
              "design-systems",
          )
        : null;
}
