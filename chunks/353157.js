l.d(t, { A: () => c });
var i = l(627968);
l(64700);
var r = l(575593),
    n = l(397927),
    a = l(929283),
    s = l(550111),
    u = l(331402),
    d = l(798048),
    o = l(752276);
function c(e) {
    let { item: t, profileOwner: l, isHighlighted: c, cardSize: h = d.Y.MEDIUM } = e,
        A = t.collectiblesItem;
    switch (A.type) {
        case r.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: o.xC,
                children: (0, i.jsx)(u.A, {
                    skuId: A.skuId,
                    isHighlighted: c,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case r.R.AVATAR_DECORATION:
            return (0, i.jsx)("div", {
                className: o._P,
                children: (0, i.jsx)(a.i, {
                    item: A,
                    user: l,
                    isHighlighted: c,
                    avatarSize: h === d.Y.MEDIUM_SQUARE ? n._3J.SIZE_96 : n._3J.SIZE_80,
                }),
            });
        case r.R.NAMEPLATE:
            return (0, i.jsxs)("div", {
                className: o.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: o.Qt,
                        children: (0, i.jsx)(s.A, {
                            user: l,
                            nameplate: A,
                            isHighlighted: c,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: h === d.Y.MEDIUM_SQUARE ? "small" : "default",
                            width:
                                h === d.Y.MEDIUM_SQUARE ? 171 : h === d.Y.SMALL || h === d.Y.SMALL_SQUARE ? 136 : 200,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: o.BM,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(s.A, {
                            user: l,
                            nameplate: A,
                            isHighlighted: c,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: h === d.Y.MEDIUM_SQUARE ? "small" : "default",
                            width:
                                h === d.Y.MEDIUM_SQUARE ? 171 : h === d.Y.SMALL || h === d.Y.SMALL_SQUARE ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
