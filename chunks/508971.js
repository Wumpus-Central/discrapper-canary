n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(989349),
    r = n.n(a),
    o = n(939249),
    d = n(834730),
    u = n(405269),
    c = n(927018),
    g = n(906688),
    m = n(523896);
function _(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        s = (0, c.vM)(t);
    if (null == s) return null;
    let a = null != n,
        { name: _, description: A, hideDescriptionUntilUnlock: h, onAction: p } = s,
        x = h && !a,
        E = a ? "text-strong" : "text-muted",
        T = a ? "text-default" : "text-muted",
        S = r()(n),
        f = null != p && a,
        b = f ? o.D : "div";
    return (0, i.jsxs)(b, {
        className: l()(m.kL, f && m.b),
        onClick: () => {
            f && p();
        },
        children: [
            (0, i.jsx)("div", {
                className: m.zc,
                children: (0, i.jsx)(g.A, { achievementId: t, size: g.A.Sizes.SIZE_40, unlocked: a }),
            }),
            (0, i.jsxs)("div", {
                className: m.VW,
                children: [
                    null != n &&
                        (0, i.jsx)(d.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: m.YR,
                            children: (0, u.mk)(S),
                        }),
                    (0, i.jsx)(d.E, { variant: "text-md/medium", color: E, children: _() }),
                    (0, i.jsx)(d.E, { variant: "text-xs/normal", color: T, children: x ? "?????" : A() }),
                ],
            }),
        ],
    });
}
