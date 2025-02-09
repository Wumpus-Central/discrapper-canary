t.d(n, {
    Z: () => E,
    q: () => p
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(144144),
    u = t(592125),
    o = t(496675),
    d = t(944486),
    s = t(585483),
    c = t(51144),
    _ = t(981631),
    f = t(388032);
function p(e, n) {
    let { id: t } = e,
        l = '@'.concat(c.ZP.getUserTag(e, { decoration: 'never' }));
    s.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
        plainText: l,
        rawText: '<@'.concat(t, '>')
    }),
        null != n && a.Z.startTyping(n);
}
function E(e, n, t) {
    let [a, s] = (0, i.Wu)(
            [d.Z, u.Z, o.Z],
            () => {
                let e = d.Z.getChannelId(n),
                    t = u.Z.getChannel(e);
                return [e, null != t && (t.isMultiUserDM() || o.Z.can(_.Plq.SEND_MESSAGES, t))];
            },
            [n]
        ),
        c = t === _.IlC.POPOUT;
    return !s || c
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'mention',
              label: f.intl.string(f.t.P8tvKC),
              action: function () {
                  p(e, a);
              }
          });
}
