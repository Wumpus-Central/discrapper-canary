n.d(t, {
    U: function () {
        return O;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(99690),
    o = n(906732),
    s = n(336197),
    c = n(454585),
    u = n(171368),
    d = n(695346),
    m = n(598077),
    h = n(594174),
    f = n(626135),
    p = n(709054),
    _ = n(591759),
    g = n(833592),
    E = n(497089),
    C = n(178480),
    I = n(418316),
    x = n(526146),
    N = n(400565),
    v = n(148789),
    T = n(11825),
    S = n(981631),
    A = n(388032),
    b = n(586210),
    j = n(756688),
    R = n(886765);
function Z(e) {
    var t, n, r;
    let { item: o } = e,
        s = null === (t = o.message) || void 0 === t ? void 0 : t.content;
    if (null == s) return (0, i.jsx)('div', {});
    let u = null !== (r = h.default.getUser(null === (n = o.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== r ? r : new m.Z(o.other_user),
        d = c.Z.parse(s);
    return (0, i.jsxs)('div', {
        className: b.messagePreviewContainer,
        children: [
            (0, i.jsx)(a.Z, {
                user: u,
                size: l.AvatarSizes.SIZE_24
            }),
            (0, i.jsx)(l.Text, {
                className: b.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function P(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = c.Z.parse(t);
    return (0, i.jsx)('div', {
        className: b.calloutContainer,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function L(e) {
    let { item: t } = e,
        n = R,
        r = A.intl.string(A.t.SJTHJS);
    return (
        t.completed && ((n = j), (r = A.intl.string(A.t.f6RTAA))),
        (0, i.jsxs)('div', {
            className: b.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: b.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(l.Text, {
                    className: b.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: r
                })
            ]
        })
    );
}
let y = r.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: d } = e,
            { analyticsLocations: m } = (0, o.ZP)(),
            h = (0, x.I)(a, d),
            A = r.useCallback(async () => {
                if ((!h && (0, g.wt)(a), null != a.item_enum && a.item_enum === E.AM.FIND_FRIENDS)) {
                    (0, l.openModalLazy)(async () => {
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
                    let t = _.Z.safeParseWithQuery(a.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        i = t.path;
                    if (null == n || null == i) return;
                    if (_.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, u.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: m,
                                analyticsLocation: { section: S.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, s.Z)(i);
                    }
                    f.default.track(S.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: E.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: h
                    });
                }
            }, [a, h, m]),
            j = null;
        a.type === E.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user && (j = (0, i.jsx)(v.Z, { userId: a.other_user.id }));
        let R = null != a.local_id,
            y = (0, I.Z)(a);
        return (0, i.jsxs)('div', {
            className: b.row,
            children: [
                (0, i.jsxs)(l.ClickableContainer, {
                    className: b.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': y,
                    onClick: A,
                    children: [
                        h ? null : (0, i.jsx)('div', { className: b.unread }),
                        (0, i.jsx)(N.U, { item: a }),
                        (0, i.jsxs)('div', {
                            className: b.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, i.jsx)(L, { item: a }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: h ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof y ? y : c.Z.parse(y)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(Z, { item: a }) : null,
                                null != a.callout ? (0, i.jsx)(P, { item: a }) : null,
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: h ? 'text-muted' : 'header-secondary',
                                    children: (0, C.a3)(p.default.extractTimestamp(a.id))
                                }),
                                j
                            ]
                        })
                    ]
                }),
                R ? null : (0, i.jsx)(T.z, { item: a })
            ]
        });
    }),
    O = r.memo(function (e) {
        let { items: t } = e,
            n = d.d$.useSetting();
        return (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    y,
                    {
                        item: e,
                        ackedBeforeId: n
                    },
                    e.id
                )
            )
        });
    });
