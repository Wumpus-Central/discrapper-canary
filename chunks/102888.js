var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(128557),
    s = n(981631),
    o = n(388032),
    c = n(24298);
t.Z = (e) => {
    let { guild: t, onAddGuild: d } = e,
        u = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        source: s.t4x.HUB_DIRECTORY,
                        analyticsLocation: { section: s.jXE.HUB_WELCOME_CTA }
                    });
            });
        }, [t]);
    return (0, i.jsxs)('div', {
        className: c.emptyWrapper,
        children: [
            (0, i.jsx)('img', {
                className: c.emptyImage,
                alt: '',
                src: n(705845)
            }),
            (0, i.jsx)(r.Heading, {
                className: c.emptyTitle,
                variant: 'heading-xl/semibold',
                children: o.intl.format(o.t.vyvrpK, { guildName: t.name })
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                className: c.emptySubtitle,
                children: o.intl.string(o.t.WypE0t)
            }),
            null != d
                ? (0, i.jsx)(a.i, {
                      className: c.emptyCTA,
                      iconUrl: n(362827),
                      header: o.intl.string(o.t.hyK15u),
                      completed: !1,
                      onClick: d
                  })
                : null,
            (0, i.jsx)(a.i, {
                className: c.emptyCTA,
                iconUrl: n(538548),
                header: o.intl.string(o.t.L4bwJy),
                completed: !1,
                onClick: u
            })
        ]
    });
};
