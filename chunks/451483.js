"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    l = n(349288),
    s = n(517905),
    a = n(763754),
    o = n(888675),
    c = n(985018);
function u(e) {
    let { children: t, messageReference: n, guildName: a } = e,
        o = r.useRef(null);
    if (null == n) return (0, i.jsx)(l.Anchor, { children: t });
    let { guild_id: c } = n;
    return null == c
        ? (0, i.jsx)(l.Anchor, { children: t })
        : (0, i.jsx)(s.A, {
              guildId: c,
              name: a,
              targetElementRef: o,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": r, ...s } = e;
                  return (0, i.jsx)(l.Anchor, { ...s, ref: o, children: t });
              },
          });
}
function d(e) {
    let { usernameHook: t, message: r, compact: l } = e,
        { content: s, timestamp: d, messageReference: _ } = r,
        E = (0, a.Ay)(r),
        A = t(E),
        m = (s ?? "").split(" ").slice(0, -1).join(" "),
        I = c.intl.format(c.t["47CZc2"], {
            username: E.nick,
            usernameHook: A,
            webhookName: s,
            webhookNameHook: (e, t) => (0, i.jsx)(u, { messageReference: _, guildName: m, children: e }, t),
        });
    return (0, i.jsx)(o.A, { icon: n(617184), timestamp: d, compact: l, children: I });
}
