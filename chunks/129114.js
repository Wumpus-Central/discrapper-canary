n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(661492),
    r = n(594832),
    s = n(146423),
    o = n(121700),
    d = n(662349),
    c = n(754804),
    u = n(871123),
    _ = n(317560),
    f = n(533406),
    m = n(788868),
    p = n(699976),
    g = n(985018);
let h = p.Z.SIZE_90;
function A(e) {
    let {
            sku: t,
            targetUser: n,
            isTargetingCurrentUser: p,
            source: A,
            showIcons: x,
            guildId: v,
            channelId: I,
            analyticsLocations: E,
            onCardClick: C,
            onButtonClick: j,
        } = e,
        [N, y] = l.useState(!1),
        { guildId: b } = (0, u.nG)(t.applicationId),
        S = l.useCallback(() => {
            C?.(),
                (0, _.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    isStorefront: !1,
                    giftRecipient: n,
                    giftingOrigin: m.vQ.GUILD_CHANNEL,
                    analyticsLocations: E,
                });
        }, [t.id, t.applicationId, n, E, C]),
        w = l.useCallback(() => {
            j?.(),
                (0, f.a)(
                    t,
                    { isGift: !p, giftRecipient: n, giftingOrigin: m.vQ.GUILD_CHANNEL },
                    { analyticsLocations: E, guildId: b },
                );
        }, [t, n, p, E, b, j]),
        { label: T, icon: k } = (0, d.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 });
    return (0, i.jsxs)(s.A, {
        sku: t,
        user: n,
        spec: h,
        onClick: S,
        "aria-label": g.intl.formatToPlainString(g.t.ZBB4Ty, { productName: (0, a.TC)(t) }),
        onHoverOrFocusChange: y,
        children: [
            (0, i.jsx)(d.A, { spec: h, onClick: w, isHoveringOrFocusing: N, label: T, icon: k }),
            (0, i.jsx)(o.A, {
                spec: h,
                sku: t,
                isCardHovered: N,
                location: "SocialLayerGiftingVoicePanelSkuItemCard",
                replacedElement:
                    x && !p && A === r.uS.WISHLIST
                        ? (0, i.jsx)(c.n, { spec: h, user: n, guildId: v ?? void 0, channelId: I ?? void 0 })
                        : null,
            }),
        ],
    });
}
