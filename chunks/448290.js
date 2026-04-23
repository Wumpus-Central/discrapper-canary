"use strict";
n.d(t, { A: () => p, C: () => h });
var l = n(627968);
n(64700);
var a = n(311907),
    s = n(477782),
    i = n(414798),
    r = n(734057),
    o = n(576705),
    c = n(309010),
    u = n(203982),
    d = n(427262),
    m = n(652215),
    g = n(985018);
function h(e, t) {
    let { id: n } = e,
        l = `@${d.Ay.getUserTag(e, { decoration: "never" })}`,
        a = `<@${n}>`;
    u._.dispatchToLastSubscribed(m.jej.INSERT_TEXT, { plainText: l, rawText: a }), null != t && i.A.startTyping(t);
}
function p(e, t, n) {
    let [i, u] = (0, a.yK)([c.A, r.A, o.A], () => {
            let e = c.A.getChannelId(t),
                n = r.A.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || o.A.can(m.xBc.SEND_MESSAGES, n))];
        }, [t]),
        d = n === m.BRT.POPOUT;
    return !u || d
        ? null
        : (0, l.jsx)(s.Dr, {
              id: "mention",
              label: g.intl.string(g.t.P8tvKG),
              action: function () {
                  h(e, i);
              },
          });
}
