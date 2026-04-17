"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(233971),
    c = n(427262),
    d = n(545428),
    _ = n(652215),
    f = n(985018),
    p = n(266599);
function h(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: h } = (0, l.Ay)(o.A.GIFT_BUTTON),
        m = (0, c.R1)(n),
        E = i.useRef(null),
        {
            openGiftModal: g,
            shouldShowWishlistModal: A,
            shouldShowGiftSelectionModal: I,
        } = (0, u.$)({
            giftRecipient: m,
            analyticsLocations: h,
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
        : (0, r.jsx)(s.m, {
              ariaHidden: A || I,
              text: f.intl.string(A || I ? f.t.TW4JV0 : f.t.sWtWDX),
              children: (0, r.jsx)(d.A, {
                  className: p.x6,
                  isActive: !1,
                  "aria-label": f.intl.string(A || I ? f.t.TW4JV0 : f.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      g();
                  },
                  ref: E,
                  children: (0, r.jsx)(a.xBs, {
                      autoPause: !0,
                      eventTargetRef: E,
                      dataBinding: { fill: "currentColor" },
                      className: a.d5l.refresh_sm,
                  }),
              }),
          });
}
let m = i.memo(h);
