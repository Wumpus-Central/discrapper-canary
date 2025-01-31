n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(900681),
    u = n(214715),
    m = n(308083),
    h = n(388032),
    g = n(560913);
function x(e) {
    let { trait: t, selected: n, onClick: l } = e,
        [a, o] = r.useState(!1),
        c = r.useCallback(() => o(!0), []),
        d = r.useCallback(() => o(!1), []);
    return (0, i.jsx)(
        u.Z,
        {
            variant: 'text-xs/semibold',
            color: a ? 'text-muted' : 'interactive-active',
            className: s()(g.trait, { [g.strikethrough]: a }),
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
    let { guildId: n, progress: l, traitsToHighlight: u, maskDescription: p, maskTraits: _, onTraitClick: C } = e,
        f = (0, a.e7)([c.Z], () => c.Z.getGuild(n)),
        { interests: v, description: N, playstyle: j, wildcardDescriptors: I, brandPrimaryColor: E } = l,
        b = (0, o.dQu)(o.TVs.colors.TEXT_BRAND),
        T = Array.from(v),
        S = r.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: s()(g.description, p ? g.descriptionBorderMask : void 0),
                children: [
                    (0, i.jsx)('div', { className: p ? g.descriptionMask : void 0 }),
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null == f ? void 0 : f.name
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
                                children: null !== (t = (0, m.mv)(j)) && void 0 !== t ? t : h.intl.string(h.t.JijC4O)
                            }),
                            null != f &&
                                (0, i.jsx)(d.c, {
                                    wildcardDescriptors: I,
                                    primaryColor: null != E ? E : b.hex()
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
                className: s()(g.tagsContainer, _ ? g.traitsBorderMask : void 0),
                children: [
                    (0, i.jsx)('div', { className: _ ? g.traitsMask : void 0 }),
                    (0, i.jsxs)('div', {
                        className: g.tagsCount,
                        children: [
                            (0, i.jsx)(o.DgT, {
                                size: 'xxs',
                                className: g.tags
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: h.intl.format(h.t['3vJqtr'], { n: T.length })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: g.traits,
                        children: T.map((e) =>
                            (0, i.jsx)(
                                x,
                                {
                                    trait: e,
                                    selected: S.has(e),
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
