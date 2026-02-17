t.d(n, { A: () => _, P: () => $ });
var l = t(627968),
    r = t(64700),
    a = t(311907),
    s = t(397927),
    i = t(442433),
    c = t(352505),
    d = t(721592),
    u = t(376943),
    o = t(987877),
    h = t(990474),
    m = t(232042),
    x = t(31995),
    j = t(906754),
    g = t(332173),
    p = t(37632),
    f = t(593284),
    I = t(288539),
    v = t(78377),
    A = t(734057),
    y = t(317525),
    k = t(71393),
    b = t(147036),
    C = t(403362),
    N = t(73510),
    w = t(985018);
function $(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(_, { channelId: t });
        case "user":
            return (0, l.jsx)(T, { id: t });
        case "role":
            return (0, l.jsx)(E, { id: t });
        case "everyone":
            return (0, l.jsx)(P, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(P, { roleName: "@here" });
        case "game":
            return (0, l.jsx)(z, { id: t });
        case "command":
            return (0, l.jsx)(G, { id: t.id, name: t.name });
    }
    (0, C.xb)(n);
}
function _(e) {
    let { channelId: n, guildId: r, messageId: c } = e,
        h = (0, d.A)(n),
        {
            name: x,
            iconType: j,
            isForumPost: f,
            hasAccess: I,
        } = (0, a.cf)([A.A], () => {
            let e = A.A.getChannel(n);
            return {
                name: e?.name,
                iconType: (0, b.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, u.nc)(e),
            };
        }, [n]),
        y = (0, v.p)();
    if (null == j) return;
    let k = r === y?.guildId || null == r,
        C =
            I || h.isSubscriptionGated
                ? k || null == x
                    ? (0, l.jsx)(m.A, {
                          iconType: j,
                          children: x ?? (0, l.jsx)("em", { children: w.intl.string(w.t.J90oLW) }),
                      })
                    : (0, l.jsx)(M, { guildId: r, children: x })
                : (0, l.jsx)(m.A, { iconType: "locked", children: w.intl.string(w.t["/YzI63"]) }),
        N = null;
    return (
        null != c &&
            (N = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(p.A, {}), (0, l.jsx)(m.A, { iconType: f ? "post" : "message" })],
            })),
        (0, l.jsxs)(g.A, {
            role: "link",
            onClick: (e) => {
                e?.stopPropagation(), (0, o.o)(r, n, c), (0, s.s7G)();
            },
            onContextMenu: (e) => {
                let r = A.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("99041").then(t.bind(t, 612856));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: c });
                });
            },
            className: "channelMention",
            children: [C, N],
        })
    );
}
function M(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([k.A], () => k.A.getGuild(n), [n]);
    return (0, l.jsxs)(j.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(p.A, {}) : null, t] });
}
function T(e) {
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
function E(e) {
    let { id: n } = e,
        t = (0, v.p)(),
        r = t?.guildId,
        s = (0, a.bG)([y.A], () => (null != r ? y.A.getRole(r, n)?.name : null) ?? w.intl.string(w.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(f.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function z(e) {
    let { id: n } = e,
        t = (0, v.p)();
    return c.m.useExperiment({ location: "native markdown" }).enabled
        ? (0, l.jsx)(x.A, { gameId: n, channelId: t?.channelId })
        : (0, l.jsx)("span", { children: `<@$${n}>` });
}
function P(e) {
    let { roleName: n } = e,
        t = (0, v.p)();
    return (0, l.jsx)(f.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function G(e) {
    let { id: n, name: t } = e,
        a = (0, v.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${N.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(h.gn, { node: i, children: t });
}
