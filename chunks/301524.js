n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(195043),
    o = n(628965),
    c = n(100406),
    d = n(878460),
    u = n(431144),
    _ = n(531525),
    p = n(985018);

function m(e) {
    let { label: t, onChange: n, enabled: i, subLabel: l } = e;
    return (0, r.jsx)(s.dOG, {
        label: t,
        checked: !!i,
        onChange: n,
        description: l,
    });
}

function g() {
    let e = (0, l.bG)([o.A], () => o.A.getSubsection()),
        t = i.useRef(null),
        { categories: n, initialized: g } = (0, l.cf)([d.A], () => d.A.getEmailSettings());
    i.useEffect(() => {
        if (null == g) (0, c.cR)();
        else if (e === u.oh.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [g, t, e]);
    let A = u.Zk.reduce((e, t) => e || !!n[t], !1),
        f = {
            [u.HO.COMMUNICATION]: _.H.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [u.HO.SOCIAL]: _.H.NOTIFICATIONS_EMAILS_SOCIAL,
            [u.HO.UPDATES_AND_ANNOUNCEMENTS]: _.H.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [u.HO.TIPS]: _.H.NOTIFICATIONS_EMAILS_TIPS,
            [u.HO.RECOMMENDATIONS_AND_EVENTS]: _.H.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS,
        };
    return g
        ? (0, r.jsxs)(a.x, {
              setting: _.H.NOTIFICATIONS_EMAILS,
              children: [
                  (0, r.jsx)("div", {
                      ref: t,
                  }),
                  (0, r.jsxs)(s.nVY, {
                      label: p.intl.string(p.t.TPchzM),
                      children: [
                          u.px.map((e) => {
                              let { category: t, label: i, subLabel: l } = e,
                                  s = f[t],
                                  o = (0, r.jsx)(
                                      m,
                                      {
                                          label: i(),
                                          subLabel: l(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              (0, c.CA)(t, e);
                                          },
                                      },
                                      i(),
                                  );
                              return null != s
                                  ? (0, r.jsx)(
                                        a.x,
                                        {
                                            setting: s,
                                            children: o,
                                        },
                                        i(),
                                    )
                                  : o;
                          }),
                          (0, r.jsxs)(a.x, {
                              setting: _.H.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, r.jsx)(s.QWc, {
                                      disabled: !A,
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
