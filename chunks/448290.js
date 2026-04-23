n.d(t, { A: () => E, C: () => h });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(414798),
    o = n(734057),
    d = n(576705),
    u = n(309010),
    s = n(625494),
    c = n(427262),
    _ = n(652215),
    A = n(985018);
function h(e, t) {
    let { id: n } = e,
        i = `@${c.Ay.getUserTag(e, { decoration: "never" })}`,
        l = `<@${n}>`;
    s._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, { plainText: i, rawText: l }), null != t && r.A.startTyping(t);
}
function E(e, t, n) {
    let [r, s] = (0, l.yK)([u.A, o.A, d.A], () => {
            let e = u.A.getChannelId(t),
                n = o.A.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || d.A.can(_.xBc.SEND_MESSAGES, n))];
        }, [t]),
        c = n === _.BRT.POPOUT;
    return !s || c
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "mention",
              label: A.intl.string(A.t.P8tvKG),
              action: function () {
                  h(e, r);
              },
          });
}
