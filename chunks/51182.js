n.d(e, { Z: () => p }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    c = n(481060),
    o = n(144144),
    a = n(592125),
    l = n(496675),
    u = n(944486),
    s = n(585483),
    f = n(981631),
    d = n(388032);
function p(t, e, n) {
    let [p, b] = (0, i.Wu)([u.Z, a.Z, l.Z], () => {
            let t = u.Z.getChannelId(e),
                n = a.Z.getChannel(t);
            return [t, null != n && (n.isPrivate() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
        }, [e]),
        v = n === f.IlC.POPOUT;
    return !b || v
        ? null
        : (0, r.jsx)(c.sNh, {
              id: "mention",
              label: d.intl.string(d.t.P8tvKC),
              action: function () {
                  let { id: e } = t,
                      n = "@".concat(t.name);
                  s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                      plainText: n,
                      rawText: "<@$".concat(e, ">"),
                  }),
                      null != p && o.Z.startTyping(p);
              },
          });
}
