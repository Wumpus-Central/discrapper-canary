n.d(t, { Z: () => c });
var r = n(951288),
    i = n(442837),
    l = n(481060),
    a = n(37234),
    s = n(594174),
    o = n(981631);
function c() {
    return (0, i.e7)([s.default], () => {
        var e, t;
        return (
            (null == (e = s.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0 ||
            (null == (t = s.default.getCurrentUser()) ? void 0 : t.isStaffPersonal()) === !0
        );
    })
        ? (0, r.jsx)(
              l.sNh,
              {
                  id: "playgrounds",
                  label: "Playgrounds",
                  action: () => {
                      (0, a.jN)(o.S9g.MANA_PLAYGROUND);
                  },
                  children: (0, r.jsxs)(
                      l.kSQ,
                      {
                          children: [
                              (0, r.jsx)(l.sNh, {
                                  id: "mana-playground",
                                  label: "Mana Playground",
                                  action: () => {
                                      (0, a.jN)(o.S9g.MANA_PLAYGROUND);
                                  },
                              }),
                              (0, r.jsx)(l.sNh, {
                                  id: "revenue-playground",
                                  label: "Revenue Playground",
                                  action: () => {
                                      (0, a.jN)(o.S9g.REVENUE_PLAYGROUND);
                                  },
                              }),
                          ],
                      },
                      "design-systems",
                  ),
              },
              "playgrounds",
          )
        : null;
}
