n.d(t, { U: () => U });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(99690),
    o = n(906732),
    c = n(812206),
    d = n(835473),
    u = n(336197),
    m = n(454585),
    _ = n(833062),
    h = n(171368),
    p = n(695346),
    g = n(598077),
    f = n(594174),
    x = n(626135),
    C = n(709054),
    v = n(591759),
    E = n(833592),
    I = n(497089),
    N = n(178480),
    S = n(418316),
    T = n(526146),
    b = n(119381),
    A = n(400565),
    j = n(148789),
    y = n(11825),
    Z = n(981631),
    R = n(388032),
    L = n(149681),
    P = n(756688),
    k = n(886765);
function M(e) {
    var t, n, l;
    let { item: a } = e,
        o = null === (t = a.message) || void 0 === t ? void 0 : t.content;
    if (null == o) return (0, i.jsx)('div', {});
    let c = null !== (l = f.default.getUser(null === (n = a.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new g.Z(a.other_user),
        d = m.Z.parse(o);
    return (0, i.jsxs)('div', {
        className: L.messagePreviewContainer,
        children: [
            (0, i.jsx)(s.Z, {
                user: c,
                size: r.EFr.SIZE_24
            }),
            (0, i.jsx)(r.Text, {
                className: L.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function O(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = m.Z.parse(t);
    return (0, i.jsx)('div', {
        className: L.calloutContainer,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function D(e) {
    let { item: t } = e,
        n = k,
        l = R.intl.string(R.t.SJTHJS);
    return (
        t.completed && ((n = P), (l = R.intl.string(R.t.f6RTAA))),
        (0, i.jsxs)('div', {
            className: L.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: L.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(r.Text, {
                    className: L.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: l
                })
            ]
        })
    );
}
function w(e) {
    let { applicationId: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getApplication(t));
    return null == n ? (0, i.jsx)('div', {}) : (0, i.jsx)(_.Z, { application: n }, n.id);
}
let F = l.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: s } = e,
            { analyticsLocations: c } = (0, o.ZP)(),
            d = (0, T.I)(a, s),
            _ = l.useCallback(async () => {
                if ((d || (0, E.wt)(a), null != a.item_enum && a.item_enum === I.AM.FIND_FRIENDS)) {
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
                            (0, h.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: c,
                                analyticsLocation: { section: Z.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, u.Z)(i);
                    }
                    x.default.track(Z.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: I.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: d
                    });
                }
            }, [a, d, c]),
            p = null;
        a.type === I.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user
            ? (p = (0, i.jsx)(j.Z, { userId: a.other_user.id }))
            : a.type === I.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != a.other_user &&
              (p = (0, i.jsx)(j.Z, {
                  userId: a.other_user.id,
                  applicationId: a.applicationId
              }));
        let g = null != a.local_id,
            f = (0, S.Z)({
                item: a,
                renderApplication: (e) => (0, i.jsx)(w, { applicationId: e })
            });
        return (0, i.jsxs)('div', {
            className: L.row,
            children: [
                (0, i.jsxs)(r.kL8, {
                    className: L.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': f,
                    onClick: _,
                    children: [
                        d ? null : (0, i.jsx)('div', { className: L.unread }),
                        (0, i.jsx)(A.U, { item: a }),
                        (0, i.jsxs)('div', {
                            className: L.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, i.jsx)(D, { item: a }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: d ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof f ? f : m.Z.parse(f)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(M, { item: a }) : null,
                                null != a.callout ? (0, i.jsx)(O, { item: a }) : null,
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-xs/medium',
                                    color: d ? 'text-muted' : 'header-secondary',
                                    children: (0, N.a3)(C.default.extractTimestamp(a.id))
                                }),
                                p
                            ]
                        })
                    ]
                }),
                g ? null : (0, i.jsx)(y.z, { item: a })
            ]
        });
    }),
    U = l.memo(function (e) {
        let { items: t } = e,
            n = p.d$.useSetting(),
            l = (0, b.y)(t);
        return (
            (0, d.Z)(l),
            (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        F,
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
