n.d(t, { $: () => H });
var s = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(778712),
    r = n(834730),
    o = n(192308),
    d = n(890856),
    c = n(565645),
    u = n(730134),
    h = n(688810),
    _ = n(587895),
    A = n(22007),
    m = n(46054),
    g = n(102876),
    f = n(657331),
    E = n(253932),
    N = n(427157),
    p = n(287809),
    I = n(954571),
    C = n(661191),
    S = n(998218),
    x = n(245205),
    R = n(322387),
    y = n(995273),
    T = n(96511),
    j = n(160098),
    b = n(429604),
    D = n(9905),
    O = n(717607),
    v = n(457404),
    M = n(652215),
    F = n(985018),
    L = n(897968),
    U = n(213398),
    k = n(537997);
function G(e) {
    let { item: t } = e,
        n = t.message?.content;
    if (null == n) return (0, s.jsx)("div", {});
    let a = p.default.getUser(t.message?.author?.id) ?? new N.A(t.message?.author),
        l = m.A.parse(n);
    return (0, s.jsxs)("div", {
        className: L.PI,
        children: [
            (0, s.jsx)(u.A, { user: a, size: i._3.SIZE_24 }),
            (0, s.jsx)(r.E, { className: L.Bp, variant: "text-sm/normal", lineClamp: 2, children: l }),
        ],
    });
}
function w(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = m.A.parse(t);
    return (0, s.jsx)("div", {
        className: L.CD,
        children: (0, s.jsx)(r.E, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function P(e) {
    let { item: t } = e,
        n = k,
        a = F.intl.string(F.t.SJTHJb);
    return (
        t.completed && ((n = U), (a = F.intl.string(F.t.f6RTAM))),
        (0, s.jsxs)("div", {
            className: L.AE,
            children: [
                (0, s.jsx)("img", { className: L.kv, alt: "", src: n }),
                (0, s.jsx)(r.E, { className: L.mc, variant: "text-xs/bold", color: "text-default", children: a }),
            ],
        })
    );
}
function B(e) {
    let { applicationId: t } = e,
        n = (0, l.bG)([_.A], () => _.A.getApplication(t));
    return null == n ? (0, s.jsx)("div", {}) : (0, s.jsx)(g.A, { application: n }, n.id);
}
let K = a.memo(function (e) {
        let { item: t, ackedBeforeId: l } = e,
            { analyticsLocations: i } = (0, h.Ay)(),
            u = (0, b.t)(t, l),
            _ = a.useCallback(async () => {
                if ((u || (0, x.R7)(t), null != t.item_enum && t.item_enum === R.r_.FIND_FRIENDS))
                    return void (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e("67248").then(n.bind(n, 911539));
                        return (t) => (0, s.jsx)(e, { source: "Notification Center", ...t });
                    });
                if (null != t.deeplink) {
                    let e = S.A.safeParseWithQuery(t.deeplink);
                    if (null == e) return;
                    let n = e.hostname,
                        s = e.path;
                    if (null == n || null == s) return;
                    if (S.A.isDiscordHostname(n)) {
                        let e = s.match("^/users/(\\d+)");
                        null != e && 2 === e.length
                            ? (0, f.openUserProfileModal)({
                                  userId: e[1],
                                  messageId: t.message?.id,
                                  sourceAnalyticsLocations: i,
                              })
                            : await (0, A.A)(s);
                    }
                    I.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: R.e1.CLICKED,
                        notification_center_id: t.id,
                        item_type: t.type,
                        acked: u,
                    });
                }
            }, [t, u, i]),
            g = null;
        t.type === R.Uo.INCOMING_FRIEND_REQUESTS && null != t.other_user
            ? (g = (0, s.jsx)(O.A, { userId: t.other_user.id }))
            : t.type === R.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != t.other_user
              ? (g = (0, s.jsx)(O.A, { userId: t.other_user.id, applicationId: t.applicationId }))
              : (t.type === R.hW.FRIEND_REQUEST_ACCEPTED || t.type === R.hW.GAME_FRIEND_REQUEST_ACCEPTED) &&
                null != t.other_user &&
                (g = (0, s.jsx)(O.R, { userId: t.other_user.id }));
        let E = null != t.local_id,
            N = (0, T.A)({ item: t, renderApplication: (e) => (0, s.jsx)(B, { applicationId: e }) }),
            { emoji_id: p, emoji_name: j } = t,
            F = null != p || null != j ? (0, s.jsx)(c.A, { className: L.Zg, emojiId: p, emojiName: j }) : null;
        return (0, s.jsxs)("div", {
            className: L.nM,
            children: [
                (0, s.jsxs)(d.s, {
                    className: L.u4,
                    focusProps: { offset: 4 },
                    "aria-label": N,
                    onClick: _,
                    children: [
                        u ? null : (0, s.jsx)("div", { className: L.gy }),
                        (0, s.jsx)(D.J, { item: t }),
                        (0, s.jsxs)("div", {
                            className: L.rf,
                            children: [
                                "lifecycle_item" === t.type && null != t.item_enum && (0, s.jsx)(P, { item: t }),
                                (0, s.jsxs)(r.E, {
                                    variant: "text-md/normal",
                                    color: u ? "text-muted" : "text-default",
                                    children: ["string" != typeof N ? N : m.A.parse(N), F],
                                }),
                                t.message?.content != null ? (0, s.jsx)(G, { item: t }) : null,
                                null != t.callout ? (0, s.jsx)(w, { item: t }) : null,
                                (0, s.jsx)(r.E, {
                                    variant: "text-xs/medium",
                                    color: u ? "text-muted" : "text-default",
                                    children: (0, y.jb)(C.default.extractTimestamp(t.id)),
                                }),
                                g,
                            ],
                        }),
                    ],
                }),
                E ? null : (0, s.jsx)(v.e, { item: t }),
            ],
        });
    }),
    H = a.memo(function (e) {
        let { items: t } = e,
            n = E.ns.useSetting();
        return (
            (0, j.q)(t),
            (0, s.jsx)(s.Fragment, { children: t.map((e) => (0, s.jsx)(K, { item: e, ackedBeforeId: n }, e.id)) })
        );
    });
