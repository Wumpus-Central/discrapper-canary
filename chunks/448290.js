n.d(t, {
    A: () => h,
    C: () => _,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(414798),
    o = n(734057),
    l = n(576705),
    c = n(309010),
    u = n(203982),
    d = n(427262),
    f = n(652215),
    p = n(985018);
function _(e, t) {
    let { id: n } = e,
        r = "@".concat(d.Ay.getUserTag(e, { decoration: "never" })),
        i = "<@".concat(n, ">");
    u._.dispatchToLastSubscribed(f.jej.INSERT_TEXT, {
        plainText: r,
        rawText: i,
    }),
        null != t && s.A.startTyping(t);
}
function h(e, t, n) {
    let [s, u] = (0, i.yK)([c.A, o.A, l.A], () => {
            let e = c.A.getChannelId(t),
                n = o.A.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || l.A.can(f.xBc.SEND_MESSAGES, n))];
        }, [t]),
        d = n === f.BRT.POPOUT;
    if (!u || d) return null;
    function h() {
        _(e, s);
    }
    return (0, r.jsx)(a.Drp, {
        id: "mention",
        label: p.intl.string(p.t.P8tvKG),
        action: h,
    });
}
