n.d(e, { A: () => v });
var i = n(477900),
    r = n(582128),
    l = n(403581),
    s = n(661531),
    o = n(834730),
    a = n(62010),
    u = n(821609),
    d = n(788026),
    c = n(688810);
function p(t) {
    let { analyticsLocations: e } = (0, c.Ay)(...t.newLocations);
    return (0, i.jsx)(c.di.Provider, { value: e, children: t.children });
}
var m = n(178653),
    f = n(465794),
    A = n(186280),
    E = n(202541),
    I = n(765036),
    g = n(105292),
    j = n(23236);
function v(t) {
    let { pack: e, isNitroTier2: n, surface: c, onClose: v } = t,
        U = r.useContext(m.A);
    return (
        (0, A.$W)(c, n),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: j.yF }),
                (0, i.jsxs)("div", {
                    className: j.R_,
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.DD,
                            children: [
                                (0, i.jsx)(l.t, { size: "sm", color: s.A.colors.TEXT_DEFAULT }),
                                (0, i.jsx)(o.E, {
                                    variant: "body-sm/medium",
                                    children: g.intl.string(I.default.leUgZw),
                                }),
                            ],
                        }),
                        (0, i.jsx)(a.E, { type: "beta", variant: "primary" }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.VH,
                    role: "group",
                    "aria-label": e.name,
                    children: e.previewEmojis.map((t) =>
                        (0, i.jsx)(
                            d.A,
                            { className: j.Zg, emojiId: t.id, emojiName: t.name, animated: t.animated },
                            t.id,
                        ),
                    ),
                }),
                (!n || null != U) &&
                    (0, i.jsx)("div", {
                        className: j.XI,
                        children: n
                            ? (0, i.jsx)(u.$, {
                                  text: g.intl.string(I.default.DtK5IG),
                                  variant: "primary",
                                  fullWidth: !0,
                                  onClick: function () {
                                      null != U && (v(), U(e.id));
                                  },
                              })
                            : (0, i.jsx)(p, {
                                  newLocations: [A.Vg[c].location],
                                  children: (0, i.jsx)(f.A, {
                                      subscriptionTier: E.pe.TIER_2,
                                      defaultTextOverride: g.intl.string(g.t["gl/XHJ"]),
                                      fullWidth: !0,
                                      onClick: v,
                                  }),
                              }),
                    }),
            ],
        })
    );
}
