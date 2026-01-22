n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(575593),
    a = n(397927),
    s = n(929283),
    o = n(550111),
    l = n(331402),
    c = n(242640),
    u = n(752276);
let d = 136,
    f = 200;

function p(e) {
    let { item: t, profileOwner: n, isHighlighted: p, cardSize: _ = c.Y.MEDIUM } = e,
        h = t.collectiblesItem;
    switch (h.type) {
        case i.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: u.xC,
                children: (0, r.jsx)(l.A, {
                    skuId: h.skuId,
                    isHighlighted: p,
                    removeSetHeight: !0,
                }),
            });
        case i.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: u._P,
                children: (0, r.jsx)(s.i, {
                    item: h,
                    user: n,
                    isHighlighted: p,
                    avatarSize: a._3J.SIZE_80,
                }),
            });
        case i.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: u.M4,
                children: [
                    (0, r.jsx)("div", {
                        className: u.Qt,
                        children: (0, r.jsx)(o.A, {
                            user: n,
                            nameplate: h,
                            isHighlighted: p,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: _ === c.Y.SMALL ? d : f,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.BM,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(o.A, {
                            user: n,
                            nameplate: h,
                            isHighlighted: p,
                            showPlaceholderUser: !0,
                            showStatus: !0,
                            nameplatePreviewSize: "default",
                            width: _ === c.Y.SMALL ? d : f,
                        }),
                    }),
                ],
            });
        default:
            return null;
    }
}
