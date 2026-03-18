l.d(t, { A: () => d });
var i = l(627968);
l(64700);
var r = l(575593),
    n = l(397927),
    a = l(929283),
    s = l(550111),
    u = l(331402),
    o = l(798048),
    c = l(752276);
function d(e) {
    let { item: t, profileOwner: l, isHighlighted: d, cardSize: h = o.Y.MEDIUM } = e,
        A = t.collectiblesItem;
    switch (A.type) {
        case r.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: c.xC,
                children: (0, i.jsx)(u.A, {
                    skuId: A.skuId,
                    isHighlighted: d,
                    removeSetHeight: !0,
                    hideBackground: !0,
                }),
            });
        case r.R.AVATAR_DECORATION:
            return (0, i.jsx)("div", {
                className: c._P,
                children: (0, i.jsx)(a.i, {
                    item: A,
                    user: l,
                    isHighlighted: d,
                    avatarSize: h === o.Y.MEDIUM_SQUARE ? n._3J.SIZE_96 : n._3J.SIZE_80,
                }),
            });
        case r.R.NAMEPLATE:
            return (0, i.jsxs)("div", {
                className: c.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: c.Qt,
                        children: (0, i.jsx)(s.A, {
                            user: l,
                            nameplate: A,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: h === o.Y.MEDIUM_SQUARE ? "small" : "default",
                            width:
                                h === o.Y.MEDIUM_SQUARE ? 171 : h === o.Y.SMALL || h === o.Y.SMALL_SQUARE ? 136 : 200,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: c.BM,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(s.A, {
                            user: l,
                            nameplate: A,
                            isHighlighted: d,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: h === o.Y.MEDIUM_SQUARE ? "small" : "default",
                            width:
                                h === o.Y.MEDIUM_SQUARE ? 171 : h === o.Y.SMALL || h === o.Y.SMALL_SQUARE ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
