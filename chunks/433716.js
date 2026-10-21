n.d(t, { A: () => p });
var i = n(477900),
    s = n(582128),
    l = n(403581),
    a = n(661531),
    r = n(834730),
    o = n(62010),
    d = n(821609),
    c = n(565645),
    u = n(178653),
    m = n(465794),
    x = n(202541),
    j = n(732447),
    h = n(105292),
    g = n(23236);
function p(e) {
    let { pack: t, isNitroTier2: n, onClose: p } = e,
        I = s.useContext(u.A);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: g.yF }),
            (0, i.jsxs)("div", {
                className: g.R_,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.DD,
                        children: [
                            (0, i.jsx)(l.t, { size: "sm", color: a.A.colors.TEXT_DEFAULT }),
                            (0, i.jsx)(r.E, { variant: "text-sm/medium", children: h.intl.string(j.default.leUgZw) }),
                        ],
                    }),
                    (0, i.jsx)(o.E, { type: "beta", variant: "primary" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: g.VH,
                role: "group",
                "aria-label": t.name,
                children: t.previewEmojis.map((e) =>
                    (0, i.jsx)(c.A, { className: g.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated }, e.id),
                ),
            }),
            (!n || null != I) &&
                (0, i.jsx)("div", {
                    className: g.XI,
                    children: n
                        ? (0, i.jsx)(d.$, {
                              text: h.intl.string(j.default.DtK5IG),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  null != I && (p(), I());
                              },
                          })
                        : (0, i.jsx)(m.A, {
                              subscriptionTier: x.pe.TIER_2,
                              defaultTextOverride: h.intl.string(h.t["gl/XHJ"]),
                              fullWidth: !0,
                              onClick: p,
                          }),
                }),
        ],
    });
}
