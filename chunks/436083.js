"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(985018),
    o = n(333354),
    l = n(277419),
    u = n(519636);
function c(e) {
    let { guild: t } = e,
        c = i.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await n.e("64251").then(n.bind(n, 430326));
                return (n) => (0, r.jsx)(e, { ...n, guildId: t.id, showLearnMore: !1 });
            });
        }, [t.id]);
    return (0, r.jsxs)(a.DUT, {
        className: l.kL,
        onClick: c,
        "aria-label": s.intl.string(o.default["103aY+"]),
        children: [
            (0, r.jsx)("img", { alt: "", className: l.xn, src: u.A }),
            (0, r.jsx)("div", { className: l.Lw }),
            (0, r.jsx)("div", {
                className: l.Rr,
                children: (0, r.jsx)(a.SfG, { size: "custom", width: 76, height: 76, color: "white" }),
            }),
        ],
    });
}
