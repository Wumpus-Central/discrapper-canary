e.d(n, { A: () => T, C: () => h });
var i = e(627968);
e(64700);
var r = e(17928),
    a = e(477782),
    s = e(414798),
    l = e(734057),
    c = e(576705),
    u = e(309010),
    d = e(625494),
    o = e(427262),
    A = e(652215),
    p = e(375708);
function h(t, n) {
    let { id: e } = t,
        i = `@${o.Ay.getUserTag(t, { decoration: "never" })}`,
        r = `<@${e}>`;
    d._.dispatchToLastSubscribed(A.jej.INSERT_TEXT, { plainText: i, rawText: r }), null != n && s.A.startTyping(n);
}
function T(t, n, e, s) {
    let [d, o] = (0, r.yK)([u.Ay, l.A, c.A], () => {
            let t = e ?? u.Ay.getChannelId(n),
                i = l.A.getChannel(t);
            return [t, null != i && (i.isMultiUserDM() || c.A.can(A.xBc.SEND_MESSAGES, i))];
        }, [e, n]),
        T = s === A.BRT.POPOUT;
    return !o || T
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "mention",
              label: p.intl.string(p.t.P8tvKG),
              action: function () {
                  h(t, d);
              },
          });
}
