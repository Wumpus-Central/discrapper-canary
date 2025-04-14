n.d(t, { Z: () => Z }), n(388685);
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
    O = n(71585),
    N = n(146282),
    S = n(780106),
    T = n(650613),
    E = n(789086),
    k = n(206583),
    P = n(403542),
    w = n(616257);
let I = [
    {
        key: 'type',
        cellClassName: i()(P.cell, P.cellType),
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
        cellClassName: i()(P.cell, P.cellCount),
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
        cellClassName: P.cell,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(R, { type: t });
        }
    }
];
function R(e) {
    var t, n;
    let { type: a } = e,
        l = (0, u.e7)([N.Z], () => N.Z.getFilters()),
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
function Z() {
    var e, t;
    let n = (0, u.e7)([N.Z], () => N.Z.getFeed(k.YN.GLOBAL_FEED)),
        l = (0, u.e7)([N.Z], () => N.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([O.Z], () => O.Z.getDebugFastImpressionCappingEnabled()),
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
        c = (0, u.e7)([N.Z], () => {
            var e;
            return (null == (e = N.Z.getFeedState(k.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [R, Z] = a.useState(''),
        A = (0, u.e7)(
            [j.Z, p.Z],
            () => {
                var e, t, n;
                return parseInt(R) > 0 ? R : null != (n = null == (e = j.Z.getGameByName(R)) ? void 0 : e.id) ? n : null == (t = p.Z.getApplicationByName(R)) ? void 0 : t.id;
            },
            [R]
        ),
        D = (0, v.Z)({
            applicationId: A,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        z = Object.entries(null != (t = m.K.get('GameProfileModal')) ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        B = (0, b.Z)(z).filter(y.lm),
        M = (0, u.e7)([C.Z], () => C.Z.getFakeGameToShow());
    return (0, r.jsx)('div', {
        className: w.panel,
        children: (0, r.jsxs)(x.zJl, {
            className: P.content,
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
                        (0, r.jsx)(E.Z, {}),
                        (0, r.jsx)(x.zxk, {
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: k.YN.GLOBAL_FEED,
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
                (0, r.jsx)(T.Z, {}),
                (0, r.jsxs)(x.hjN, {
                    children: [
                        (0, r.jsx)(x.vwX, { children: 'Game Profile' }),
                        (0, r.jsx)(x.oil, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (R === e.currentTarget.value ? null == D || D(e) : Z(e.currentTarget.value));
                            },
                            error: R.length > 0 && null == D ? 'No game profile for '.concat(null != A ? A : R + ' - try by id', '.') : void 0,
                            style: null != D ? { border: '1px solid green' } : {}
                        }),
                        (0, r.jsx)('ul', { children: B.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(L, { application: e }) }, 'follow-game-'.concat(e.id))) })
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
                            options: S.h.map((e) => ({
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
