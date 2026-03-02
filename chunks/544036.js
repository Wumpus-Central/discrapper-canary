n.d(i, { default: () => C });
var e = n(627968),
    s = n(64700),
    r = n(877227),
    a = n(311907),
    l = n(397927),
    o = n(166403),
    c = n(580630),
    p = n(652215),
    u = n(985018),
    d = n(592498),
    f = n(495995);
function C(t) {
    let { transitionState: i, onClose: n, amountRedeemed: C, currencyCode: g } = t,
        h = (0, c.$g)(C, g),
        k = null != (0, a.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        m = s.useCallback(() => {
            k ? (0, r.pX)(p.BVt.COLLECTIBLES_SHOP) : (0, r.pX)(p.BVt.NITRO_HOME), n();
        }, [k, n]),
        x = [
            { variant: "secondary", size: "md", text: u.intl.string(u.t["ETE/oC"]), onClick: n },
            {
                variant: "expressive",
                size: "md",
                text: k ? u.intl.string(u.t.wEQi1r) : u.intl.string(u.t["8x0jKT"]),
                onClick: m,
            },
        ];
    return (0, e.jsx)("div", {
        className: d.A,
        children: (0, e.jsx)(l.kpP, {
            transitionState: i,
            onClose: n,
            title: u.intl.string(u.t.D5lKY1),
            subtitle: u.intl.format(u.t.f3YCs1, { price: h, link: "https://discord.com/nitro" }),
            graphic: { type: "image", src: f },
            gradientColor: "purple",
            actions: x,
        }),
    });
}
