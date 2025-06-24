n.d(t, { U: () => G }), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(596454),
    a = n(99690),
    c = n(906732),
    u = n(812206),
    d = n(336197),
    h = n(454585),
    p = n(833062),
    f = n(892001),
    g = n(695346),
    m = n(598077),
    b = n(594174),
    _ = n(626135),
    O = n(709054),
    y = n(591759),
    v = n(833592),
    C = n(497089),
    j = n(178480),
    E = n(418316),
    S = n(382865),
    x = n(526146),
    I = n(400565),
    P = n(148789),
    N = n(11825),
    w = n(981631),
    Z = n(388032),
    T = n(884492),
    A = n(756688),
    R = n(886765);
function D(e) {
    var t, n, i, l, s;
    let { item: c } = e,
        u = null == (t = c.message) ? void 0 : t.content;
    if (null == u) return (0, r.jsx)('div', {});
    let d = null != (s = b.default.getUser(null == (i = c.message) || null == (n = i.author) ? void 0 : n.id)) ? s : new m.Z(null == (l = c.message) ? void 0 : l.author),
        p = h.Z.parse(u);
    return (0, r.jsxs)('div', {
        className: T.messagePreviewContainer,
        children: [
            (0, r.jsx)(a.Z, {
                user: d,
                size: o.EFr.SIZE_24
            }),
            (0, r.jsx)(o.Text, {
                className: T.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: p
            })
        ]
    });
}
function L(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = h.Z.parse(t);
    return (0, r.jsx)('div', {
        className: T.calloutContainer,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function M(e) {
    let { item: t } = e,
        n = R,
        i = Z.intl.string(Z.t.SJTHJS);
    return (
        t.completed && ((n = A), (i = Z.intl.string(Z.t.f6RTAA))),
        (0, r.jsxs)('div', {
            className: T.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: T.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(o.Text, {
                    className: T.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: i
                })
            ]
        })
    );
}
function k(e) {
    let { applicationId: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getApplication(t));
    return null == n ? (0, r.jsx)('div', {}) : (0, r.jsx)(p.Z, { application: n }, n.id);
}
let U = i.memo(function (e) {
        var t;
        let { item: l, ackedBeforeId: a } = e,
            { analyticsLocations: u } = (0, c.ZP)(),
            p = (0, x.I)(l, a),
            g = i.useCallback(async () => {
                if ((p || (0, v.wt)(l), null != l.item_enum && l.item_enum === C.AM.FIND_FRIENDS))
                    return void (0, o.ZDy)(async () => {
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
                    let t = y.Z.safeParseWithQuery(l.deeplink);
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
                                messageId: null == (e = l.message) ? void 0 : e.id,
                                sourceAnalyticsLocations: u
                            });
                        } else await (0, d.Z)(r);
                    }
                    _.default.track(w.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: C.ud.CLICKED,
                        notification_center_id: l.id,
                        item_type: l.type,
                        acked: p
                    });
                }
            }, [l, p, u]),
            m = null;
        l.type === C.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user
            ? (m = (0, r.jsx)(P.Z, { userId: l.other_user.id }))
            : l.type === C.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != l.other_user &&
              (m = (0, r.jsx)(P.Z, {
                  userId: l.other_user.id,
                  applicationId: l.applicationId
              }));
        let b = null != l.local_id,
            S = (0, E.Z)({
                item: l,
                renderApplication: (e) => (0, r.jsx)(k, { applicationId: e })
            }),
            { emoji_id: Z, emoji_name: A } = l,
            R =
                null != Z || null != A
                    ? (0, r.jsx)(s.Z, {
                          className: T.emoji,
                          emojiId: Z,
                          emojiName: A
                      })
                    : null;
        return (0, r.jsxs)('div', {
            className: T.row,
            children: [
                (0, r.jsxs)(o.kL8, {
                    className: T.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': S,
                    onClick: g,
                    children: [
                        p ? null : (0, r.jsx)('div', { className: T.unread }),
                        (0, r.jsx)(I.U, { item: l }),
                        (0, r.jsxs)('div', {
                            className: T.body,
                            children: [
                                'lifecycle_item' === l.type && null != l.item_enum && (0, r.jsx)(M, { item: l }),
                                (0, r.jsxs)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: p ? 'text-muted' : 'text-normal',
                                    children: ['string' != typeof S ? S : h.Z.parse(S), R]
                                }),
                                (null == (t = l.message) ? void 0 : t.content) != null ? (0, r.jsx)(D, { item: l }) : null,
                                null != l.callout ? (0, r.jsx)(L, { item: l }) : null,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: p ? 'text-muted' : 'header-secondary',
                                    children: (0, j.a3)(O.default.extractTimestamp(l.id))
                                }),
                                m
                            ]
                        })
                    ]
                }),
                b ? null : (0, r.jsx)(N.z, { item: l })
            ]
        });
    }),
    G = i.memo(function (e) {
        let { items: t } = e,
            n = g.d$.useSetting();
        return (
            (0, S.c)(t),
            (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
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
