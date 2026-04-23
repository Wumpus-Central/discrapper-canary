"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(192308),
    c = n(403581),
    d = n(834730),
    _ = n(939249),
    f = n(793574),
    p = n(688810),
    h = n(404374),
    E = n(734057),
    m = n(309010),
    g = n(954571),
    A = n(652215),
    I = n(985018),
    T = n(341867);
function S() {
    (0, u.openModalLazy)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function y(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([m.A, E.A], () => {
            let e = E.A.getChannel(m.A.getChannelId());
            return e?.isPrivate() ? A.liQ.DM_CHANNEL : A.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: u } = (0, p.Ay)(f.A.PREMIUM_UPSELL);
    return (
        i.useEffect(() => {
            g.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: { location_page: s, location_section: A.JJy.CHANNEL_TEXT_AREA },
                location_stack: u,
            });
        }, [s, u]),
        n
            ? (0, r.jsx)(_.D, {
                  className: T.e7,
                  onClick: () => S(),
                  children: (0, r.jsx)(l.m, {
                      text: I.intl.string(I.t["+eFIjX"]),
                      position: "top",
                      children: (0, r.jsx)(c.t, { size: "md", color: "currentColor", className: T.M2 }),
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: a()(T.zr, t),
                  children: [
                      (0, r.jsx)(c.t, { size: "md", className: T.M2, color: h.k0.PREMIUM_TIER_2 }),
                      (0, r.jsx)(d.E, {
                          className: T.Qq,
                          variant: "text-sm/normal",
                          children: I.intl.format(I.t.BNAIBU, { onLearnMore: S }),
                      }),
                  ],
              })
    );
}
