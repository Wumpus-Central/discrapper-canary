n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
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
    f = n(812206),
    p = n(835473),
    b = n(246992),
    g = n(681619),
    v = n(810568),
    j = n(168524),
    C = n(77498),
    _ = n(823379),
    T = n(550532),
    S = n(71585),
    N = n(146282),
    y = n(780106),
    I = n(650613),
    E = n(789086),
    Z = n(206583),
    k = n(298149),
    w = n(941469);
let O = [
    {
        key: 'type',
        cellClassName: i()(k.cell, k.cellType),
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
        cellClassName: i()(k.cell, k.cellCount),
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
        cellClassName: k.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(R, { type: t });
        }
    }
];
function R(e) {
    var t, n;
    let { type: r } = e,
        l = (0, u.e7)([N.Z], () => N.Z.getFilters()),
        i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(r)) && void 0 !== n && n;
    return (0, a.jsx)(m.Checkbox, {
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
function B() {
    var e, t;
    let n = (0, u.e7)([N.Z], () => N.Z.getFeed(Z.YN.GLOBAL_FEED)),
        l = (0, u.e7)([N.Z], () => N.Z.getDebugImpressionCappingDisabled()),
        o = (0, u.e7)([S.Z], () => S.Z.getDebugFastImpressionCappingEnabled()),
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
        R = (0, u.e7)([N.Z], () => {
            var e;
            return (null === (e = N.Z.getFeedState(Z.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [B, L] = r.useState(''),
        A = (0, u.e7)(
            [C.Z, f.Z],
            () => {
                var e, t, n;
                return parseInt(B) > 0 ? B : null !== (n = null === (e = C.Z.getGameByName(B)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = f.Z.getApplicationByName(B)) || void 0 === t ? void 0 : t.id;
            },
            [B]
        ),
        F = (0, j.Z)({
            applicationId: A,
            location: 'DevToolsContentInventory',
            source: v.m1.DevTools
        }),
        D = Object.entries(null !== (t = h.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        M = (0, p.Z)(D).filter(_.lm),
        H = (0, u.e7)([T.Z], () => T.Z.getFakeGameToShow());
    return (0, a.jsx)('div', {
        className: i()(w.panel),
        children: (0, a.jsxs)(m.ScrollerThin, {
            className: k.content,
            children: [
                (0, a.jsxs)(m.FormSection, {
                    children: [
                        (0, a.jsx)(m.FormTitle, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, a.jsx)(g.Z, {
                                columns: O,
                                data: c
                            }),
                        (0, a.jsx)(m.Spacer, { size: 8 }),
                        (0, a.jsx)(E.Z, {}),
                        (0, a.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: Z.YN.GLOBAL_FEED,
                                    feature: d.L.INBOX
                                });
                            },
                            submitting: R,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(m.FormSection, {
                    children: [
                        (0, a.jsx)(m.FormTitle, { children: 'Impression Capping' }),
                        (0, a.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(m.Spacer, { size: 8 }),
                        (0, a.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(m.Spacer, { size: 8 }),
                        (0, a.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(m.Spacer, { size: 8 }),
                        (0, a.jsx)(m.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                x.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, a.jsx)(I.Z, {}),
                (0, a.jsxs)(m.FormSection, {
                    children: [
                        (0, a.jsx)(m.FormTitle, { children: 'Game Profile' }),
                        (0, a.jsx)(m.TextInput, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && L(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (B === e.currentTarget.value ? null == F || F(e) : L(e.currentTarget.value));
                            },
                            error: B.length > 0 && null == F ? 'No game profile for '.concat(null != A ? A : B + ' - try by id', '.') : void 0,
                            style: null != F ? { border: '1px solid green' } : {}
                        }),
                        (0, a.jsx)('ul', { children: M.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(P, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                }),
                (0, a.jsxs)(m.FormSection, {
                    children: [
                        (0, a.jsx)(m.FormTitle, { children: 'Activity Sharing' }),
                        (0, a.jsx)(m.Text, {
                            variant: 'text-md/normal',
                            children: 'Force show game:'
                        }),
                        (0, a.jsx)(m.Select, {
                            options: y.h.map((e) => ({
                                label: e,
                                value: e
                            })),
                            isSelected: (e) => e === H,
                            select: function (e) {
                                x.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING',
                                    gameToShow: e
                                });
                            },
                            serialize: (e) => e,
                            popoutLayerContext: b.O$
                        })
                    ]
                })
            ]
        })
    });
}
let P = (e) => {
    let { application: t } = e,
        n = (0, j.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: v.m1.DevTools
        });
    return (0, a.jsx)(m.Clickable, {
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
