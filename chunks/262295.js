var i = e(477900);
e(582128);
var c = e(503698),
    d = e.n(c),
    l = e(174645);
function r(s) {
    let {
        muted: a = !1,
        highlighted: e = !1,
        avatar: c,
        decorators: r,
        name: n,
        subText: h,
        avatarClassName: t,
        innerClassName: v,
        withDisplayNameStyles: m = !1,
        ref: p,
    } = s;
    return (0, i.jsxs)("div", {
        ref: p,
        className: d()(l.Zp, v, { [l.SU]: a, [l.mr]: e }),
        children: [
            (0, i.jsx)("div", { className: d()(l.my, t), children: c }),
            (0, i.jsxs)("div", {
                className: d()(l.Qs, { [l.e8]: m }),
                children: [
                    (0, i.jsxs)("div", {
                        className: l.BG,
                        children: [(0, i.jsx)("div", { className: l.UU, children: n }), r],
                    }),
                    null != h ? (0, i.jsx)("div", { className: l.Sv, children: h }) : null,
                ],
            }),
        ],
    });
}
((r.displayName = "AvatarWithText"), e.d(a, {}, { A: r }));
