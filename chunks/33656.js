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
    g = n(930441),
    h = n(726985),
    x = n(388032),
    _ = n(774927),
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
        else if (e === g.vG.toUpperCase()) {
            var n;
            null == t || null === (n = t.current) || void 0 === n || n.scrollIntoView(!0);
        }
    }, [r, t, e]);
    let C = g.M0.reduce((e, t) => e || !!n[t], !1),
        f = {
            [g.$Z.COMMUNICATION]: h.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
            [g.$Z.SOCIAL]: h.s6.NOTIFICATIONS_EMAILS_SOCIAL,
            [g.$Z.UPDATES_AND_ANNOUNCEMENTS]: h.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
            [g.$Z.TIPS]: h.s6.NOTIFICATIONS_EMAILS_TIPS,
            [g.$Z.RECOMMENDATIONS_AND_EVENTS]: h.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
        };
    return r
        ? (0, i.jsxs)(c.F, {
              setting: h.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, i.jsx)('div', { ref: t }),
                  (0, i.jsxs)(o.hjN, {
                      className: l()(p.marginTop40),
                      tag: o.RB0.H1,
                      title: x.intl.string(x.t.TPchzM),
                      children: [
                          g.Od.map((e) => {
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
                              setting: h.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
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
                                  (0, i.jsx)(o.$i$, { className: l()(p.marginTop40, p.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
