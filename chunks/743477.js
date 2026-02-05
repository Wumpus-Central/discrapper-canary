"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(533781),
    s = n(990078),
    o = n(397927),
    l = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(547065),
    _ = n(404036),
    f = n(594832),
    p = n(427262),
    h = n(545428),
    m = n(652215),
    g = n(985018),
    E = n(111314);
function A(e) {
    let { disabled: t, channel: i } = e,
        { analyticsLocations: A } = (0, u.Ay)(l.A.GIFT_BUTTON),
        I = (0, p.R1)(i),
        { Component: T, events: y, play: S } = (0, a.T)(),
        { enabled: v } = d.P.useExperiment({ location: "gift-button" }, { autoTrackExposure: !1 }),
        C = i.type === m.rbe.DM,
        b = (0, f.tA)({ location: "gift-button", isGift: !0, giftRecipient: I });
    if (t) return null;
    let N = () => {
        b && C && null != I
            ? (0, _.A)({
                  giftRecipient: I,
                  analyticsLocations: A,
                  analyticsObject: {
                      page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                      section: m.JJy.CHANNEL_TEXT_AREA,
                      object: m.ZSU.BUTTON_ICON,
                      objectType: m.AnalyticsObjectTypes.GIFT,
                  },
              })
            : v && C && null != I
              ? (0, o.mMO)(async () => {
                    let { default: e } = await n.e("22841").then(n.bind(n, 561376));
                    return (t) =>
                        (0, r.jsx)(e, {
                            analyticsObject: {
                                page: m.liQ.DM_CHANNEL,
                                section: m.JJy.CHANNEL_TEXT_AREA,
                                object: m.ZSU.BUTTON_ICON,
                                objectType: m.AnalyticsObjectTypes.GIFT,
                            },
                            analyticsLocations: A,
                            giftRecipient: I,
                            ...t,
                        });
                })
              : (0, c.A)({
                    isGift: !0,
                    giftRecipient: null === I ? void 0 : I,
                    initialPlanId: null,
                    analyticsLocations: A,
                    analyticsObject: {
                        page: i.isPrivate() ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL,
                        section: m.JJy.CHANNEL_TEXT_AREA,
                        object: m.ZSU.BUTTON_ICON,
                        objectType: m.AnalyticsObjectTypes.GIFT,
                    },
                });
    };
    return (0, r.jsx)(s.m, {
        ariaHidden: b,
        text: g.intl.string(b ? g.t.TW4JV0 : g.t.sWtWDX),
        children: (0, r.jsx)(h.A, {
            className: E.x6,
            isActive: !1,
            "aria-label": g.intl.string(b ? g.t.TW4JV0 : g.t.Z1RnTk),
            "aria-haspopup": "dialog",
            onClick: () => {
                N(), S();
            },
            ...y,
            children: (0, r.jsx)(T, { size: "refresh_sm", color: "currentColor" }),
        }),
    });
}
let I = i.memo(A);
