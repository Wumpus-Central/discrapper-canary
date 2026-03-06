t.d(n, { A: () => w, P: () => N });
var l = t(627968),
    r = t(64700),
    a = t(311907),
    s = t(397927),
    i = t(442433),
    c = t(721592),
    d = t(376943),
    u = t(987877),
    o = t(990474),
    h = t(232042),
    m = t(906754),
    x = t(332173),
    j = t(37632),
    g = t(593284),
    f = t(288539),
    p = t(78377),
    I = t(734057),
    v = t(317525),
    A = t(71393),
    y = t(147036),
    k = t(403362),
    b = t(73510),
    C = t(985018);
function N(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(w, { channelId: t });
        case "user":
            return (0, l.jsx)(_, { id: t });
        case "role":
            return (0, l.jsx)(M, { id: t });
        case "everyone":
            return (0, l.jsx)(T, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(T, { roleName: "@here" });
        case "game":
            return (0, l.jsx)("span", { children: `<@$${t}>` });
        case "command":
            return (0, l.jsx)(z, { id: t.id, name: t.name });
    }
    (0, k.xb)(n);
}
function w(e) {
    let { channelId: n, guildId: r, messageId: o } = e,
        m = (0, c.A)(n),
        {
            name: g,
            iconType: f,
            isForumPost: v,
            hasAccess: A,
        } = (0, a.cf)([I.A], () => {
            let e = I.A.getChannel(n);
            return {
                name: e?.name,
                iconType: (0, y.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, d.nc)(e),
            };
        }, [n]),
        k = (0, p.p)();
    if (null == f) return;
    let b = r === k?.guildId || null == r,
        N =
            A || m.isSubscriptionGated
                ? b || null == g
                    ? (0, l.jsx)(h.A, {
                          iconType: f,
                          children: g ?? (0, l.jsx)("em", { children: C.intl.string(C.t.J90oLW) }),
                      })
                    : (0, l.jsx)($, { guildId: r, children: g })
                : (0, l.jsx)(h.A, { iconType: "locked", children: C.intl.string(C.t["/YzI63"]) }),
        w = null;
    return (
        null != o &&
            (w = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(j.A, {}), (0, l.jsx)(h.A, { iconType: v ? "post" : "message" })],
            })),
        (0, l.jsxs)(x.A, {
            role: "link",
            onClick: (e) => {
                e?.stopPropagation(), (0, u.o)(r, n, o), (0, s.s7G)();
            },
            onContextMenu: (e) => {
                let r = I.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("99041").then(t.bind(t, 612856));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: o });
                });
            },
            className: "channelMention",
            children: [N, w],
        })
    );
}
function $(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([A.A], () => A.A.getGuild(n), [n]);
    return (0, l.jsxs)(m.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(j.A, {}) : null, t] });
}
function _(e) {
    let { id: n } = e,
        t = (0, p.p)();
    return (0, l.jsx)(f.A, {
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
        t = (0, p.p)(),
        r = t?.guildId,
        s = (0, a.bG)([v.A], () => (null != r ? v.A.getRole(r, n)?.name : null) ?? C.intl.string(C.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(g.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function T(e) {
    let { roleName: n } = e,
        t = (0, p.p)();
    return (0, l.jsx)(g.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function z(e) {
    let { id: n, name: t } = e,
        a = (0, p.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${b.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(o.gn, { node: i, children: t });
}
