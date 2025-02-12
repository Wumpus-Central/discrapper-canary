n.d(t, { Z: () => A }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(876215),
    d = n(126313),
    u = n(442837),
    h = n(433517),
    m = n(481060),
    x = n(570140),
    _ = n(812206),
    p = n(835473),
    f = n(246992),
    b = n(681619),
    g = n(810568),
    v = n(168524),
    j = n(77498),
    C = n(823379),
    N = n(550532),
    T = n(71585),
    E = n(146282),
    S = n(780106),
    y = n(650613),
    k = n(789086),
    I = n(206583),
    R = n(166470),
    O = n(658951);
let Z = [
    {
        key: 'type',
        cellClassName: i()(R.cell, R.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(m.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(R.cell, R.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)('div', {
                children: (0, a.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: R.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(w, { type: t });
        }
    }
];
function w(e) {
    var t, n;
    let { type: r } = e,
        l = (0, u.e7)([E.Z], () => E.Z.getFilters()),
        i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(r)) && void 0 !== n && n;
    return (0, a.jsx)(m.XZJ, {
        value: i,
        onClick: function () {
            i
                ? x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([r]) }
                  });
        }
    });
}
function A() {
    var e, t;
    let n = (0, u.e7)([E.Z], () => E.Z.getFeed(I.YN.GLOBAL_FEED)),
        l = (0, u.e7)([E.Z], () => E.Z.getDebugImpressionCappingDisabled()),
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
        w = (0, u.e7)([E.Z], () => {
            var e;
            return (null === (e = E.Z.getFeedState(I.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [A, P] = r.useState(''),
        D = (0, u.e7)(
            [j.Z, _.Z],
            () => {
                var e, t, n;
                return parseInt(A) > 0 ? A : null !== (n = null === (e = j.Z.getGameByName(A)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = _.Z.getApplicationByName(A)) || void 0 === t ? void 0 : t.id;
            },
            [A]
        ),
        B = (0, v.Z)({
            applicationId: D,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        M = Object.entries(null !== (t = h.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        F = (0, p.Z)(M).filter(C.lm),
        U = (0, u.e7)([N.Z], () => N.Z.getFakeGameToShow());
    return (0, a.jsx)('div', {
        className: i()(O.panel),
        children: (0, a.jsxs)(m.zJl, {
            className: R.content,
            children: [
                (0, a.jsxs)(m.hjN, {
                    children: [
                        (0, a.jsx)(m.vwX, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, a.jsx)(b.Z, {
                                columns: Z,
                                data: c
                            }),
                        (0, a.jsx)(m.LZC, { size: 8 }),
                        (0, a.jsx)(k.Z, {}),
                        (0, a.jsx)(m.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: I.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: w,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(m.hjN, {
                    children: [
                        (0, a.jsx)(m.vwX, { children: 'Impression Capping' }),
                        (0, a.jsx)(m.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(m.LZC, { size: 8 }),
                        (0, a.jsx)(m.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(m.LZC, { size: 8 }),
                        (0, a.jsx)(m.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(m.LZC, { size: 8 }),
                        (0, a.jsx)(m.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                !1,
                (0, a.jsx)(y.Z, {}),
                (0, a.jsxs)(m.hjN, {
                    children: [
                        (0, a.jsx)(m.vwX, { children: 'Game Profile' }),
                        (0, a.jsx)(m.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && P(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (A === e.currentTarget.value ? null == B || B(e) : P(e.currentTarget.value));
                            },
                            error: A.length > 0 && null == B ? 'No game profile for '.concat(null != D ? D : A + ' - try by id', '.') : void 0,
                            style: null != B ? { border: '1px solid green' } : {}
                        }),
                        (0, a.jsx)('ul', { children: F.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(L, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, a.jsxs)(m.hjN, {
                    children: [
                        (0, a.jsx)(m.vwX, { children: 'Activity Sharing' }),
                        (0, a.jsx)(m.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, a.jsx)(m.PhF, {
                            options: S.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === U,
                            select: function (e) {
                                x.Z.dispatch({
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
    return (0, a.jsx)(m.P3F, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, a.jsx)(m.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
