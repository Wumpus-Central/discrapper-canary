n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(517905),
    s = n(763754),
    o = n(888675),
    d = n(985018);
function c(e) {
    let { children: t, messageReference: n, guildName: s } = e,
        o = l.useRef(null);
    if (null == n) return (0, i.jsx)(a.MzZ, { children: t });
    let { guild_id: d } = n;
    return null == d
        ? (0, i.jsx)(a.MzZ, { children: t })
        : (0, i.jsx)(r.A, {
              guildId: d,
              name: s,
              targetElementRef: o,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": l, ...r } = e;
                  return (0, i.jsx)(a.MzZ, { ...r, ref: o, children: t });
              },
          });
}
function u(e) {
    let { usernameHook: t, message: l, compact: a } = e,
        { content: r, timestamp: u, messageReference: m } = l,
        _ = (0, s.Ay)(l),
        h = t(_),
        p = (r ?? "").split(" ").slice(0, -1).join(" "),
        g = d.intl.format(d.t["47CZc2"], {
            username: _.nick,
            usernameHook: h,
            webhookName: r,
            webhookNameHook: (e, t) => (0, i.jsx)(c, { messageReference: m, guildName: p, children: e }, t),
        });
    return (0, i.jsx)(o.A, { icon: n(394803), timestamp: u, compact: a, children: g });
}
