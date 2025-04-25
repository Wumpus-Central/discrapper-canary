n.d(t, { U: () => U }), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(99690),
    s = n(906732),
    c = n(812206),
    u = n(336197),
    d = n(454585),
    p = n(833062),
    m = n(892001),
    f = n(695346),
    h = n(598077),
    g = n(594174),
    _ = n(626135),
    b = n(709054),
    x = n(591759),
    y = n(833592),
    v = n(497089),
    E = n(178480),
    O = n(418316),
    j = n(382865),
    C = n(526146),
    S = n(400565),
    I = n(148789),
    N = n(11825),
    T = n(981631),
    P = n(388032),
    A = n(884492),
    w = n(756688),
    Z = n(886765);
function R(e) {
    var t, n, i;
    let { item: l } = e,
        s = null == (t = l.message) ? void 0 : t.content;
    if (null == s) return (0, r.jsx)('div', {});
    let c = null != (i = g.default.getUser(null == (n = l.other_user) ? void 0 : n.id)) ? i : new h.Z(l.other_user),
        u = d.Z.parse(s);
    return (0, r.jsxs)('div', {
        className: A.messagePreviewContainer,
        children: [
            (0, r.jsx)(o.Z, {
                user: c,
                size: a.EFr.SIZE_24
            }),
            (0, r.jsx)(a.Text, {
                className: A.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: u
            })
        ]
    });
}
function k(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = d.Z.parse(t);
    return (0, r.jsx)('div', {
        className: A.calloutContainer,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function D(e) {
    let { item: t } = e,
        n = Z,
        i = P.intl.string(P.t.SJTHJS);
    return (
        t.completed && ((n = w), (i = P.intl.string(P.t.f6RTAA))),
        (0, r.jsxs)('div', {
            className: A.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: A.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(a.Text, {
                    className: A.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: i
                })
            ]
        })
    );
}
function L(e) {
    let { applicationId: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getApplication(t));
    return null == n ? (0, r.jsx)('div', {}) : (0, r.jsx)(p.Z, { application: n }, n.id);
}
let M = i.memo(function (e) {
        var t;
        let { item: l, ackedBeforeId: o } = e,
            { analyticsLocations: c } = (0, s.ZP)(),
            p = (0, C.I)(l, o),
            f = i.useCallback(async () => {
                if ((p || (0, y.wt)(l), null != l.item_enum && l.item_enum === v.AM.FIND_FRIENDS))
                    return void (0, a.ZDy)(async () => {
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
                if (null != l.deeplink) {
                    let t = x.Z.safeParseWithQuery(l.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (x.Z.isDiscordHostname(n)) {
                        let t = r.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, m.openUserProfileModal)({
                                userId: t[1],
                                messageId: null == (e = l.message) ? void 0 : e.id,
                                sourceAnalyticsLocations: c
                            });
                        } else await (0, u.Z)(r);
                    }
                    _.default.track(T.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: v.ud.CLICKED,
                        notification_center_id: l.id,
                        item_type: l.type,
                        acked: p
                    });
                }
            }, [l, p, c]),
            h = null;
        l.type === v.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user
            ? (h = (0, r.jsx)(I.Z, { userId: l.other_user.id }))
            : l.type === v.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != l.other_user &&
              (h = (0, r.jsx)(I.Z, {
                  userId: l.other_user.id,
                  applicationId: l.applicationId
              }));
        let g = null != l.local_id,
            j = (0, O.Z)({
                item: l,
                renderApplication: (e) => (0, r.jsx)(L, { applicationId: e })
            });
        return (0, r.jsxs)('div', {
            className: A.row,
            children: [
                (0, r.jsxs)(a.kL8, {
                    className: A.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': j,
                    onClick: f,
                    children: [
                        p ? null : (0, r.jsx)('div', { className: A.unread }),
                        (0, r.jsx)(S.U, { item: l }),
                        (0, r.jsxs)('div', {
                            className: A.body,
                            children: [
                                'lifecycle_item' === l.type && null != l.item_enum && (0, r.jsx)(D, { item: l }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: p ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof j ? j : d.Z.parse(j)
                                }),
                                (null == (t = l.message) ? void 0 : t.content) != null ? (0, r.jsx)(R, { item: l }) : null,
                                null != l.callout ? (0, r.jsx)(k, { item: l }) : null,
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: p ? 'text-muted' : 'header-secondary',
                                    children: (0, E.a3)(b.default.extractTimestamp(l.id))
                                }),
                                h
                            ]
                        })
                    ]
                }),
                g ? null : (0, r.jsx)(N.z, { item: l })
            ]
        });
    }),
    U = i.memo(function (e) {
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
