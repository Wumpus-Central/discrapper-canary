n.d(t, { U: () => U }), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(596454),
    s = n(99690),
    c = n(906732),
    u = n(812206),
    d = n(336197),
    p = n(454585),
    f = n(833062),
    h = n(892001),
    g = n(695346),
    m = n(598077),
    b = n(594174),
    _ = n(626135),
    O = n(709054),
    y = n(591759),
    v = n(833592),
    j = n(497089),
    C = n(178480),
    E = n(418316),
    x = n(382865),
    S = n(526146),
    I = n(400565),
    P = n(148789),
    N = n(11825),
    Z = n(981631),
    T = n(388032),
    w = n(17250),
    A = n(756688),
    R = n(886765);
function D(e) {
    var t, n, i, l, a;
    let { item: c } = e,
        u = null == (t = c.message) ? void 0 : t.content;
    if (null == u) return (0, r.jsx)("div", {});
    let d =
            null != (a = b.default.getUser(null == (i = c.message) || null == (n = i.author) ? void 0 : n.id))
                ? a
                : new m.Z(null == (l = c.message) ? void 0 : l.author),
        f = p.Z.parse(u);
    return (0, r.jsxs)("div", {
        className: w.messagePreviewContainer,
        children: [
            (0, r.jsx)(s.Z, {
                user: d,
                size: o.EFr.SIZE_24,
            }),
            (0, r.jsx)(o.Text, {
                className: w.messagePreviewText,
                variant: "text-sm/normal",
                lineClamp: 2,
                children: f,
            }),
        ],
    });
}
function L(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = p.Z.parse(t);
    return (0, r.jsx)("div", {
        className: w.calloutContainer,
        children: (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            lineClamp: 2,
            children: n,
        }),
    });
}
function M(e) {
    let { item: t } = e,
        n = R,
        i = T.intl.string(T.t.SJTHJb);
    return (
        t.completed && ((n = A), (i = T.intl.string(T.t.f6RTAM))),
        (0, r.jsxs)("div", {
            className: w.lifecycleContainer,
            children: [
                (0, r.jsx)("img", {
                    className: w.checkbox,
                    alt: "",
                    src: n,
                }),
                (0, r.jsx)(o.Text, {
                    className: w.lifecycleText,
                    variant: "text-xs/bold",
                    color: "header-secondary",
                    children: i,
                }),
            ],
        })
    );
}
function k(e) {
    let { applicationId: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getApplication(t));
    return null == n ? (0, r.jsx)("div", {}) : (0, r.jsx)(f.Z, { application: n }, n.id);
}
let G = i.memo(function (e) {
        var t;
        let { item: l, ackedBeforeId: s } = e,
            { analyticsLocations: u } = (0, c.ZP)(),
            f = (0, S.I)(l, s),
            g = i.useCallback(async () => {
                if ((f || (0, v.wt)(l), null != l.item_enum && l.item_enum === j.AM.FIND_FRIENDS))
                    return void (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("6074").then(n.bind(n, 443189));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({ source: "Notification Center" }, t),
                            );
                    });
                if (null != l.deeplink) {
                    let t = y.Z.safeParseWithQuery(l.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (y.Z.isDiscordHostname(n)) {
                        let t = r.match("^/users/(\\d+)");
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, h.openUserProfileModal)({
                                userId: t[1],
                                messageId: null == (e = l.message) ? void 0 : e.id,
                                sourceAnalyticsLocations: u,
                            });
                        } else await (0, d.Z)(r);
                    }
                    _.default.track(Z.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: j.ud.CLICKED,
                        notification_center_id: l.id,
                        item_type: l.type,
                        acked: f,
                    });
                }
            }, [l, f, u]),
            m = null;
        l.type === j.O7.INCOMING_FRIEND_REQUESTS && null != l.other_user
            ? (m = (0, r.jsx)(P.Z, { userId: l.other_user.id }))
            : l.type === j.O7.INCOMING_GAME_FRIEND_REQUESTS &&
              null != l.other_user &&
              (m = (0, r.jsx)(P.Z, {
                  userId: l.other_user.id,
                  applicationId: l.applicationId,
              }));
        let b = null != l.local_id,
            x = (0, E.Z)({
                item: l,
                renderApplication: (e) => (0, r.jsx)(k, { applicationId: e }),
            }),
            { emoji_id: T, emoji_name: A } = l,
            R =
                null != T || null != A
                    ? (0, r.jsx)(a.Z, {
                          className: w.emoji,
                          emojiId: T,
                          emojiName: A,
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: w.row,
            children: [
                (0, r.jsxs)(o.kL8, {
                    className: w.rowContent,
                    focusProps: { offset: 4 },
                    "aria-label": x,
                    onClick: g,
                    children: [
                        f ? null : (0, r.jsx)("div", { className: w.unread }),
                        (0, r.jsx)(I.U, { item: l }),
                        (0, r.jsxs)("div", {
                            className: w.body,
                            children: [
                                "lifecycle_item" === l.type && null != l.item_enum && (0, r.jsx)(M, { item: l }),
                                (0, r.jsxs)(o.Text, {
                                    variant: "text-md/normal",
                                    color: f ? "text-muted" : "text-default",
                                    children: ["string" != typeof x ? x : p.Z.parse(x), R],
                                }),
                                (null == (t = l.message) ? void 0 : t.content) != null
                                    ? (0, r.jsx)(D, { item: l })
                                    : null,
                                null != l.callout ? (0, r.jsx)(L, { item: l }) : null,
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: f ? "text-muted" : "header-secondary",
                                    children: (0, C.a3)(O.default.extractTimestamp(l.id)),
                                }),
                                m,
                            ],
                        }),
                    ],
                }),
                b ? null : (0, r.jsx)(N.z, { item: l }),
            ],
        });
    }),
    U = i.memo(function (e) {
        let { items: t } = e,
            n = g.d$.useSetting();
        return (
            (0, x.c)(t),
            (0, r.jsx)(r.Fragment, {
                children: t.map((e) =>
                    (0, r.jsx)(
                        G,
                        {
                            item: e,
                            ackedBeforeId: n,
                        },
                        e.id,
                    ),
                ),
            })
        );
    });
