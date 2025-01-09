n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    s = n.n(l),
    a = n(252759),
    o = n(442837),
    c = n(481060),
    d = n(650774),
    u = n(21297),
    m = n(118215),
    h = n(30766),
    g = n(166184),
    x = n(654351),
    p = n(259674),
    f = n(845377),
    C = n(981631),
    v = n(388032),
    N = n(442344),
    _ = n(716455);
let I = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
    T = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'];
t.Z = (e) => {
    let { guild: t, onEnableDiscovery: n, isGuildAdmin: l } = e,
        [j, b] = (0, a.Z)(() => [s().sample(I), s().sample(T)], []);
    r.useEffect(() => {
        (0, u.z)([j, b]);
    }, [j, b]);
    let [E, S] = (0, o.Wu)([h.Z], () => [h.Z.getGuild(j), h.Z.getGuild(b)], [j, b]),
        { canEnableDiscovery: R, isPendingSuccess: y } = (0, o.cj)(
            [m.ZP],
            () => ({
                canEnableDiscovery: m.ZP.passesChecklist(t.id),
                isPendingSuccess: m.ZP.isPendingSuccess(t.id)
            }),
            [t.id]
        ),
        [A, Z] = (0, o.Wu)([d.Z], () => [null, d.Z.getMemberCount(t.id)], [t.id]),
        L = r.useCallback(() => {
            null != n && n();
        }, [n]),
        D = null;
    return (
        l ? (y ? (D = v.intl.string(v.t.zP8DFx)) : !R && (D = v.intl.string(v.t.ABFu19))) : (D = v.intl.string(v.t['5VbUBw'])),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    src: _,
                    className: N.sparkles
                }),
                (0, i.jsxs)('div', {
                    className: N.discoverPreview,
                    children: [
                        (0, i.jsx)(g.Z, {
                            className: N.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == E,
                            guild: E
                        }),
                        (0, i.jsx)(g.Z, {
                            className: N.previewCard,
                            guild: t,
                            description: v.intl.string(v.t['0k7fyM']),
                            presenceCount: A,
                            memberCount: Z
                        }),
                        (0, i.jsx)(g.Z, {
                            className: N.placeholderCard,
                            disabled: !0,
                            small: !0,
                            loading: null == S,
                            guild: S
                        })
                    ]
                }),
                (0, i.jsx)(c.Heading, {
                    className: N.header,
                    variant: 'heading-xl/semibold',
                    children: v.intl.string(v.t.UwPrKS)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: N.valueProp,
                    color: 'header-secondary',
                    children: v.intl.format(v.t.BhkgBg, {
                        onLinkClick: () =>
                            (0, p.lW)({
                                articleId: C.BhN.SERVER_DISCOVERY,
                                guildId: t.id,
                                pageView: x.d5.INTRO
                            })
                    })
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: N.byline,
                    color: 'header-secondary',
                    children: v.intl.format(v.t.ALSi8v, {
                        onGuidelinesClick: () =>
                            (0, p.lW)({
                                articleId: C.BhN.SERVER_DISCOVERY_GUIDELINES,
                                guildId: t.id,
                                pageView: x.d5.INTRO
                            })
                    })
                }),
                (0, i.jsx)(c.Tooltip, {
                    text: D,
                    children: (e) =>
                        (0, i.jsx)(c.Button, {
                            ...e,
                            className: N.enableButton,
                            color: c.Button.Colors.BRAND,
                            size: c.Button.Sizes.LARGE,
                            disabled: !R || !l,
                            onClick: L,
                            children: v.intl.string(v.t.oBIZwc)
                        })
                }),
                (0, i.jsx)(f.Z, {
                    className: N.checklist,
                    guild: t,
                    guildId: t.id,
                    headerContent: (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        children: R
                            ? v.intl.string(v.t.XAgDU1)
                            : v.intl.format(v.t['+6Hylp'], {
                                  doesNotHook: (e, t) =>
                                      (0, i.jsx)(
                                          'strong',
                                          {
                                              className: N.doesNot,
                                              children: e
                                          },
                                          t
                                      )
                              })
                    })
                })
            ]
        })
    );
};
