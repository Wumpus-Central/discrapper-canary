n.d(t, { g: () => b });
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    o = n(692547),
    l = n(481060),
    s = n(788080),
    c = n(800530),
    d = n(388032),
    u = n(6249);
let p = (e) => a()().diff(a().unix(e), 'days');
function m(e) {
    let { classificationId: t } = e;
    return (0, r.jsx)(l.eee, {
        onClick: () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('65396')]).then(n.bind(n, 41164));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose
                    });
            });
        },
        className: u.detailsButton,
        children: d.NW.string(d.t.QsqdXF)
    });
}
function f(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(l.eee, {
        className: u.detailsButton,
        href: t,
        children: d.NW.string(d.t['8/GdRE'])
    });
}
function h(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case c.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, r.jsx)(m, { classificationId: n });
        case c.wo.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, r.jsx)(f, { learnMoreLink: i });
        default:
            return null;
    }
}
function g(e) {
    let { iconType: t } = e,
        n = {
            default: (0, r.jsx)(l.MqZ, {
                size: 'xs',
                color: o.Z.colors.TEXT_LINK.css
            }),
            danger: (0, r.jsx)(l.aNP, { color: o.Z.colors.STATUS_DANGER })
        };
    return null != t && t in n
        ? (0, r.jsx)('div', {
              className: u.icon,
              children: n[t]
          })
        : null;
}
function _(e) {
    let { children: t, theme: n } = e,
        i = {
            default: u.defaultFooterContainer,
            danger: u.dangerFooterContainer
        };
    return (0, r.jsx)('div', {
        className: i[null != n ? n : 'default'],
        children: t
    });
}
function b(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let i = (0, s.fr)(e.embed);
    return null == i
        ? null
        : (0, r.jsxs)(l.P3F, {
              className: u.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: u.noticeContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: u.headerRow,
                              children: [
                                  (0, r.jsx)(g, { iconType: i.icon }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-md/semibold',
                                      children: i.header
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: u.incidentTiming,
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-xs/medium',
                                  children: d.NW.format(d.t.eevFb2, { daysAgo: p(null !== (n = i.timestamp) && void 0 !== n ? n : 0) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: u.noticeBody,
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: i.body
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(_, {
                      theme: i.theme,
                      children:
                          null === (t = i.ctas) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                    (0, r.jsx)(
                                        h,
                                        {
                                            ctaType: e,
                                            classificationId: i.classification_id,
                                            learnMoreLink: i.learn_more_link
                                        },
                                        e
                                    )
                                )
                  })
              ]
          });
}
