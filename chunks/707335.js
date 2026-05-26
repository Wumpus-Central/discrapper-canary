a.d(t, { A: () => H });
var l = a(627968),
    s = a(64700),
    n = a(17928),
    r = a(939249),
    i = a(534514),
    d = a(442433),
    o = a(964486),
    u = a(104171),
    c = a(47167),
    g = a(734057),
    h = a(860071),
    A = a(287809),
    m = a(802958),
    f = a(834730),
    x = a(778712),
    v = a(463930),
    j = a(163328),
    S = a(730134),
    w = a(80682),
    I = a(713654),
    p = a(465364),
    M = a(763754),
    y = a(805964),
    E = a(967144),
    _ = a(696451),
    N = a(222823),
    b = a(994500),
    F = a(935208),
    R = a(427262),
    C = a(456874),
    G = a(707539),
    T = a(838541),
    k = a(375708),
    K = a(992092);
function B(e) {
    let { channel: t } = e,
        a = (0, n.bG)([C.A], () => C.A.getMostRecentMessage(t.id));
    return null == a ? (0, l.jsx)(L, { channel: t }) : (0, l.jsx)(W, { channel: t, message: a });
}
function L(e) {
    let { channel: t } = e,
        a = (0, G.JO)(t);
    return (0, l.jsxs)(f.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [k.intl.string(k.t.Jmh6n9), "\xa0 \u2022 \xa0", (0, G.aK)(a)],
    });
}
function W(e) {
    let { channel: t, message: a } = e;
    (0, w.Eq)({ [t.guild_id]: [a.author.id] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(a.author.id) ?? a.author),
        { nick: i, colorString: d, colorStrings: o } = (0, M.Ay)(a),
        u = (0, E.gn)(t.guild_id, r.id, o),
        { isBlocked: c, isIgnored: g } = (0, n.cf)(
            [b.A],
            () => ({ isBlocked: b.A.isBlockedForMessage(a), isIgnored: b.A.isIgnoredForMessage(a) }),
            [a],
        ),
        h = s.useMemo(() => {
            let e = null != a.content && "" !== a.content ? (0, p.Ay)(a, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: s,
                    trailingIcon: n,
                    leadingIcon: r,
                } = (0, y.o)(a, e, c, g, K.BK, { trailingIconClass: K.sl, leadingIconClass: K.aG, iconSize: T.eJ });
            return (0, l.jsxs)(l.Fragment, { children: [r, s ?? (0, l.jsx)("span", { children: t }), n] });
        }, [a, c, g]);
    return (0, l.jsxs)(f.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, l.jsx)(S.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
            (0, l.jsx)(v.g, { name: i, colorString: d, colorStrings: u, className: K.fh }),
            ":\xa0",
            h,
            "\xa0 \u2022 \xa0",
            (0, G.aK)(F.default.extractTimestamp(a.id)),
        ],
    });
}
function D(e) {
    let { channel: t } = e,
        a = (0, n.bG)([N.Ay], () => N.Ay.lastMessageId(t.id)),
        s =
            null == a
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : F.default.extractTimestamp(a);
    (0, w.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let r = (0, n.bG)([A.default], () => A.default.getUser(t.ownerId)),
        i = (0, n.bG)([_.Ay], () => _.Ay.getMember(t.guild_id, t.ownerId)),
        d = (0, E.gn)(t.guild_id, r?.id, i?.colorStrings ?? null),
        o = (0, I.gU)(t) ?? j.y;
    return (0, l.jsx)(f.E, {
        className: K.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == r
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: K.A2,
                              children: (0, l.jsx)(o, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          k.intl.format(k.t["5Wk9+o"], { time: (0, G.aK)(s) }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(S.A, { className: K.my, user: r, size: x._3.SIZE_16 }),
                          k.intl.format(k.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, l.jsx)(
                                      v.g,
                                      {
                                          className: K.eS,
                                          colorString: i?.colorString ?? null,
                                          colorStrings: d,
                                          name: i?.nick ?? R.Ay.getName(r),
                                      },
                                      t,
                                  ),
                          }),
                          (0, l.jsx)("span", { className: K.xE, children: "\u2022" }),
                          k.intl.format(k.t["5Wk9+o"], { time: (0, G.aK)(s) }),
                      ],
                  }),
    });
}
var O = a(37411);
let H = s.memo(function (e) {
    let { threadId: t, goToThread: s, showChannelName: o } = e,
        u = (0, n.bG)([g.A], () => g.A.getChannel(t)),
        h = (0, n.bG)([g.A], () => g.A.getChannel(u.parent_id)),
        A = (0, c.Ay)(u),
        m = (0, c.Ay)(h, !0);
    return (0, l.jsxs)(r.D, {
        className: K.kL,
        onClick: (e) => s(u, e.shiftKey),
        onContextMenu: (e) =>
            (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    a.e("26132"),
                    a.e("91763"),
                    a.e("38730"),
                    a.e("34971"),
                    a.e("3998"),
                    a.e("43266"),
                    a.e("91671"),
                    a.e("12255"),
                    a.e("40959"),
                    a.e("96804"),
                    a.e("21060"),
                    a.e("21106"),
                    a.e("40175"),
                    a.e("43746"),
                    a.e("90554"),
                    a.e("99011"),
                    a.e("85802"),
                    a.e("65200"),
                    a.e("26250"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826));
                return (t) => (0, l.jsx)(e, { ...t, channel: u });
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
                            o && null != h ? (0, l.jsx)("span", { className: K.Ot, children: m }) : null,
                        ],
                    }),
                    u.isActiveThread() ? (0, l.jsx)(B, { channel: u }) : (0, l.jsx)(D, { channel: u }),
                ],
            }),
            (0, l.jsx)(U, { channel: u }),
        ],
    });
});
function U(e) {
    let { channel: t } = e,
        a = (0, n.bG)([m.A], () => m.A.getMemberIdsPreview(t.id) ?? []),
        s = (0, n.bG)([m.A], () => m.A.getMemberCount(t.id) ?? 0),
        r = (0, n.yK)([A.default], () => a.map((e) => A.default.getUser(e)));
    return ((0, o.Ay)(() => {
        a.filter((e, t) => null == r[t]).forEach((e) => {
            h.A.requestMember(t.guild_id, e);
        });
    }),
    0 === a.length)
        ? null
        : (0, l.jsx)(u.Ay, {
              className: K.WM,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: s,
              max: O.Td,
          });
}
