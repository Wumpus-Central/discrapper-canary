t.d(n, {
    Z: () => h,
    q: () => g
}),
    t(47120);
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(144144),
    a = t(592125),
    s = t(496675),
    c = t(944486),
    u = t(585483),
    d = t(51144),
    f = t(981631),
    p = t(388032);
function g(e, n) {
    let { id: t } = e,
        r = '@'.concat(d.ZP.getUserTag(e, { decoration: 'never' }));
    u.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: '<@'.concat(t, '>')
    }),
        null != n && o.Z.startTyping(n);
}
function h(e, n, t) {
    let [o, u] = (0, i.Wu)(
            [c.Z, a.Z, s.Z],
            () => {
                let e = c.Z.getChannelId(n),
                    t = a.Z.getChannel(e);
                return [e, null != t && (t.isMultiUserDM() || s.Z.can(f.Plq.SEND_MESSAGES, t))];
            },
            [n]
        ),
        d = t === f.IlC.POPOUT;
    return !u || d
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'mention',
              label: p.NW.string(p.t.P8tvKC),
              action: function () {
                  g(e, o);
              }
          });
}
