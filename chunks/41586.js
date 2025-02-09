l.d(t, { Z: () => L }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(954955),
    r = l.n(s),
    c = l(498607),
    d = l.n(c),
    C = l(149765),
    u = l(399606),
    m = l(780384),
    h = l(481060),
    x = l(102560),
    g = l(210887),
    p = l(496675),
    _ = l(910693),
    b = l(588215),
    f = l(893966),
    j = l(527379),
    H = l(855935),
    v = l(231338),
    N = l(388032),
    Z = l(810118);
let L = a.forwardRef(function (e, t) {
    let { guild: l } = e,
        i = (0, u.e7)([f.Z], () => f.Z.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        s = (0, u.e7)([g.Z], () => (0, m.wj)(g.Z.theme)),
        c = (0, u.e7)([p.Z], () => p.Z.can(C.$e(v.Pl.MANAGE_GUILD, v.Pl.KICK_MEMBERS), l)),
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
        R = (0, u.e7)([f.Z], () => f.Z.getSearchStateByGuildId(l.id), [l.id], d()),
        I = (0, _.gm)(l.id),
        [M, V] = a.useState(R.query),
        D = null != R.selectedSort && R.selectedSort !== b.d$.ORDER_BY_GUILD_JOINED_AT_DESC && R.selectedSort !== b.d$.ORDER_BY_UNSPECIFIED,
        S = a.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && I(), (0, j.Dr)(l.id, { query: t });
            },
            [l.id, I]
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
                            query: M,
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
                            (0, n.jsx)(H.Z, {
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
