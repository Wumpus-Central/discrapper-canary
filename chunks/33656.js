n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(724458);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(663389),
    u = n(960412),
    m = n(151662),
    g = n(930441),
    h = n(726985),
    p = n(388032),
    x = n(774927),
    f = n(232186);
function _(e) {
    let { label: t, onChange: n, enabled: s, subLabel: r } = e;
    return (0, i.jsx)(o.FormSwitch, {
        value: !!s,
        onChange: n,
        note: r,
        children: t
    });
}
function E() {
    let e = (0, l.e7)([d.Z], () => d.Z.getSubsection()),
        t = s.createRef(),
        { categories: n, initialized: r } = (0, l.cj)([m.Z], () => m.Z.getEmailSettings());
    s.useEffect(() => {
        if (null == r) (0, u.Y7)();
        else if (e === g.vG.toUpperCase()) {
            var n;
            null == t || null === (n = t.current) || void 0 === n || n.scrollIntoView(!0);
        }
    }, [r, t, e]);
    let E = g.M0.reduce((e, t) => e || !!n[t], !1),
        C = {
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
                  (0, i.jsxs)(o.FormSection, {
                      className: a()(f.marginTop40),
                      tag: o.FormTitleTags.H1,
                      title: p.intl.string(p.t.TPchzM),
                      children: [
                          g.Od.map((e) => {
                              let { category: t, label: s, subLabel: r } = e,
                                  a = C[t],
                                  l = (0, i.jsx)(
                                      _,
                                      {
                                          label: s(),
                                          subLabel: r(),
                                          enabled: n[t],
                                          onChange: (e) => {
                                              var n, i;
                                              return (n = t), (i = e), void (0, u.pR)(n, i);
                                          }
                                      },
                                      s()
                                  );
                              return null != a
                                  ? (0, i.jsx)(
                                        c.F,
                                        {
                                            setting: a,
                                            children: l
                                        },
                                        s()
                                    )
                                  : l;
                          }),
                          (0, i.jsxs)(c.F, {
                              setting: h.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, i.jsx)(o.Button, {
                                      className: x.marketingUnsubscribeButton,
                                      disabled: !E,
                                      look: o.ButtonLooks.LINK,
                                      color: o.ButtonColors.LINK,
                                      onClick: u.oc,
                                      children: p.intl.string(p.t.Ra9Pws)
                                  }),
                                  (0, i.jsx)(o.FormText, {
                                      type: o.FormTextTypes.DESCRIPTION,
                                      children: p.intl.string(p.t.iYjQ8f)
                                  }),
                                  (0, i.jsx)(o.FormDivider, { className: a()(f.marginTop40, f.marginBottom40) })
                              ]
                          })
                      ]
                  })
              ]
          })
        : null;
}
