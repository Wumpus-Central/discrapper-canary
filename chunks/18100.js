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
    p = n(388032),
    g = n(802145);
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
            className: a()(g.trait, { [g.strikethrough]: l }),
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
        { interests: N, description: v, playstyle: _, wildcardDescriptors: O, brandPrimaryColor: y } = s,
        C = (0, o.dQu)(o.TVs.colors.TEXT_BRAND),
        I = Array.from(N),
        E = i.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: a()(g.description, f ? g.descriptionBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: f ? g.descriptionMask : void 0 }),
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        lineClamp: 1,
                        children: null == j ? void 0 : j.name
                    }),
                    (0, r.jsxs)('div', {
                        className: g.clanInfoRow,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xxs/normal',
                                className: g.clanInfoItem,
                                children: (0, r.jsx)('span', {
                                    role: 'img',
                                    'aria-label': p.NW.string(p.t.eMSBIC),
                                    children: '\uD83C\uDFAE'
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: g.clanInfoItem,
                                children: null !== (t = (0, m.mv)(_)) && void 0 !== t ? t : p.NW.string(p.t.JijC4O)
                            }),
                            null != j &&
                                (0, r.jsx)(d.c, {
                                    wildcardDescriptors: O,
                                    primaryColor: null != y ? y : C.hex()
                                })
                        ]
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        className: g.descriptionText,
                        children: (null == v ? void 0 : v.length) > 0 ? v : p.NW.string(p.t['/pfXKi'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(g.tagsContainer, b ? g.traitsBorderMask : void 0),
                children: [
                    (0, r.jsx)('div', { className: b ? g.traitsMask : void 0 }),
                    (0, r.jsxs)('div', {
                        className: g.tagsCount,
                        children: [
                            (0, r.jsx)(o.DgT, {
                                size: 'xxs',
                                className: g.tags
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/semibold',
                                color: 'text-muted',
                                children: p.NW.format(p.t['3vJqtr'], { n: I.length })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: g.traits,
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
