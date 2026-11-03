t.d(n, { N: () => M });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    u = t(588975),
    i = t(442433),
    s = t(9578),
    c = t(975807),
    o = t(380610),
    d = t(235393),
    h = t(258072),
    v = t(694403),
    m = t(332173),
    f = t(679164),
    x = t(78377),
    p = t(734057),
    g = t(123917),
    j = t(794215),
    I = t(333421),
    y = t(100392),
    A = t(836156);
let k = /^dev:\/\//i,
    C = r.lazy(() => Promise.resolve().then(t.bind(t, 325213))),
    b = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    S = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    w = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function N(e) {
    let { url: n } = e,
        t =
            (0, o.vS)(n) || (0, o.h4)(n)
                ? (0, l.jsx)(C, { url: n })
                : (0, y.W0)(n)
                  ? (0, l.jsx)(b, { url: n })
                  : (0, A.i)(n)
                    ? (0, l.jsx)(S, { url: n })
                    : (0, I.my)(n)
                      ? (0, l.jsx)(w, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var z = t(954403),
    P = t(406605),
    L = t(147190);
function M(e) {
    let { text: n, url: t, title: r, children: a } = e,
        u = (0, x.p)(),
        i = u?.noStyleAndInteraction === !0,
        c = null == n || 0 === n.length;
    if (c) {
        let e = (0, j.c)(t);
        if (null != e) return (0, l.jsx)($, { ...e });
        let n = (0, h.h)(t);
        if (null != n) return (0, l.jsx)(E, { url: t, name: n.name, interactive: !i });
    }
    if ((0, o.vS)(t)) return (0, l.jsx)(N, { url: t });
    let d = (0, v.W1)(t),
        m = c
            ? (d?.displayTarget ?? t)
            : (function e(n) {
                  return n
                      .map((n) => {
                          switch (n.type) {
                              case "text":
                              case "code":
                                  return n.value;
                              case "bold":
                              case "italic":
                              case "underline":
                              case "strikethrough":
                                  return e(n.value);
                              case "spoiler":
                                  return e(n.value.content);
                              default:
                                  return "";
                          }
                      })
                      .join("");
              })(n),
        f = c ? (0, l.jsx)(z.z, { text: m }) : a;
    if (k.test(t))
        return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("span", { children: f }), (0, l.jsx)(N, { url: t })] });
    let p = r;
    return (c ||
        (p =
            null != r && r.length > 0
                ? `${r}

(${t})`
                : t),
    i)
        ? (0, l.jsx)("span", { title: p ?? t, children: f })
        : (0, l.jsx)(s.A, {
              title: p,
              href: t,
              trusted: () => (0, g.m)(d?.target ?? t, null != r && r.length > 0 ? r : m),
              messageId: u?.messageId,
              channelId: u?.channelId,
              children: (0, l.jsx)("span", { children: f }),
          });
}
function $(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: u, conversationId: i } = e,
        s = (0, a.bG)([p.A], () => (null != u && null == p.A.getChannel(t) ? u : t), [t, u]);
    return (0, l.jsx)(P.A, { channelId: s, guildId: n, messageId: r, conversationId: i });
}
function E(e) {
    let { url: n, name: a, interactive: s } = e,
        o = r.useCallback(async () => {
            let e = await f.AN(n);
            (d.A.trackLinkClicked(e), (0, c.A)(e));
        }, [n]),
        h = r.useCallback(
            (e) => {
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: a });
                });
            },
            [a, n],
        );
    return (0, l.jsxs)(m.A, {
        role: "link",
        href: n,
        onClick: s ? o : void 0,
        onContextMenu: s ? h : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(u.P, { size: "xs", className: L.Kk, color: "currentColor" }), a],
    });
}
