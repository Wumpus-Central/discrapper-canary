"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(793574),
    d = n(688810),
    _ = n(404374),
    f = n(734057),
    p = n(309010),
    h = n(954571),
    m = n(652215),
    E = n(985018),
    g = n(272446);
function A() {
    (0, u.mMO)(async () => {
        let { default: e } = await Promise.all([n.e("81028"), n.e("50866")]).then(n.bind(n, 220763));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function I(e) {
    let { className: t, iconOnly: n } = e,
        s = (0, o.bG)([p.A, f.A], () => {
            let e = f.A.getChannel(p.A.getChannelId());
            return e?.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: I } = (0, d.Ay)(c.A.PREMIUM_UPSELL);
    i.useEffect(() => {
        h.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: "longer messages inline",
            location: { location_page: s, location_section: m.JJy.CHANNEL_TEXT_AREA },
            location_stack: I,
        });
    }, [s, I]);
    let T = () =>
            (0, r.jsxs)("div", {
                className: a()(g.zr, t),
                children: [
                    (0, r.jsx)(u.tvc, { size: "md", className: g.M2, color: _.k0.PREMIUM_TIER_2 }),
                    (0, r.jsx)(u.Text, {
                        className: g.Qq,
                        variant: "text-sm/normal",
                        children: E.intl.format(E.t.BNAIBU, { onLearnMore: A }),
                    }),
                ],
            }),
        S = () =>
            (0, r.jsx)(u.DUT, {
                className: g.e7,
                onClick: () => A(),
                children: (0, r.jsx)(l.m, {
                    text: E.intl.string(E.t["+eFIjX"]),
                    position: "top",
                    children: (0, r.jsx)(u.tvc, { size: "md", color: "currentColor", className: g.M2 }),
                }),
            });
    return n ? S() : T();
}
