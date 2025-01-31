n.d(t, { g: () => x });
var i = n(200651);
n(192379);
var l = n(913527),
    a = n.n(l),
    r = n(692547),
    s = n(481060),
    o = n(788080),
    c = n(800530),
    d = n(388032),
    u = n(816762);
let m = (e) => a()().diff(a().unix(e), 'days');
function h(e) {
    let { classificationId: t } = e;
    return (0, i.jsx)(s.eee, {
        onClick: () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('11414')]).then(n.bind(n, 41164));
                return (n) =>
                    (0, i.jsx)(e, {
                        classificationId: t,
                        source: c.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose
                    });
            });
        },
        className: u.detailsButton,
        children: d.intl.string(d.t.QsqdXF)
    });
}
function _(e) {
    let { learnMoreLink: t } = e;
    return (0, i.jsx)(s.eee, {
        className: u.detailsButton,
        href: t,
        children: d.intl.string(d.t['8/GdRE'])
    });
}
function p(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: l } = e;
    switch (t) {
        case c.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, i.jsx)(h, { classificationId: n });
        case c.wo.LEARN_MORE_LINK:
            if (null == l) return null;
            return (0, i.jsx)(_, { learnMoreLink: l });
        default:
            return null;
    }
}
function g(e) {
    let { iconType: t } = e,
        n = {
            default: (0, i.jsx)(s.MqZ, {
                size: 'xs',
                color: r.Z.colors.TEXT_LINK.css
            }),
            danger: (0, i.jsx)(s.aNP, { color: r.Z.colors.STATUS_DANGER })
        };
    return null != t && t in n
        ? (0, i.jsx)('div', {
              className: u.icon,
              children: n[t]
          })
        : null;
}
function f(e) {
    let { children: t, theme: n } = e,
        l = {
            default: u.defaultFooterContainer,
            danger: u.dangerFooterContainer
        };
    return (0, i.jsx)('div', {
        className: l[null != n ? n : 'default'],
        children: t
    });
}
function x(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let l = (0, o.fr)(e.embed);
    return null == l
        ? null
        : (0, i.jsxs)(s.P3F, {
              className: u.safetyPolicyNoticeContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: u.noticeContent,
                      children: [
                          (0, i.jsxs)('div', {
                              className: u.headerRow,
                              children: [
                                  (0, i.jsx)(g, { iconType: l.icon }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/semibold',
                                      children: l.header
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: u.incidentTiming,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.intl.format(d.t.eevFb2, { daysAgo: m(null !== (n = l.timestamp) && void 0 !== n ? n : 0) })
                              })
                          }),
                          (0, i.jsx)('div', {
                              className: u.noticeBody,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: l.body
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(f, {
                      theme: l.theme,
                      children:
                          null === (t = l.ctas) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                    (0, i.jsx)(
                                        p,
                                        {
                                            ctaType: e,
                                            classificationId: l.classification_id,
                                            learnMoreLink: l.learn_more_link
                                        },
                                        e
                                    )
                                )
                  })
              ]
          });
}
