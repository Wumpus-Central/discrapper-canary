n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    x = n(481060),
    h = n(570140),
    p = n(812206),
    b = n(835473),
    f = n(246992),
    _ = n(681619),
    g = n(810568),
    v = n(168524),
    j = n(77498),
    y = n(823379),
    C = n(550532),
    T = n(71585),
    S = n(146282),
    N = n(780106),
    O = n(650613),
    k = n(789086),
    E = n(206583),
    w = n(403542),
    P = n(616257);
let I = [
    {
        key: 'type',
        cellClassName: i()(w.cell, w.cellType),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(x.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(w.cell, w.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)('div', {
                children: (0, r.jsx)(x.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: w.cell,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(Z, { type: t });
        }
    }
];
function Z(e) {
    var t, n;
    let { type: a } = e,
        l = (0, u.e7)([S.Z], () => S.Z.getFilters()),
        i = null != (n = null == l || null == (t = l.types) ? void 0 : t.has(a)) && n;
    return (0, r.jsx)(x.XZJ, {
        value: i,
        onClick: function () {
            i
                ? h.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : h.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([a]) }
                  });
        }
    });
}
function R() {
    var e, t;
    let n = (0, u.e7)([S.Z], () => S.Z.getFeed(E.YN.GLOBAL_FEED)),
        l = (0, u.e7)([S.Z], () => S.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([T.Z], () => T.Z.getDebugFastImpressionCappingEnabled()),
        o = (function (e) {
            let t = s().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let n = t[e];
                return {
                    key: ''.concat(e),
                    type: n[0].content_type,
                    entries: n
                };
            });
        })(null == n || null == (e = n.entries) ? void 0 : e.map((e) => e.content)),
        c = (0, u.e7)([S.Z], () => {
            var e;
            return (null == (e = S.Z.getFeedState(E.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [Z, R] = a.useState(''),
        D = (0, u.e7)(
            [j.Z, p.Z],
            () => {
                var e, t, n;
                return parseInt(Z) > 0 ? Z : null != (n = null == (e = j.Z.getGameByName(Z)) ? void 0 : e.id) ? n : null == (t = p.Z.getApplicationByName(Z)) ? void 0 : t.id;
            },
            [Z]
        ),
        A = (0, v.Z)({
            applicationId: D,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        B = Object.entries(null != (t = m.K.get('GameProfileModal')) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        z = (0, b.Z)(B).filter(y.lm),
        M = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, r.jsx)('div', {
        className: P.panel,
        children: (0, r.jsxs)(x.zJl, {
            className: w.content,
            children: [
                (0, r.jsxs)(x.hjN, {
                    children: [
                        (0, r.jsx)(x.vwX, { children: 'Inventory' }),
                        o.length > 0 &&
                            (0, r.jsx)(_.Z, {
                                columns: I,
                                data: o
                            }),
                        (0, r.jsx)(x.LZC, { size: 8 }),
                        (0, r.jsx)(k.Z, {}),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: E.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: c,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, r.jsxs)(x.hjN, {
                    children: [
                        (0, r.jsx)(x.vwX, { children: 'Impression Capping' }),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, r.jsx)(x.LZC, { size: 8 }),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, r.jsx)(x.LZC, { size: 8 }),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, r.jsx)(x.LZC, { size: 8 }),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: i ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                !1,
                (0, r.jsx)(O.Z, {}),
                (0, r.jsxs)(x.hjN, {
                    children: [
                        (0, r.jsx)(x.vwX, { children: 'Game Profile' }),
                        (0, r.jsx)(x.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && R(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (Z === e.currentTarget.value ? null == A || A(e) : R(e.currentTarget.value));
                            },
                            error: Z.length > 0 && null == A ? 'No game profile for '.concat(null != D ? D : Z + ' - try by id', '.') : void 0,
                            style: null != A ? { border: '1px solid green' } : {}
                        }),
                        (0, r.jsx)('ul', { children: z.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(L, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, r.jsxs)(x.hjN, {
                    children: [
                        (0, r.jsx)(x.vwX, { children: 'Activity Sharing' }),
                        (0, r.jsx)(x.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, r.jsx)(x.PhF, {
                            options: N.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === M,
                            select: function (e) {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING',
                                    gameToShow: e
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: f.O$
                        })
                    ]
                })
            ]
        })
    });
}
let L = (e) => {
    let { application: t } = e,
        n = (0, v.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        });
    return (0, r.jsx)(x.P3F, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, r.jsx)(x.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
