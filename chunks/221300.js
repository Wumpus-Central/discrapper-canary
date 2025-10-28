n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(979554),
    l = n(481060),
    a = n(616066),
    s = n(22267),
    o = n(876917),
    c = n(688192),
    d = n(232644);
function u(e) {
    let { item: t, profileOwner: n, isHighlighted: u, surface: p = c.Y.PROFILE_MODAL } = e,
        h = t.collectiblesItem;
    switch (h.type) {
        case i.Z.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: d.profileEffectPreview,
                children: (0, r.jsx)(o.Z, {
                    skuId: h.skuId,
                    isHighlighted: u,
                    isPurchased: !1,
                    removeSetHeight: !0,
                }),
            });
        case i.Z.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: d.avatarDecorationPreview,
                children: (0, r.jsx)(a.R, {
                    item: h,
                    user: n,
                    isHighlighted: u,
                    isPurchased: !1,
                    avatarSize: l.EFr.SIZE_80,
                }),
            });
        case i.Z.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: d.nameplatePreview,
                children: [
                    (0, r.jsx)("div", {
                        className: d.nameplateTopLeft,
                        children: (0, r.jsx)(s.Z, {
                            user: n,
                            nameplate: h,
                            isHighlighted: u,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: p === c.Y.GIFTING_FLOW ? 136 : 200,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: d.nameplateBottomRight,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(s.Z, {
                            user: n,
                            nameplate: h,
                            isHighlighted: u,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            isPurchased: !1,
                            nameplatePreviewSize: "default",
                            width: p === c.Y.GIFTING_FLOW ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
