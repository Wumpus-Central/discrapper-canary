"use strict";
n.d(t, { $: () => V });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(565645),
    o = n(730134),
    c = n(688810),
    d = n(587895),
    u = n(22007),
    h = n(46054),
    A = n(102876),
    m = n(657331),
    p = n(253932),
    g = n(427157),
    _ = n(287809),
    f = n(954571),
    x = n(661191),
    C = n(998218),
    E = n(245205),
    I = n(322387),
    N = n(995273),
    b = n(96511),
    S = n(160098),
    T = n(429604),
    v = n(9905),
    y = n(717607),
    j = n(457404),
    R = n(652215),
    O = n(985018),
    L = n(595351),
    M = n(213398),
    D = n(537997);
function G(e) {
    let { item: t } = e,
        n = t.message?.content;
    if (null == n) return (0, i.jsx)("div", {});
    let s = _.default.getUser(t.message?.author?.id) ?? new g.A(t.message?.author),
        l = h.A.parse(n);
    return (0, i.jsxs)("div", {
        className: L.PI,
        children: [
            (0, i.jsx)(o.A, { user: s, size: r._3J.SIZE_24 }),
            (0, i.jsx)(r.Text, { className: L.Bp, variant: "text-sm/normal", lineClamp: 2, children: l }),
        ],
    });
}
function U(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = h.A.parse(t);
    return (0, i.jsx)("div", {
        className: L.CD,
        children: (0, i.jsx)(r.Text, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function P(e) {
    let { item: t } = e,
        n = D,
        s = O.intl.string(O.t.SJTHJb);
    return (
        t.completed && ((n = M), (s = O.intl.string(O.t.f6RTAM))),
        (0, i.jsxs)("div", {
            className: L.AE,
            children: [
                (0, i.jsx)("img", { className: L.kv, alt: "", src: n }),
                (0, i.jsx)(r.Text, { className: L.mc, variant: "text-xs/bold", color: "text-default", children: s }),
            ],
        })
    );
}
function w(e) {
    let { applicationId: t } = e,
        n = (0, l.bG)([d.A], () => d.A.getApplication(t));
    return null == n ? (0, i.jsx)("div", {}) : (0, i.jsx)(A.A, { application: n }, n.id);
}
let k = s.memo(function (e) {
        let { item: t, ackedBeforeId: l } = e,
            { analyticsLocations: o } = (0, c.Ay)(),
            d = (0, T.t)(t, l),
            A = s.useCallback(async () => {
                if ((d || (0, E.R7)(t), null != t.item_enum && t.item_enum === I.r_.FIND_FRIENDS))
                    return void (0, r.mMO)(async () => {
                        let { default: e } = await n.e("67248").then(n.bind(n, 911539));
                        return (t) => (0, i.jsx)(e, { source: "Notification Center", ...t });
                    });
                if (null != t.deeplink) {
                    let e = C.A.safeParseWithQuery(t.deeplink);
                    if (null == e) return;
                    let n = e.hostname,
                        i = e.path;
                    if (null == n || null == i) return;
                    if (C.A.isDiscordHostname(n)) {
                        let e = i.match("^/users/(\\d+)");
                        null != e && 2 === e.length
                            ? (0, m.openUserProfileModal)({
                                  userId: e[1],
                                  messageId: t.message?.id,
                                  sourceAnalyticsLocations: o,
                              })
                            : await (0, u.A)(i);
                    }
                    f.default.track(R.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: I.e1.CLICKED,
                        notification_center_id: t.id,
                        item_type: t.type,
                        acked: d,
                    });
                }
            }, [t, d, o]),
            p = null;
        t.type === I.Uo.INCOMING_FRIEND_REQUESTS && null != t.other_user
            ? (p = (0, i.jsx)(y.A, { userId: t.other_user.id }))
            : t.type === I.Uo.INCOMING_GAME_FRIEND_REQUESTS &&
              null != t.other_user &&
              (p = (0, i.jsx)(y.A, { userId: t.other_user.id, applicationId: t.applicationId }));
        let g = null != t.local_id,
            _ = (0, b.A)({ item: t, renderApplication: (e) => (0, i.jsx)(w, { applicationId: e }) }),
            { emoji_id: S, emoji_name: O } = t,
            M = null != S || null != O ? (0, i.jsx)(a.A, { className: L.Zg, emojiId: S, emojiName: O }) : null;
        return (0, i.jsxs)("div", {
            className: L.nM,
            children: [
                (0, i.jsxs)(r.sqX, {
                    className: L.u4,
                    focusProps: { offset: 4 },
                    "aria-label": _,
                    onClick: A,
                    children: [
                        d ? null : (0, i.jsx)("div", { className: L.gy }),
                        (0, i.jsx)(v.J, { item: t }),
                        (0, i.jsxs)("div", {
                            className: L.rf,
                            children: [
                                "lifecycle_item" === t.type && null != t.item_enum && (0, i.jsx)(P, { item: t }),
                                (0, i.jsxs)(r.Text, {
                                    variant: "text-md/normal",
                                    color: d ? "text-muted" : "text-default",
                                    children: ["string" != typeof _ ? _ : h.A.parse(_), M],
                                }),
                                t.message?.content != null ? (0, i.jsx)(G, { item: t }) : null,
                                null != t.callout ? (0, i.jsx)(U, { item: t }) : null,
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    color: d ? "text-muted" : "text-default",
                                    children: (0, N.jb)(x.default.extractTimestamp(t.id)),
                                }),
                                p,
                            ],
                        }),
                    ],
                }),
                g ? null : (0, i.jsx)(j.e, { item: t }),
            ],
        });
    }),
    V = s.memo(function (e) {
        let { items: t } = e,
            n = p.ns.useSetting();
        return (
            (0, S.q)(t),
            (0, i.jsx)(i.Fragment, { children: t.map((e) => (0, i.jsx)(k, { item: e, ackedBeforeId: n }, e.id)) })
        );
    });
