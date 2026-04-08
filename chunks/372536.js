n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(825244),
    r = n(652215),
    o = n(985018),
    d = n(604927);
let c = (e) => {
    let { guild: t, onAddGuild: c } = e,
        u = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("67505")]).then(n.bind(n, 234355));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        source: r.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: r.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: d.h2,
        children: [
            (0, i.jsx)("img", { className: d.hd, alt: "", src: n(668778) }),
            (0, i.jsx)(s.Heading, {
                className: d._U,
                variant: "heading-xl/semibold",
                children: o.intl.format(o.t.vyvrpC, { guildName: t.name }),
            }),
            (0, i.jsx)(s.Text, { variant: "text-md/normal", className: d.YI, children: o.intl.string(o.t.WypE0i) }),
            null != c
                ? (0, i.jsx)(a.E, {
                      className: d.c5,
                      iconUrl: n(928202),
                      header: o.intl.string(o.t.hyK15i),
                      completed: !1,
                      onClick: c,
                  })
                : null,
            (0, i.jsx)(a.E, {
                className: d.c5,
                iconUrl: n(799258),
                header: o.intl.string(o.t.L4bwJ9),
                completed: !1,
                onClick: u,
            }),
        ],
    });
};
