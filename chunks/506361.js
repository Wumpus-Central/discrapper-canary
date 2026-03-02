r.d(t, { A: () => l });
var a = r(627968);
r(64700);
var s = r(158954),
    n = r(827734),
    o = r(309326),
    i = r(337322),
    c = r(640073);
function l(e) {
    let { powerup: t } = e,
        r = (0, i.A)(t);
    return (0, a.jsx)("div", {
        className: c.kL,
        children: r.map((e) => {
            let { Icon: t } = (0, o.a)(e.perkIcon, !1);
            return (0, a.jsxs)(
                "div",
                {
                    className: c.d_,
                    children: [
                        (0, a.jsx)(t, { color: n.A.colors.TEXT_MUTED, className: c.Kk }),
                        (0, a.jsx)(s.EYj, {
                            className: c.Qq,
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: e.description,
                        }),
                    ],
                },
                `perk-${e.perkIcon}`,
            );
        }),
    });
}
