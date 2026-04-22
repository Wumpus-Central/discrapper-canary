r.d(t, { A: () => c });
var a = r(627968);
r(64700);
var s = r(834730),
    n = r(827734),
    o = r(309326),
    i = r(337322),
    l = r(144580);
function c(e) {
    let { powerup: t } = e,
        r = (0, i.A)(t);
    return (0, a.jsx)("div", {
        className: l.kL,
        children: r.map((e) => {
            let { Icon: t } = (0, o.a)(e.perkIcon, !1);
            return (0, a.jsxs)(
                "div",
                {
                    className: l.d_,
                    children: [
                        (0, a.jsx)(t, { color: n.A.colors.TEXT_MUTED, className: l.Kk }),
                        (0, a.jsx)(s.E, {
                            className: l.Qq,
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
