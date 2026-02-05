a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var i = a(503698),
    s = a.n(i),
    l = a(582754),
    r = a(397927),
    o = a(9578),
    c = a(736653),
    d = a(573648),
    u = a(412461),
    h = a(985018),
    m = a(125257);
function p(e) {
    let { application: t, className: a, innerClassName: i } = e,
        l = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || l.length > 0
        ? (0, n.jsxs)("div", {
              className: s()(m.kL, a),
              children: [
                  (0, n.jsx)(r.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: h.intl.string(h.t.l6DP2n),
                  }),
                  (0, n.jsxs)("div", {
                      className: s()(m.p_, i),
                      children: [
                          l.map((e, t) => (0, n.jsx)(_, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, n.jsx)(g, {
                                    icon: r.oSV,
                                    url: t.terms_of_service_url,
                                    children: h.intl.string(h.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, n.jsx)(g, {
                                    icon: r.XAi,
                                    url: t.privacy_policy_url,
                                    children: h.intl.string(h.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function _(e) {
    let { url: t, children: a } = e,
        i = (0, c.Ay)(),
        s = d.A.getByUrl(t),
        o = (0, l.Mw)(i) ? s?.icon?.darkSVG : s?.icon?.lightSVG;
    return (0, n.jsx)(g, { icon: void 0 === o ? r.qYV : void 0, imageSrc: o, url: t, children: a });
}
function g(e) {
    let { icon: t, imageSrc: a, iconColor: i, url: l, children: c } = e,
        d = (0, u.DB)(),
        h = null;
    null != t
        ? (h = (0, n.jsx)(t, { className: m.GU, color: i ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != a && (h = (0, n.jsx)("img", { className: m.GR, src: a, alt: "" }));
    let p = (0, n.jsxs)(n.Fragment, {
        children: [h, (0, n.jsx)(r.Text, { className: m.so, variant: "text-sm/medium", selectable: !0, children: c })],
    });
    return (0, n.jsx)(o.A, {
        href: l,
        className: s()(m.Aw, m.SF),
        trusted: !d,
        useDefaultUnderlineStyles: !1,
        children: p,
    });
}
