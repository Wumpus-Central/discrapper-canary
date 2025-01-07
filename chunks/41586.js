n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(954955),
    s = n.n(r),
    c = n(498607),
    C = n.n(c),
    d = n(149765),
    u = n(399606),
    m = n(780384),
    h = n(481060),
    x = n(102560),
    b = n(210887),
    f = n(496675),
    g = n(910693),
    p = n(588215),
    H = n(893966),
    j = n(527379),
    v = n(855935),
    N = n(231338),
    L = n(388032),
    I = n(78878);
let _ = o.forwardRef(function (e, t) {
    let { guild: n } = e,
        i = (0, u.e7)([H.Z], () => H.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        r = (0, u.e7)([b.Z], () => (0, m.wj)(b.Z.theme)),
        c = (0, u.e7)([f.Z], () => f.Z.can(d.$e(N.Pl.MANAGE_GUILD, N.Pl.KICK_MEMBERS), n)),
        _ = o.useCallback(() => {
            if (null != n && !!c)
                (0, h.openModalLazy)(
                    async () => (e) =>
                        (0, l.jsx)(x.Z, {
                            ...e,
                            guild: n
                        })
                );
        }, [n, c]),
        M = (0, u.e7)([H.Z], () => H.Z.getSearchStateByGuildId(n.id), [n.id], C()),
        Z = (0, g.gm)(n.id),
        [R, D] = o.useState(M.query),
        S = null != M.selectedSort && M.selectedSort !== p.d$.ORDER_BY_GUILD_JOINED_AT_DESC && M.selectedSort !== p.d$.ORDER_BY_UNSPECIFIED,
        V = o.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && Z(), (0, j.Dr)(n.id, { query: t });
            },
            [n.id, Z]
        ),
        T = o.useMemo(() => s()(V, 300), [V]),
        E = o.useCallback(
            (e) => {
                D(e), T(e);
            },
            [T]
        ),
        w = o.useCallback(() => {
            D(''), V('');
        }, [V]);
    return (
        o.useImperativeHandle(t, () => ({
            resetSearchText() {
                D('');
            }
        })),
        (0, l.jsxs)('div', {
            className: a()(I.searchHeaderContainer),
            children: [
                (0, l.jsx)('div', {
                    className: a()(I.searchHeader),
                    children: i
                        ? (0, l.jsx)(h.Heading, {
                              variant: 'heading-md/medium',
                              children: L.intl.string(L.t.y12ALC)
                          })
                        : (0, l.jsx)(h.Heading, {
                              variant: 'heading-md/medium',
                              children: L.intl.string(L.t.BUqwKy)
                          })
                }),
                (0, l.jsx)('div', {
                    className: a()(I.searchInput),
                    children: (0, l.jsx)('div', {
                        className: a()(I.searchHeader),
                        children: (0, l.jsx)(h.SearchBar, {
                            className: I.searchBar,
                            query: R,
                            placeholder: L.intl.string(L.t.NVoAMz),
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
                (0, l.jsx)('div', {
                    children: (0, l.jsx)(h.Popout, {
                        animation: h.Popout.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, l.jsx)(v.Z, {
                                guildId: n.id,
                                onClose: void 0
                            }),
                        children: (e) => {
                            let { onClick: t, ...n } = e;
                            return (0, l.jsx)(h.Button, {
                                ...n,
                                onClick: t,
                                'aria-label': L.intl.string(L.t.XvNMNj),
                                color: r ? h.Button.Colors.PRIMARY : h.Button.Colors.TRANSPARENT,
                                look: r ? h.Button.Looks.FILLED : h.Button.Looks.OUTLINED,
                                size: h.Button.Sizes.SMALL,
                                children: (0, l.jsxs)('div', {
                                    className: I.sortButton,
                                    children: [
                                        (0, l.jsx)(h.ArrowsUpDownIcon, {
                                            size: 'xs',
                                            color: S ? h.tokens.colors.INTERACTIVE_ACTIVE.css : h.tokens.colors.HEADER_SECONDARY.css
                                        }),
                                        (0, l.jsx)(h.Text, {
                                            variant: 'text-sm/medium',
                                            color: S ? 'interactive-active' : 'header-secondary',
                                            className: I.sortText,
                                            children: L.intl.string(L.t.XvNMNj)
                                        })
                                    ]
                                })
                            });
                        }
                    })
                }),
                (0, l.jsx)('div', {
                    className: a()(I.tableOptions),
                    children:
                        c &&
                        (0, l.jsx)(h.Button, {
                            className: a()(I.__invalid_pruneButton),
                            onClick: _,
                            'aria-label': L.intl.string(L.t.zbyz7u),
                            color: h.Button.Colors.RED,
                            look: h.Button.Looks.OUTLINED,
                            size: h.Button.Sizes.SMALL,
                            children: L.intl.string(L.t['2mIlKS'])
                        })
                })
            ]
        })
    );
});
t.Z = _;
