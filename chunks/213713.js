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
    x = a(755721),
    p = a(481060),
    h = a(570140),
    b = a(812206),
    f = a(835473),
    v = a(246992),
    g = a(681619),
    j = a(810568),
    _ = a(168524),
    y = a(77498),
    C = a(823379),
    O = a(550532),
    T = a(71585),
    N = a(146282),
    E = a(780106),
    S = a(650613),
    P = a(789086),
    I = a(206583),
    w = a(403542),
    R = a(616257);
let k = [
    {
        key: 'type',
        cellClassName: i()(w.cell, w.cellType),
        render(e) {
            let { type: t } = e;
            return (0, n.jsx)(p.Text, {
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
                children: (0, n.jsx)(p.Text, {
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
            return (0, n.jsx)(A, { type: t });
        }
    }
];
function A(e) {
    var t, a;
    let { type: r } = e,
        l = (0, u.e7)([N.Z], () => N.Z.getFilters()),
        i = null != (a = null == l || null == (t = l.types) ? void 0 : t.has(r)) && a;
    return (0, n.jsx)(p.XZJ, {
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
    let a = (0, u.e7)([N.Z], () => N.Z.getFeed(I.YN.GLOBAL_FEED)),
        l = (0, u.e7)([N.Z], () => N.Z.getDebugImpressionCappingDisabled()),
        i = (0, u.e7)([T.Z], () => T.Z.getDebugFastImpressionCappingEnabled()),
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
        c = (0, u.e7)([N.Z], () => {
            var e;
            return (null == (e = N.Z.getFeedState(I.YN.GLOBAL_FEED)) ? void 0 : e.loading) === !0;
        }),
        [A, Z] = r.useState(''),
        L = (0, u.e7)(
            [y.Z, b.Z],
            () => {
                var e, t, a;
                return parseInt(A) > 0 ? A : null != (a = null == (e = y.Z.getGameByName(A)) ? void 0 : e.id) ? a : null == (t = b.Z.getApplicationByName(A)) ? void 0 : t.id;
            },
            [A]
        ),
        M = (0, _.Z)({
            applicationId: L,
            location: 'DevToolsContentInventory',
            source: j.m1.DevTools
        }),
        F = Object.entries(null != (t = m.K.get('GameProfileModal')) ? t : {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        U = (0, f.Z)(F).filter(C.lm),
        B = (0, u.e7)([O.Z], () => O.Z.getFakeGameToShow());
    return (0, n.jsx)('div', {
        className: R.panel,
        children: (0, n.jsxs)(p.zJl, {
            className: w.content,
            children: [
                (0, n.jsxs)(p.hjN, {
                    children: [
                        (0, n.jsx)(p.vwX, { children: 'Inventory' }),
                        s.length > 0 &&
                            (0, n.jsx)(g.Z, {
                                columns: k,
                                data: s
                            }),
                        (0, n.jsx)(p.LZC, { size: 8 }),
                        (0, n.jsx)(P.Z, {}),
                        (0, n.jsx)(p.zxk, {
                            variant: 'primary',
                            text: 'Refresh Now',
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: I.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            loading: c
                        })
                    ]
                }),
                (0, n.jsxs)(p.hjN, {
                    children: [
                        (0, n.jsx)(p.vwX, { children: 'Impression Capping' }),
                        (0, n.jsx)(p.zxk, {
                            variant: 'primary',
                            text: 'Clear Impressions',
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            }
                        }),
                        (0, n.jsx)(p.LZC, { size: 8 }),
                        (0, n.jsx)(p.zxk, {
                            variant: 'primary',
                            text: 'Log Impressions',
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            }
                        }),
                        (0, n.jsx)(p.LZC, { size: 8 }),
                        (0, n.jsx)(p.zxk, {
                            variant: 'primary',
                            text: l ? 'Enable Impression Capping' : 'Disable Impression Capping',
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            }
                        }),
                        (0, n.jsx)(p.LZC, { size: 8 }),
                        (0, n.jsx)(p.zxk, {
                            variant: 'primary',
                            text: i ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping',
                            fullWidth: !0,
                            onClick: function () {
                                h.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            }
                        })
                    ]
                }),
                !1,
                (0, n.jsx)(S.Z, {}),
                (0, n.jsxs)(p.hjN, {
                    children: [
                        (0, n.jsx)(p.vwX, { children: 'Game Profile' }),
                        (0, n.jsx)(x.Is, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (A === e.currentTarget.value ? null == M || M(e) : Z(e.currentTarget.value));
                            },
                            error: A.length > 0 && null == M ? 'No game profile for '.concat(null != L ? L : A + ' - try by id', '.') : void 0,
                            style: null != M ? { border: '1px solid green' } : {}
                        }),
                        (0, n.jsx)('ul', { children: U.map((e) => (0, n.jsx)('li', { children: (0, n.jsx)(D, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, n.jsxs)(p.hjN, {
                    children: [
                        (0, n.jsx)(p.vwX, { children: 'Activity Sharing' }),
                        (0, n.jsx)(p.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, n.jsx)(p.PhF, {
                            options: E.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === B,
                            select: function (e) {
                                h.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING',
                                    gameToShow: e
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: v.O$
                        })
                    ]
                })
            ]
        })
    });
}
let D = (e) => {
    let { application: t } = e,
        a = (0, _.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: j.m1.DevTools
        });
    return (0, n.jsx)(p.P3F, {
        onClick: a,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, n.jsx)(p.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
