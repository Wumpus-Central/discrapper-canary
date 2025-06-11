n.d(t, { U: () => F }), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(596454),
    s = n(99690),
    c = n(906732),
    u = n(812206),
    d = n(336197),
    p = n(454585),
    m = n(833062),
    f = n(892001),
    h = n(695346),
    g = n(598077),
    _ = n(594174),
    b = n(626135),
    E = n(709054),
    y = n(591759),
    x = n(833592),
    v = n(497089),
    O = n(178480),
    C = n(418316),
    j = n(382865),
    S = n(526146),
    I = n(400565),
    N = n(148789),
    T = n(11825),
    P = n(981631),
    A = n(388032),
    w = n(884492),
    Z = n(756688),
    R = n(886765);
function k(e) {
    var t, n, i, l, o;
    let { item: c } = e,
        u = null == (t = c.message) ? void 0 : t.content;
    if (null == u) return (0, r.jsx)('div', {});
    let d = null != (o = _.default.getUser(null == (i = c.message) || null == (n = i.author) ? void 0 : n.id)) ? o : new g.Z(null == (l = c.message) ? void 0 : l.author),
        m = p.Z.parse(u);
    return (0, r.jsxs)('div', {
        className: w.messagePreviewContainer,
        children: [
            (0, r.jsx)(s.Z, {
                user: d,
                size: a.EFr.SIZE_24
            }),
            (0, r.jsx)(a.Text, {
                className: w.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: m
            })
        ]
    });
}
function D(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = p.Z.parse(t);
    return (0, r.jsx)('div', {
        className: w.calloutContainer,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function L(e) {
    let { item: t } = e,
        n = R,
        i = A.intl.string(A.t.SJTHJS);
    return (
        t.completed && ((n = Z), (i = A.intl.string(A.t.f6RTAA))),
        (0, r.jsxs)('div', {
            className: w.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: w.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(a.Text, {
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
        n = (0, l.e7)([u.Z], () => u.Z.getApplication(t));
    return null == n ? (0, r.jsx)('div', {}) : (0, r.jsx)(m.Z, { application: n }, n.id);
}
let U = i.memo(function (e) {
        var t;
        let { item: l, ackedBeforeId: s } = e,
            { analyticsLocations: u } = (0, c.ZP)(),
            m = (0, S.I)(l, s),
            h = i.useCallback(async () => {
                if ((m || (0, x.wt)(l), null != l.item_enum && l.item_enum === v.AM.FIND_FRIENDS))
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
                    b.default.track(P.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: v.ud.CLICKED,
                        notification_center_id: l.id,
                        item_type: l.type,
                        acked: m
                    });
                }
            }, [l, m, u]),
            g = null;
        l.type === v.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user
            ? (g = (0, r.jsx)(N.Z, { userId: l.other_user.id }))
            : l.type === v.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != l.other_user &&
              (g = (0, r.jsx)(N.Z, {
                  userId: l.other_user.id,
                  applicationId: l.applicationId
              }));
        let _ = null != l.local_id,
            j = (0, C.Z)({
                item: l,
                renderApplication: (e) => (0, r.jsx)(M, { applicationId: e })
            }),
            { emoji_id: A, emoji_name: Z } = l,
            R =
                null != A || null != Z
                    ? (0, r.jsx)(o.Z, {
                          className: w.emoji,
                          emojiId: A,
                          emojiName: Z
                      })
                    : null;
        return (0, r.jsxs)('div', {
            className: w.row,
            children: [
                (0, r.jsxs)(a.kL8, {
                    className: w.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': j,
                    onClick: h,
                    children: [
                        m ? null : (0, r.jsx)('div', { className: w.unread }),
                        (0, r.jsx)(I.U, { item: l }),
                        (0, r.jsxs)('div', {
                            className: w.body,
                            children: [
                                'lifecycle_item' === l.type && null != l.item_enum && (0, r.jsx)(L, { item: l }),
                                (0, r.jsxs)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: m ? 'text-muted' : 'text-normal',
                                    children: ['string' != typeof j ? j : p.Z.parse(j), R]
                                }),
                                (null == (t = l.message) ? void 0 : t.content) != null ? (0, r.jsx)(k, { item: l }) : null,
                                null != l.callout ? (0, r.jsx)(D, { item: l }) : null,
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: m ? 'text-muted' : 'header-secondary',
                                    children: (0, O.a3)(E.default.extractTimestamp(l.id))
                                }),
                                g
                            ]
                        })
                    ]
                }),
                _ ? null : (0, r.jsx)(T.z, { item: l })
            ]
        });
    }),
    F = i.memo(function (e) {
        let { items: t } = e,
            n = h.d$.useSetting();
        return (
            (0, j.c)(t),
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
