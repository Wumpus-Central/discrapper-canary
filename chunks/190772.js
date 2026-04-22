s.d(t, { A: () => I });
var l = s(627968),
    n = s(64700),
    a = s(311907),
    r = s(834730),
    i = s(778712),
    o = s(463930),
    d = s(163328),
    c = s(730134),
    u = s(80682),
    h = s(713654),
    g = s(465364),
    m = s(763754),
    x = s(448368),
    A = s(967144),
    f = s(696451),
    j = s(222823),
    v = s(994500),
    S = s(287809),
    T = s(661191),
    w = s(427262),
    N = s(456874),
    p = s(707539),
    E = s(838541),
    y = s(985018),
    b = s(992092);
function I(e) {
    return e.isActiveThread() ? (0, l.jsx)(C, { channel: e }) : (0, l.jsx)(M, { channel: e });
}
function C(e) {
    let { channel: t } = e,
        s = (0, a.bG)([N.A], () => N.A.getMostRecentMessage(t.id));
    return null == s ? (0, l.jsx)(_, { channel: t }) : (0, l.jsx)(k, { channel: t, message: s });
}
function _(e) {
    let { channel: t } = e,
        s = (0, p.JO)(t);
    return (0, l.jsxs)(r.E, {
        className: b.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [y.intl.string(y.t.Jmh6n9), "\xa0 • \xa0", (0, p.aK)(s)],
    });
}
function k(e) {
    let { channel: t, message: s } = e;
    (0, u.Eq)({ [t.guild_id]: [s.author.id] }, "ThreadBrowserRowSubtext");
    let d = (0, a.bG)([S.default], () => S.default.getUser(s.author.id) ?? s.author),
        { nick: h, colorString: f, colorStrings: j } = (0, m.Ay)(s),
        w = (0, A.gn)(t.guild_id, d.id, j),
        { isBlocked: N, isIgnored: y } = (0, a.cf)(
            [v.A],
            () => ({ isBlocked: v.A.isBlockedForMessage(s), isIgnored: v.A.isIgnoredForMessage(s) }),
            [s],
        ),
        I = n.useMemo(() => {
            let e = null != s.content && "" !== s.content ? (0, g.Ay)(s, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: n,
                    trailingIcon: a,
                    leadingIcon: r,
                } = (0, x.o)(s, e, N, y, b.BK, { trailingIconClass: b.sl, leadingIconClass: b.aG, iconSize: E.eJ });
            return (0, l.jsxs)(l.Fragment, { children: [r, n ?? (0, l.jsx)("span", { children: t }), a] });
        }, [s, N, y]);
    return (0, l.jsxs)(r.E, {
        className: b.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, l.jsx)(c.A, { className: b.my, user: d, size: i._3.SIZE_16 }),
            (0, l.jsx)(o.g, { name: h, colorString: f, colorStrings: w, className: b.fh }),
            ":\xa0",
            I,
            "\xa0 • \xa0",
            (0, p.aK)(T.default.extractTimestamp(s.id)),
        ],
    });
}
function M(e) {
    let { channel: t } = e,
        s = (0, a.bG)([j.Ay], () => j.Ay.lastMessageId(t.id)),
        n =
            null == s
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : T.default.extractTimestamp(s);
    (0, u.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let g = (0, a.bG)([S.default], () => S.default.getUser(t.ownerId)),
        m = (0, a.bG)([f.Ay], () => f.Ay.getMember(t.guild_id, t.ownerId)),
        x = (0, A.gn)(t.guild_id, g?.id, m?.colorStrings ?? null),
        v = (0, h.gU)(t) ?? d.y;
    return (0, l.jsx)(r.E, {
        className: b.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == g
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: b.A2,
                              children: (0, l.jsx)(v, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          y.intl.format(y.t["5Wk9+o"], { time: (0, p.aK)(n) }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(c.A, { className: b.my, user: g, size: i._3.SIZE_16 }),
                          y.intl.format(y.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, l.jsx)(
                                      o.g,
                                      {
                                          className: b.eS,
                                          colorString: m?.colorString ?? null,
                                          colorStrings: x,
                                          name: m?.nick ?? w.Ay.getName(g),
                                      },
                                      t,
                                  ),
                          }),
                          (0, l.jsx)("span", { className: b.xE, children: "•" }),
                          y.intl.format(y.t["5Wk9+o"], { time: (0, p.aK)(n) }),
                      ],
                  }),
    });
}
