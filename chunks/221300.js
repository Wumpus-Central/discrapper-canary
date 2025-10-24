r.d(t, { Z: () => d });
var n = r(951288);
r(647438);
var i = r(979554),
    s = r(481060),
    l = r(616066),
    a = r(22267),
    o = r(876917),
    c = r(688192),
    u = r(232644);
function d(e) {
    let { item: t, profileOwner: r, isHighlighted: d, surface: f = c.Y.PROFILE_MODAL } = e,
        p = t.collectiblesItem;
    switch (p.type) {
        case i.Z.PROFILE_EFFECT:
            return (0, n.jsx)("div", {
                className: u.profileEffectPreview,
                children: (0, n.jsx)(o.Z, {
                    skuId: p.skuId,
                    isHighlighted: d,
                    isPurchased: !1,
                    removeSetHeight: !0,
                }),
            });
        case i.Z.AVATAR_DECORATION:
            return (0, n.jsx)("div", {
                className: u.avatarDecorationPreview,
                children: (0, n.jsx)(l.R, {
                    item: p,
                    user: r,
                    isHighlighted: d,
                    isPurchased: !1,
                    avatarSize: s.EFr.SIZE_80,
                }),
            });
        case i.Z.NAMEPLATE:
            return (0, n.jsxs)("div", {
                className: u.nameplatePreview,
                children: [
                    (0, n.jsx)("div", {
                        className: u.nameplateTopLeft,
                        children: (0, n.jsx)(a.Z, {
                            user: r,
                            nameplate: p,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: f === c.Y.GIFTING_FLOW ? 136 : 200,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: u.nameplateBottomRight,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(a.Z, {
                            user: r,
                            nameplate: p,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: f === c.Y.GIFTING_FLOW ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
