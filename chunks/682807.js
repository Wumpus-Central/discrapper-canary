n.d(t, { Z: () => h });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(780384),
    s = n(481060),
    o = n(794295),
    c = n(410030),
    d = n(726542),
    u = n(881294),
    p = n(388032),
    m = n(442245);
function h(e) {
    var t, n;
    let { application: r, className: l, innerClassName: o } = e,
        c = null != (n = null == (t = r.directory_entry) ? void 0 : t.external_urls) ? n : [];
    return null != r.terms_of_service_url || null != r.privacy_policy_url || c.length > 0
        ? (0, a.jsxs)("div", {
              className: i()(m.container, l),
              children: [
                  (0, a.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: p.intl.string(p.t.l6DP2n),
                  }),
                  (0, a.jsxs)("div", {
                      className: i()(m.list, o),
                      children: [
                          c.map((e, t) =>
                              (0, a.jsx)(
                                  f,
                                  {
                                      url: e.url,
                                      children: e.name,
                                  },
                                  t,
                              ),
                          ),
                          null != r.terms_of_service_url
                              ? (0, a.jsx)(g, {
                                    icon: s.aAW,
                                    url: r.terms_of_service_url,
                                    children: p.intl.string(p.t.s7STcY),
                                })
                              : null,
                          null != r.privacy_policy_url
                              ? (0, a.jsx)(g, {
                                    icon: s.mBM,
                                    url: r.privacy_policy_url,
                                    children: p.intl.string(p.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function f(e) {
    var t, n;
    let { url: r, children: i } = e,
        o = (0, c.ZP)(),
        u = d.Z.getByUrl(r),
        p = (0, l.wj)(o)
            ? null == u || null == (t = u.icon)
                ? void 0
                : t.darkSVG
            : null == u || null == (n = u.icon)
              ? void 0
              : n.lightSVG;
    return (0, a.jsx)(g, {
        icon: void 0 === p ? s.xPt : void 0,
        imageSrc: p,
        url: r,
        children: i,
    });
}
function g(e) {
    let { icon: t, imageSrc: n, iconColor: r, url: l, children: c } = e,
        d = (0, u.nu)(),
        p = null;
    null != t
        ? (p = (0, a.jsx)(t, {
              className: m.listIcon,
              color: null != r ? r : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
          }))
        : null != n &&
          (p = (0, a.jsx)("img", {
              className: m.listImage,
              src: n,
              alt: "",
          }));
    let h = (0, a.jsxs)(a.Fragment, {
        children: [
            p,
            (0, a.jsx)(s.Text, {
                className: m.listText,
                variant: "text-sm/medium",
                selectable: !0,
                children: c,
            }),
        ],
    });
    return (0, a.jsx)(o.Z, {
        href: l,
        className: i()(m.listItem, m.linkItem),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: h,
    });
}
