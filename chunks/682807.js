n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(780384),
    s = n(481060),
    o = n(794295),
    c = n(410030),
    d = n(726542),
    u = n(881294),
    m = n(388032),
    h = n(140577);
function p(e) {
    var t, n;
    let { application: a, className: l, innerClassName: o } = e,
        c = null !== (n = null === (t = a.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== n ? n : [];
    return null != a.terms_of_service_url || null != a.privacy_policy_url || c.length > 0
        ? (0, i.jsxs)('div', {
              className: r()(h.container, l),
              children: [
                  (0, i.jsx)(s.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: m.intl.string(m.t.l6DP2t)
                  }),
                  (0, i.jsxs)('div', {
                      className: r()(h.list, o),
                      children: [
                          c.map((e, t) =>
                              (0, i.jsx)(
                                  g,
                                  {
                                      url: e.url,
                                      children: e.name
                                  },
                                  t
                              )
                          ),
                          null != a.terms_of_service_url
                              ? (0, i.jsx)(_, {
                                    icon: s.aAW,
                                    url: a.terms_of_service_url,
                                    children: m.intl.string(m.t.s7STcX)
                                })
                              : null,
                          null != a.privacy_policy_url
                              ? (0, i.jsx)(_, {
                                    icon: s.mBM,
                                    url: a.privacy_policy_url,
                                    children: m.intl.string(m.t.kH3JR0)
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
    let { url: a, children: r } = e,
        o = (0, c.ZP)(),
        u = d.Z.getByUrl(a),
        m = (0, l.wj)(o) ? (null == u ? void 0 : null === (t = u.icon) || void 0 === t ? void 0 : t.darkSVG) : null == u ? void 0 : null === (n = u.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(_, {
        icon: void 0 === m ? s.xPt : void 0,
        imageSrc: m,
        url: a,
        children: r
    });
}
function _(e) {
    let { icon: t, imageSrc: n, iconColor: a, url: l, children: c } = e,
        d = (0, u.nu)(),
        m = null;
    null != t
        ? (m = (0, i.jsx)(t, {
              className: h.listIcon,
              color: null != a ? a : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (m = (0, i.jsx)('img', {
              className: h.listImage,
              src: n,
              alt: ''
          }));
    let p = (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            (0, i.jsx)(s.Text, {
                className: h.listText,
                variant: 'text-sm/medium',
                selectable: !0,
                children: c
            })
        ]
    });
    return (0, i.jsx)(o.Z, {
        href: l,
        className: r()(h.listItem, h.linkItem),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: p
    });
}
