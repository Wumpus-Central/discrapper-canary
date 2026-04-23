n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    a = n(534514),
    r = n(834730),
    o = n(825244),
    d = n(652215),
    c = n(985018),
    u = n(478927);
let h = (e) => {
    let { guild: t, onAddGuild: h } = e,
        A = l.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                    n.bind(n, 234355),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        source: d.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: d.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: u.h2,
        children: [
            (0, i.jsx)("img", { className: u.hd, alt: "", src: n(668778) }),
            (0, i.jsx)(a.D, {
                className: u._U,
                variant: "heading-xl/semibold",
                children: c.intl.format(c.t.vyvrpC, { guildName: t.name }),
            }),
            (0, i.jsx)(r.E, { variant: "text-md/normal", className: u.YI, children: c.intl.string(c.t.WypE0i) }),
            null != h
                ? (0, i.jsx)(o.E, {
                      className: u.c5,
                      iconUrl: n(928202),
                      header: c.intl.string(c.t.hyK15i),
                      completed: !1,
                      onClick: h,
                  })
                : null,
            (0, i.jsx)(o.E, {
                className: u.c5,
                iconUrl: n(799258),
                header: c.intl.string(c.t.L4bwJ9),
                completed: !1,
                onClick: A,
            }),
        ],
    });
};
