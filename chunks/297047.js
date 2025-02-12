t.d(n, {
    Z: () => E,
    q: () => p
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(144144),
    o = t(592125),
    u = t(496675),
    d = t(944486),
    s = t(585483),
    c = t(51144),
    _ = t(981631),
    f = t(388032);
function p(e, n) {
    let { id: t } = e,
        i = '@'.concat(c.ZP.getUserTag(e, { decoration: 'never' }));
    s.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
        plainText: i,
        rawText: '<@'.concat(t, '>')
    }),
        null != n && r.Z.startTyping(n);
}
function E(e, n, t) {
    let [r, s] = (0, l.Wu)(
            [d.Z, o.Z, u.Z],
            () => {
                let e = d.Z.getChannelId(n),
                    t = o.Z.getChannel(e);
                return [e, null != t && (t.isMultiUserDM() || u.Z.can(_.Plq.SEND_MESSAGES, t))];
            },
            [n]
        ),
        c = t === _.IlC.POPOUT;
    return !s || c
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'mention',
              label: f.intl.string(f.t.P8tvKC),
              action: function () {
                  p(e, r);
              }
          });
}
