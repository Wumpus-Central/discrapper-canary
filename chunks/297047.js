n.d(t, {
    Z: () => h,
    q: () => p
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(144144),
    o = n(592125),
    l = n(496675),
    u = n(944486),
    c = n(585483),
    d = n(51144),
    f = n(981631),
    _ = n(388032);
function p(e, t) {
    let { id: n } = e,
        i = '@'.concat(d.ZP.getUserTag(e, { decoration: 'never' })),
        r = '<@'.concat(n, '>');
    c.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: i,
        rawText: r
    }),
        null != t && s.Z.startTyping(t);
}
function h(e, t, n) {
    let [s, c] = (0, r.Wu)(
            [u.Z, o.Z, l.Z],
            () => {
                let e = u.Z.getChannelId(t),
                    n = o.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        d = n === f.IlC.POPOUT;
    if (!c || d) return null;
    function h() {
        p(e, s);
    }
    return (0, i.jsx)(a.sNh, {
        id: 'mention',
        label: _.intl.string(_.t.P8tvKC),
        action: h
    });
}
