n.d(t, { Z: () => E }), n(47120);
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
    _ = n(845377),
    C = n(981631),
    f = n(388032),
    v = n(586834),
    N = n(716455);
let j = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
    I = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'],
    E = (e) => {
        let { guild: t, onEnableDiscovery: n, isGuildAdmin: l } = e,
            [E, b] = (0, a.Z)(() => [s().sample(j), s().sample(I)], []);
        r.useEffect(() => {
            (0, u.z)([E, b]);
        }, [E, b]);
        let [T, S] = (0, o.Wu)([h.Z], () => [h.Z.getGuild(E), h.Z.getGuild(b)], [E, b]),
            { canEnableDiscovery: R, isPendingSuccess: Z } = (0, o.cj)(
                [m.ZP],
                () => ({
                    canEnableDiscovery: m.ZP.passesChecklist(t.id),
                    isPendingSuccess: m.ZP.isPendingSuccess(t.id)
                }),
                [t.id]
            ),
            [y, A] = (0, o.Wu)([d.Z], () => [null, d.Z.getMemberCount(t.id)], [t.id]),
            L = r.useCallback(() => {
                null != n && n();
            }, [n]),
            D = null;
        return (
            l ? (Z ? (D = f.intl.string(f.t.zP8DFx)) : R || (D = f.intl.string(f.t.ABFu19))) : (D = f.intl.string(f.t['5VbUBw'])),
            (0, i.jsxs)('div', {
                className: v.container,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: N,
                        className: v.sparkles
                    }),
                    (0, i.jsxs)('div', {
                        className: v.discoverPreview,
                        children: [
                            (0, i.jsx)(g.Z, {
                                className: v.placeholderCard,
                                disabled: !0,
                                small: !0,
                                loading: null == T,
                                guild: T
                            }),
                            (0, i.jsx)(g.Z, {
                                className: v.previewCard,
                                guild: t,
                                description: f.intl.string(f.t['0k7fyM']),
                                presenceCount: y,
                                memberCount: A
                            }),
                            (0, i.jsx)(g.Z, {
                                className: v.placeholderCard,
                                disabled: !0,
                                small: !0,
                                loading: null == S,
                                guild: S
                            })
                        ]
                    }),
                    (0, i.jsx)(c.X6q, {
                        className: v.header,
                        variant: 'heading-xl/semibold',
                        children: f.intl.string(f.t.UwPrKS)
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        className: v.valueProp,
                        color: 'header-secondary',
                        children: f.intl.format(f.t.BhkgBg, {
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
                        className: v.byline,
                        color: 'header-secondary',
                        children: f.intl.format(f.t.ALSi8v, {
                            onGuidelinesClick: () =>
                                (0, p.lW)({
                                    articleId: C.BhN.SERVER_DISCOVERY_GUIDELINES,
                                    guildId: t.id,
                                    pageView: x.d5.INTRO
                                })
                        })
                    }),
                    (0, i.jsx)(c.ua7, {
                        text: D,
                        children: (e) =>
                            (0, i.jsx)(c.zxk, {
                                ...e,
                                className: v.enableButton,
                                color: c.zxk.Colors.BRAND,
                                size: c.zxk.Sizes.LARGE,
                                disabled: !R || !l,
                                onClick: L,
                                children: f.intl.string(f.t.oBIZwc)
                            })
                    }),
                    (0, i.jsx)(_.Z, {
                        className: v.checklist,
                        guild: t,
                        guildId: t.id,
                        headerContent: (0, i.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: R
                                ? f.intl.string(f.t.XAgDU1)
                                : f.intl.format(f.t['+6Hylp'], {
                                      doesNotHook: (e, t) =>
                                          (0, i.jsx)(
                                              'strong',
                                              {
                                                  className: v.doesNot,
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
