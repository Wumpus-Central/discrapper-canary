n.d(t, { Z: () => p }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(481060),
    c = n(55935),
    u = n(955204),
    d = n(674680),
    f = n(663530);
function p(e) {
    let { achievementId: t, dateUnlocked: n } = e,
        i = (0, u.oX)(t);
    if (null == i) return null;
    let o = null != n,
        { name: p, description: _, hideDescriptionUntilUnlock: m, onAction: h } = i,
        g = m && !o,
        E = o ? "text-strong" : "text-muted",
        b = o ? "text-default" : "text-muted",
        y = s()(n),
        O = null != h && o,
        v = () => {
            O && h();
        },
        S = O ? l.P3F : "div";
    return (0, r.jsxs)(S, {
        className: a()(f.container, O && f.actionable),
        onClick: v,
        children: [
            (0, r.jsx)("div", {
                className: f.iconContainer,
                children: (0, r.jsx)(d.Z, {
                    achievementId: t,
                    size: d.Z.Sizes.SIZE_40,
                    unlocked: o,
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.nameContainer,
                children: [
                    null != n &&
                        (0, r.jsx)(l.Text, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: f.unlocked,
                            children: (0, c.Y4)(y),
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
