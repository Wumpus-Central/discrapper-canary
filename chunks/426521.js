n.d(t, { U: () => k });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(99690),
    s = n(906732),
    o = n(336197),
    c = n(454585),
    d = n(171368),
    u = n(695346),
    m = n(598077),
    _ = n(594174),
    h = n(626135),
    p = n(709054),
    g = n(591759),
    f = n(833592),
    x = n(497089),
    C = n(178480),
    v = n(418316),
    E = n(526146),
    I = n(400565),
    N = n(148789),
    S = n(11825),
    T = n(981631),
    b = n(388032),
    A = n(149681),
    j = n(756688),
    y = n(886765);
function Z(e) {
    var t, n, l;
    let { item: s } = e,
        o = null === (t = s.message) || void 0 === t ? void 0 : t.content;
    if (null == o) return (0, i.jsx)('div', {});
    let d = null !== (l = _.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new m.Z(s.other_user),
        u = c.Z.parse(o);
    return (0, i.jsxs)('div', {
        className: A.messagePreviewContainer,
        children: [
            (0, i.jsx)(r.Z, {
                user: d,
                size: a.EFr.SIZE_24
            }),
            (0, i.jsx)(a.Text, {
                className: A.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: u
            })
        ]
    });
}
function R(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = c.Z.parse(t);
    return (0, i.jsx)('div', {
        className: A.calloutContainer,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function L(e) {
    let { item: t } = e,
        n = y,
        l = b.intl.string(b.t.SJTHJS);
    return (
        t.completed && ((n = j), (l = b.intl.string(b.t.f6RTAA))),
        (0, i.jsxs)('div', {
            className: A.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: A.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(a.Text, {
                    className: A.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: l
                })
            ]
        })
    );
}
let P = l.memo(function (e) {
        var t;
        let { item: r, ackedBeforeId: u } = e,
            { analyticsLocations: m } = (0, s.ZP)(),
            _ = (0, E.I)(r, u),
            b = l.useCallback(async () => {
                if ((_ || (0, f.wt)(r), null != r.item_enum && r.item_enum === x.AM.FIND_FRIENDS)) {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, i.jsx)(e, {
                                source: 'Notification Center',
                                ...t
                            });
                    });
                    return;
                }
                if (null != r.deeplink) {
                    let t = g.Z.safeParseWithQuery(r.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        i = t.path;
                    if (null == n || null == i) return;
                    if (g.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, d.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = r.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: m,
                                analyticsLocation: { section: T.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, o.Z)(i);
                    }
                    h.default.track(T.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: x.ud.CLICKED,
                        notification_center_id: r.id,
                        item_type: r.type,
                        acked: _
                    });
                }
            }, [r, _, m]),
            j = null;
        r.type === x.O7.INCOMING_FRIEND_REQUESTS && null != r.other_user && (j = (0, i.jsx)(N.Z, { userId: r.other_user.id }));
        let y = null != r.local_id,
            P = (0, v.Z)(r);
        return (0, i.jsxs)('div', {
            className: A.row,
            children: [
                (0, i.jsxs)(a.kL8, {
                    className: A.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': P,
                    onClick: b,
                    children: [
                        _ ? null : (0, i.jsx)('div', { className: A.unread }),
                        (0, i.jsx)(I.U, { item: r }),
                        (0, i.jsxs)('div', {
                            className: A.body,
                            children: [
                                'lifecycle_item' === r.type && null != r.item_enum && (0, i.jsx)(L, { item: r }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: _ ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof P ? P : c.Z.parse(P)
                                }),
                                (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(Z, { item: r }) : null,
                                null != r.callout ? (0, i.jsx)(R, { item: r }) : null,
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: _ ? 'text-muted' : 'header-secondary',
                                    children: (0, C.a3)(p.default.extractTimestamp(r.id))
                                }),
                                j
                            ]
                        })
                    ]
                }),
                y ? null : (0, i.jsx)(S.z, { item: r })
            ]
        });
    }),
    k = l.memo(function (e) {
        let { items: t } = e,
            n = u.d$.useSetting();
        return (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    P,
                    {
                        item: e,
                        ackedBeforeId: n
                    },
                    e.id
                )
            )
        });
    });
