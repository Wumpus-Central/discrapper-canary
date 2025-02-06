n.d(t, { Z: () => P }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n.n(o),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    m = n(433517),
    h = n(481060),
    x = n(570140),
    p = n(812206),
    f = n(835473),
    _ = n(246992),
    b = n(681619),
    g = n(810568),
    v = n(168524),
    j = n(77498),
    C = n(823379),
    N = n(550532),
    T = n(71585),
    E = n(146282),
    y = n(780106),
    S = n(650613),
    k = n(789086),
    I = n(206583),
    Z = n(298149),
    O = n(941469);
let w = [
    {
        key: 'type',
        cellClassName: i()(Z.cell, Z.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(h.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(Z.cell, Z.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)('div', {
                children: (0, a.jsx)(h.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: Z.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(R, { type: t });
        }
    }
];
function R(e) {
    var t, n;
    let { type: l } = e,
        r = (0, u.e7)([E.Z], () => E.Z.getFilters()),
        i = null !== (n = null == r ? void 0 : null === (t = r.types) || void 0 === t ? void 0 : t.has(l)) && void 0 !== n && n;
    return (0, a.jsx)(h.XZJ, {
        value: i,
        onClick: function () {
            i
                ? x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([l]) }
                  });
        }
    });
}
function P() {
    var e, t;
    let n = (0, u.e7)([E.Z], () => E.Z.getFeed(I.YN.GLOBAL_FEED)),
        r = (0, u.e7)([E.Z], () => E.Z.getDebugImpressionCappingDisabled()),
        o = (0, u.e7)([T.Z], () => T.Z.getDebugFastImpressionCappingEnabled()),
        c = (function (e) {
            let t = s().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let n = t[e];
                return {
                    key: ''.concat(e),
                    type: n[0].content_type,
                    entries: n
                };
            });
        })(null == n ? void 0 : null === (e = n.entries) || void 0 === e ? void 0 : e.map((e) => e.content)),
        R = (0, u.e7)([E.Z], () => {
            var e;
            return (null === (e = E.Z.getFeedState(I.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [P, L] = l.useState(''),
        D = (0, u.e7)(
            [j.Z, p.Z],
            () => {
                var e, t, n;
                return parseInt(P) > 0 ? P : null !== (n = null === (e = j.Z.getGameByName(P)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = p.Z.getApplicationByName(P)) || void 0 === t ? void 0 : t.id;
            },
            [P]
        ),
        B = (0, v.Z)({
            applicationId: D,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        M = Object.entries(null !== (t = m.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        z = (0, f.Z)(M).filter(C.lm),
        F = (0, u.e7)([N.Z], () => N.Z.getFakeGameToShow());
    return (0, a.jsx)('div', {
        className: i()(O.panel),
        children: (0, a.jsxs)(h.zJl, {
            className: Z.content,
            children: [
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, a.jsx)(b.Z, {
                                columns: w,
                                data: c
                            }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(k.Z, {}),
                        (0, a.jsx)(h.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: I.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: R,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: 'Impression Capping' }),
                        (0, a.jsx)(h.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: r ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(h.LZC, { size: 8 }),
                        (0, a.jsx)(h.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                !1,
                (0, a.jsx)(S.Z, {}),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: 'Game Profile' }),
                        (0, a.jsx)(h.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && L(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (P === e.currentTarget.value ? null == B || B(e) : L(e.currentTarget.value));
                            },
                            error: P.length > 0 && null == B ? 'No game profile for '.concat(null != D ? D : P + ' - try by id', '.') : void 0,
                            style: null != B ? { border: '1px solid green' } : {}
                        }),
                        (0, a.jsx)('ul', { children: z.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(A, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, a.jsxs)(h.hjN, {
                    children: [
                        (0, a.jsx)(h.vwX, { children: 'Activity Sharing' }),
                        (0, a.jsx)(h.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, a.jsx)(h.PhF, {
                            options: y.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === F,
                            select: function (e) {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING',
                                    gameToShow: e
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: _.O$
                        })
                    ]
                })
            ]
        })
    });
}
let A = (e) => {
    let { application: t } = e,
        n = (0, v.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        });
    return (0, a.jsx)(h.P3F, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, a.jsx)(h.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
