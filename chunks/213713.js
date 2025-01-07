n.d(t, {
    Z: function () {
        return Z;
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
    d = n(126313),
    u = n(442837),
    h = n(433517),
    m = n(481060),
    x = n(570140),
    f = n(812206),
    p = n(835473),
    b = n(681619),
    g = n(810568),
    v = n(168524),
    j = n(77498),
    C = n(823379),
    T = n(71585),
    _ = n(146282),
    S = n(650613),
    N = n(789086),
    y = n(206583),
    k = n(298149),
    I = n(941469);
let E = [
    {
        key: 'type',
        cellClassName: i()(k.cell, k.cellType),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(m.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(k.cell, k.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)('div', {
                children: (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: k.cell,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(w, { type: t });
        }
    }
];
function w(e) {
    var t, n;
    let { type: a } = e,
        l = (0, u.e7)([_.Z], () => _.Z.getFilters()),
        i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(a)) && void 0 !== n && n;
    return (0, r.jsx)(m.Checkbox, {
        value: i,
        onClick: function () {
            i
                ? x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : x.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([a]) }
                  });
        }
    });
}
function Z() {
    var e, t;
    let n = (0, u.e7)([_.Z], () => _.Z.getFeed(y.YN.GLOBAL_FEED)),
        l = (0, u.e7)([_.Z], () => _.Z.getDebugImpressionCappingDisabled()),
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
        w = (0, u.e7)([_.Z], () => {
            var e;
            return (null === (e = _.Z.getFeedState(y.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [Z, O] = a.useState(''),
        B = (0, u.e7)(
            [j.Z, f.Z],
            () => {
                var e, t, n;
                return parseInt(Z) > 0 ? Z : null !== (n = null === (e = j.Z.getGameByName(Z)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = f.Z.getApplicationByName(Z)) || void 0 === t ? void 0 : t.id;
            },
            [Z]
        ),
        P = (0, v.Z)({
            applicationId: B,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        }),
        L = Object.entries(null !== (t = h.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        A = (0, p.Z)(L).filter(C.lm);
    return (0, r.jsx)('div', {
        className: i()(I.panel),
        children: (0, r.jsxs)(m.ScrollerThin, {
            className: k.content,
            children: [
                (0, r.jsxs)(m.FormSection, {
                    children: [
                        (0, r.jsx)(m.FormTitle, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, r.jsx)(b.Z, {
                                columns: E,
                                data: c
                            }),
                        (0, r.jsx)(m.Spacer, { size: 8 }),
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: y.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: w,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, r.jsxs)(m.FormSection, {
                    children: [
                        (0, r.jsx)(m.FormTitle, { children: 'Impression Capping' }),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, r.jsx)(m.Spacer, { size: 8 }),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, r.jsx)(m.Spacer, { size: 8 }),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, r.jsx)(m.Spacer, { size: 8 }),
                        (0, r.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, r.jsx)(S.Z, {}),
                (0, r.jsxs)(m.FormSection, {
                    children: [
                        (0, r.jsx)(m.FormTitle, { children: 'Game Profile' }),
                        (0, r.jsx)(m.TextInput, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && O(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (Z === e.currentTarget.value ? null == P || P(e) : O(e.currentTarget.value));
                            },
                            error: Z.length > 0 && null == P ? 'No game profile for '.concat(null != B ? B : Z + ' - try by id', '.') : void 0,
                            style: null != P ? { border: '1px solid green' } : {}
                        }),
                        (0, r.jsx)('ul', { children: A.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(R, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                })
            ]
        })
    });
}
let R = (e) => {
    let { application: t } = e,
        n = (0, v.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: g.m1.DevTools
        });
    return (0, r.jsx)(m.Clickable, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, r.jsx)(m.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
