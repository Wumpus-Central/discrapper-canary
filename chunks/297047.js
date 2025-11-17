n.d(t, {
    Z: () => h,
    q: () => p,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(144144),
    s = n(592125),
    l = n(496675),
    c = n(944486),
    u = n(585483),
    d = n(51144),
    f = n(981631),
    _ = n(388032);
function p(e, t) {
    let { id: n } = e,
        r = "@".concat(d.ZP.getUserTag(e, { decoration: "never" })),
        i = "<@".concat(n, ">");
    u.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: i,
    }),
        null != t && o.Z.startTyping(t);
}
function h(e, t, n) {
    let [o, u] = (0, i.Wu)([c.Z, s.Z, l.Z], () => {
            let e = c.Z.getChannelId(t),
                n = s.Z.getChannel(e);
            return [e, null != n && (n.isMultiUserDM() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
        }, [t]),
        d = n === f.IlC.POPOUT;
    if (!u || d) return null;
    function h() {
        p(e, o);
    }
    return (0, r.jsx)(a.sNh, {
        id: "mention",
        label: _.intl.string(_.t.P8tvKG),
        action: h,
    });
}
