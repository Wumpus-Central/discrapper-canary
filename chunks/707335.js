a.d(t, { A: () => U });
var s = a(477900),
    l = a(582128),
    n = a(17928),
    r = a(939249),
    i = a(297264),
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
    I = a(163328),
    j = a(730134),
    w = a(80682),
    S = a(713654),
    p = a(521981),
    M = a(763754),
    y = a(308334),
    E = a(967144),
    N = a(288254),
    _ = a(696451),
    b = a(568548),
    F = a(994500),
    R = a(935208),
    C = a(427262),
    T = a(456874),
    k = a(707539),
    G = a(838541),
    K = a(375708),
    L = a(281156);
function B(e) {
    let { channel: t } = e,
        a = (0, n.bG)([T.A], () => T.A.getMostRecentMessage(t.id));
    return null == a ? (0, s.jsx)(W, { channel: t }) : (0, s.jsx)(D, { channel: t, message: a });
}
function W(e) {
    let { channel: t } = e,
        a = (0, k.JO)(t);
    return (0, s.jsxs)(d.E, {
        className: L.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [K.intl.string(K.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, k.aK)(a)],
    });
}
function D(e) {
    let { channel: t, message: a } = e;
    (0, w.Eq)({ [t.guild_id]: [a.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.author.id) ?? a.author),
        { nick: i, colorString: o, colorStrings: u } = (0, M.Ay)(a),
        c = (0, E.gn)(t.guild_id, r.id, u),
        { isBlocked: g, isIgnored: h } = (0, n.cf)(
            [F.A],
            () => ({ isBlocked: F.A.isBlockedForMessage(a), isIgnored: F.A.isIgnoredForMessage(a) }),
            [a],
        ),
        m = (0, N.IL)(t),
        f = l.useMemo(() => {
            let e =
                    null != a.content && "" !== a.content
                        ? (0, p.Ay)(a, { formatInline: !0, allowLinks: !0 }).content
                        : null,
                {
                    contentPlaceholder: t,
                    renderedContent: l,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, y.o)(a, e, g, h, L.BK, { trailingIconClass: L.sl, leadingIconClass: L.aG, iconSize: G.eJ });
            return (0, s.jsxs)(s.Fragment, { children: [r, l ?? (0, s.jsx)("span", { children: t }), n] });
        }, [a, g, h]);
    return (0, s.jsxs)(d.E, {
        className: L.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, s.jsx)(j.A, { className: L.my, user: r, size: x._3.SIZE_16 }),
            (0, s.jsx)(v.g, { name: i, colorString: o, colorStrings: c, className: L.fh }),
            ":\xa0",
            m ? (0, s.jsx)("span", { className: L.Iy, children: K.intl.string(K.t["5uaI/7"]) }) : f,
            "\xa0 \u2022 \xa0",
            (0, k.aK)(R.default.extractTimestamp(a.id)),
        ],
    });
}
function O(e) {
    let { channel: t } = e,
        a = (0, n.bG)([b.Ay], () => b.Ay.lastMessageId(t.id)),
        l =
            null == a
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : R.default.extractTimestamp(a);
    (0, w.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.ownerId)),
        i = (0, n.bG)([_.Ay], () => _.Ay.getMember(t.guild_id, t.ownerId)),
        o = (0, E.gn)(t.guild_id, r?.id, i?.colorStrings ?? null),
        u = (0, S.gU)(t) ?? I.y;
    return (0, s.jsx)(d.E, {
        className: L.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("div", {
                              className: L.A2,
                              children: (0, s.jsx)(u, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          K.intl.format(K.t["5Wk9+o"], { time: (0, k.aK)(l) }),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(j.A, { className: L.my, user: r, size: x._3.SIZE_16 }),
                          K.intl.format(K.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, s.jsx)(
                                      v.g,
                                      {
                                          className: L.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? C.Ay.getName(r),
                                      },
                                      t,
                                  ),
                          }),
                          (0, s.jsx)("span", { className: L.xE, children: "\u2022" }),
                          K.intl.format(K.t["5Wk9+o"], { time: (0, k.aK)(l) }),
                      ],
                  }),
    });
}
var H = a(37411);
let U = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: u } = e,
        c = (0, n.bG)([h.A], () => h.A.getChannel(t)),
        m = (0, n.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        A = (0, g.Ay)(c),
        f = (0, g.Ay)(m, !0);
    return (0, s.jsxs)(r.D, {
        className: L.kL,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    a.e("26132"),
                    a.e("91763"),
                    a.e("38730"),
                    a.e("91671"),
                    a.e("47502"),
                    a.e("3998"),
                    a.e("43266"),
                    a.e("12255"),
                    a.e("40959"),
                    a.e("96804"),
                    a.e("21106"),
                    a.e("21060"),
                    a.e("90434"),
                    a.e("99011"),
                    a.e("65200"),
                    a.e("85802"),
                    a.e("26250"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826));
                return (t) => (0, s.jsx)(e, { ...t, channel: c });
            }),
        children: [
            (0, s.jsxs)("div", {
                className: L.kb,
                children: [
                    (0, s.jsxs)(i.D, {
                        className: L.OG,
                        variant: "heading-md/semibold",
                        children: [
                            (0, s.jsx)("span", { className: L.CB, children: A }),
                            u && null != m
                                ? (0, s.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      tag: "span",
                                      className: L.Ot,
                                      children: f,
                                  })
                                : null,
                        ],
                    }),
                    c.isActiveThread() ? (0, s.jsx)(B, { channel: c }) : (0, s.jsx)(O, { channel: c }),
                ],
            }),
            (0, s.jsx)(q, { channel: c }),
        ],
    });
});
function q(e) {
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
              className: L.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: l,
              max: H.Td,
          });
}
