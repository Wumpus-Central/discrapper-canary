n.d(t, {
    Z: () => E,
    q: () => g
}),
    n(47120);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(144144),
    u = n(592125),
    a = n(496675),
    c = n(944486),
    d = n(585483),
    s = n(51144),
    f = n(981631),
    _ = n(388032);
function g(e, t) {
    let { id: n } = e,
        r = '@'.concat(s.ZP.getUserTag(e, { decoration: 'never' }));
    d.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: '<@'.concat(n, '>')
    }),
        null != t && o.Z.startTyping(t);
}
function E(e, t, n) {
    let [o, d] = (0, l.Wu)(
            [c.Z, u.Z, a.Z],
            () => {
                let e = c.Z.getChannelId(t),
                    n = u.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || a.Z.can(f.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        s = n === f.IlC.POPOUT;
    return !d || s
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'mention',
              label: _.NW.string(_.t.P8tvKC),
              action: function () {
                  g(e, o);
              }
          });
}
