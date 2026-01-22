n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(582754),
    s = n(397927),
    c = n(9578),
    o = n(736653),
    d = n(573648),
    u = n(412461),
    p = n(985018),
    h = n(125257);
function m(e) {
    var t, n;
    let { application: a, className: i, innerClassName: c } = e,
        o = null != (t = null == (n = a.directory_entry) ? void 0 : n.external_urls) ? t : [];
    return null != a.terms_of_service_url || null != a.privacy_policy_url || o.length > 0
        ? (0, l.jsxs)("div", {
              className: r()(h.kL, i),
              children: [
                  (0, l.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: p.intl.string(p.t.l6DP2n),
                  }),
                  (0, l.jsxs)("div", {
                      className: r()(h.p_, c),
                      children: [
                          o.map((e, t) =>
                              (0, l.jsx)(
                                  b,
                                  {
                                      url: e.url,
                                      children: e.name,
                                  },
                                  t,
                              ),
                          ),
                          null != a.terms_of_service_url
                              ? (0, l.jsx)(f, {
                                    icon: s.oSV,
                                    url: a.terms_of_service_url,
                                    children: p.intl.string(p.t.s7STcY),
                                })
                              : null,
                          null != a.privacy_policy_url
                              ? (0, l.jsx)(f, {
                                    icon: s.XAi,
                                    url: a.privacy_policy_url,
                                    children: p.intl.string(p.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function b(e) {
    var t, n;
    let { url: a, children: r } = e,
        c = (0, o.Ay)(),
        u = d.A.getByUrl(a),
        p = (0, i.Mw)(c)
            ? null == u || null == (t = u.icon)
                ? void 0
                : t.darkSVG
            : null == u || null == (n = u.icon)
              ? void 0
              : n.lightSVG;
    return (0, l.jsx)(f, {
        icon: void 0 === p ? s.qYV : void 0,
        imageSrc: p,
        url: a,
        children: r,
    });
}
function f(e) {
    let { icon: t, imageSrc: n, iconColor: a, url: i, children: o } = e,
        d = (0, u.DB)(),
        p = null;
    null != t
        ? (p = (0, l.jsx)(t, {
              className: h.GU,
              color: null != a ? a : "currentColor",
              width: 20,
              height: 20,
              size: "custom",
          }))
        : null != n &&
          (p = (0, l.jsx)("img", {
              className: h.GR,
              src: n,
              alt: "",
          }));
    let m = (0, l.jsxs)(l.Fragment, {
        children: [
            p,
            (0, l.jsx)(s.Text, {
                className: h.so,
                variant: "text-sm/medium",
                selectable: !0,
                children: o,
            }),
        ],
    });
    return (0, l.jsx)(c.A, {
        href: i,
        className: r()(h.Aw, h.SF),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: m,
    });
}
