n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(979554),
    l = n(481060),
    o = n(616066),
    a = n(566697),
    s = n(876917),
    c = n(688192),
    u = n(232644);
function d(e) {
    let { item: t, profileOwner: n, isHighlighted: d, cardSize: f = c.U.MEDIUM } = e,
        h = t.collectiblesItem;
    switch (h.type) {
        case i.Z.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: u.profileEffectPreview,
                children: (0, r.jsx)(s.Z, {
                    skuId: h.skuId,
                    isHighlighted: d,
                    isPurchased: !1,
                    removeSetHeight: !0,
                }),
            });
        case i.Z.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: u.avatarDecorationPreview,
                children: (0, r.jsx)(o.R, {
                    item: h,
                    user: n,
                    isHighlighted: d,
                    isPurchased: !1,
                    avatarSize: l.EFr.SIZE_80,
                }),
            });
        case i.Z.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: u.nameplatePreview,
                children: [
                    (0, r.jsx)("div", {
                        className: u.nameplateTopLeft,
                        children: (0, r.jsx)(a.Z, {
                            user: n,
                            nameplate: h,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: f === c.U.SMALL ? 136 : 200,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.nameplateBottomRight,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(a.Z, {
                            user: n,
                            nameplate: h,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: f === c.U.SMALL ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
