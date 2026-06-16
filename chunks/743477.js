n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    a = n(533781),
    r = n(990078),
    o = n(793574),
    s = n(688810),
    c = n(751188),
    u = n(427262),
    d = n(767089),
    C = n(652215),
    A = n(375708),
    g = n(266599);
let f = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: i } = (0, s.Ay)(o.A.GIFT_BUTTON),
        f = (0, u.R1)(n),
        { Component: N, events: m, play: p } = (0, a.T)(),
        {
            openGiftModal: T,
            shouldShowWishlistModal: _,
            shouldShowGiftSelectionModal: I,
        } = (0, c.$)({
            giftRecipient: f,
            analyticsLocations: i,
            analyticsObject: {
                page: n.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL,
                section: C.JJy.CHANNEL_TEXT_AREA,
                object: C.ZSU.BUTTON_ICON,
                objectType: C.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button",
        });
    return t
        ? null
        : (0, l.jsx)(r.m, {
              ariaHidden: _ || I,
              text: A.intl.string(_ || I ? A.t.TW4JV0 : A.t.sWtWDX),
              children: (0, l.jsx)(d.A, {
                  className: g.x6,
                  isActive: !1,
                  "aria-label": A.intl.string(_ || I ? A.t.TW4JV0 : A.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      T(), p();
                  },
                  ...m,
                  children: (0, l.jsx)(N, { size: "refresh_sm", color: "currentColor" }),
              }),
          });
});
