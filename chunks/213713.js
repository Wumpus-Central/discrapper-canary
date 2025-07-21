(a.d(t, { Z: () => Z }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a.n(s),
    c = a(876215),
    d = a(126313),
    u = a(442837),
    m = a(433517),
    x = a(481060),
    p = a(570140),
    h = a(812206),
    b = a(835473),
    f = a(246992),
    v = a(681619),
    j = a(810568),
    g = a(168524),
    _ = a(77498),
    y = a(823379),
    C = a(550532),
    N = a(71585),
    O = a(146282),
    T = a(780106),
    E = a(650613),
    S = a(789086),
    P = a(206583),
    w = a(403542),
    I = a(616257);
let R = [
    {
        key: 'type',
        cellClassName: i()(w.cell, w.cellType),
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(x.Text, {
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
            return (0, n.jsx)('div', {
                children: (0, n.jsx)(x.Text, {
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
            return (0, n.jsx)(k, { type: t });
        }
    }
];
function k(e) {
    var t, a;
    let { type: r } = e,
        l = (0, u.e7)([O.Z], () => O.Z.getFilters()),
        i = null != (a = null == l || null == (t = l.types) ? void 0 : t.has(r)) && a;
    return (0, n.jsx)(x.XZJ, {
        value: i,
        onClick: function () {
            i
                ? p.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : p.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([r]) }
                  });
        }
    });
}
function Z() {
    var e, t;
    let a = (0, u.e7)([O.Z], () => O.Z.getFeed(P.YN.GLOBAL_FEED)),
        l = (0, u.e7)([O.Z], () => O.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([N.Z], () => N.Z.getDebugFastImpressionCappingEnabled()),
        s = (function (e) {
            let t = o().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let a = t[e];
                return {
                    key: ''.concat(e),
                    type: a[0].content_type,
                    entries: a
                };
            });
        })(null == a || null == (e = a.entries) ? void 0 : e.map((e) => e.content)),
        c = (0, u.e7)([O.Z], () => {
            var e;
            return (null == (e = O.Z.getFeedState(P.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [k, Z] = r.useState(''),
        D = (0, u.e7)(
            [_.Z, h.Z],
            () => {
                var e, t, a;
                return parseInt(k) > 0 ? k : null != (a = null == (e = _.Z.getGameByName(k)) ? void 0 : e.id) ? a : null == (t = h.Z.getApplicationByName(k)) ? void 0 : t.id;
            },
            [k]
        ),
        L = (0, g.Z)({
            applicationId: D,
            location: 'DevToolsContentInventory',
            source: j.m1.DevTools
        }),
        M = Object.entries(null != (t = m.K.get('GameProfileModal')) ? t : {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        U = (0, b.Z)(M).filter(y.lm),
        F = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, n.jsx)('div', {
        className: I.panel,
        children: (0, n.jsxs)(x.zJl, {
            className: w.content,
            children: [
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: 'Inventory' }),
                        s.length > 0 &&
                            (0, n.jsx)(v.Z, {
                                columns: R,
                                data: s
                            }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(S.Z, {}),
                        (0, n.jsx)(x.zxk, {
                            variant: 'primary',
                            text: 'Refresh Now',
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: P.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            loading: c
                        })
                    ]
                }),
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: 'Impression Capping' }),
                        (0, n.jsx)(x.zxk, {
                            variant: 'primary',
                            text: 'Clear Impressions',
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            }
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: 'primary',
                            text: 'Log Impressions',
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            }
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: 'primary',
                            text: l ? 'Enable Impression Capping' : 'Disable Impression Capping',
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            }
                        }),
                        (0, n.jsx)(x.LZC, { size: 8 }),
                        (0, n.jsx)(x.zxk, {
                            variant: 'primary',
                            text: i ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping',
                            fullWidth: !0,
                            onClick: function () {
                                p.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            }
                        })
                    ]
                }),
                !1,
                (0, n.jsx)(E.Z, {}),
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: 'Game Profile' }),
                        (0, n.jsx)(x.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (k === e.currentTarget.value ? null == L || L(e) : Z(e.currentTarget.value));
                            },
                            error: k.length > 0 && null == L ? 'No game profile for '.concat(null != D ? D : k + ' - try by id', '.') : void 0,
                            style: null != L ? { border: '1px solid green' } : {}
                        }),
                        (0, n.jsx)('ul', { children: U.map((e) => (0, n.jsx)('li', { children: (0, n.jsx)(A, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, n.jsxs)(x.hjN, {
                    children: [
                        (0, n.jsx)(x.vwX, { children: 'Activity Sharing' }),
                        (0, n.jsx)(x.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, n.jsx)(x.PhF, {
                            options: T.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === F,
                            select: function (e) {
                                p.Z.dispatch({
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
let A = (e) => {
    let { application: t } = e,
        a = (0, g.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: j.m1.DevTools
        });
    return (0, n.jsx)(x.P3F, {
        onClick: a,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, n.jsx)(x.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
