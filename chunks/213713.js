n.d(t, { Z: () => Z }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    x = n(481060),
    h = n(570140),
    p = n(812206),
    b = n(835473),
    f = n(246992),
    v = n(681619),
    g = n(810568),
    j = n(168524),
    _ = n(77498),
    y = n(823379),
    O = n(550532),
    C = n(71585),
    E = n(146282),
    N = n(780106),
    S = n(650613),
    T = n(789086),
    P = n(206583),
    w = n(403542),
    k = n(616257);
let I = [
    {
        key: 'type',
        cellClassName: i()(w.cell, w.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(x.Text, {
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
            return (0, a.jsx)('div', {
                children: (0, a.jsx)(x.Text, {
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
            return (0, a.jsx)(R, { type: t });
        }
    }
];
function R(e) {
    var t, n;
    let { type: r } = e,
        l = (0, u.e7)([E.Z], () => E.Z.getFilters()),
        i = null != (n = null == l || null == (t = l.types) ? void 0 : t.has(r)) && n;
    return (0, a.jsx)(x.XZJ, {
        value: i,
        onClick: function () {
            i
                ? h.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : h.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([r]) }
                  });
        }
    });
}
function Z() {
    var e, t;
    let n = (0, u.e7)([E.Z], () => E.Z.getFeed(P.YN.GLOBAL_FEED)),
        l = (0, u.e7)([E.Z], () => E.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([C.Z], () => C.Z.getDebugFastImpressionCappingEnabled()),
        s = (function (e) {
            let t = o().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let n = t[e];
                return {
                    key: ''.concat(e),
                    type: n[0].content_type,
                    entries: n
                };
            });
        })(null == n || null == (e = n.entries) ? void 0 : e.map((e) => e.content)),
        c = (0, u.e7)([E.Z], () => {
            var e;
            return (null == (e = E.Z.getFeedState(P.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [R, Z] = r.useState(''),
        A = (0, u.e7)(
            [_.Z, p.Z],
            () => {
                var e, t, n;
                return parseInt(R) > 0 ? R : null != (n = null == (e = _.Z.getGameByName(R)) ? void 0 : e.id) ? n : null == (t = p.Z.getApplicationByName(R)) ? void 0 : t.id;
            },
            [R]
        ),
        D = (0, j.Z)({
            applicationId: A,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        M = Object.entries(null != (t = m.K.get('GameProfileModal')) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        z = (0, b.Z)(M).filter(y.lm),
        U = (0, u.e7)([O.Z], () => O.Z.getFakeGameToShow());
    return (0, a.jsx)('div', {
        className: k.panel,
        children: (0, a.jsxs)(x.zJl, {
            className: w.content,
            children: [
                (0, a.jsxs)(x.hjN, {
                    children: [
                        (0, a.jsx)(x.vwX, { children: 'Inventory' }),
                        s.length > 0 &&
                            (0, a.jsx)(v.Z, {
                                columns: I,
                                data: s
                            }),
                        (0, a.jsx)(x.LZC, { size: 8 }),
                        (0, a.jsx)(T.Z, {}),
                        (0, a.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: P.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: c,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(x.hjN, {
                    children: [
                        (0, a.jsx)(x.vwX, { children: 'Impression Capping' }),
                        (0, a.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(x.LZC, { size: 8 }),
                        (0, a.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(x.LZC, { size: 8 }),
                        (0, a.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(x.LZC, { size: 8 }),
                        (0, a.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: i ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                !1,
                (0, a.jsx)(S.Z, {}),
                (0, a.jsxs)(x.hjN, {
                    children: [
                        (0, a.jsx)(x.vwX, { children: 'Game Profile' }),
                        (0, a.jsx)(x.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (R === e.currentTarget.value ? null == D || D(e) : Z(e.currentTarget.value));
                            },
                            error: R.length > 0 && null == D ? 'No game profile for '.concat(null != A ? A : R + ' - try by id', '.') : void 0,
                            style: null != D ? { border: '1px solid green' } : {}
                        }),
                        (0, a.jsx)('ul', { children: z.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(L, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, a.jsxs)(x.hjN, {
                    children: [
                        (0, a.jsx)(x.vwX, { children: 'Activity Sharing' }),
                        (0, a.jsx)(x.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, a.jsx)(x.PhF, {
                            options: N.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === U,
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
        n = (0, j.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        });
    return (0, a.jsx)(x.P3F, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, a.jsx)(x.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
