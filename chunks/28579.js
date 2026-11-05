t.d(a, { A: () => H });
var s = t(477900),
    l = t(582128),
    n = t(855986),
    r = t(939249),
    i = t(534514),
    d = t(834730),
    o = t(442433),
    u = t(964486),
    c = t(104171),
    g = t(47167),
    h = t(734057),
    m = t(949744),
    A = t(287809),
    f = t(802958),
    x = t(778712),
    v = t(463930),
    I = t(163328),
    j = t(730134),
    w = t(80682),
    y = t(713654),
    S = t(763754),
    p = t(448368),
    M = t(538355),
    b = t(967144),
    E = t(288254),
    N = t(696451),
    _ = t(218461),
    F = t(994500),
    R = t(811091),
    C = t(427262),
    T = t(456874),
    k = t(707539);
t(838541);
var G = t(792996),
    K = t(576965);
function L(e) {
    let { channel: a } = e,
        t = (0, n.bG)([T.A], () => T.A.getMostRecentMessage(a.id));
    return null == t ? (0, s.jsx)(B, { channel: a }) : (0, s.jsx)(D, { channel: a, message: t });
}
function B(e) {
    let { channel: a } = e,
        t = (0, k.JO)(a);
    return (0, s.jsxs)(d.E, {
        className: K.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [G.intl.string(G.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, k.aK)(t)],
    });
}
let W = { formatInline: !0, allowLinks: !0 };
function D(e) {
    let { channel: a, message: t } = e;
    (0, w.Eq)({ [a.guild_id]: [t.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.author.id) ?? t.author),
        { nick: i, colorString: o, colorStrings: u } = (0, S.Ay)(t),
        c = (0, b.gn)(a.guild_id, r.id, u),
        { isBlocked: g, isIgnored: h } = (0, n.cf)(
            [F.A],
            () => ({ isBlocked: F.A.isBlockedForMessage(t), isIgnored: F.A.isIgnoredForMessage(t) }),
            [t],
        ),
        m = (0, E.IL)(a),
        { content: f } = (0, M.A)(t, W),
        I = l.useMemo(() => {
            let e = null != t.content && "" !== t.content ? f : null,
                {
                    contentPlaceholder: a,
                    renderedContent: l,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, p.o)(t, e, g, h, K.BK, { trailingIconClass: K.sl, leadingIconClass: K.aG, iconSize: 20 });
            return (0, s.jsxs)(s.Fragment, { children: [r, l ?? (0, s.jsx)("span", { children: a }), n] });
        }, [t, f, g, h]);
    return (0, s.jsxs)(d.E, {
        className: K.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [
            (0, s.jsx)(j.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
            (0, s.jsx)(v.g, { name: i, colorString: o, colorStrings: c, className: K.fh }),
            ":\xa0",
            m ? (0, s.jsx)("span", { className: K.Iy, children: G.intl.string(G.t["5uaI/7"]) }) : I,
            "\xa0 \u2022 \xa0",
            (0, k.aK)(R.default.extractTimestamp(t.id)),
        ],
    });
}
function O(e) {
    let { channel: a } = e,
        t = (0, n.bG)([_.Ay], () => _.Ay.lastMessageId(a.id)),
        l =
            null == t
                ? new Date(a.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : R.default.extractTimestamp(t);
    (0, w.Eq)({ [a.guild_id]: [a.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.ownerId)),
        i = (0, n.bG)([N.Ay], () => N.Ay.getMember(a.guild_id, a.ownerId)),
        o = (0, b.gn)(a.guild_id, r?.id, i?.colorStrings ?? null),
        u = (0, y.gU)(a) ?? I.ThreadIcon;
    return (0, s.jsx)(d.E, {
        className: K.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children:
            null == r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("div", {
                              className: K.A2,
                              children: (0, s.jsx)(u, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, k.aK)(l) }),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
                          G.intl.format(G.t["GFDmd/"], {
                              authorHook: (e, a) =>
                                  (0, s.jsx)(
                                      v.g,
                                      {
                                          className: K.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? C.Ay.getName(r),
                                      },
                                      a,
                                  ),
                          }),
                          (0, s.jsx)("span", { className: K.xE, children: "\u2022" }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, k.aK)(l) }),
                      ],
                  }),
    });
}
t(37411);
let H = l.memo(function (e) {
    let { threadId: a, goToThread: l, showChannelName: u } = e,
        c = (0, n.bG)([h.A], () => h.A.getChannel(a)),
        m = (0, n.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        A = (0, g.Ay)(c),
        f = (0, g.Ay)(m, !0);
    return (0, s.jsxs)(r.D, {
        className: K.kL,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(926132),
                    t.e(393336),
                    t.e(391763),
                    t.e(491001),
                    t.e(382563),
                    t.e(947502),
                    t.e(603998),
                    t.e(343266),
                    t.e(965789),
                    t.e(691671),
                    t.e(412255),
                    t.e(63340),
                    t.e(896804),
                    t.e(275289),
                    t.e(421060),
                    t.e(697367),
                    t.e(699011),
                    t.e(536478),
                    t.e(703869),
                    t.e(426760),
                    t.e(420105),
                ]).then(t.bind(t, 949488));
                return (a) => (0, s.jsx)(e, { ...a, channel: c });
            }),
        children: [
            (0, s.jsxs)("div", {
                className: K.kb,
                children: [
                    (0, s.jsxs)(i.D, {
                        className: K.OG,
                        variant: "heading-sm/semibold",
                        children: [
                            (0, s.jsx)("span", { className: K.CB, children: A }),
                            u && null != m
                                ? (0, s.jsx)(d.E, {
                                      variant: "body-sm/medium",
                                      color: "text-muted",
                                      tag: "span",
                                      className: K.Ot,
                                      children: f,
                                  })
                                : null,
                        ],
                    }),
                    c.isActiveThread() ? (0, s.jsx)(L, { channel: c }) : (0, s.jsx)(O, { channel: c }),
                ],
            }),
            (0, s.jsx)(U, { channel: c }),
        ],
    });
});
function U(e) {
    let { channel: a } = e,
        t = (0, n.bG)([f.A], () => f.A.getMemberIdsPreview(a.id) ?? []),
        l = (0, n.bG)([f.A], () => f.A.getMemberCount(a.id) ?? 0),
        r = (0, n.yK)([A.default], () => t.map((e) => A.default.getUser(e)));
    return ((0, u.Ay)(() => {
        t.filter((e, a) => null == r[a]).forEach((e) => {
            m.A.requestMember(a.guild_id, e);
        });
    }),
    0 === t.length)
        ? null
        : (0, s.jsx)(c.Ay, {
              className: K.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: a.guild_id,
              users: r,
              count: l,
              max: 50,
          });
}
