a.d(t, { A: () => H });
var s = a(477900),
    l = a(582128),
    n = a(855986),
    r = a(939249),
    i = a(534514),
    d = a(834730),
    o = a(442433),
    u = a(964486),
    c = a(104171),
    g = a(47167),
    h = a(734057),
    m = a(949744),
    A = a(287809),
    f = a(802958),
    x = a(778712),
    v = a(463930),
    I = a(163328),
    j = a(730134),
    y = a(80682),
    w = a(713654),
    S = a(763754),
    p = a(448368),
    M = a(538355),
    b = a(967144),
    E = a(288254),
    N = a(696451),
    _ = a(218461),
    F = a(994500),
    R = a(811091),
    C = a(427262),
    k = a(456874),
    G = a(707539);
a(838541);
var T = a(792996),
    K = a(576965);
function L(e) {
    let { channel: t } = e,
        a = (0, n.bG)([k.A], () => k.A.getMostRecentMessage(t.id));
    return null == a ? (0, s.jsx)(B, { channel: t }) : (0, s.jsx)(D, { channel: t, message: a });
}
function B(e) {
    let { channel: t } = e,
        a = (0, G.JO)(t);
    return (0, s.jsxs)(d.E, {
        className: K.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [T.intl.string(T.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, G.aK)(a)],
    });
}
let W = { formatInline: !0, allowLinks: !0 };
function D(e) {
    let { channel: t, message: a } = e;
    (0, y.Eq)({ [t.guild_id]: [a.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.author.id) ?? a.author),
        { nick: i, colorString: o, colorStrings: u } = (0, S.Ay)(a),
        c = (0, b.gn)(t.guild_id, r.id, u),
        { isBlocked: g, isIgnored: h } = (0, n.cf)(
            [F.A],
            () => ({ isBlocked: F.A.isBlockedForMessage(a), isIgnored: F.A.isIgnoredForMessage(a) }),
            [a],
        ),
        m = (0, E.IL)(t),
        { content: f } = (0, M.A)(a, W),
        I = l.useMemo(() => {
            let e = null != a.content && "" !== a.content ? f : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, p.o)(a, e, g, h, K.BK, { trailingIconClass: K.sl, leadingIconClass: K.aG, iconSize: 20 });
            return (0, s.jsxs)(s.Fragment, { children: [r, l ?? (0, s.jsx)("span", { children: t }), n] });
        }, [a, f, g, h]);
    return (0, s.jsxs)(d.E, {
        className: K.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [
            (0, s.jsx)(j.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
            (0, s.jsx)(v.g, { name: i, colorString: o, colorStrings: c, className: K.fh }),
            ":\xa0",
            m ? (0, s.jsx)("span", { className: K.Iy, children: T.intl.string(T.t["5uaI/7"]) }) : I,
            "\xa0 \u2022 \xa0",
            (0, G.aK)(R.default.extractTimestamp(a.id)),
        ],
    });
}
function O(e) {
    let { channel: t } = e,
        a = (0, n.bG)([_.Ay], () => _.Ay.lastMessageId(t.id)),
        l =
            null == a
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : R.default.extractTimestamp(a);
    (0, y.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.ownerId)),
        i = (0, n.bG)([N.Ay], () => N.Ay.getMember(t.guild_id, t.ownerId)),
        o = (0, b.gn)(t.guild_id, r?.id, i?.colorStrings ?? null),
        u = (0, w.gU)(t) ?? I.y;
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
                          T.intl.format(T.t["5Wk9+o"], { time: (0, G.aK)(l) }),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
                          T.intl.format(T.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, s.jsx)(
                                      v.g,
                                      {
                                          className: K.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? C.Ay.getName(r),
                                      },
                                      t,
                                  ),
                          }),
                          (0, s.jsx)("span", { className: K.xE, children: "\u2022" }),
                          T.intl.format(T.t["5Wk9+o"], { time: (0, G.aK)(l) }),
                      ],
                  }),
    });
}
a(37411);
let H = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: u } = e,
        c = (0, n.bG)([h.A], () => h.A.getChannel(t)),
        m = (0, n.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        A = (0, g.Ay)(c),
        f = (0, g.Ay)(m, !0);
    return (0, s.jsxs)(r.D, {
        className: K.kL,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    a.e(926132),
                    a.e(393336),
                    a.e(391763),
                    a.e(491001),
                    a.e(382563),
                    a.e(947502),
                    a.e(603998),
                    a.e(343266),
                    a.e(965789),
                    a.e(691671),
                    a.e(412255),
                    a.e(63340),
                    a.e(896804),
                    a.e(275289),
                    a.e(421060),
                    a.e(697367),
                    a.e(699011),
                    a.e(536478),
                    a.e(703869),
                    a.e(426760),
                    a.e(420105),
                ]).then(a.bind(a, 949488));
                return (t) => (0, s.jsx)(e, { ...t, channel: c });
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
    let { channel: t } = e,
        a = (0, n.bG)([f.A], () => f.A.getMemberIdsPreview(t.id) ?? []),
        l = (0, n.bG)([f.A], () => f.A.getMemberCount(t.id) ?? 0),
        r = (0, n.yK)([A.default], () => a.map((e) => A.default.getUser(e)));
    return ((0, u.Ay)(() => {
        a.filter((e, t) => null == r[t]).forEach((e) => {
            m.A.requestMember(t.guild_id, e);
        });
    }),
    0 === a.length)
        ? null
        : (0, s.jsx)(c.Ay, {
              className: K.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: l,
              max: 50,
          });
}
