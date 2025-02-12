n.d(t, { Z: () => C }), n(724458);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(663389),
    u = n(960412),
    h = n(151662),
    m = n(930441),
    g = n(726985),
    x = n(388032),
    _ = n(563250),
    p = n(814632);
function E(e) {
    let { label: t, onChange: n, enabled: s, subLabel: l } = e;
    return (0, i.jsx)(o.j7V, {
        value: !!s,
        onChange: n,
        note: l,
        children: t
    });
}
function C() {
    let e = (0, a.e7)([d.Z], () => d.Z.getSubsection()),
        t = s.createRef(),
        { categories: n, initialized: l } = (0, a.cj)([h.Z], () => h.Z.getEmailSettings());
    s.useEffect(() => {
        if (null == l) (0, u.Y7)();
        else if (e === m.vG.toUpperCase()) {
            var n;
            null == t || null === (n = t.current) || void 0 === n || n.scrollIntoView(!0);
        }
    }, [l, t, e]);
    let C = m.M0.reduce((e, t) => e || !!n[t], !1),
        f = {
            [m.$Z.COMMUNICATION]: g.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [m.$Z.SOCIAL]: g.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [m.$Z.UPDATES_AND_ANNOUNCEMENTS]: g.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [m.$Z.TIPS]: g.s6.NOTIFICATIONS_EMAILS_TIPS,
            [m.$Z.RECOMMENDATIONS_AND_EVENTS]: g.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return l
        ? (0, i.jsxs)(c.F, {
              setting: g.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, i.jsx)('div', { ref: t }),
                  (0, i.jsxs)(o.hjN, {
                      className: r()(p.marginTop40),
                      tag: o.RB0.H1,
                      title: x.intl.string(x.t.TPchzM),
                      children: [
                          m.Od.map((e) => {
                              let { category: t, label: s, subLabel: l } = e,
                                  r = f[t],
                                  a = (0, i.jsx)(
                                      E,
                                      {
                                          label: s(),
                                          subLabel: l(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              (0, u.pR)(t, e);
                                          }
                                      },
                                      s()
                                  );
                              return null != r
                                  ? (0, i.jsx)(
                                        c.F,
                                        {
                                            setting: r,
                                            children: a
                                        },
                                        s()
                                    )
                                  : a;
                          }),
                          (0, i.jsxs)(c.F, {
                              setting: g.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, i.jsx)(o.zxk, {
                                      className: _.marketingUnsubscribeButton,
                                      disabled: !C,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.LINK,
                                      onClick: u.oc,
                                      children: x.intl.string(x.t.Ra9Pws)
                                  }),
                                  (0, i.jsx)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: x.intl.string(x.t.iYjQ8f)
                                  }),
                                  (0, i.jsx)(o.$i$, { className: r()(p.marginTop40, p.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
