e.d(a, { A: () => n });
var i = e(477900);
e(582128);
var l = e(503698),
    c = e.n(l),
    d = e(174645);
function r(s) {
    let {
        muted: a = !1,
        highlighted: e = !1,
        avatar: l,
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
        className: c()(d.Zp, v, { [d.SU]: a, [d.mr]: e }),
        children: [
            (0, i.jsx)("div", { className: c()(d.my, t), children: l }),
            (0, i.jsxs)("div", {
                className: c()(d.Qs, { [d.e8]: m }),
                children: [
                    (0, i.jsxs)("div", {
                        className: d.BG,
                        children: [(0, i.jsx)("div", { className: d.UU, children: n }), r],
                    }),
                    null != h ? (0, i.jsx)("div", { className: d.Sv, children: h }) : null,
                ],
            }),
        ],
    });
}
r.displayName = "AvatarWithText";
let n = r;
