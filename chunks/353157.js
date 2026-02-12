"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(575593),
    l = n(397927),
    a = n(929283),
    r = n(550111),
    o = n(331402),
    d = n(798048),
    c = n(752276);
function u(e) {
    let { item: t, profileOwner: n, isHighlighted: u, cardSize: h = d.Y.MEDIUM } = e,
        p = t.collectiblesItem;
    switch (p.type) {
        case s.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: c.xC,
                children: (0, i.jsx)(o.A, { skuId: p.skuId, isHighlighted: u, removeSetHeight: !0 }),
            });
        case s.R.AVATAR_DECORATION:
            return (0, i.jsx)("div", {
                className: c._P,
                children: (0, i.jsx)(a.i, { item: p, user: n, isHighlighted: u, avatarSize: l._3J.SIZE_80 }),
            });
        case s.R.NAMEPLATE:
            return (0, i.jsxs)("div", {
                className: c.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: c.Qt,
                        children: (0, i.jsx)(r.A, {
                            user: n,
                            nameplate: p,
                            isHighlighted: u,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: h === d.Y.SMALL ? 136 : 200,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: c.BM,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(r.A, {
                            user: n,
                            nameplate: p,
                            isHighlighted: u,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: h === d.Y.SMALL ? 136 : 200,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
