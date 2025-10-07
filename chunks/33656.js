n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(921801),
    c = n(663389),
    u = n(960412),
    d = n(151662),
    f = n(930441),
    _ = n(726985),
    p = n(388032),
    h = n(882238);
function m(e) {
    let { label: t, onChange: n, enabled: i, subLabel: a } = e;
    return (0, r.jsx)(s.rsf, {
        label: t,
        checked: !!i,
        onChange: n,
        description: a,
    });
}
function g() {
    let e = (0, a.e7)([c.Z], () => c.Z.getSubsection()),
        t = i.useRef(null),
        { categories: n, initialized: g } = (0, a.cj)([d.Z], () => d.Z.getEmailSettings());
    i.useEffect(() => {
        if (null == g) (0, u.Y7)();
        else if (e === f.vG.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [g, t, e]);
    let E = f.M0.reduce((e, t) => e || !!n[t], !1);
    function b(e, t) {
        (0, u.pR)(e, t);
    }
    let y = {
        [f.$Z.COMMUNICATION]: _.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
        [f.$Z.SOCIAL]: _.s6.NOTIFICATIONS_EMAILS_SOCIAL,
        [f.$Z.UPDATES_AND_ANNOUNCEMENTS]: _.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
        [f.$Z.TIPS]: _.s6.NOTIFICATIONS_EMAILS_TIPS,
        [f.$Z.RECOMMENDATIONS_AND_EVENTS]: _.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS,
    };
    return g
        ? (0, r.jsxs)(l.F, {
              setting: _.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, r.jsx)("div", { ref: t }),
                  (0, r.jsxs)(s.C3N, {
                      label: p.intl.string(p.t.TPchzM),
                      children: [
                          f.Od.map((e) => {
                              let { category: t, label: i, subLabel: a } = e,
                                  o = y[t],
                                  s = (0, r.jsx)(
                                      m,
                                      {
                                          label: i(),
                                          subLabel: a(),
                                          enabled: n[t],
                                          onChange: (e) => b(t, e),
                                      },
                                      i(),
                                  );
                              return null != o
                                  ? (0, r.jsx)(
                                        l.F,
                                        {
                                            setting: o,
                                            children: s,
                                        },
                                        i(),
                                    )
                                  : s;
                          }),
                          (0, r.jsxs)(l.F, {
                              setting: _.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, r.jsx)(o.zx, {
                                      className: h.marketingUnsubscribeButton,
                                      disabled: !E,
                                      look: o.iL.LINK,
                                      color: o.Tt.LINK,
                                      onClick: u.oc,
                                      children: p.intl.string(p.t.Ra9Pws),
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children: p.intl.string(p.t.iYjQ8f),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
