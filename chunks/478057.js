n.d(t, { Z: () => c });
var r = n(951288),
    i = n(442837),
    l = n(481060),
    a = n(37234),
    o = n(594174),
    s = n(981631);
function c() {
    return (0, i.e7)([o.default], () => {
        var e, t;
        return (
            (null == (e = o.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0 ||
            (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaffPersonal()) === !0
        );
    })
        ? (0, r.jsx)(
              l.sNh,
              {
                  id: "playgrounds",
                  label: "Playgrounds",
                  action: () => {
                      (0, a.jN)(s.S9g.MANA_PLAYGROUND);
                  },
                  children: (0, r.jsx)(
                      l.kSQ,
                      {
                          children: (0, r.jsx)(l.sNh, {
                              id: "mana-playground",
                              label: "Mana Playground",
                              action: () => {
                                  (0, a.jN)(s.S9g.MANA_PLAYGROUND);
                              },
                          }),
                      },
                      "design-systems",
                  ),
              },
              "playgrounds",
          )
        : null;
}
