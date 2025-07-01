(n.d(e, { Z: () => b }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    c = n(144144),
    a = n(592125),
    l = n(496675),
    u = n(944486),
    s = n(585483),
    f = n(981631),
    p = n(388032);
function b(t, e, n) {
    let [b, d] = (0, i.Wu)(
            [u.Z, a.Z, l.Z],
            () => {
                let t = u.Z.getChannelId(e),
                    n = a.Z.getChannel(t);
                return [t, null != n && (n.isPrivate() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
            },
            [e]
        ),
        v = n === f.IlC.POPOUT;
    return !d || v
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'mention',
              label: p.intl.string(p.t.P8tvKC),
              action: function () {
                  let { id: e } = t,
                      n = '@'.concat(t.name);
                  (s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                      plainText: n,
                      rawText: '<@$'.concat(e, '>')
                  }),
                      null != b && c.Z.startTyping(b));
              }
          });
}
