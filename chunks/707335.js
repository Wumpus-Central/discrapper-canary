a.d(t, { A: () => H });
var l = a(627968),
    s = a(64700),
    n = a(17928),
    r = a(939249),
    i = a(534514),
    d = a(834730),
    o = a(442433),
    u = a(964486),
    c = a(104171),
    g = a(47167),
    h = a(734057),
    m = a(860071),
    A = a(287809),
    f = a(802958),
    x = a(778712),
    v = a(463930),
    j = a(163328),
    w = a(730134),
    I = a(80682),
    S = a(713654),
    M = a(465364),
    p = a(763754),
    E = a(805964),
    y = a(967144),
    N = a(696451),
    _ = a(568548),
    b = a(994500),
    F = a(935208),
    R = a(427262),
    C = a(456874),
    T = a(707539),
    k = a(838541),
    G = a(375708),
    K = a(579740);
function B(e) {
    let { channel: t } = e,
        a = (0, n.bG)([C.A], () => C.A.getMostRecentMessage(t.id));
    return null == a ? (0, l.jsx)(L, { channel: t }) : (0, l.jsx)(W, { channel: t, message: a });
}
function L(e) {
    let { channel: t } = e,
        a = (0, T.JO)(t);
    return (0, l.jsxs)(d.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [G.intl.string(G.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, T.aK)(a)],
    });
}
function W(e) {
    let { channel: t, message: a } = e;
    (0, I.Eq)({ [t.guild_id]: [a.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.author.id) ?? a.author),
        { nick: i, colorString: o, colorStrings: u } = (0, p.Ay)(a),
        c = (0, y.gn)(t.guild_id, r.id, u),
        { isBlocked: g, isIgnored: h } = (0, n.cf)(
            [b.A],
            () => ({ isBlocked: b.A.isBlockedForMessage(a), isIgnored: b.A.isIgnoredForMessage(a) }),
            [a],
        ),
        m = s.useMemo(() => {
            let e =
                    null != a.content && "" !== a.content
                        ? (0, M.Ay)(a, { formatInline: !0, allowLinks: !0 }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: s,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, E.o)(a, e, g, h, K.BK, { trailingIconClass: K.sl, leadingIconClass: K.aG, iconSize: k.eJ });
            return (0, l.jsxs)(l.Fragment, { children: [r, s ?? (0, l.jsx)("span", { children: t }), n] });
        }, [a, g, h]);
    return (0, l.jsxs)(d.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, l.jsx)(w.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
            (0, l.jsx)(v.g, { name: i, colorString: o, colorStrings: c, className: K.fh }),
            ":\xa0",
            m,
            "\xa0 \u2022 \xa0",
            (0, T.aK)(F.default.extractTimestamp(a.id)),
        ],
    });
}
function D(e) {
    let { channel: t } = e,
        a = (0, n.bG)([_.Ay], () => _.Ay.lastMessageId(t.id)),
        s =
            null == a
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : F.default.extractTimestamp(a);
    (0, I.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.ownerId)),
        i = (0, n.bG)([N.Ay], () => N.Ay.getMember(t.guild_id, t.ownerId)),
        o = (0, y.gn)(t.guild_id, r?.id, i?.colorStrings ?? null),
        u = (0, S.gU)(t) ?? j.y;
    return (0, l.jsx)(d.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == r
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: K.A2,
                              children: (0, l.jsx)(u, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, T.aK)(s) }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(w.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
                          G.intl.format(G.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, l.jsx)(
                                      v.g,
                                      {
                                          className: K.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? R.Ay.getName(r),
                                      },
                                      t,
                                  ),
                          }),
                          (0, l.jsx)("span", { className: K.xE, children: "\u2022" }),
                          G.intl.format(G.t["5Wk9+o"], { time: (0, T.aK)(s) }),
                      ],
                  }),
    });
}
var O = a(37411);
let H = s.memo(function (e) {
    let { threadId: t, goToThread: s, showChannelName: u } = e,
        c = (0, n.bG)([h.A], () => h.A.getChannel(t)),
        m = (0, n.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        A = (0, g.Ay)(c),
        f = (0, g.Ay)(m, !0);
    return (0, l.jsxs)(r.D, {
        className: K.kL,
        onClick: (e) => s(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    a.e("26132"),
                    a.e("91763"),
                    a.e("38730"),
                    a.e("34971"),
                    a.e("3998"),
                    a.e("43266"),
                    a.e("91671"),
                    a.e("12255"),
                    a.e("63340"),
                    a.e("96804"),
                    a.e("21106"),
                    a.e("40175"),
                    a.e("21060"),
                    a.e("42613"),
                    a.e("99011"),
                    a.e("90554"),
                    a.e("65200"),
                    a.e("85802"),
                    a.e("3869"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826));
                return (t) => (0, l.jsx)(e, { ...t, channel: c });
            }),
        children: [
            (0, l.jsxs)("div", {
                className: K.kb,
                children: [
                    (0, l.jsxs)(i.D, {
                        className: K.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, l.jsx)("span", { className: K.CB, children: A }),
                            u && null != m
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      tag: "span",
                                      className: K.Ot,
                                      children: f,
                                  })
                                : null,
                        ],
                    }),
                    c.isActiveThread() ? (0, l.jsx)(B, { channel: c }) : (0, l.jsx)(D, { channel: c }),
                ],
            }),
            (0, l.jsx)(U, { channel: c }),
        ],
    });
});
function U(e) {
    let { channel: t } = e,
        a = (0, n.bG)([f.A], () => f.A.getMemberIdsPreview(t.id) ?? []),
        s = (0, n.bG)([f.A], () => f.A.getMemberCount(t.id) ?? 0),
        r = (0, n.yK)([A.default], () => a.map((e) => A.default.getUser(e)));
    return ((0, u.Ay)(() => {
        a.filter((e, t) => null == r[t]).forEach((e) => {
            m.A.requestMember(t.guild_id, e);
        });
    }),
    0 === a.length)
        ? null
        : (0, l.jsx)(c.Ay, {
              className: K.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: s,
              max: O.Td,
          });
}
