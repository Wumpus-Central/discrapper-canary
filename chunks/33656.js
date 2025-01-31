n.d(t, { Z: () => C }), n(724458);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(663389),
    u = n(960412),
    m = n(151662),
    h = n(930441),
    g = n(726985),
    _ = n(388032),
    x = n(774927),
    p = n(232186);
function E(e) {
    let { label: t, onChange: n, enabled: s, subLabel: r } = e;
    return (0, i.jsx)(o.j7V, {
        value: !!s,
        onChange: n,
        note: r,
        children: t
    });
}
function C() {
    let e = (0, a.e7)([d.Z], () => d.Z.getSubsection()),
        t = s.createRef(),
        { categories: n, initialized: r } = (0, a.cj)([m.Z], () => m.Z.getEmailSettings());
    s.useEffect(() => {
        if (null == r) (0, u.Y7)();
        else if (e === h.vG.toUpperCase()) {
            var n;
            null == t || null === (n = t.current) || void 0 === n || n.scrollIntoView(!0);
        }
    }, [r, t, e]);
    let C = h.M0.reduce((e, t) => e || !!n[t], !1),
        f = {
            [h.$Z.COMMUNICATION]: g.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [h.$Z.SOCIAL]: g.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [h.$Z.UPDATES_AND_ANNOUNCEMENTS]: g.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [h.$Z.TIPS]: g.s6.NOTIFICATIONS_EMAILS_TIPS,
            [h.$Z.RECOMMENDATIONS_AND_EVENTS]: g.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return r
        ? (0, i.jsxs)(c.F, {
              setting: g.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, i.jsx)('div', { ref: t }),
                  (0, i.jsxs)(o.hjN, {
                      className: l()(p.marginTop40),
                      tag: o.RB0.H1,
                      title: _.intl.string(_.t.TPchzM),
                      children: [
                          h.Od.map((e) => {
                              let { category: t, label: s, subLabel: r } = e,
                                  l = f[t],
                                  a = (0, i.jsx)(
                                      E,
                                      {
                                          label: s(),
                                          subLabel: r(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              (0, u.pR)(t, e);
                                          }
                                      },
                                      s()
                                  );
                              return null != l
                                  ? (0, i.jsx)(
                                        c.F,
                                        {
                                            setting: l,
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
                                      className: x.marketingUnsubscribeButton,
                                      disabled: !C,
                                      look: o.iLD.LINK,
                                      color: o.Ttl.LINK,
                                      onClick: u.oc,
                                      children: _.intl.string(_.t.Ra9Pws)
                                  }),
                                  (0, i.jsx)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: _.intl.string(_.t.iYjQ8f)
                                  }),
                                  (0, i.jsx)(o.$i$, { className: l()(p.marginTop40, p.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
