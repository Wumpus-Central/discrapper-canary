n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(989349),
    l = n.n(a),
    o = n(397927),
    c = n(405269),
    d = n(927018),
    u = n(906688),
    _ = n(869295);
function m(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, d.vM)(t);
    if (null == s) return null;
    let a = null != n,
        { name: m, description: A, hideDescriptionUntilUnlock: g, onAction: E } = s,
        h = g && !a,
        p = a ? "text-strong" : "text-muted",
        C = a ? "text-default" : "text-muted",
        x = l()(n),
        T = null != E && a,
        I = T ? o.DUT : "div";
    return (0, i.jsxs)(I, {
        className: r()(_.kL, T && _.b),
        onClick: () => {
            T && E();
        },
        children: [
            (0, i.jsx)("div", {
                className: _.zc,
                children: (0, i.jsx)(u.A, { achievementId: t, size: u.A.Sizes.SIZE_40, unlocked: a }),
            }),
            (0, i.jsxs)("div", {
                className: _.VW,
                children: [
                    null != n &&
                        (0, i.jsx)(o.Text, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: _.YR,
                            children: (0, c.mk)(x),
                        }),
                    (0, i.jsx)(o.Text, { variant: "text-md/medium", color: p, children: m() }),
                    (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: C, children: h ? "?????" : A() }),
                ],
            }),
        ],
    });
}
