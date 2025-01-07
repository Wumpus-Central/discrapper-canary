n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(876215),
    d = n(442837),
    u = n(433517),
    h = n(481060),
    m = n(570140),
    x = n(812206),
    f = n(835473),
    p = n(681619),
    b = n(810568),
    g = n(168524),
    v = n(77498),
    j = n(823379),
    C = n(71585),
    T = n(146282),
    _ = n(650613),
    S = n(789086),
    N = n(206583),
    y = n(298149),
    k = n(941469);
let I = [
    {
        key: 'type',
        cellClassName: i()(y.cell, y.cellType),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(y.cell, y.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)('div', {
                children: (0, r.jsx)(h.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: y.cell,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(E, { type: t });
        }
    }
];
function E(e) {
    var t, n;
    let { type: a } = e,
        l = (0, d.e7)([T.Z], () => T.Z.getFilters()),
        i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(a)) && void 0 !== n && n;
    return (0, r.jsx)(h.Checkbox, {
        value: i,
        onClick: function () {
            i
                ? m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([a]) }
                  });
        }
    });
}
function w() {
    var e, t;
    let n = (0, d.e7)([T.Z], () => T.Z.getFeed(N.YN.GLOBAL_FEED)),
        l = (0, d.e7)([T.Z], () => T.Z.getDebugImpressionCappingDisabled()),
        o = (0, d.e7)([C.Z], () => C.Z.getDebugFastImpressionCappingEnabled()),
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
        E = (0, d.e7)([T.Z], () => {
            var e;
            return (null === (e = T.Z.getFeedState(N.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [w, R] = a.useState(''),
        O = (0, d.e7)(
            [v.Z, x.Z],
            () => {
                var e, t, n;
                return parseInt(w) > 0 ? w : null !== (n = null === (e = v.Z.getGameByName(w)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = x.Z.getApplicationByName(w)) || void 0 === t ? void 0 : t.id;
            },
            [w]
        ),
        B = (0, g.Z)({
            applicationId: O,
            location: 'DevToolsContentInventory',
            source: b.m1.DevTools
        }),
        P = Object.entries(null !== (t = u.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        L = (0, f.Z)(P).filter(j.lm);
    return (0, r.jsx)('div', {
        className: i()(k.panel),
        children: (0, r.jsxs)(h.ScrollerThin, {
            className: y.content,
            children: [
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, r.jsx)(p.Z, {
                                columns: I,
                                data: c
                            }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: N.YN.GLOBAL_FEED
                                });
                            },
                            submitting: E,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Impression Capping' }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, r.jsx)(_.Z, {}),
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Game Profile' }),
                        (0, r.jsx)(h.TextInput, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && R(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (w === e.currentTarget.value ? null == B || B(e) : R(e.currentTarget.value));
                            },
                            error: w.length > 0 && null == B ? 'No game profile for '.concat(null != O ? O : w + ' - try by id', '.') : void 0,
                            style: null != B ? { border: '1px solid green' } : {}
                        }),
                        (0, r.jsx)('ul', { children: L.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(Z, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                })
            ]
        })
    });
}
let Z = (e) => {
    let { application: t } = e,
        n = (0, g.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: b.m1.DevTools
        });
    return (0, r.jsx)(h.Clickable, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, r.jsx)(h.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
