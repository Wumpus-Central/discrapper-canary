n.d(t, { U: () => B });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(99690),
    o = n(906732),
    c = n(812206),
    d = n(835473),
    u = n(327419),
    m = n(336197),
    _ = n(454585),
    h = n(833062),
    p = n(171368),
    g = n(695346),
    f = n(598077),
    x = n(594174),
    C = n(626135),
    E = n(709054),
    v = n(591759),
    I = n(833592),
    N = n(497089),
    S = n(178480),
    T = n(418316),
    b = n(526146),
    A = n(119381),
    j = n(400565),
    y = n(148789),
    Z = n(11825),
    R = n(981631),
    L = n(388032),
    P = n(149681),
    k = n(756688),
    M = n(886765);
function O(e) {
    var t, n, l;
    let { item: a } = e,
        o = null === (t = a.message) || void 0 === t ? void 0 : t.content;
    if (null == o) return (0, i.jsx)('div', {});
    let c = null !== (l = x.default.getUser(null === (n = a.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new f.Z(a.other_user),
        d = _.Z.parse(o);
    return (0, i.jsxs)('div', {
        className: P.messagePreviewContainer,
        children: [
            (0, i.jsx)(s.Z, {
                user: c,
                size: r.EFr.SIZE_24
            }),
            (0, i.jsx)(r.Text, {
                className: P.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function D(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = _.Z.parse(t);
    return (0, i.jsx)('div', {
        className: P.calloutContainer,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function w(e) {
    let { item: t } = e,
        n = M,
        l = L.intl.string(L.t.SJTHJS);
    return (
        t.completed && ((n = k), (l = L.intl.string(L.t.f6RTAA))),
        (0, i.jsxs)('div', {
            className: P.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: P.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(r.Text, {
                    className: P.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: l
                })
            ]
        })
    );
}
function F(e) {
    let { applicationId: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getApplication(t));
    return null == n ? (0, i.jsx)('div', {}) : (0, i.jsx)(h.Z, { application: n }, n.id);
}
let U = l.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: s } = e,
            { analyticsLocations: c } = (0, o.ZP)(),
            d = (0, b.I)(a, s),
            h = l.useCallback(async () => {
                if ((d || (0, I.wt)(a), null != a.item_enum && a.item_enum === N.AM.FIND_FRIENDS)) {
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, i.jsx)(e, {
                                source: 'Notification Center',
                                ...t
                            });
                    });
                    return;
                }
                if (null != a.deeplink) {
                    let t = v.Z.safeParseWithQuery(a.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        i = t.path;
                    if (null == n || null == i) return;
                    if (v.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, p.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: c,
                                analyticsLocation: { section: R.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, m.Z)(i);
                    }
                    C.default.track(R.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: N.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: d
                    });
                }
            }, [a, d, c]),
            g = null;
        a.type === N.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user
            ? (g = (0, i.jsx)(y.Z, { userId: a.other_user.id }))
            : a.type === N.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != a.other_user &&
              (g = (0, i.jsx)(y.Z, {
                  userId: a.other_user.id,
                  applicationId: a.applicationId
              }));
        let f = null != a.local_id,
            x = (0, u.U)({ location: 'ForYouItems' }),
            A = (0, T.Z)({
                item: a,
                disambiguateGameRelationships: x,
                renderApplication: (e) => (0, i.jsx)(F, { applicationId: e })
            });
        return (0, i.jsxs)('div', {
            className: P.row,
            children: [
                (0, i.jsxs)(r.kL8, {
                    className: P.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': A,
                    onClick: h,
                    children: [
                        d ? null : (0, i.jsx)('div', { className: P.unread }),
                        (0, i.jsx)(j.U, { item: a }),
                        (0, i.jsxs)('div', {
                            className: P.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, i.jsx)(w, { item: a }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: d ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof A ? A : _.Z.parse(A)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(O, { item: a }) : null,
                                null != a.callout ? (0, i.jsx)(D, { item: a }) : null,
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-xs/medium',
                                    color: d ? 'text-muted' : 'header-secondary',
                                    children: (0, S.a3)(E.default.extractTimestamp(a.id))
                                }),
                                g
                            ]
                        })
                    ]
                }),
                f ? null : (0, i.jsx)(Z.z, { item: a })
            ]
        });
    }),
    B = l.memo(function (e) {
        let { items: t } = e,
            n = g.d$.useSetting(),
            l = (0, A.y)(t);
        return (
            (0, d.Z)(l),
            (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        U,
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
