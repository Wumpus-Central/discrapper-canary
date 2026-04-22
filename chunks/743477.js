"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(533781),
    r = n(990078),
    a = n(793574),
    o = n(688810),
    c = n(233971),
    u = n(427262),
    d = n(545428),
    h = n(652215),
    m = n(985018),
    p = n(266599);
let f = l.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: l } = (0, o.Ay)(a.A.GIFT_BUTTON),
        f = (0, u.R1)(n),
        { Component: g, events: _, play: x } = (0, s.T)(),
        {
            openGiftModal: A,
            shouldShowWishlistModal: C,
            shouldShowGiftSelectionModal: E,
        } = (0, c.$)({
            giftRecipient: f,
            analyticsLocations: l,
            analyticsObject: {
                page: n.isPrivate() ? h.liQ.DM_CHANNEL : h.liQ.GUILD_CHANNEL,
                section: h.JJy.CHANNEL_TEXT_AREA,
                object: h.ZSU.BUTTON_ICON,
                objectType: h.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, i.jsx)(r.m, {
              ariaHidden: C || E,
              text: m.intl.string(C || E ? m.t.TW4JV0 : m.t.sWtWDX),
              children: (0, i.jsx)(d.A, {
                  className: p.x6,
                  isActive: !1,
                  "aria-label": m.intl.string(C || E ? m.t.TW4JV0 : m.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      A(), x();
                  },
                  ..._,
                  children: (0, i.jsx)(g, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
