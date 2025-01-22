n.d(t, {
    g: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(913527),
    l = n.n(r),
    a = n(692547),
    o = n(481060),
    s = n(788080),
    c = n(800530),
    u = n(388032),
    d = n(816762);
let m = (e) => l()().diff(l().unix(e), 'days');
function h(e) {
    let { classificationId: t } = e;
    return (0, i.jsx)(o.Anchor, {
        onClick: () => {
            (0, o.openModalLazy)(async () => {
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
        className: d.detailsButton,
        children: u.intl.string(u.t.QsqdXF)
    });
}
function f(e) {
    let { learnMoreLink: t } = e;
    return (0, i.jsx)(o.Anchor, {
        className: d.detailsButton,
        href: t,
        children: u.intl.string(u.t['8/GdRE'])
    });
}
function p(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: r } = e;
    switch (t) {
        case c.wo.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, i.jsx)(h, { classificationId: n });
        case c.wo.LEARN_MORE_LINK:
            if (null == r) return null;
            return (0, i.jsx)(f, { learnMoreLink: r });
        default:
            return null;
    }
}
function _(e) {
    let { iconType: t } = e,
        n = {
            default: (0, i.jsx)(o.AnnouncementsIcon, {
                size: 'xs',
                color: a.Z.colors.TEXT_LINK.css
            }),
            danger: (0, i.jsx)(o.WarningIcon, { color: a.Z.colors.STATUS_DANGER })
        };
    return null != t && t in n
        ? (0, i.jsx)('div', {
              className: d.icon,
              children: n[t]
          })
        : null;
}
function g(e) {
    let { children: t, theme: n } = e,
        r = {
            default: d.defaultFooterContainer,
            danger: d.dangerFooterContainer
        };
    return (0, i.jsx)('div', {
        className: r[null != n ? n : 'default'],
        children: t
    });
}
function E(e) {
    var t, n;
    if (null == e.embed || null == e.embed.fields) return null;
    let r = (0, s.fr)(e.embed);
    return null == r
        ? null
        : (0, i.jsxs)(o.Clickable, {
              className: d.safetyPolicyNoticeContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: d.noticeContent,
                      children: [
                          (0, i.jsxs)('div', {
                              className: d.headerRow,
                              children: [
                                  (0, i.jsx)(_, { iconType: r.icon }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/semibold',
                                      children: r.header
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: d.incidentTiming,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.intl.format(u.t.eevFb2, { daysAgo: m(null !== (n = r.timestamp) && void 0 !== n ? n : 0) })
                              })
                          }),
                          (0, i.jsx)('div', {
                              className: d.noticeBody,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: r.body
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(g, {
                      theme: r.theme,
                      children:
                          null === (t = r.ctas) || void 0 === t
                              ? void 0
                              : t.map((e) =>
                                    (0, i.jsx)(
                                        p,
                                        {
                                            ctaType: e,
                                            classificationId: r.classification_id,
                                            learnMoreLink: r.learn_more_link
                                        },
                                        e
                                    )
                                )
                  })
              ]
          });
}
