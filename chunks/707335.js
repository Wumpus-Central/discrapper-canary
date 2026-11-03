t.d(a, { A: () => U });
var s = t(477900),
    l = t(582128),
    n = t(17928),
    r = t(939249),
    i = t(534514),
    d = t(834730),
    o = t(442433),
    u = t(964486),
    c = t(104171),
    g = t(47167),
    h = t(734057),
    m = t(860071),
    A = t(287809),
    f = t(802958),
    x = t(778712),
    v = t(463930),
    I = t(163328),
    y = t(730134),
    j = t(80682),
    w = t(713654),
    S = t(521981),
    p = t(763754),
    M = t(448368),
    b = t(967144),
    E = t(288254),
    N = t(696451),
    _ = t(573163),
    F = t(994500),
    R = t(935208),
    C = t(427262),
    T = t(456874),
    k = t(707539),
    G = t(838541),
    K = t(105292),
    L = t(576965);
function B(e) {
    let { channel: a } = e,
        t = (0, n.bG)([T.A], () => T.A.getMostRecentMessage(a.id));
    return null == t ? (0, s.jsx)(W, { channel: a }) : (0, s.jsx)(D, { channel: a, message: t });
}
function W(e) {
    let { channel: a } = e,
        t = (0, k.JO)(a);
    return (0, s.jsxs)(d.E, {
        className: L.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [K.intl.string(K.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, k.aK)(t)],
    });
}
function D(e) {
    let { channel: a, message: t } = e;
    (0, j.Eq)({ [a.guild_id]: [t.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.author.id) ?? t.author),
        { nick: i, colorString: o, colorStrings: u } = (0, p.Ay)(t),
        c = (0, b.gn)(a.guild_id, r.id, u),
        { isBlocked: g, isIgnored: h } = (0, n.cf)(
            [F.A],
            () => ({ isBlocked: F.A.isBlockedForMessage(t), isIgnored: F.A.isIgnoredForMessage(t) }),
            [t],
        ),
        m = (0, E.IL)(a),
        f = l.useMemo(() => {
            let e =
                    null != t.content && "" !== t.content
                        ? (0, S.Ay)(t, { formatInline: !0, allowLinks: !0 }).content
                        : null,
                {
                    contentPlaceholder: a,
                    renderedContent: l,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, M.o)(t, e, g, h, L.BK, { trailingIconClass: L.sl, leadingIconClass: L.aG, iconSize: G.eJ });
            return (0, s.jsxs)(s.Fragment, { children: [r, l ?? (0, s.jsx)("span", { children: a }), n] });
        }, [t, g, h]);
    return (0, s.jsxs)(d.E, {
        className: L.W$,
        variant: "body-sm/normal",
        color: "text-default",
        children: [
            (0, s.jsx)(y.A, { className: L.my, user: r, size: x._3.SIZE_16 }),
            (0, s.jsx)(v.g, { name: i, colorString: o, colorStrings: c, className: L.fh }),
            ":\xa0",
            m ? (0, s.jsx)("span", { className: L.Iy, children: K.intl.string(K.t["5uaI/7"]) }) : f,
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
    (0, j.Eq)({ [a.guild_id]: [a.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.ownerId)),
        i = (0, n.bG)([N.Ay], () => N.Ay.getMember(a.guild_id, a.ownerId)),
        o = (0, b.gn)(a.guild_id, r?.id, i?.colorStrings ?? null),
        u = (0, w.gU)(a) ?? I.y;
    return (0, s.jsx)(d.E, {
        className: L.W$,
        variant: "body-sm/normal",
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
                          (0, s.jsx)(y.A, { className: L.my, user: r, size: x._3.SIZE_16 }),
                          K.intl.format(K.t["GFDmd/"], {
                              authorHook: (e, a) =>
                                  (0, s.jsx)(
                                      v.g,
                                      {
                                          className: L.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: o,
                                          name: i?.nick ?? C.Ay.getName(r),
                                      },
                                      a,
                                  ),
                          }),
                          (0, s.jsx)("span", { className: L.xE, children: "\u2022" }),
                          K.intl.format(K.t["5Wk9+o"], { time: (0, k.aK)(l) }),
                      ],
                  }),
    });
}
var H = t(37411);
let U = l.memo(function (e) {
    let { threadId: a, goToThread: l, showChannelName: u } = e,
        c = (0, n.bG)([h.A], () => h.A.getChannel(a)),
        m = (0, n.bG)([h.A], () => h.A.getChannel(c.parent_id)),
        A = (0, g.Ay)(c),
        f = (0, g.Ay)(m, !0);
    return (0, s.jsxs)(r.D, {
        className: L.kL,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("393336"),
                    t.e("391763"),
                    t.e("955557"),
                    t.e("591951"),
                    t.e("947502"),
                    t.e("603998"),
                    t.e("343266"),
                    t.e("965789"),
                    t.e("691671"),
                    t.e("412255"),
                    t.e("63340"),
                    t.e("896804"),
                    t.e("275289"),
                    t.e("421060"),
                    t.e("697367"),
                    t.e("699011"),
                    t.e("703869"),
                    t.e("51212"),
                    t.e("584615"),
                ]).then(t.bind(t, 612826));
                return (a) => (0, s.jsx)(e, { ...a, channel: c });
            }),
        children: [
            (0, s.jsxs)("div", {
                className: L.kb,
                children: [
                    (0, s.jsxs)(i.D, {
                        className: L.OG,
                        variant: "heading-sm/semibold",
                        children: [
                            (0, s.jsx)("span", { className: L.CB, children: A }),
                            u && null != m
                                ? (0, s.jsx)(d.E, {
                                      variant: "body-sm/medium",
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
              className: L.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: a.guild_id,
              users: r,
              count: l,
              max: H.Td,
          });
}
