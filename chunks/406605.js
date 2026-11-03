t.d(n, { P: () => $, A: () => E });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    u = t(192308),
    i = t(442433),
    s = t(47167),
    c = t(499211),
    o = t(376943),
    d = t(706083),
    h = t(78390),
    v = t(392605),
    m = t(990474),
    f = t(232042),
    x = t(266645),
    p = t(906754),
    g = t(332173),
    j = t(37632),
    I = t(593284),
    y = t(288539),
    A = t(78377),
    k = t(734057),
    C = t(317525),
    b = t(71393),
    S = t(994500),
    w = t(287809),
    N = t(147036),
    z = t(403362);
let P = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var L = t(73510),
    M = t(105292);
function $(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, l.jsx)(E, { channelId: String(t) });
        case "user":
            return (0, l.jsx)(T, { id: String(t) });
        case "role":
            return (0, l.jsx)(_, { id: String(t) });
        case "everyone":
            return (0, l.jsx)(H, { roleName: "@everyone" });
        case "here":
            return (0, l.jsx)(H, { roleName: "@here" });
        case "game":
            return (0, l.jsx)(D, { id: String(t) });
        case "command":
            return (0, l.jsx)(q, { id: String(t.id), name: t.name });
        case "static":
            return (0, l.jsx)(J, {
                route: P[t.type],
                itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
            });
    }
    (0, z.xb)(n);
}
function E(e) {
    let { channelId: n, guildId: r, messageId: h, conversationId: v } = e,
        m = (0, c.A)(n),
        {
            name: x,
            iconType: p,
            isForumPost: I,
            hasAccess: y,
        } = (0, a.cf)(
            [k.A, w.default, S.A],
            () => {
                let e = k.A.getChannel(n);
                return {
                    name: null != e ? (0, s.m1)(e, w.default, S.A) : void 0,
                    iconType: (0, N.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, o.nc)(e),
                };
            },
            [n],
        ),
        C = (0, A.p)(),
        b = C?.noStyleAndInteraction !== !0;
    if (null == p) return;
    let z = r === C?.guildId || null == r,
        P =
            y || m.isSubscriptionGated
                ? z || null == x
                    ? (0, l.jsx)(f.A, {
                          iconType: p,
                          children: x ?? (0, l.jsx)("em", { children: M.intl.string(M.t.J90oLW) }),
                      })
                    : (0, l.jsx)(G, { guildId: r, children: x })
                : (0, l.jsx)(f.A, { iconType: "locked", children: M.intl.string(M.t["/YzI63"]) }),
        L = null;
    return (
        null != h &&
            (L = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(j.A, {}), (0, l.jsx)(f.A, { iconType: I ? "post" : "message" })],
            })),
        (0, l.jsxs)(g.A, {
            role: "link",
            onClick: b
                ? function (e) {
                      (e?.stopPropagation(), (0, d.o)(r, n, h, v), (0, u.closeAllModals)());
                  }
                : void 0,
            onContextMenu: b
                ? function (e) {
                      let r = k.A.getChannel(n);
                      (0, i.L3)(e, async () => {
                          let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                              t.bind(t, 254106),
                          );
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  channelId: r?.id ?? n,
                                  originalLink: null,
                                  messageId: h,
                              });
                      });
                  }
                : void 0,
            className: "channelMention",
            children: [P, L],
        })
    );
}
function G(e) {
    let { guildId: n, children: t } = e,
        r = (0, a.bG)([b.A], () => b.A.getGuild(n), [n]);
    return (0, l.jsxs)(p.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(j.A, {}) : null, t] });
}
function T(e) {
    let { id: n } = e,
        t = (0, A.p)();
    return (0, l.jsx)(y.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function _(e) {
    let { id: n } = e,
        t = (0, A.p)(),
        r = t?.guildId,
        u = (0, a.bG)([C.A], () => (null != r ? C.A.getRole(r, n)?.name : null) ?? M.intl.string(M.t.sKdZ6U), [r, n]);
    return (0, l.jsx)(I.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${u}`,
    });
}
function D(e) {
    let { id: n } = e,
        t = (0, A.p)();
    return (0, l.jsx)(x.A, { gameId: n, authorId: t?.authorId });
}
function H(e) {
    let { roleName: n } = e,
        t = (0, A.p)();
    return (0, l.jsx)(I.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function J(e) {
    let { route: n, itemId: t } = e,
        r = (0, A.p)(),
        u = r?.guildId,
        i = (0, h.Q)(n),
        s = (0, a.bG)([C.A], () => (0, h.f)(C.A, n, t, u), [n, t, u]);
    return null == i
        ? null
        : (0, l.jsxs)(g.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, v.i)(u, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [i, null != s ? (0, l.jsx)(j.A, {}) : null, s],
          });
}
function q(e) {
    let { id: n, name: t } = e,
        a = (0, A.p)(),
        u = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${L.v4}${e}`).join("")}`;
        }, [n, t]),
        i = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: u }),
            [a?.channelId, u, n, t],
        );
    return (0, l.jsx)(m.gn, { node: i, children: t });
}
