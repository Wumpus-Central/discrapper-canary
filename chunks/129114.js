n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(661492),
    a = n(594832),
    r = n(146423),
    o = n(121700),
    c = n(662349),
    d = n(754804),
    u = n(871123),
    h = n(317560),
    m = n(533406),
    A = n(788868),
    g = n(699976),
    p = n(985018);
let _ = g.Z.SIZE_90;
function f(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: g,
            source: f,
            showIcons: E,
            guildId: x,
            channelId: C,
            analyticsLocations: S,
            onCardClick: I,
            onButtonClick: T,
        } = e,
        [N, v] = l.useState(!1),
        { guildId: y } = (0, u.nG)(t.applicationId),
        b = l.useCallback(() => {
            I?.(),
                (0, h.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: A.vQ.GUILD_CHANNEL,
                    analyticsLocations: S,
                });
        }, [t.id, t.applicationId, n, S, I]),
        j = l.useCallback(() => {
            T?.(),
                (0, m.a)(
                    t,
                    { isGift: !g, giftRecipient: n, giftingOrigin: A.vQ.GUILD_CHANNEL },
                    { analyticsLocations: S, guildId: y },
                );
        }, [t, n, g, S, y, T]),
        { label: R, icon: M } = (0, c.h)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            shortText: !0,
            location: "SocialLayerGiftingVoicePanelSkuItemCard",
        });
    return (0, i.jsxs)(r.A, {
        sku: t,
        user: n,
        spec: _,
        onClick: b,
        "aria-label": p.intl.formatToPlainString(p.t.ZBB4Ty, { productName: (0, s.TC)(t) }),
        onHoverOrFocusChange: v,
        children: [
            (0, i.jsx)(c.A, { spec: _, onClick: j, isHoveringOrFocusing: N, label: R, icon: M }),
            (0, i.jsx)(o.A, {
                spec: _,
                sku: t,
                isCardHovered: N,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    E && !g && f === a.uS.WISHLIST
                        ? (0, i.jsx)(d.n, { spec: _, user: n, guildId: x ?? void 0, channelId: C ?? void 0 })
                        : null,
            }),
        ],
    });
}
