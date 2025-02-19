n.d(t, { U: () => F }), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(99690),
    s = n(906732),
    c = n(812206),
    d = n(327419),
    u = n(336197),
    p = n(454585),
    m = n(833062),
    f = n(171368),
    h = n(695346),
    g = n(598077),
    _ = n(594174),
    b = n(626135),
    v = n(709054),
    y = n(591759),
    x = n(833592),
    O = n(497089),
    E = n(178480),
    j = n(418316),
    N = n(382865),
    C = n(526146),
    I = n(400565),
    S = n(148789),
    P = n(11825),
    T = n(981631),
    A = n(388032),
    w = n(632852),
    Z = n(756688),
    k = n(886765);
function R(e) {
    var t, n, i;
    let { item: a } = e,
        s = null === (t = a.message) || void 0 === t ? void 0 : t.content;
    if (null == s) return (0, r.jsx)('div', {});
    let c = null !== (i = _.default.getUser(null === (n = a.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : new g.Z(a.other_user),
        d = p.Z.parse(s);
    return (0, r.jsxs)('div', {
        className: w.messagePreviewContainer,
        children: [
            (0, r.jsx)(l.Z, {
                user: c,
                size: o.EFr.SIZE_24
            }),
            (0, r.jsx)(o.Text, {
                className: w.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function L(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = p.Z.parse(t);
    return (0, r.jsx)('div', {
        className: w.calloutContainer,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function D(e) {
    let { item: t } = e,
        n = k,
        i = A.NW.string(A.t.SJTHJS);
    return (
        t.completed && ((n = Z), (i = A.NW.string(A.t.f6RTAA))),
        (0, r.jsxs)('div', {
            className: w.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: w.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(o.Text, {
                    className: w.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: i
                })
            ]
        })
    );
}
function M(e) {
    let { applicationId: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getApplication(t));
    return null == n ? (0, r.jsx)('div', {}) : (0, r.jsx)(m.Z, { application: n }, n.id);
}
let W = i.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: l } = e,
            { analyticsLocations: c } = (0, s.ZP)(),
            m = (0, C.I)(a, l),
            h = i.useCallback(async () => {
                if ((m || (0, x.wt)(a), null != a.item_enum && a.item_enum === O.AM.FIND_FRIENDS)) {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({ source: 'Notification Center' }, t)
                            );
                    });
                    return;
                }
                if (null != a.deeplink) {
                    let t = y.Z.safeParseWithQuery(a.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (y.Z.isDiscordHostname(n)) {
                        let t = r.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, f.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: c,
                                analyticsLocation: { section: T.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, u.Z)(r);
                    }
                    b.default.track(T.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: O.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: m
                    });
                }
            }, [a, m, c]),
            g = null;
        a.type === O.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user
            ? (g = (0, r.jsx)(S.Z, { userId: a.other_user.id }))
            : a.type === O.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != a.other_user &&
              (g = (0, r.jsx)(S.Z, {
                  userId: a.other_user.id,
                  applicationId: a.applicationId
              }));
        let _ = null != a.local_id,
            N = (0, d.U)({ location: 'ForYouItems' }),
            A = (0, j.Z)({
                item: a,
                disambiguateGameRelationships: N,
                renderApplication: (e) => (0, r.jsx)(M, { applicationId: e })
            });
        return (0, r.jsxs)('div', {
            className: w.row,
            children: [
                (0, r.jsxs)(o.kL8, {
                    className: w.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': A,
                    onClick: h,
                    children: [
                        m ? null : (0, r.jsx)('div', { className: w.unread }),
                        (0, r.jsx)(I.U, { item: a }),
                        (0, r.jsxs)('div', {
                            className: w.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, r.jsx)(D, { item: a }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: m ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof A ? A : p.Z.parse(A)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, r.jsx)(R, { item: a }) : null,
                                null != a.callout ? (0, r.jsx)(L, { item: a }) : null,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: m ? 'text-muted' : 'header-secondary',
                                    children: (0, E.a3)(v.default.extractTimestamp(a.id))
                                }),
                                g
                            ]
                        })
                    ]
                }),
                _ ? null : (0, r.jsx)(P.z, { item: a })
            ]
        });
    }),
    F = i.memo(function (e) {
        let { items: t } = e,
            n = h.d$.useSetting();
        return (
            (0, N.c)(t),
            (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        W,
                        {
                            item: e,
                            ackedBeforeId: n
                        },
                        e.id
                    )
                )
            })
        );
    });
