n.d(t, { $: () => B });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(730134),
    c = n(688810),
    d = n(587895),
    u = n(22007),
    h = n(46054),
    A = n(102876),
    _ = n(657331),
    m = n(253932),
    g = n(427157),
    p = n(287809),
    f = n(954571),
    x = n(661191),
    E = n(998218),
    I = n(245205),
    C = n(322387),
    N = n(995273),
    T = n(96511),
    S = n(160098),
    b = n(429604),
    y = n(9905),
    v = n(717607),
    j = n(457404),
    R = n(652215),
    O = n(985018),
    L = n(174720),
    M = n(213398),
    D = n(537997);
function U(e) {
    let { item: t } = e,
        n = t.message?.content;
    if (null == n) return (0, i.jsx)("div", {});
    let l = p.default.getUser(t.message?.author?.id) ?? new g.A(t.message?.author),
        s = h.A.parse(n);
    return (0, i.jsxs)("div", {
        className: L.PI,
        children: [
            (0, i.jsx)(o.A, { user: l, size: a._3J.SIZE_24 }),
            (0, i.jsx)(a.Text, { className: L.Bp, variant: "text-sm/normal", lineClamp: 2, children: s }),
        ],
    });
}
function G(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = h.A.parse(t);
    return (0, i.jsx)("div", {
        className: L.CD,
        children: (0, i.jsx)(a.Text, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function P(e) {
    let { item: t } = e,
        n = D,
        l = O.intl.string(O.t.SJTHJb);
    return (
        t.completed && ((n = M), (l = O.intl.string(O.t.f6RTAM))),
        (0, i.jsxs)("div", {
            className: L.AE,
            children: [
                (0, i.jsx)("img", { className: L.kv, alt: "", src: n }),
                (0, i.jsx)(a.Text, { className: L.mc, variant: "text-xs/bold", color: "text-default", children: l }),
            ],
        })
    );
}
function k(e) {
    let { applicationId: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getApplication(t));
    return null == n ? (0, i.jsx)("div", {}) : (0, i.jsx)(A.A, { application: n }, n.id);
}
let w = l.memo(function (e) {
        let { item: t, ackedBeforeId: s } = e,
            { analyticsLocations: o } = (0, c.Ay)(),
            d = (0, b.t)(t, s),
            A = l.useCallback(async () => {
                if ((d || (0, I.R7)(t), null != t.item_enum && t.item_enum === C.r_.FIND_FRIENDS))
                    return void (0, a.mMO)(async () => {
                        let { default: e } = await n.e("67248").then(n.bind(n, 911539));
                        return (t) => (0, i.jsx)(e, { source: "Notification Center", ...t });
                    });
                if (null != t.deeplink) {
                    let e = E.A.safeParseWithQuery(t.deeplink);
                    if (null == e) return;
                    let n = e.hostname,
                        i = e.path;
                    if (null == n || null == i) return;
                    if (E.A.isDiscordHostname(n)) {
                        let e = i.match("^/users/(\\d+)");
                        null != e && 2 === e.length
                            ? (0, _.openUserProfileModal)({
                                  userId: e[1],
                                  messageId: t.message?.id,
                                  sourceAnalyticsLocations: o,
                              })
                            : await (0, u.A)(i);
                    }
                    f.default.track(R.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: C.e1.CLICKED,
                        notification_center_id: t.id,
                        item_type: t.type,
                        acked: d,
                    });
                }
            }, [t, d, o]),
            m = null;
        t.type === C.Uo.INCOMING_FRIEND_REQUESTS && null != t.other_user
            ? (m = (0, i.jsx)(v.A, { userId: t.other_user.id }))
            : t.type === C.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != t.other_user
              ? (m = (0, i.jsx)(v.A, { userId: t.other_user.id, applicationId: t.applicationId }))
              : (t.type === C.hW.FRIEND_REQUEST_ACCEPTED || t.type === C.hW.GAME_FRIEND_REQUEST_ACCEPTED) &&
                null != t.other_user &&
                (m = (0, i.jsx)(v.R, { userId: t.other_user.id }));
        let g = null != t.local_id,
            p = (0, T.A)({ item: t, renderApplication: (e) => (0, i.jsx)(k, { applicationId: e }) }),
            { emoji_id: S, emoji_name: O } = t,
            M = null != S || null != O ? (0, i.jsx)(r.A, { className: L.Zg, emojiId: S, emojiName: O }) : null;
        return (0, i.jsxs)("div", {
            className: L.nM,
            children: [
                (0, i.jsxs)(a.sqX, {
                    className: L.u4,
                    focusProps: { offset: 4 },
                    "aria-label": p,
                    onClick: A,
                    children: [
                        d ? null : (0, i.jsx)("div", { className: L.gy }),
                        (0, i.jsx)(y.J, { item: t }),
                        (0, i.jsxs)("div", {
                            className: L.rf,
                            children: [
                                "lifecycle_item" === t.type && null != t.item_enum && (0, i.jsx)(P, { item: t }),
                                (0, i.jsxs)(a.Text, {
                                    variant: "text-md/normal",
                                    color: d ? "text-muted" : "text-default",
                                    children: ["string" != typeof p ? p : h.A.parse(p), M],
                                }),
                                t.message?.content != null ? (0, i.jsx)(U, { item: t }) : null,
                                null != t.callout ? (0, i.jsx)(G, { item: t }) : null,
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    color: d ? "text-muted" : "text-default",
                                    children: (0, N.jb)(x.default.extractTimestamp(t.id)),
                                }),
                                m,
                            ],
                        }),
                    ],
                }),
                g ? null : (0, i.jsx)(j.e, { item: t }),
            ],
        });
    }),
    B = l.memo(function (e) {
        let { items: t } = e,
            n = m.ns.useSetting();
        return (
            (0, S.q)(t),
            (0, i.jsx)(i.Fragment, { children: t.map((e) => (0, i.jsx)(w, { item: e, ackedBeforeId: n }, e.id)) })
        );
    });
