n.d(t, { A: () => p });
var i = n(477900),
    l = n(582128),
    s = n(403581),
    a = n(661531),
    r = n(834730),
    o = n(62010),
    d = n(821609),
    u = n(788026),
    c = n(178653),
    m = n(465794),
    x = n(202541),
    h = n(765036),
    j = n(105292),
    g = n(23236);
function p(e) {
    let { pack: t, isNitroTier2: n, onClose: p } = e,
        N = l.useContext(c.A);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: g.yF }),
            (0, i.jsxs)("div", {
                className: g.R_,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.DD,
                        children: [
                            (0, i.jsx)(s.t, { size: "sm", color: a.A.colors.TEXT_DEFAULT }),
                            (0, i.jsx)(r.E, { variant: "text-sm/medium", children: j.intl.string(h.default.leUgZw) }),
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
                    (0, i.jsx)(u.A, { className: g.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated }, e.id),
                ),
            }),
            (!n || null != N) &&
                (0, i.jsx)("div", {
                    className: g.XI,
                    children: n
                        ? (0, i.jsx)(d.$, {
                              text: j.intl.string(h.default.DtK5IG),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  null != N && (p(), N(t.id));
                              },
                          })
                        : (0, i.jsx)(m.A, {
                              subscriptionTier: x.pe.TIER_2,
                              defaultTextOverride: j.intl.string(j.t["gl/XHJ"]),
                              fullWidth: !0,
                              onClick: p,
                          }),
                }),
        ],
    });
}
