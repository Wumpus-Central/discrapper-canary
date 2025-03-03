n.d(t, { U: () => W }), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(99690),
    s = n(906732),
    c = n(812206),
    d = n(336197),
    u = n(454585),
    p = n(833062),
    m = n(171368),
    f = n(695346),
    h = n(598077),
    g = n(594174),
    _ = n(626135),
    b = n(709054),
    v = n(591759),
    y = n(833592),
    x = n(497089),
    O = n(178480),
    E = n(418316),
    j = n(382865),
    N = n(526146),
    C = n(400565),
    I = n(148789),
    S = n(11825),
    T = n(981631),
    P = n(388032),
    A = n(998200),
    w = n(756688),
    Z = n(886765);
function k(e) {
    var t, n, i;
    let { item: a } = e,
        s = null === (t = a.message) || void 0 === t ? void 0 : t.content;
    if (null == s) return (0, r.jsx)('div', {});
    let c = null !== (i = g.default.getUser(null === (n = a.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : new h.Z(a.other_user),
        d = u.Z.parse(s);
    return (0, r.jsxs)('div', {
        className: A.messagePreviewContainer,
        children: [
            (0, r.jsx)(l.Z, {
                user: c,
                size: o.EFr.SIZE_24
            }),
            (0, r.jsx)(o.Text, {
                className: A.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function R(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = u.Z.parse(t);
    return (0, r.jsx)('div', {
        className: A.calloutContainer,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function L(e) {
    let { item: t } = e,
        n = Z,
        i = P.NW.string(P.t.SJTHJS);
    return (
        t.completed && ((n = w), (i = P.NW.string(P.t.f6RTAA))),
        (0, r.jsxs)('div', {
            className: A.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: A.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(o.Text, {
                    className: A.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: i
                })
            ]
        })
    );
}
function D(e) {
    let { applicationId: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getApplication(t));
    return null == n ? (0, r.jsx)('div', {}) : (0, r.jsx)(p.Z, { application: n }, n.id);
}
let M = i.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: l } = e,
            { analyticsLocations: c } = (0, s.ZP)(),
            p = (0, N.I)(a, l),
            f = i.useCallback(async () => {
                if ((p || (0, y.wt)(a), null != a.item_enum && a.item_enum === x.AM.FIND_FRIENDS)) {
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
                    let t = v.Z.safeParseWithQuery(a.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (v.Z.isDiscordHostname(n)) {
                        let t = r.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, m.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: c,
                                analyticsLocation: { section: T.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, d.Z)(r);
                    }
                    _.default.track(T.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: x.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: p
                    });
                }
            }, [a, p, c]),
            h = null;
        a.type === x.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user
            ? (h = (0, r.jsx)(I.Z, { userId: a.other_user.id }))
            : a.type === x.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != a.other_user &&
              (h = (0, r.jsx)(I.Z, {
                  userId: a.other_user.id,
                  applicationId: a.applicationId
              }));
        let g = null != a.local_id,
            j = (0, E.Z)({
                item: a,
                renderApplication: (e) => (0, r.jsx)(D, { applicationId: e })
            });
        return (0, r.jsxs)('div', {
            className: A.row,
            children: [
                (0, r.jsxs)(o.kL8, {
                    className: A.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': j,
                    onClick: f,
                    children: [
                        p ? null : (0, r.jsx)('div', { className: A.unread }),
                        (0, r.jsx)(C.U, { item: a }),
                        (0, r.jsxs)('div', {
                            className: A.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, r.jsx)(L, { item: a }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: p ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof j ? j : u.Z.parse(j)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, r.jsx)(k, { item: a }) : null,
                                null != a.callout ? (0, r.jsx)(R, { item: a }) : null,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: p ? 'text-muted' : 'header-secondary',
                                    children: (0, O.a3)(b.default.extractTimestamp(a.id))
                                }),
                                h
                            ]
                        })
                    ]
                }),
                g ? null : (0, r.jsx)(S.z, { item: a })
            ]
        });
    }),
    W = i.memo(function (e) {
        let { items: t } = e,
            n = f.d$.useSetting();
        return (
            (0, j.c)(t),
            (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        M,
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
