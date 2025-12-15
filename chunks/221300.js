n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(979554),
    a = n(481060),
    o = n(616066),
    s = n(566697),
    l = n(876917),
    c = n(688192),
    u = n(889588);
let d = 136,
    f = 200;
function p(e) {
    let { item: t, profileOwner: n, isHighlighted: p, cardSize: _ = c.U.MEDIUM } = e,
        m = t.collectiblesItem;
    switch (m.type) {
        case i.Z.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: u.profileEffectPreview,
                children: (0, r.jsx)(l.Z, {
                    skuId: m.skuId,
                    isHighlighted: p,
                    removeSetHeight: !0,
                }),
            });
        case i.Z.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: u.avatarDecorationPreview,
                children: (0, r.jsx)(o.R, {
                    item: m,
                    user: n,
                    isHighlighted: p,
                    avatarSize: a.EFr.SIZE_80,
                }),
            });
        case i.Z.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: u.nameplatePreview,
                children: [
                    (0, r.jsx)("div", {
                        className: u.nameplateTopLeft,
                        children: (0, r.jsx)(s.Z, {
                            user: n,
                            nameplate: m,
                            isHighlighted: p,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: _ === c.U.SMALL ? d : f,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.nameplateBottomRight,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(s.Z, {
                            user: n,
                            nameplate: m,
                            isHighlighted: p,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: _ === c.U.SMALL ? d : f,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
