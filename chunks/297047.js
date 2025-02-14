t.d(n, {
    Z: () => p,
    q: () => f
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    a = t(481060),
    l = t(144144),
    o = t(592125),
    s = t(496675),
    d = t(944486),
    u = t(585483),
    c = t(51144),
    _ = t(981631),
    h = t(388032);
function f(e, n) {
    let { id: t } = e,
        i = '@'.concat(c.ZP.getUserTag(e, { decoration: 'never' }));
    u.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
        plainText: i,
        rawText: '<@'.concat(t, '>')
    }),
        null != n && l.Z.startTyping(n);
}
function p(e, n, t) {
    let [l, u] = (0, r.Wu)(
            [d.Z, o.Z, s.Z],
            () => {
                let e = d.Z.getChannelId(n),
                    t = o.Z.getChannel(e);
                return [e, null != t && (t.isMultiUserDM() || s.Z.can(_.Plq.SEND_MESSAGES, t))];
            },
            [n]
        ),
        c = t === _.IlC.POPOUT;
    return !u || c
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'mention',
              label: h.intl.string(h.t.P8tvKC),
              action: function () {
                  f(e, l);
              }
          });
}
