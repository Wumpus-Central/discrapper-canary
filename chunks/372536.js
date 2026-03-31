n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(825244),
    r = n(652215),
    o = n(985018),
    c = n(3580);
let d = (e) => {
    let { guild: t, onAddGuild: d } = e,
        u = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("71281")]).then(n.bind(n, 234355));
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
        className: c.h2,
        children: [
            (0, i.jsx)("img", { className: c.hd, alt: "", src: n(668778) }),
            (0, i.jsx)(s.Heading, {
                className: c._U,
                variant: "heading-xl/semibold",
                children: o.intl.format(o.t.vyvrpC, { guildName: t.name }),
            }),
            (0, i.jsx)(s.Text, { variant: "text-md/normal", className: c.YI, children: o.intl.string(o.t.WypE0i) }),
            null != d
                ? (0, i.jsx)(a.E, {
                      className: c.c5,
                      iconUrl: n(928202),
                      header: o.intl.string(o.t.hyK15i),
                      completed: !1,
                      onClick: d,
                  })
                : null,
            (0, i.jsx)(a.E, {
                className: c.c5,
                iconUrl: n(799258),
                header: o.intl.string(o.t.L4bwJ9),
                completed: !1,
                onClick: u,
            }),
        ],
    });
};
