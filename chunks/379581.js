a.d(t, { A: () => A });
var n = a(627968);
a(64700);
var l = a(503698),
    i = a.n(l),
    s = a(462887),
    r = a(534514),
    o = a(514042),
    c = a(194261),
    d = a(173936),
    u = a(834730),
    h = a(9578),
    m = a(736653),
    p = a(573648),
    _ = a(412461),
    g = a(985018),
    x = a(355584);
function A(e) {
    let { application: t, className: a, innerClassName: l } = e,
        s = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || s.length > 0
        ? (0, n.jsxs)("div", {
              className: i()(x.kL, a),
              children: [
                  (0, n.jsx)(r.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: g.intl.string(g.t.l6DP2n),
                  }),
                  (0, n.jsxs)("div", {
                      className: i()(x.p_, l),
                      children: [
                          s.map((e, t) => (0, n.jsx)(f, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, n.jsx)(C, {
                                    icon: o.o,
                                    url: t.terms_of_service_url,
                                    children: g.intl.string(g.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, n.jsx)(C, {
                                    icon: c.X,
                                    url: t.privacy_policy_url,
                                    children: g.intl.string(g.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function f(e) {
    let { url: t, children: a } = e,
        l = (0, m.Ay)(),
        i = p.A.getByUrl(t),
        r = (0, s.M)(l) ? i?.icon?.darkSVG : i?.icon?.lightSVG;
    return (0, n.jsx)(C, { icon: void 0 === r ? d.q : void 0, imageSrc: r, url: t, children: a });
}
function C(e) {
    let { icon: t, imageSrc: a, iconColor: l, url: s, children: r } = e,
        o = (0, _.DB)(),
        c = null;
    null != t
        ? (c = (0, n.jsx)(t, { className: x.GU, color: l ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != a && (c = (0, n.jsx)("img", { className: x.GR, src: a, alt: "" }));
    let d = (0, n.jsxs)(n.Fragment, {
        children: [c, (0, n.jsx)(u.E, { className: x.so, variant: "text-sm/medium", selectable: !0, children: r })],
    });
    return (0, n.jsx)(h.A, {
        href: s,
        className: i()(x.Aw, x.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
