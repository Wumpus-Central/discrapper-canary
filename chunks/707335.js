s.d(t, { A: () => z });
var l = s(627968),
    n = s(64700),
    a = s(17928),
    r = s(939249),
    i = s(534514),
    o = s(442433),
    d = s(964486),
    c = s(104171),
    u = s(47167),
    h = s(734057),
    g = s(860071),
    m = s(287809),
    x = s(802958),
    A = s(834730),
    f = s(778712),
    j = s(463930),
    v = s(163328),
    S = s(730134),
    T = s(80682),
    w = s(713654),
    N = s(465364),
    p = s(763754),
    E = s(805964),
    y = s(967144),
    b = s(696451),
    I = s(222823),
    C = s(994500),
    _ = s(935208),
    k = s(427262),
    M = s(456874),
    R = s(707539),
    F = s(838541),
    G = s(985018),
    H = s(992092);
function B(e) {
    let { channel: t } = e,
        s = (0, a.bG)([M.A], () => M.A.getMostRecentMessage(t.id));
    return null == s ? (0, l.jsx)(D, { channel: t }) : (0, l.jsx)(K, { channel: t, message: s });
}
function D(e) {
    let { channel: t } = e,
        s = (0, R.JO)(t);
    return (0, l.jsxs)(A.E, {
        className: H.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [G.intl.string(G.t.Jmh6n9), "\xa0 • \xa0", (0, R.aK)(s)],
    });
}
function K(e) {
    let { channel: t, message: s } = e;
    (0, T.Eq)({ [t.guild_id]: [s.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, a.bG)([m.default], () => m.default.getUser(s.author.id) ?? s.author),
        { nick: i, colorString: o, colorStrings: d } = (0, p.Ay)(s),
        c = (0, y.gn)(t.guild_id, r.id, d),
        { isBlocked: u, isIgnored: h } = (0, a.cf)(
            [C.A],
            () => ({ isBlocked: C.A.isBlockedForMessage(s), isIgnored: C.A.isIgnoredForMessage(s) }),
            [s],
        ),
        g = n.useMemo(() => {
            let e = null != s.content && "" !== s.content ? (0, N.Ay)(s, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: n,
                    trailingIcon: a,
                    leadingIcon: r,
                } = (0, E.o)(s, e, u, h, H.BK, { trailingIconClass: H.sl, leadingIconClass: H.aG, iconSize: F.eJ });
            return (0, l.jsxs)(l.Fragment, { children: [r, n ?? (0, l.jsx)("span", { children: t }), a] });
        }, [s, u, h]);
    return (0, l.jsxs)(A.E, {
        className: H.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, l.jsx)(S.A, { className: H.my, user: r, size: f._3.SIZE_16 }),
            (0, l.jsx)(j.g, { name: i, colorString: o, colorStrings: c, className: H.fh }),
            ":\xa0",
            g,
            "\xa0 • \xa0",
            (0, R.aK)(_.default.extractTimestamp(s.id)),
        ],
    });
}
function O(e) {
    let { channel: t } = e,
        s = (0, a.bG)([I.Ay], () => I.Ay.lastMessageId(t.id)),
        n =
            null == s
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : _.default.extractTimestamp(s);
    (0, T.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, a.bG)([m.default], () => m.default.getUser(t.ownerId)),
        i = (0, a.bG)([b.Ay], () => b.Ay.getMember(t.guild_id, t.ownerId)),
        o = (0, y.gn)(t.guild_id, r?.id, i?.colorStrings ?? null),
        d = (0, w.gU)(t) ?? v.y;
    return (0, l.jsx)(A.E, {
        className: H.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == r
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: H.A2,
                              children: (0, l.jsx)(d, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, R.aK)(n) }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(S.A, { className: H.my, user: r, size: f._3.SIZE_16 }),
                          G.intl.format(G.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, l.jsx)(
                                      j.g,
                                      {
                                          className: H.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? k.Ay.getName(r),
                                      },
                                      t,
                                  ),
                          }),
                          (0, l.jsx)("span", { className: H.xE, children: "•" }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, R.aK)(n) }),
                      ],
                  }),
    });
}
var L = s(37411);
let z = n.memo(function (e) {
    let { threadId: t, goToThread: n, showChannelName: d } = e,
        c = (0, a.bG)([h.A], () => h.A.getChannel(t)),
        g = (0, a.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        m = (0, u.Ay)(c),
        x = (0, u.Ay)(g, !0);
    return (0, l.jsxs)(r.D, {
        className: H.kL,
        onClick: (e) => n(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([s.e("43768"), s.e("99011"), s.e("94989"), s.e("74085")]).then(
                    s.bind(s, 612826),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: c });
            }),
        children: [
            (0, l.jsxs)("div", {
                className: H.kb,
                children: [
                    (0, l.jsxs)(i.D, {
                        className: H.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, l.jsx)("span", { className: H.CB, children: m }),
                            d && null != g ? (0, l.jsx)("span", { className: H.Ot, children: x }) : null,
                        ],
                    }),
                    c.isActiveThread() ? (0, l.jsx)(B, { channel: c }) : (0, l.jsx)(O, { channel: c }),
                ],
            }),
            (0, l.jsx)(W, { channel: c }),
        ],
    });
});
function W(e) {
    let { channel: t } = e,
        s = (0, a.bG)([x.A], () => x.A.getMemberIdsPreview(t.id) ?? []),
        n = (0, a.bG)([x.A], () => x.A.getMemberCount(t.id) ?? 0),
        r = (0, a.yK)([m.default], () => s.map((e) => m.default.getUser(e)));
    return ((0, d.Ay)(() => {
        s.filter((e, t) => null == r[t]).forEach((e) => {
            g.A.requestMember(t.guild_id, e);
        });
    }),
    0 === s.length)
        ? null
        : (0, l.jsx)(c.Ay, {
              className: H.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: n,
              max: L.Td,
          });
}
