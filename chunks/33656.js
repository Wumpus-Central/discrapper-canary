n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(921801),
    l = n(663389),
    c = n(960412),
    u = n(151662),
    d = n(930441),
    f = n(726985),
    _ = n(388032);
function p(e) {
    let { label: t, onChange: n, enabled: i, subLabel: a } = e;
    return (0, r.jsx)(o.rsf, {
        label: t,
        checked: !!i,
        onChange: n,
        description: a,
    });
}
function h() {
    let e = (0, a.e7)([l.Z], () => l.Z.getSubsection()),
        t = i.useRef(null),
        { categories: n, initialized: h } = (0, a.cj)([u.Z], () => u.Z.getEmailSettings());
    i.useEffect(() => {
        if (null == h) (0, c.Y7)();
        else if (e === d.vG.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [h, t, e]);
    let m = d.M0.reduce((e, t) => e || !!n[t], !1);
    function g(e, t) {
        (0, c.pR)(e, t);
    }
    let E = {
        [d.$Z.COMMUNICATION]: f.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
        [d.$Z.SOCIAL]: f.s6.NOTIFICATIONS_EMAILS_SOCIAL,
        [d.$Z.UPDATES_AND_ANNOUNCEMENTS]: f.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
        [d.$Z.TIPS]: f.s6.NOTIFICATIONS_EMAILS_TIPS,
        [d.$Z.RECOMMENDATIONS_AND_EVENTS]: f.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS,
    };
    return h
        ? (0, r.jsxs)(s.F, {
              setting: f.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, r.jsx)("div", { ref: t }),
                  (0, r.jsxs)(o.C3N, {
                      label: _.intl.string(_.t.TPchzM),
                      children: [
                          d.Od.map((e) => {
                              let { category: t, label: i, subLabel: a } = e,
                                  o = E[t],
                                  l = (0, r.jsx)(
                                      p,
                                      {
                                          label: i(),
                                          subLabel: a(),
                                          enabled: n[t],
                                          onChange: (e) => g(t, e),
                                      },
                                      i(),
                                  );
                              return null != o
                                  ? (0, r.jsx)(
                                        s.F,
                                        {
                                            setting: o,
                                            children: l,
                                        },
                                        i(),
                                    )
                                  : l;
                          }),
                          (0, r.jsxs)(s.F, {
                              setting: f.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, r.jsx)(o.Avr, {
                                      disabled: !m,
                                      text: _.intl.string(_.t.Ra9Pwk),
                                      onClick: c.oc,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: _.intl.string(_.t.iYjQ8X),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
