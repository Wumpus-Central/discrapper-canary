n.d(t, { Z: () => j });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(921801),
    u = n(663389),
    m = n(960412),
    p = n(151662),
    g = n(930441),
    h = n(726985),
    f = n(388032),
    b = n(495288),
    x = n(20493);
function _(e) {
    let { label: t, onChange: n, enabled: r, subLabel: s } = e;
    return (0, i.jsx)(c.j7V, {
        value: !!r,
        onChange: n,
        note: s,
        children: t
    });
}
function j() {
    let e = (0, l.e7)([u.Z], () => u.Z.getSubsection()),
        t = r.useRef(null),
        { categories: n, initialized: s } = (0, l.cj)([p.Z], () => p.Z.getEmailSettings());
    r.useEffect(() => {
        if (null == s) (0, m.Y7)();
        else if (e === g.vG.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [s, t, e]);
    let j = g.M0.reduce((e, t) => e || !!n[t], !1),
        O = {
            [g.$Z.COMMUNICATION]: h.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [g.$Z.SOCIAL]: h.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [g.$Z.UPDATES_AND_ANNOUNCEMENTS]: h.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [g.$Z.TIPS]: h.s6.NOTIFICATIONS_EMAILS_TIPS,
            [g.$Z.RECOMMENDATIONS_AND_EVENTS]: h.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return s
        ? (0, i.jsxs)(d.F, {
              setting: h.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, i.jsx)('div', { ref: t }),
                  (0, i.jsxs)(c.hjN, {
                      className: x.marginTop40,
                      tag: c.RB0.H1,
                      title: f.intl.string(f.t.TPchzM),
                      children: [
                          g.Od.map((e) => {
                              let { category: t, label: r, subLabel: s } = e,
                                  a = O[t],
                                  l = (0, i.jsx)(
                                      _,
                                      {
                                          label: r(),
                                          subLabel: s(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              (0, m.pR)(t, e);
                                          }
                                      },
                                      r()
                                  );
                              return null != a
                                  ? (0, i.jsx)(
                                        d.F,
                                        {
                                            setting: a,
                                            children: l
                                        },
                                        r()
                                    )
                                  : l;
                          }),
                          (0, i.jsxs)(d.F, {
                              setting: h.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, i.jsx)(o.zx, {
                                      className: b.marketingUnsubscribeButton,
                                      disabled: !j,
                                      look: o.iL.LINK,
                                      color: o.Tt.LINK,
                                      onClick: m.oc,
                                      children: f.intl.string(f.t.Ra9Pws)
                                  }),
                                  (0, i.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: f.intl.string(f.t.iYjQ8f)
                                  }),
                                  (0, i.jsx)(c.$i$, { className: a()(x.marginTop40, x.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
