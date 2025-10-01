n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(921801),
    d = n(663389),
    f = n(960412),
    _ = n(151662),
    p = n(930441),
    h = n(726985),
    m = n(388032),
    g = n(214973),
    E = n(10198);
function b(e) {
    let { label: t, onChange: n, enabled: i, subLabel: a } = e;
    return (0, r.jsx)(c.j7V, {
        value: !!i,
        onChange: n,
        note: a,
        children: t,
    });
}
function y() {
    let e = (0, s.e7)([d.Z], () => d.Z.getSubsection()),
        t = i.useRef(null),
        { categories: n, initialized: a } = (0, s.cj)([_.Z], () => _.Z.getEmailSettings());
    i.useEffect(() => {
        if (null == a) (0, f.Y7)();
        else if (e === p.vG.toUpperCase()) {
            var n;
            null == t || null == (n = t.current) || n.scrollIntoView(!0);
        }
    }, [a, t, e]);
    let y = p.M0.reduce((e, t) => e || !!n[t], !1);
    function O(e, t) {
        (0, f.pR)(e, t);
    }
    let v = {
        [p.$Z.COMMUNICATION]: h.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
        [p.$Z.SOCIAL]: h.s6.NOTIFICATIONS_EMAILS_SOCIAL,
        [p.$Z.UPDATES_AND_ANNOUNCEMENTS]: h.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
        [p.$Z.TIPS]: h.s6.NOTIFICATIONS_EMAILS_TIPS,
        [p.$Z.RECOMMENDATIONS_AND_EVENTS]: h.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS,
    };
    return a
        ? (0, r.jsxs)(u.F, {
              setting: h.s6.NOTIFICATIONS_EMAILS,
              children: [
                  (0, r.jsx)("div", { ref: t }),
                  (0, r.jsxs)(c.hjN, {
                      className: E.marginTop40,
                      tag: c.RB0.H1,
                      title: m.intl.string(m.t.TPchzM),
                      children: [
                          p.Od.map((e) => {
                              let { category: t, label: i, subLabel: a } = e,
                                  o = v[t],
                                  s = (0, r.jsx)(
                                      b,
                                      {
                                          label: i(),
                                          subLabel: a(),
                                          enabled: n[t],
                                          onChange: (e) => O(t, e),
                                      },
                                      i(),
                                  );
                              return null != o
                                  ? (0, r.jsx)(
                                        u.F,
                                        {
                                            setting: o,
                                            children: s,
                                        },
                                        i(),
                                    )
                                  : s;
                          }),
                          (0, r.jsxs)(u.F, {
                              setting: h.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
                              children: [
                                  (0, r.jsx)(l.zx, {
                                      className: g.marketingUnsubscribeButton,
                                      disabled: !y,
                                      look: l.iL.LINK,
                                      color: l.Tt.LINK,
                                      onClick: f.oc,
                                      children: m.intl.string(m.t.Ra9Pws),
                                  }),
                                  (0, r.jsx)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: m.intl.string(m.t.iYjQ8f),
                                  }),
                                  (0, r.jsx)(c.izJ, { className: o()(E.marginTop40, E.marginBottom40) }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
