s.d(t, { A: () => y });
var l = s(627968),
    n = s(64700),
    a = s(311907),
    r = s(397927),
    i = s(730134),
    o = s(80682),
    d = s(713654),
    c = s(465364),
    u = s(763754),
    h = s(448368),
    g = s(967144),
    m = s(696451),
    x = s(222823),
    A = s(994500),
    f = s(287809),
    j = s(661191),
    v = s(427262),
    T = s(456874),
    w = s(707539),
    S = s(838541),
    N = s(985018),
    p = s(106259);
function y(e) {
    return e.isActiveThread() ? (0, l.jsx)(b, { channel: e }) : (0, l.jsx)(k, { channel: e });
}
function b(e) {
    let { channel: t } = e,
        s = (0, a.bG)([T.A], () => T.A.getMostRecentMessage(t.id));
    return null == s ? (0, l.jsx)(C, { channel: t }) : (0, l.jsx)(I, { channel: t, message: s });
}
function C(e) {
    let { channel: t } = e,
        s = (0, w.JO)(t);
    return (0, l.jsxs)(r.Text, {
        className: p.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [N.intl.string(N.t.Jmh6n9), "\xa0 • \xa0", (0, w.aK)(s)],
    });
}
function I(e) {
    let { channel: t, message: s } = e;
    (0, o.Eq)({ [t.guild_id]: [s.author.id] }, "ThreadBrowserRowSubtext");
    let d = (0, a.bG)([f.default], () => f.default.getUser(s.author.id) ?? s.author),
        { nick: m, colorString: x, colorStrings: v } = (0, u.Ay)(s),
        T = (0, g.gn)(t.guild_id, d.id, v),
        { isBlocked: N, isIgnored: y } = (0, a.cf)(
            [A.A],
            () => ({ isBlocked: A.A.isBlockedForMessage(s), isIgnored: A.A.isIgnoredForMessage(s) }),
            [s],
        ),
        b = n.useMemo(() => {
            let e = null != s.content && "" !== s.content ? (0, c.Ay)(s, { formatInline: !0 }).content : null,
                {
                    contentPlaceholder: t,
                    renderedContent: n,
                    trailingIcon: a,
                    leadingIcon: r,
                } = (0, h.o)(s, e, N, y, p.BK, { trailingIconClass: p.sl, leadingIconClass: p.aG, iconSize: S.eJ });
            return (0, l.jsxs)(l.Fragment, { children: [r, n ?? (0, l.jsx)("span", { children: t }), a] });
        }, [s, N, y]);
    return (0, l.jsxs)(r.Text, {
        className: p.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children: [
            (0, l.jsx)(i.A, { className: p.my, user: d, size: r._3J.SIZE_16 }),
            (0, l.jsx)(r.gyj, { name: m, colorString: x, colorStrings: T, className: p.fh }),
            ":\xa0",
            b,
            "\xa0 • \xa0",
            (0, w.aK)(j.default.extractTimestamp(s.id)),
        ],
    });
}
function k(e) {
    let { channel: t } = e,
        s = (0, a.bG)([x.Ay], () => x.Ay.lastMessageId(t.id)),
        n =
            null == s
                ? new Date(t.threadMetadata?.archiveTimestamp ?? Date.now()).getTime()
                : j.default.extractTimestamp(s);
    (0, o.Eq)({ [t.guild_id]: [t.ownerId] }, "ThreadBrowserRowSubtext");
    let c = (0, a.bG)([f.default], () => f.default.getUser(t.ownerId)),
        u = (0, a.bG)([m.Ay], () => m.Ay.getMember(t.guild_id, t.ownerId)),
        h = (0, g.gn)(t.guild_id, c?.id, u?.colorStrings ?? null),
        A = (0, d.gU)(t) ?? r.ysw;
    return (0, l.jsx)(r.Text, {
        className: p.W$,
        variant: "text-sm/normal",
        color: "text-default",
        children:
            null == c
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              className: p.A2,
                              children: (0, l.jsx)(A, { width: 10, height: 10, size: "custom", color: "currentColor" }),
                          }),
                          N.intl.format(N.t["5Wk9+o"], { time: (0, w.aK)(n) }),
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(i.A, { className: p.my, user: c, size: r._3J.SIZE_16 }),
                          N.intl.format(N.t["GFDmd/"], {
                              authorHook: (e, t) =>
                                  (0, l.jsx)(
                                      r.gyj,
                                      {
                                          className: p.eS,
                                          colorString: u?.colorString ?? null,
                                          colorStrings: h,
                                          name: u?.nick ?? v.Ay.getName(c),
                                      },
                                      t,
                                  ),
                          }),
                          (0, l.jsx)("span", { className: p.xE, children: "•" }),
                          N.intl.format(N.t["5Wk9+o"], { time: (0, w.aK)(n) }),
                      ],
                  }),
    });
}
