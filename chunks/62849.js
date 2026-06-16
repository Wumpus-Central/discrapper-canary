t.d(n, { A: () => M, P: () => _ });
var l = t(627968),
    r = t(64700),
    a = t(17928),
    s = t(192308),
    i = t(442433),
    c = t(47167),
    d = t(499211),
    u = t(376943),
    o = t(706083),
    h = t(990474),
    m = t(232042),
    x = t(266645),
    j = t(906754),
    g = t(332173),
    f = t(37632),
    p = t(593284),
    I = t(288539),
    v = t(78377),
    A = t(734057),
    y = t(317525),
    k = t(71393),
    b = t(994500),
    C = t(287809),
    N = t(871237),
    w = t(403362),
    S = t(73510),
    $ = t(375708);
function _(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(M, { channelId: String(t) });
        case "user":
            return (0, l.jsx)(P, { id: String(t) });
        case "role":
            return (0, l.jsx)(z, { id: String(t) });
        case "everyone":
            return (0, l.jsx)(L, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(L, { roleName: "@here" });
        case "game":
            return (0, l.jsx)(T, { id: String(t) });
        case "command":
            return (0, l.jsx)(G, { id: String(t.id), name: t.name });
    }
    (0, w.xb)(n);
}
function M(e) {
    let { channelId: n, guildId: r, messageId: h } = e,
        x = (0, d.A)(n),
        {
            name: j,
            iconType: p,
            isForumPost: I,
            hasAccess: y,
        } = (0, a.cf)([A.A, C.default, b.A], () => {
            let e = A.A.getChannel(n);
            return {
                name: null != e ? (0, c.m1)(e, C.default, b.A) : void 0,
                iconType: (0, N.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, u.nc)(e),
            };
        }, [n]),
        k = (0, v.p)();
    if (null == p) return;
    let w = r === k?.guildId || null == r,
        S =
            y || x.isSubscriptionGated
                ? w || null == j
                    ? (0, l.jsx)(m.A, {
                          iconType: p,
                          children: j ?? (0, l.jsx)("em", { children: $.intl.string($.t.J90oLW) }),
                      })
                    : (0, l.jsx)(E, { guildId: r, children: j })
                : (0, l.jsx)(m.A, { iconType: "locked", children: $.intl.string($.t["/YzI63"]) }),
        _ = null;
    return (
        null != h &&
            (_ = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(f.A, {}), (0, l.jsx)(m.A, { iconType: I ? "post" : "message" })],
            })),
        (0, l.jsxs)(g.A, {
            role: "link",
            onClick: (e) => {
                e?.stopPropagation(), (0, o.o)(r, n, h), (0, s.closeAllModals)();
            },
            onContextMenu: (e) => {
                let r = A.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("43266"), t.e("4391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: h });
                });
            },
            className: "channelMention",
            children: [S, _],
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
        t = (0, v.p)();
    return (0, l.jsx)(I.A, {
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
        t = (0, v.p)(),
        r = t?.guildId,
        s = (0, a.bG)([y.A], () => (null != r ? y.A.getRole(r, n)?.name : null) ?? $.intl.string($.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(p.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function T(e) {
    let { id: n } = e,
        t = (0, v.p)();
    return (0, l.jsx)(x.A, { gameId: n, channelId: t?.channelId, authorId: t?.authorId });
}
function L(e) {
    let { roleName: n } = e,
        t = (0, v.p)();
    return (0, l.jsx)(p.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function G(e) {
    let { id: n, name: t } = e,
        a = (0, v.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${S.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(h.gn, { node: i, children: t });
}
