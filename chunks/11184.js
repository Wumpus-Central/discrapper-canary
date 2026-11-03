n.d(t, { A: () => f });
var i = n(477900),
    s = n(582128),
    l = n(403581),
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
    b = n(105292),
    N = n(23236);
function f(e) {
    let { pack: t, isNitroTier2: n, surface: c, onClose: f } = e,
        I = s.useContext(x.A);
    return (
        (0, j.$W)(c, n),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: N.yF }),
                (0, i.jsxs)("div", {
                    className: N.R_,
                    children: [
                        (0, i.jsxs)("div", {
                            className: N.DD,
                            children: [
                                (0, i.jsx)(l.t, { size: "sm", color: a.A.colors.TEXT_DEFAULT }),
                                (0, i.jsx)(r.E, {
                                    variant: "body-sm/medium",
                                    children: b.intl.string(p.default.leUgZw),
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.E, { type: "beta", variant: "primary" }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: N.VH,
                    role: "group",
                    "aria-label": t.name,
                    children: t.previewEmojis.map((e) =>
                        (0, i.jsx)(
                            u.A,
                            { className: N.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated },
                            e.id,
                        ),
                    ),
                }),
                (!n || null != I) &&
                    (0, i.jsx)("div", {
                        className: N.XI,
                        children: n
                            ? (0, i.jsx)(d.$, {
                                  text: b.intl.string(p.default.DtK5IG),
                                  variant: "primary",
                                  fullWidth: !0,
                                  onClick: function () {
                                      null != I && (f(), I(t.id));
                                  },
                              })
                            : (0, i.jsx)(m, {
                                  newLocations: [j.Vg[c].location],
                                  children: (0, i.jsx)(h.A, {
                                      subscriptionTier: g.pe.TIER_2,
                                      defaultTextOverride: b.intl.string(b.t["gl/XHJ"]),
                                      fullWidth: !0,
                                      onClick: f,
                                  }),
                              }),
                    }),
            ],
        })
    );
}
