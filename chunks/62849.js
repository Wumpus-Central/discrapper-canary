t.d(n, { A: () => _, P: () => M });
var l = t(477900),
    r = t(582128),
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
    k = t(317525),
    y = t(71393),
    C = t(994500),
    b = t(287809),
    N = t(147036),
    S = t(403362),
    w = t(73510),
    $ = t(375708);
function M(e) {
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
    (0, S.xb)(n);
}
function _(e) {
    let { channelId: n, guildId: r, messageId: h } = e,
        x = (0, d.A)(n),
        {
            name: j,
            iconType: p,
            isForumPost: I,
            hasAccess: k,
        } = (0, a.cf)([A.A, b.default, C.A], () => {
            let e = A.A.getChannel(n);
            return {
                name: null != e ? (0, c.m1)(e, b.default, C.A) : void 0,
                iconType: (0, N.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, u.nc)(e),
            };
        }, [n]),
        y = (0, v.p)();
    if (null == p) return;
    let S = r === y?.guildId || null == r,
        w =
            k || x.isSubscriptionGated
                ? S || null == j
                    ? (0, l.jsx)(m.A, {
                          iconType: p,
                          children: j ?? (0, l.jsx)("em", { children: $.intl.string($.t.J90oLW) }),
                      })
                    : (0, l.jsx)(E, { guildId: r, children: j })
                : (0, l.jsx)(m.A, { iconType: "locked", children: $.intl.string($.t["/YzI63"]) }),
        M = null;
    return (
        null != h &&
            (M = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(f.A, {}), (0, l.jsx)(m.A, { iconType: I ? "post" : "message" })],
            })),
        (0, l.jsxs)(g.A, {
            role: "link",
            onClick: function (e) {
                e?.stopPropagation(), (0, o.o)(r, n, h), (0, s.closeAllModals)();
            },
            onContextMenu: function (e) {
                let r = A.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("343266"), t.e("404391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: h });
                });
            },
            className: "channelMention",
            children: [w, M],
        })
    );
}
function E(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([y.A], () => y.A.getGuild(n), [n]);
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
        s = (0, a.bG)([k.A], () => (null != r ? k.A.getRole(r, n)?.name : null) ?? $.intl.string($.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(p.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function L(e) {
    let { id: n } = e,
        t = (0, v.p)();
    return (0, l.jsx)(x.A, { gameId: n, authorId: t?.authorId });
}
function T(e) {
    let { roleName: n } = e,
        t = (0, v.p)();
    return (0, l.jsx)(p.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function G(e) {
    let { id: n, name: t } = e,
        a = (0, v.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${w.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(h.gn, { node: i, children: t });
}
