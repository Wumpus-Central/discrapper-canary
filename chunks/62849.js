t.d(n, { A: () => G, P: () => z });
var l = t(627968),
    r = t(64700),
    a = t(311907),
    s = t(397927),
    i = t(442433),
    c = t(956793),
    d = t(352505),
    u = t(721592),
    o = t(235393),
    h = t(376943),
    m = t(22007),
    x = t(990474),
    j = t(232042),
    g = t(31995),
    f = t(906754),
    p = t(332173),
    A = t(37632),
    I = t(593284),
    v = t(288539),
    y = t(78377),
    k = t(95701),
    C = t(734057),
    b = t(317525),
    N = t(71393),
    w = t(147036),
    $ = t(403362),
    _ = t(449054),
    E = t(652215),
    M = t(73510),
    T = t(985018);
async function L(e, n, t) {
    if (null == n) return;
    if ((o.A.trackDiscordLinkClicked({ guildId: e, channelId: n, messageId: t }), null != e)) {
        let l = N.A.getGuild(e);
        if (l?.joinedAt == null)
            try {
                await _.Z2(e, {}, { channelId: n, messageId: t });
                return;
            } catch {}
    }
    let l = C.A.getChannel(n);
    null != l && null == t && (0, k.ay)(l.type) && (0, h.nc)(l)
        ? c.default.selectVoiceChannel(l.id)
        : (0, m.A)(E.BVt.CHANNEL(e, n, t));
}
function z(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(G, { channelId: t });
        case "user":
            return (0, l.jsx)(H, { id: t });
        case "role":
            return (0, l.jsx)(S, { id: t });
        case "everyone":
            return (0, l.jsx)(B, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(B, { roleName: "@here" });
        case "game":
            return (0, l.jsx)(D, { id: t });
        case "command":
            return (0, l.jsx)(F, { id: t.id, name: t.name });
    }
    (0, $.xb)(n);
}
function G(e) {
    let { channelId: n, guildId: r, messageId: c } = e,
        d = (0, u.A)(n),
        {
            name: o,
            iconType: m,
            isForumPost: x,
            hasAccess: g,
        } = (0, a.cf)([C.A], () => {
            let e = C.A.getChannel(n);
            return {
                name: e?.name,
                iconType: (0, w.QG)(e),
                isForumPost: e?.isForumPost(),
                hasAccess: null == e || (0, h.nc)(e),
            };
        }, [n]),
        f = (0, y.p)();
    if (null == m) return;
    let I = r === f?.guildId || null == r,
        v =
            g || d.isSubscriptionGated
                ? I || null == o
                    ? (0, l.jsx)(j.A, {
                          iconType: m,
                          children: o ?? (0, l.jsx)("em", { children: T.intl.string(T.t.J90oLW) }),
                      })
                    : (0, l.jsx)(P, { guildId: r, children: o })
                : (0, l.jsx)(j.A, { iconType: "locked", children: T.intl.string(T.t["/YzI63"]) }),
        k = null;
    return (
        null != c &&
            (k = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(A.A, {}), (0, l.jsx)(j.A, { iconType: x ? "post" : "message" })],
            })),
        (0, l.jsxs)(p.A, {
            role: "link",
            onClick: (e) => {
                e?.stopPropagation(), L(r, n, c), (0, s.s7G)();
            },
            onContextMenu: (e) => {
                let r = C.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("99041").then(t.bind(t, 612856));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: c });
                });
            },
            className: "channelMention",
            children: [v, k],
        })
    );
}
function P(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([N.A], () => N.A.getGuild(n), [n]);
    return (0, l.jsxs)(f.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(A.A, {}) : null, t] });
}
function H(e) {
    let { id: n } = e,
        t = (0, y.p)();
    return (0, l.jsx)(v.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function S(e) {
    let { id: n } = e,
        t = (0, y.p)(),
        r = t?.guildId,
        s = (0, a.bG)([b.A], () => (null != r ? b.A.getRole(r, n)?.name : null) ?? T.intl.string(T.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(I.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function D(e) {
    let { id: n } = e,
        t = (0, y.p)();
    return d.m.useExperiment({ location: "native markdown" }).enabled
        ? (0, l.jsx)(g.A, { gameId: n, channelId: t?.channelId })
        : (0, l.jsx)("span", { children: `<@$${n}>` });
}
function B(e) {
    let { roleName: n } = e,
        t = (0, y.p)();
    return (0, l.jsx)(I.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function F(e) {
    let { id: n, name: t } = e,
        a = (0, y.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${M.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: s }),
            [a?.channelId, s, n, t],
        );
    return (0, l.jsx)(x.gn, { node: i, children: t });
}
