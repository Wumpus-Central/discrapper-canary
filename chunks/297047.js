(n.d(t, {
    Z: () => f,
    q: () => g
}),
    n(388685));
var r = n(255367);
n(73800);
var o = n(442837),
    l = n(481060),
    i = n(144144),
    a = n(592125),
    s = n(496675),
    c = n(944486),
    u = n(585483),
    d = n(51144),
    p = n(981631),
    m = n(388032);
function g(e, t) {
    let { id: n } = e,
        r = '@'.concat(d.ZP.getUserTag(e, { decoration: 'never' }));
    (u.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: '<@'.concat(n, '>')
    }),
        null != t && i.Z.startTyping(t));
}
function f(e, t, n) {
    let [i, u] = (0, o.Wu)(
            [c.Z, a.Z, s.Z],
            () => {
                let e = c.Z.getChannelId(t),
                    n = a.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || s.Z.can(p.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        d = n === p.IlC.POPOUT;
    return !u || d
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'mention',
              label: m.intl.string(m.t.P8tvKC),
              action: function () {
                  g(e, i);
              }
          });
}
