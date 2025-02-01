l.d(t, { Z: () => L }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(954955),
    r = l.n(s),
    c = l(498607),
    C = l.n(c),
    d = l(149765),
    u = l(399606),
    m = l(780384),
    h = l(481060),
    x = l(102560),
    g = l(210887),
    H = l(496675),
    b = l(910693),
    p = l(588215),
    _ = l(893966),
    j = l(527379),
    f = l(855935),
    v = l(231338),
    N = l(388032),
    Z = l(78878);
let L = a.forwardRef(function (e, t) {
    let { guild: l } = e,
        i = (0, u.e7)([_.Z], () => _.Z.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        s = (0, u.e7)([g.Z], () => (0, m.wj)(g.Z.theme)),
        c = (0, u.e7)([H.Z], () => H.Z.can(d.$e(v.Pl.MANAGE_GUILD, v.Pl.KICK_MEMBERS), l)),
        L = a.useCallback(() => {
            null != l &&
                c &&
                (0, h.ZDy)(
                    async () => (e) =>
                        (0, n.jsx)(x.Z, {
                            ...e,
                            guild: l
                        })
                );
        }, [l, c]),
        R = (0, u.e7)([_.Z], () => _.Z.getSearchStateByGuildId(l.id), [l.id], C()),
        M = (0, b.gm)(l.id),
        [I, V] = a.useState(R.query),
        D = null != R.selectedSort && R.selectedSort !== p.d$.ORDER_BY_GUILD_JOINED_AT_DESC && R.selectedSort !== p.d$.ORDER_BY_UNSPECIFIED,
        S = a.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && M(), (0, j.Dr)(l.id, { query: t });
            },
            [l.id, M]
        ),
        T = a.useMemo(() => r()(S, 300), [S]),
        E = a.useCallback(
            (e) => {
                V(e), T(e);
            },
            [T]
        ),
        w = a.useCallback(() => {
            V(''), S('');
        }, [S]);
    return (
        a.useImperativeHandle(t, () => ({
            resetSearchText() {
                V('');
            }
        })),
        (0, n.jsxs)('div', {
            className: o()(Z.searchHeaderContainer),
            children: [
                (0, n.jsx)('div', {
                    className: o()(Z.searchHeader),
                    children: i
                        ? (0, n.jsx)(h.X6q, {
                              variant: 'heading-md/medium',
                              children: N.intl.string(N.t.y12ALC)
                          })
                        : (0, n.jsx)(h.X6q, {
                              variant: 'heading-md/medium',
                              children: N.intl.string(N.t.BUqwKy)
                          })
                }),
                (0, n.jsx)('div', {
                    className: o()(Z.searchInput),
                    children: (0, n.jsx)('div', {
                        className: o()(Z.searchHeader),
                        children: (0, n.jsx)(h.E1j, {
                            className: Z.searchBar,
                            query: I,
                            placeholder: N.intl.string(N.t.NVoAMz),
                            onChange: E,
                            onClear: w,
                            autoComplete: 'off',
                            inputProps: {
                                autoCapitalize: 'none',
                                autoCorrect: 'off',
                                spellCheck: 'false'
                            }
                        })
                    })
                }),
                (0, n.jsx)('div', {
                    children: (0, n.jsx)(h.yRy, {
                        animation: h.yRy.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, n.jsx)(f.Z, {
                                guildId: l.id,
                                onClose: void 0
                            }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(h.zxk, {
                                ...l,
                                onClick: t,
                                'aria-label': N.intl.string(N.t.XvNMNj),
                                color: s ? h.zxk.Colors.PRIMARY : h.zxk.Colors.TRANSPARENT,
                                look: s ? h.zxk.Looks.FILLED : h.zxk.Looks.OUTLINED,
                                size: h.zxk.Sizes.SMALL,
                                children: (0, n.jsxs)('div', {
                                    className: Z.sortButton,
                                    children: [
                                        (0, n.jsx)(h.uVW, {
                                            size: 'xs',
                                            color: D ? h.TVs.colors.INTERACTIVE_ACTIVE.css : h.TVs.colors.HEADER_SECONDARY.css
                                        }),
                                        (0, n.jsx)(h.Text, {
                                            variant: 'text-sm/medium',
                                            color: D ? 'interactive-active' : 'header-secondary',
                                            className: Z.sortText,
                                            children: N.intl.string(N.t.XvNMNj)
                                        })
                                    ]
                                })
                            });
                        }
                    })
                }),
                (0, n.jsx)('div', {
                    className: o()(Z.tableOptions),
                    children:
                        c &&
                        (0, n.jsx)(h.zxk, {
                            className: o()(Z.__invalid_pruneButton),
                            onClick: L,
                            'aria-label': N.intl.string(N.t.zbyz7u),
                            color: h.zxk.Colors.RED,
                            look: h.zxk.Looks.OUTLINED,
                            size: h.zxk.Sizes.SMALL,
                            children: N.intl.string(N.t['2mIlKS'])
                        })
                })
            ]
        })
    );
});
