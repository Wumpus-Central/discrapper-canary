"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    c = n(192308),
    u = n(403581),
    d = n(834730),
    h = n(939249),
    m = n(793574),
    p = n(688810),
    f = n(404374),
    g = n(734057),
    _ = n(309010),
    x = n(954571),
    A = n(652215),
    C = n(985018),
    E = n(341867);
function I() {
    (0, c.openModalLazy)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function v(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, a.bG)([_.A, g.A], () => {
            let e = g.A.getChannel(_.A.getChannelId());
            return e?.isPrivate() ? A.liQ.DM_CHANNEL : A.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: c } = (0, p.Ay)(m.A.PREMIUM_UPSELL);
    return (
        l.useEffect(() => {
            x.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: A.JJy.CHANNEL_TEXT_AREA },
                location_stack: c,
            });
        }, [s, c]),
        n
            ? (0, i.jsx)(h.D, {
                  className: E.e7,
                  onClick: () => I(),
                  children: (0, i.jsx)(o.m, {
                      text: C.intl.string(C.t["+eFIjX"]),
                      position: "top",
                      children: (0, i.jsx)(u.t, { size: "md", color: "currentColor", className: E.M2 }),
                  }),
              })
            : (0, i.jsxs)("div", {
                  className: r()(E.zr, t),
                  children: [
                      (0, i.jsx)(u.t, { size: "md", className: E.M2, color: f.k0.PREMIUM_TIER_2 }),
                      (0, i.jsx)(d.E, {
                          className: E.Qq,
                          variant: "text-sm/normal",
                          children: C.intl.format(C.t.BNAIBU, { onLearnMore: I }),
                      }),
                  ],
              })
    );
}
