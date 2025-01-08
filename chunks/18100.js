n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(900681),
    u = n(214715),
    m = n(308083),
    h = n(388032),
    g = n(560913);
function x(e) {
    let { trait: t, selected: n, onClick: l } = e,
        [s, o] = r.useState(!1),
        c = r.useCallback(() => o(!0), []),
        d = r.useCallback(() => o(!1), []);
    return (0, i.jsx)(
        u.Z,
        {
            variant: 'text-xs/semibold',
            color: s ? 'text-muted' : 'interactive-active',
            className: a()(g.trait, { [g.strikethrough]: s }),
            text: t,
            selected: n,
            onMouseEnter: n ? c : void 0,
            onMouseLeave: n ? d : void 0,
            onClick: n ? l : void 0
        },
        t
    );
}
function p(e) {
    var t;
    let { guildId: n, progress: l, traitsToHighlight: u, maskDescription: p, maskTraits: f, onTraitClick: C } = e,
        v = (0, s.e7)([c.Z], () => c.Z.getGuild(n)),
        { interests: _, description: N, playstyle: I, wildcardDescriptors: T, brandPrimaryColor: j } = l,
        b = (0, o.useToken)(o.tokens.colors.TEXT_BRAND),
        S = Array.from(_),
        E = r.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: a()(g.description, p ? g.descriptionBorderMask : void 0),
                children: [
                    (0, i.jsx)('div', { className: p ? g.descriptionMask : void 0 }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null == v ? void 0 : v.name
                    }),
                    (0, i.jsxs)('div', {
                        className: g.clanInfoRow,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                className: g.clanInfoItem,
                                children: (0, i.jsx)('span', {
                                    role: 'img',
                                    'aria-label': h.intl.string(h.t.eMSBIC),
                                    children: '\uD83C\uDFAE'
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: g.clanInfoItem,
                                children: null !== (t = (0, m.mv)(I)) && void 0 !== t ? t : h.intl.string(h.t.JijC4O)
                            }),
                            null != v &&
                                (0, i.jsx)(d.cS, {
                                    wildcardDescriptors: T,
                                    primaryColor: null != j ? j : b.hex()
                                })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: g.descriptionText,
                        children: (null == N ? void 0 : N.length) > 0 ? N : h.intl.string(h.t['/pfXKi'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: a()(g.tagsContainer, f ? g.traitsBorderMask : void 0),
                children: [
                    (0, i.jsx)('div', { className: f ? g.traitsMask : void 0 }),
                    (0, i.jsxs)('div', {
                        className: g.tagsCount,
                        children: [
                            (0, i.jsx)(o.TagsIcon, {
                                size: 'xxs',
                                className: g.tags
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: h.intl.format(h.t['3vJqtr'], { n: S.length })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: g.traits,
                        children: S.map((e) =>
                            (0, i.jsx)(
                                x,
                                {
                                    trait: e,
                                    selected: E.has(e),
                                    onClick: C
                                },
                                e
                            )
                        )
                    })
                ]
            })
        ]
    });
}
