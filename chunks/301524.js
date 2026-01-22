n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(195043),
    l = n(628965),
    c = n(100406),
    u = n(878460),
    d = n(431144),
    f = n(531525),
    p = n(985018);
function _(e) {
    let { label: t, onChange: n, enabled: i, subLabel: a } = e;
    return (0, r.jsx)(s.dOG, {
        label: t,
        checked: !!i,
        onChange: n,
        description: a,
    });
}
function h() {
    let e = (0, a.bG)([l.A], () => l.A.getSubsection()),
        t = i.useRef(null),
        { categories: n, initialized: h } = (0, a.cf)([u.A], () => u.A.getEmailSettings());
    i.useEffect(() => {
        if (null == h) (0, c.cR)();
        else if (e === d.oh.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [h, t, e]);
    let m = d.Zk.reduce((e, t) => e || !!n[t], !1);
    function g(e, t) {
        (0, c.CA)(e, t);
    }
    let E = {
        [d.HO.COMMUNICATION]: f.H.NOTIFICATIONS_EMAILS_COMMUNICATION,
        [d.HO.SOCIAL]: f.H.NOTIFICATIONS_EMAILS_SOCIAL,
        [d.HO.UPDATES_AND_ANNOUNCEMENTS]: f.H.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
        [d.HO.TIPS]: f.H.NOTIFICATIONS_EMAILS_TIPS,
        [d.HO.RECOMMENDATIONS_AND_EVENTS]: f.H.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS,
    };
    return h
        ? (0, r.jsxs)(o.x, {
              setting: f.H.NOTIFICATIONS_EMAILS,
              children: [
                  (0, r.jsx)("div", { ref: t }),
                  (0, r.jsxs)(s.nVY, {
                      label: p.intl.string(p.t.TPchzM),
                      children: [
                          d.px.map((e) => {
                              let { category: t, label: i, subLabel: a } = e,
                                  s = E[t],
                                  l = (0, r.jsx)(
                                      _,
                                      {
                                          label: i(),
                                          subLabel: a(),
                                          enabled: n[t],
                                          onChange: (e) => g(t, e),
                                      },
                                      i(),
                                  );
                              return null != s
                                  ? (0, r.jsx)(
                                        o.x,
                                        {
                                            setting: s,
                                            children: l,
                                        },
                                        i(),
                                    )
                                  : l;
                          }),
                          (0, r.jsxs)(o.x, {
                              setting: f.H.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, r.jsx)(s.QWc, {
                                      disabled: !m,
                                      text: p.intl.string(p.t.Ra9Pwk),
                                      onClick: c.NI,
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      children: p.intl.string(p.t.iYjQ8X),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
