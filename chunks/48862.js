"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(985018),
    E = n(133440);
function A() {
    (0, u.mMO)(async () => {
        let { default: e } = await n.e("66920").then(n.bind(n, 220763));
        return (t) => (0, r.jsx)(e, { channel: null, ...t });
    });
}
function I(e) {
    let { className: t, iconOnly: n } = e,
        a = (0, o.bG)([p.A, f.A], () => {
            let e = f.A.getChannel(p.A.getChannelId());
            return e?.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL;
        }),
        { analyticsLocations: I } = (0, d.Ay)(c.A.PREMIUM_UPSELL);
    i.useEffect(() => {
        h.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
            type: "longer messages inline",
            location: { location_page: a, location_section: m.JJy.CHANNEL_TEXT_AREA },
            location_stack: I,
        });
    }, [a, I]);
    let T = () =>
            (0, r.jsxs)("div", {
                className: s()(E.zr, t),
                children: [
                    (0, r.jsx)(u.tvc, { size: "md", className: E.M2, color: _.k0.PREMIUM_TIER_2 }),
                    (0, r.jsx)(u.Text, {
                        className: E.Qq,
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.BNAIBU, { onLearnMore: A }),
                    }),
                ],
            }),
        y = () =>
            (0, r.jsx)(u.DUT, {
                className: E.e7,
                onClick: () => A(),
                children: (0, r.jsx)(l.m, {
                    text: g.intl.string(g.t["+eFIjX"]),
                    position: "top",
                    children: (0, r.jsx)(u.tvc, { size: "md", color: "currentColor", className: E.M2 }),
                }),
            });
    return n ? y() : T();
}
