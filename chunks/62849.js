t.d(n, { A: () => E, P: () => _ });
var l = t(627968),
    r = t(64700),
    a = t(17928),
    s = t(192308),
    c = t(442433),
    i = t(47167),
    d = t(721592),
    u = t(376943),
    o = t(706083),
    h = t(990474),
    m = t(232042),
    x = t(906754),
    j = t(332173),
    g = t(37632),
    f = t(593284),
    p = t(288539),
    I = t(78377),
    A = t(734057),
    v = t(317525),
    y = t(71393),
    k = t(994500),
    b = t(287809),
    N = t(147036),
    C = t(403362),
    w = t(73510),
    $ = t(985018);
function _(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(E, { channelId: t });
        case "user":
            return (0, l.jsx)(z, { id: t });
        case "role":
            return (0, l.jsx)(M, { id: t });
        case "everyone":
            return (0, l.jsx)(T, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(T, { roleName: "@here" });
        case "game":
            return (0, l.jsx)("span", { children: `<@$${t}>` });
        case "command":
            return (0, l.jsx)(L, { id: t.id, name: t.name });
    }
    (0, C.xb)(n);
}
function E(e) {
    let { channelId: n, guildId: r, messageId: h } = e,
        x = (0, d.A)(n),
        {
            name: f,
            iconType: p,
            isForumPost: v,
            hasAccess: y,
        } = (0, a.cf)([A.A, b.default, k.A], () => {
            let e = A.A.getChannel(n);
            return {
                name: null != e ? (0, i.m1)(e, b.default, k.A) : void 0,
                iconType: (0, N.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, u.nc)(e),
            };
        }, [n]),
        C = (0, I.p)();
    if (null == p) return;
    let w = r === C?.guildId || null == r,
        _ =
            y || x.isSubscriptionGated
                ? w || null == f
                    ? (0, l.jsx)(m.A, {
                          iconType: p,
                          children: f ?? (0, l.jsx)("em", { children: $.intl.string($.t.J90oLW) }),
                      })
                    : (0, l.jsx)(P, { guildId: r, children: f })
                : (0, l.jsx)(m.A, { iconType: "locked", children: $.intl.string($.t["/YzI63"]) }),
        E = null;
    return (
        null != h &&
            (E = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(g.A, {}), (0, l.jsx)(m.A, { iconType: v ? "post" : "message" })],
            })),
        (0, l.jsxs)(j.A, {
            role: "link",
            onClick: (e) => {
                e?.stopPropagation(), (0, o.o)(r, n, h), (0, s.closeAllModals)();
            },
            onContextMenu: (e) => {
                let r = A.A.getChannel(n);
                (0, c.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("43266"), t.e("4391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: h });
                });
            },
            className: "channelMention",
            children: [_, E],
        })
    );
}
function P(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([y.A], () => y.A.getGuild(n), [n]);
    return (0, l.jsxs)(x.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(g.A, {}) : null, t] });
}
function z(e) {
    let { id: n } = e,
        t = (0, I.p)();
    return (0, l.jsx)(p.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function M(e) {
    let { id: n } = e,
        t = (0, I.p)(),
        r = t?.guildId,
        s = (0, a.bG)([v.A], () => (null != r ? v.A.getRole(r, n)?.name : null) ?? $.intl.string($.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(f.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function T(e) {
    let { roleName: n } = e,
        t = (0, I.p)();
    return (0, l.jsx)(f.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function L(e) {
    let { id: n, name: t } = e,
        a = (0, I.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${w.v4}${e}`).join("")}`;
        }, [n, t]),
        c = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(h.gn, { node: c, children: t });
}
