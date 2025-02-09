n.d(t, {
    Z: () => _,
    q: () => g
}),
    n(47120);
var a = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    r = n(144144),
    s = n(592125),
    l = n(496675),
    c = n(944486),
    u = n(585483),
    d = n(51144),
    p = n(981631),
    m = n(388032);
function g(e, t) {
    let { id: n } = e,
        a = '@'.concat(d.ZP.getUserTag(e, { decoration: 'never' }));
    u.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
        plainText: a,
        rawText: '<@'.concat(n, '>')
    }),
        null != t && r.Z.startTyping(t);
}
function _(e, t, n) {
    let [r, u] = (0, o.Wu)(
            [c.Z, s.Z, l.Z],
            () => {
                let e = c.Z.getChannelId(t),
                    n = s.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || l.Z.can(p.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        d = n === p.IlC.POPOUT;
    return !u || d
        ? null
        : (0, a.jsx)(i.sNh, {
              id: 'mention',
              label: m.intl.string(m.t.P8tvKC),
              action: function () {
                  g(e, r);
              }
          });
}
