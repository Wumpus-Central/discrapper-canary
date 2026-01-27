n.d(t, {
    A: () => p,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(397927),
    c = n(405269),
    d = n(927018),
    u = n(906688),
    _ = n(869295);

function p(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, d.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: p, description: m, hideDescriptionUntilUnlock: g, onAction: A } = i,
        f = g && !s,
        h = s ? "text-strong" : "text-muted",
        b = s ? "text-default" : "text-muted",
        E = a()(n),
        x = null != A && s,
        O = x ? o.DUT : "div";
    return (0, r.jsxs)(O, {
        className: l()(_.kL, x && _.b),
        onClick: () => {
            x && A();
        },
        children: [
            (0, r.jsx)("div", {
                className: _.zc,
                children: (0, r.jsx)(u.A, {
                    achievementId: t,
                    size: u.A.Sizes.SIZE_40,
                    unlocked: s,
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.VW,
                children: [
                    null != n &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: _.YR,
                            children: (0, c.mk)(E),
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: h,
                        children: p(),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: b,
                        children: f ? "?????" : m(),
                    }),
                ],
            }),
        ],
    });
}
