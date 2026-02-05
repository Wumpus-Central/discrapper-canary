"use strict";
n.d(t, { A: () => h, C: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(414798),
    o = n(734057),
    l = n(576705),
    u = n(309010),
    c = n(203982),
    d = n(427262),
    _ = n(652215),
    f = n(985018);
function p(e, t) {
    let { id: n } = e,
        r = `@${d.Ay.getUserTag(e, { decoration: "never" })}`,
        i = `<@${n}>`;
    c._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, { plainText: r, rawText: i }), null != t && s.A.startTyping(t);
}
function h(e, t, n) {
    let [s, c] = (0, i.yK)([u.A, o.A, l.A], () => {
            let e = u.A.getChannelId(t),
                n = o.A.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || l.A.can(_.xBc.SEND_MESSAGES, n))];
        }, [t]),
        d = n === _.BRT.POPOUT;
    if (!c || d) return null;
    function h() {
        p(e, s);
    }
    return (0, r.jsx)(a.Drp, { id: "mention", label: f.intl.string(f.t.P8tvKG), action: h });
}
