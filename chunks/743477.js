"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(533781),
    a = n(990078),
    o = n(793574),
    l = n(688810),
    u = n(751188),
    c = n(427262),
    d = n(767089),
    _ = n(652215),
    h = n(375708),
    f = n(266599);
let p = r.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: r } = (0, l.Ay)(o.A.GIFT_BUTTON),
        p = (0, c.R1)(n),
        { Component: E, events: m, play: g } = (0, s.T)(),
        {
            openGiftModal: A,
            shouldShowWishlistModal: I,
            shouldShowGiftSelectionModal: T,
        } = (0, u.$)({
            giftRecipient: p,
            analyticsLocations: r,
            analyticsObject: {
                page: n.isPrivate() ? _.liQ.DM_CHANNEL : _.liQ.GUILD_CHANNEL,
                section: _.JJy.CHANNEL_TEXT_AREA,
                object: _.ZSU.BUTTON_ICON,
                objectType: _.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, i.jsx)(a.m, {
              ariaHidden: I || T,
              text: h.intl.string(I || T ? h.t.TW4JV0 : h.t.sWtWDX),
              children: (0, i.jsx)(d.A, {
                  className: f.x6,
                  isActive: !1,
                  "aria-label": h.intl.string(I || T ? h.t.TW4JV0 : h.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      A(), g();
                  },
                  ...m,
                  children: (0, i.jsx)(E, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
