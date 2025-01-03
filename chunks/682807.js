t.d(n, {
    Z: function () {
        return _;
    }
});
var a = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    l = t(780384),
    o = t(481060),
    s = t(794295),
    c = t(410030),
    d = t(726542),
    u = t(881294),
    m = t(388032),
    p = t(140577);
function _(e) {
    var n, t;
    let { application: i, className: l } = e,
        s = null !== (t = null === (n = i.directory_entry) || void 0 === n ? void 0 : n.external_urls) && void 0 !== t ? t : [];
    return null != i.terms_of_service_url || null != i.privacy_policy_url || s.length > 0
        ? (0, a.jsxs)('div', {
              className: r()(p.list, l),
              children: [
                  (0, a.jsx)(o.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: m.intl.string(m.t.l6DP2t)
                  }),
                  s.map((e, n) =>
                      (0, a.jsx)(
                          g,
                          {
                              url: e.url,
                              children: e.name
                          },
                          n
                      )
                  ),
                  null != i.terms_of_service_url
                      ? (0, a.jsx)(v, {
                            icon: o.FileIcon,
                            url: i.terms_of_service_url,
                            children: m.intl.string(m.t.s7STcX)
                        })
                      : null,
                  null != i.privacy_policy_url
                      ? (0, a.jsx)(v, {
                            icon: o.LockIcon,
                            url: i.privacy_policy_url,
                            children: m.intl.string(m.t.kH3JR0)
                        })
                      : null
              ]
          })
        : null;
}
function g(e) {
    var n, t;
    let { url: i, children: r } = e,
        s = (0, c.ZP)(),
        u = d.Z.getByUrl(i),
        m = (0, l.wj)(s) ? (null == u ? void 0 : null === (n = u.icon) || void 0 === n ? void 0 : n.darkSVG) : null == u ? void 0 : null === (t = u.icon) || void 0 === t ? void 0 : t.lightSVG;
    return (0, a.jsx)(v, {
        icon: void 0 === m ? o.LinkIcon : void 0,
        imageSrc: m,
        url: i,
        children: r
    });
}
function v(e) {
    let { icon: n, imageSrc: t, iconColor: i, url: l, children: c } = e,
        d = (0, u.nu)(),
        m = null;
    null != n
        ? (m = (0, a.jsx)(n, {
              className: p.listIcon,
              color: null != i ? i : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != t &&
          (m = (0, a.jsx)('img', {
              className: p.listImage,
              src: t,
              alt: ''
          }));
    let _ = (0, a.jsxs)(a.Fragment, {
        children: [
            m,
            (0, a.jsx)(o.Text, {
                className: p.listText,
                variant: 'text-sm/medium',
                selectable: !0,
                children: c
            })
        ]
    });
    return (0, a.jsx)(s.Z, {
        href: l,
        className: r()(p.listItem, p.linkItem),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: _
    });
}
