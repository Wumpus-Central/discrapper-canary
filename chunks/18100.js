n.d(t, { Z: () => f }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(900681),
    u = n(214715),
    m = n(308083),
    g = n(388032),
    p = n(579590);
function h(e) {
    let { trait: t, selected: n, onClick: s } = e,
        [l, o] = i.useState(!1),
        c = i.useCallback(() => o(!0), []),
        d = i.useCallback(() => o(!1), []);
    return (0, r.jsx)(
        u.Z,
        {
            variant: 'text-xs/semibold',
            color: l ? 'text-muted' : 'interactive-active',
            className: a()(p.trait, { [p.strikethrough]: l }),
            text: t,
            selected: n,
            onMouseEnter: n ? c : void 0,
            onMouseLeave: n ? d : void 0,
            onClick: n ? s : void 0
        },
        t
    );
}
function f(e) {
    var t;
    let { guildId: n, progress: s, traitsToHighlight: u, maskDescription: f, maskTraits: b, onTraitClick: x } = e,
        j = (0, l.e7)([c.Z], () => c.Z.getGuild(n)),
        { interests: N, description: _, playstyle: v, wildcardDescriptors: C, brandPrimaryColor: O } = s,
        y = (0, o.dQu)(o.TVs.colors.TEXT_BRAND),
        I = Array.from(N),
        E = i.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: a()(p.description, f ? p.descriptionBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: f ? p.descriptionMask : void 0 }),
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null == j ? void 0 : j.name
                    }),
                    (0, r.jsxs)('div', {
                        className: p.clanInfoRow,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                className: p.clanInfoItem,
                                children: (0, r.jsx)('span', {
                                    role: 'img',
                                    'aria-label': g.NW.string(g.t.eMSBIC),
                                    children: '\uD83C\uDFAE'
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: p.clanInfoItem,
                                children: null != (t = (0, m.mv)(v)) ? t : g.NW.string(g.t.JijC4O)
                            }),
                            null != j &&
                                (0, r.jsx)(d.c, {
                                    wildcardDescriptors: C,
                                    primaryColor: null != O ? O : y.hex()
                                })
                        ]
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: p.descriptionText,
                        children: (null == _ ? void 0 : _.length) > 0 ? _ : g.NW.string(g.t['/pfXKi'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(p.tagsContainer, b ? p.traitsBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: b ? p.traitsMask : void 0 }),
                    (0, r.jsxs)('div', {
                        className: p.tagsCount,
                        children: [
                            (0, r.jsx)(o.DgT, {
                                size: 'xxs',
                                className: p.tags
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: g.NW.format(g.t['3vJqtr'], { n: I.length })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: p.traits,
                        children: I.map((e) =>
                            (0, r.jsx)(
                                h,
                                {
                                    trait: e,
                                    selected: E.has(e),
                                    onClick: x
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
