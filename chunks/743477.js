"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(533781),
    a = n(990078),
    o = n(793574),
    l = n(688810),
    u = n(233971),
    c = n(427262),
    d = n(545428),
    _ = n(652215),
    f = n(985018),
    p = n(266599);
let h = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: i } = (0, l.Ay)(o.A.GIFT_BUTTON),
        h = (0, c.R1)(n),
        { Component: E, events: m, play: g } = (0, s.T)(),
        {
            openGiftModal: A,
            shouldShowWishlistModal: I,
            shouldShowGiftSelectionModal: T,
        } = (0, u.$)({
            giftRecipient: h,
            analyticsLocations: i,
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
        : (0, r.jsx)(a.m, {
              ariaHidden: I || T,
              text: f.intl.string(I || T ? f.t.TW4JV0 : f.t.sWtWDX),
              children: (0, r.jsx)(d.A, {
                  className: p.x6,
                  isActive: !1,
                  "aria-label": f.intl.string(I || T ? f.t.TW4JV0 : f.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      A(), g();
                  },
                  ...m,
                  children: (0, r.jsx)(E, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
