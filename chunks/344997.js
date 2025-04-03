n.d(t, { g: () => b });
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    l = n(692547),
    o = n(481060),
    s = n(788080),
    c = n(800530),
    u = n(388032),
    d = n(94740);
let p = (e) => a()().diff(a().unix(e), 'days');
function m(e) {
    let { classificationId: t } = e;
    return (0, r.jsx)(o.eee, {
        onClick: () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('3940'), n.e('25183'), n.e('18831'), n.e('68464')]).then(n.bind(n, 41164));
                return (n) =>
                    (0, r.jsx)(e, {
                        classificationId: t,
                        source: c.s.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose
                    });
            });
        },
        className: d.detailsButton,
        children: u.NW.string(u.t.QsqdXF)
    });
}
function f(e) {
    let { learnMoreLink: t } = e;
    return (0, r.jsx)(o.eee, {
        className: d.detailsButton,
        href: t,
        children: u.NW.string(u.t['8/GdRE'])
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
            default: (0, r.jsx)(o.MqZ, {
                size: 'xs',
                color: l.Z.colors.TEXT_LINK.css
            }),
            danger: (0, r.jsx)(o.aNP, { color: l.Z.colors.STATUS_DANGER })
        };
    return null != t && t in n
        ? (0, r.jsx)('div', {
              className: d.icon,
              children: n[t]
          })
        : null;
}
function _(e) {
    let { children: t, theme: n } = e,
        i = {
            default: d.defaultFooterContainer,
            danger: d.dangerFooterContainer
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
        : (0, r.jsxs)(o.P3F, {
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: d.noticeContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.headerRow,
                              children: [
                                  (0, r.jsx)(g, { iconType: i.icon }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      children: i.header
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.NW.format(u.t.eevFb2, { daysAgo: p(null != (n = i.timestamp) ? n : 0) })
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, r.jsx)(o.Text, {
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
                          null == (t = i.ctas)
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
