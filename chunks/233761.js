t.d(i, { A: () => p });
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(939249),
    d = t(403581),
    o = t(793574),
    c = t(688810),
    u = t(404374),
    h = t(772366),
    m = t(954571),
    _ = t(652215),
    x = t(788868),
    g = t(985018),
    A = t(310253);
function p(e) {
    let { className: i } = e,
        { analyticsLocations: t, sourceAnalyticsLocations: a } = (0, c.Ay)(o.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        s.useEffect(() => {
            m.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: x.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: _.liQ.NATIVE_INVITE_MODAL },
                location_stack: a,
            });
        }, [a]),
        (0, l.jsxs)(r.D, {
            onClick: () =>
                (0, h.A)({
                    analyticsSource: { page: _.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: _.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: _.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: t,
                }),
            className: n()(A.fA, i),
            children: [
                (0, l.jsx)(d.t, { size: "md", className: A.Y2, color: u.k0.PREMIUM_TIER_2 }),
                (0, l.jsx)("span", { className: A.Cq, children: g.intl.string(g.t["4/W4Pz"]) }),
                (0, l.jsx)("span", { className: A.MY, children: g.intl.string(g.t.b6KOkI) }),
            ],
        })
    );
}
