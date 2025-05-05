n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    l = n(780384),
    s = n(481060),
    o = n(794295),
    c = n(410030),
    d = n(726542),
    u = n(881294),
    p = n(388032),
    m = n(845958);
function h(e) {
    var t, n;
    let { application: i, className: l, innerClassName: o } = e,
        c = null != (n = null == (t = i.directory_entry) ? void 0 : t.external_urls) ? n : [];
    return null != i.terms_of_service_url || null != i.privacy_policy_url || c.length > 0
        ? (0, r.jsxs)('div', {
              className: a()(m.container, l),
              children: [
                  (0, r.jsx)(s.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: p.intl.string(p.t.l6DP2t)
                  }),
                  (0, r.jsxs)('div', {
                      className: a()(m.list, o),
                      children: [
                          c.map((e, t) =>
                              (0, r.jsx)(
                                  g,
                                  {
                                      url: e.url,
                                      children: e.name
                                  },
                                  t
                              )
                          ),
                          null != i.terms_of_service_url
                              ? (0, r.jsx)(_, {
                                    icon: s.aAW,
                                    url: i.terms_of_service_url,
                                    children: p.intl.string(p.t.s7STcX)
                                })
                              : null,
                          null != i.privacy_policy_url
                              ? (0, r.jsx)(_, {
                                    icon: s.mBM,
                                    url: i.privacy_policy_url,
                                    children: p.intl.string(p.t.kH3JR0)
                                })
                              : null
                      ]
                  })
              ]
          })
        : null;
}
function g(e) {
    var t, n;
    let { url: i, children: a } = e,
        o = (0, c.ZP)(),
        u = d.Z.getByUrl(i),
        p = (0, l.wj)(o) ? (null == u || null == (t = u.icon) ? void 0 : t.darkSVG) : null == u || null == (n = u.icon) ? void 0 : n.lightSVG;
    return (0, r.jsx)(_, {
        icon: void 0 === p ? s.xPt : void 0,
        imageSrc: p,
        url: i,
        children: a
    });
}
function _(e) {
    let { icon: t, imageSrc: n, iconColor: i, url: l, children: c } = e,
        d = (0, u.nu)(),
        p = null;
    null != t
        ? (p = (0, r.jsx)(t, {
              className: m.listIcon,
              color: null != i ? i : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (p = (0, r.jsx)('img', {
              className: m.listImage,
              src: n,
              alt: ''
          }));
    let h = (0, r.jsxs)(r.Fragment, {
        children: [
            p,
            (0, r.jsx)(s.Text, {
                className: m.listText,
                variant: 'text-sm/medium',
                selectable: !0,
                children: c
            })
        ]
    });
    return (0, r.jsx)(o.Z, {
        href: l,
        className: a()(m.listItem, m.linkItem),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: h
    });
}
