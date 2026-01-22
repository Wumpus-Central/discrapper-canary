n.d(t, {
    A: () => p,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(989349),
    o = n.n(s),
    l = n(397927),
    c = n(405269),
    u = n(927018),
    d = n(906688),
    f = n(869295);

function p(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, u.vM)(t);
    if (null == i) return null;
    let s = null != n,
        { name: p, description: _, hideDescriptionUntilUnlock: h, onAction: m } = i,
        g = h && !s,
        E = s ? "text-strong" : "text-muted",
        b = s ? "text-default" : "text-muted",
        y = o()(n),
        O = null != m && s,
        A = () => {
            O && m();
        },
        v = O ? l.DUT : "div";
    return (0, r.jsxs)(v, {
        className: a()(f.kL, O && f.b),
        onClick: A,
        children: [
            (0, r.jsx)("div", {
                className: f.zc,
                children: (0, r.jsx)(d.A, {
                    achievementId: t,
                    size: d.A.Sizes.SIZE_40,
                    unlocked: s,
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.VW,
                children: [
                    null != n &&
                        (0, r.jsx)(l.Text, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: f.YR,
                            children: (0, c.mk)(y),
                        }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/medium",
                        color: E,
                        children: p(),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: b,
                        children: g ? "?????" : _(),
                    }),
                ],
            }),
        ],
    });
}
