n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(663389),
    u = n(960412),
    m = n(151662),
    p = n(930441),
    g = n(726985),
    h = n(388032),
    f = n(495288),
    b = n(20493);
function _(e) {
    let { label: t, onChange: n, enabled: r, subLabel: s } = e;
    return (0, i.jsx)(o.j7V, {
        value: !!r,
        onChange: n,
        note: s,
        children: t
    });
}
function x() {
    let e = (0, a.e7)([d.Z], () => d.Z.getSubsection()),
        t = r.createRef(),
        { categories: n, initialized: s } = (0, a.cj)([m.Z], () => m.Z.getEmailSettings());
    r.useEffect(() => {
        if (null == s) (0, u.Y7)();
        else if (e === p.vG.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [s, t, e]);
    let x = p.M0.reduce((e, t) => e || !!n[t], !1),
        E = {
            [p.$Z.COMMUNICATION]: g.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [p.$Z.SOCIAL]: g.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [p.$Z.UPDATES_AND_ANNOUNCEMENTS]: g.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [p.$Z.TIPS]: g.s6.NOTIFICATIONS_EMAILS_TIPS,
            [p.$Z.RECOMMENDATIONS_AND_EVENTS]: g.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return s
        ? (0, i.jsxs)(c.F, {
              setting: g.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, i.jsx)('div', { ref: t }),
                  (0, i.jsxs)(o.hjN, {
                      className: b.marginTop40,
                      tag: o.RB0.H1,
                      title: h.intl.string(h.t.TPchzM),
                      children: [
                          p.Od.map((e) => {
                              let { category: t, label: r, subLabel: s } = e,
                                  l = E[t],
                                  a = (0, i.jsx)(
                                      _,
                                      {
                                          label: r(),
                                          subLabel: s(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              (0, u.pR)(t, e);
                                          }
                                      },
                                      r()
                                  );
                              return null != l
                                  ? (0, i.jsx)(
                                        c.F,
                                        {
                                            setting: l,
                                            children: a
                                        },
                                        r()
                                    )
                                  : a;
                          }),
                          (0, i.jsxs)(c.F, {
                              setting: g.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, i.jsx)(o.zxk, {
                                      className: f.marketingUnsubscribeButton,
                                      disabled: !x,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.LINK,
                                      onClick: u.oc,
                                      children: h.intl.string(h.t.Ra9Pws)
                                  }),
                                  (0, i.jsx)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: h.intl.string(h.t.iYjQ8f)
                                  }),
                                  (0, i.jsx)(o.$i$, { className: l()(b.marginTop40, b.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
