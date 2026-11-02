n.d(t, { A: () => b });
var i = n(477900),
    l = n(582128),
    s = n(403581),
    a = n(661531),
    r = n(834730),
    o = n(62010),
    d = n(821609),
    u = n(788026),
    c = n(688810);
function m(e) {
    let { analyticsLocations: t } = (0, c.Ay)(...e.newLocations);
    return (0, i.jsx)(c.di.Provider, { value: t, children: e.children });
}
var x = n(178653),
    h = n(465794),
    j = n(186280),
    g = n(202541),
    p = n(765036),
    N = n(105292),
    f = n(23236);
function b(e) {
    let { pack: t, isNitroTier2: n, surface: c, onClose: b } = e,
        I = l.useContext(x.A);
    return (
        (0, j.$W)(c, n),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: f.yF }),
                (0, i.jsxs)("div", {
                    className: f.R_,
                    children: [
                        (0, i.jsxs)("div", {
                            className: f.DD,
                            children: [
                                (0, i.jsx)(s.t, { size: "sm", color: a.A.colors.TEXT_DEFAULT }),
                                (0, i.jsx)(r.E, {
                                    variant: "text-sm/medium",
                                    children: N.intl.string(p.default.leUgZw),
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.E, { type: "beta", variant: "primary" }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: f.VH,
                    role: "group",
                    "aria-label": t.name,
                    children: t.previewEmojis.map((e) =>
                        (0, i.jsx)(
                            u.A,
                            { className: f.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated },
                            e.id,
                        ),
                    ),
                }),
                (!n || null != I) &&
                    (0, i.jsx)("div", {
                        className: f.XI,
                        children: n
                            ? (0, i.jsx)(d.$, {
                                  text: N.intl.string(p.default.DtK5IG),
                                  variant: "primary",
                                  fullWidth: !0,
                                  onClick: function () {
                                      null != I && (b(), I(t.id));
                                  },
                              })
                            : (0, i.jsx)(m, {
                                  newLocations: [j.Vg[c].location],
                                  children: (0, i.jsx)(h.A, {
                                      subscriptionTier: g.pe.TIER_2,
                                      defaultTextOverride: N.intl.string(N.t["gl/XHJ"]),
                                      fullWidth: !0,
                                      onClick: b,
                                  }),
                              }),
                    }),
            ],
        })
    );
}
