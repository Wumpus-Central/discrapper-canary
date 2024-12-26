n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(780384),
    o = n(481060),
    s = n(794295),
    c = n(410030),
    d = n(726542),
    u = n(887706),
    h = n(388032),
    m = n(140577);
function p(e) {
    var t, n;
    let { application: r, className: a } = e,
        s = null !== (n = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== n ? n : [];
    return null != r.terms_of_service_url || null != r.privacy_policy_url || s.length > 0
        ? (0, i.jsxs)('div', {
              className: l()(m.list, a),
              children: [
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: h.intl.string(h.t.l6DP2t)
                  }),
                  s.map((e, t) =>
                      (0, i.jsx)(
                          g,
                          {
                              url: e.url,
                              children: e.name
                          },
                          t
                      )
                  ),
                  null != r.terms_of_service_url
                      ? (0, i.jsx)(f, {
                            icon: o.FileIcon,
                            url: r.terms_of_service_url,
                            children: h.intl.string(h.t.s7STcX)
                        })
                      : null,
                  null != r.privacy_policy_url
                      ? (0, i.jsx)(f, {
                            icon: o.LockIcon,
                            url: r.privacy_policy_url,
                            children: h.intl.string(h.t.kH3JR0)
                        })
                      : null
              ]
          })
        : null;
}
function g(e) {
    var t, n;
    let { url: r, children: l } = e,
        s = (0, c.ZP)(),
        u = d.Z.getByUrl(r),
        h = (0, a.wj)(s) ? (null == u ? void 0 : null === (t = u.icon) || void 0 === t ? void 0 : t.darkSVG) : null == u ? void 0 : null === (n = u.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(f, {
        icon: void 0 === h ? o.LinkIcon : void 0,
        imageSrc: h,
        url: r,
        children: l
    });
}
function f(e) {
    let { icon: t, imageSrc: n, iconColor: r, url: a, children: c } = e,
        d = (0, u.Z)(),
        h = null;
    null != t
        ? (h = (0, i.jsx)(t, {
              className: m.listIcon,
              color: null != r ? r : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (h = (0, i.jsx)('img', {
              className: m.listImage,
              src: n,
              alt: ''
          }));
    let p = (0, i.jsxs)(i.Fragment, {
        children: [
            h,
            (0, i.jsx)(o.Text, {
                className: m.listText,
                variant: 'text-sm/medium',
                selectable: !0,
                children: c
            })
        ]
    });
    return (0, i.jsx)(s.Z, {
        href: a,
        className: l()(m.listItem, m.linkItem),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: p
    });
}
