t.d(n, { A: () => _, P: () => $ });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    i = t(192308),
    s = t(442433),
    c = t(47167),
    u = t(499211),
    d = t(376943),
    o = t(706083),
    h = t(990474),
    m = t(232042),
    x = t(266645),
    j = t(906754),
    g = t(332173),
    f = t(37632),
    p = t(593284),
    v = t(288539),
    I = t(78377),
    A = t(734057),
    y = t(317525),
    k = t(71393),
    C = t(994500),
    b = t(287809),
    N = t(871237),
    w = t(403362),
    S = t(73510),
    M = t(375708);
function $(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(_, { channelId: String(t) });
        case "user":
            return (0, l.jsx)(P, { id: String(t) });
        case "role":
            return (0, l.jsx)(z, { id: String(t) });
        case "everyone":
            return (0, l.jsx)(T, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(T, { roleName: "@here" });
        case "game":
            return (0, l.jsx)(L, { id: String(t) });
        case "command":
            return (0, l.jsx)(G, { id: String(t.id), name: t.name });
    }
    (0, w.xb)(n);
}
function _(e) {
    let { channelId: n, guildId: r, messageId: h } = e,
        x = (0, u.A)(n),
        {
            name: j,
            iconType: p,
            isForumPost: v,
            hasAccess: y,
        } = (0, a.cf)([A.A, b.default, C.A], () => {
            let e = A.A.getChannel(n);
            return {
                name: null != e ? (0, c.m1)(e, b.default, C.A) : void 0,
                iconType: (0, N.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, d.nc)(e),
            };
        }, [n]),
        k = (0, I.p)();
    if (null == p) return;
    let w = r === k?.guildId || null == r,
        S =
            y || x.isSubscriptionGated
                ? w || null == j
                    ? (0, l.jsx)(m.A, {
                          iconType: p,
                          children: j ?? (0, l.jsx)("em", { children: M.intl.string(M.t.J90oLW) }),
                      })
                    : (0, l.jsx)(E, { guildId: r, children: j })
                : (0, l.jsx)(m.A, { iconType: "locked", children: M.intl.string(M.t["/YzI63"]) }),
        $ = null;
    return (
        null != h &&
            ($ = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(f.A, {}), (0, l.jsx)(m.A, { iconType: v ? "post" : "message" })],
            })),
        (0, l.jsxs)(g.A, {
            role: "link",
            onClick: function (e) {
                e?.stopPropagation(), (0, o.o)(r, n, h), (0, i.closeAllModals)();
            },
            onContextMenu: function (e) {
                let r = A.A.getChannel(n);
                (0, s.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("343266"), t.e("404391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: h });
                });
            },
            className: "channelMention",
            children: [S, $],
        })
    );
}
function E(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([k.A], () => k.A.getGuild(n), [n]);
    return (0, l.jsxs)(j.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(f.A, {}) : null, t] });
}
function P(e) {
    let { id: n } = e,
        t = (0, I.p)();
    return (0, l.jsx)(v.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function z(e) {
    let { id: n } = e,
        t = (0, I.p)(),
        r = t?.guildId,
        i = (0, a.bG)([y.A], () => (null != r ? y.A.getRole(r, n)?.name : null) ?? M.intl.string(M.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(p.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function L(e) {
    let { id: n } = e,
        t = (0, I.p)();
    return (0, l.jsx)(x.A, { gameId: n, authorId: t?.authorId });
}
function T(e) {
    let { roleName: n } = e,
        t = (0, I.p)();
    return (0, l.jsx)(p.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function G(e) {
    let { id: n, name: t } = e,
        a = (0, I.p)(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${S.v4}${e}`).join("")}`;
        }, [n, t]),
        s = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: i }),
            [a?.channelId, i, n, t],
        );
    return (0, l.jsx)(h.gn, { node: s, children: t });
}
