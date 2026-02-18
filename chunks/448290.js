"use strict";
n.d(t, { A: () => p, C: () => g });
var l = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    r = n(414798),
    a = n(734057),
    o = n(576705),
    u = n(309010),
    c = n(203982),
    d = n(427262),
    m = n(652215),
    h = n(985018);
function g(e, t) {
    let { id: n } = e,
        l = `@${d.Ay.getUserTag(e, { decoration: "never" })}`,
        s = `<@${n}>`;
    c._.dispatchToLastSubscribed(m.jej.INSERT_TEXT, { plainText: l, rawText: s }), null != t && r.A.startTyping(t);
}
function p(e, t, n) {
    let [r, c] = (0, s.yK)([u.A, a.A, o.A], () => {
            let e = u.A.getChannelId(t),
                n = a.A.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || o.A.can(m.xBc.SEND_MESSAGES, n))];
        }, [t]),
        d = n === m.BRT.POPOUT;
    return !c || d
        ? null
        : (0, l.jsx)(i.Drp, {
              id: "mention",
              label: h.intl.string(h.t.P8tvKG),
              action: function () {
                  g(e, r);
              },
          });
}
