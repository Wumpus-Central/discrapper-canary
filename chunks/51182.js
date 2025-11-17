n.d(e, { Z: () => d }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    o = n(481060),
    c = n(144144),
    a = n(592125),
    l = n(496675),
    u = n(944486),
    s = n(585483),
    f = n(981631),
    b = n(388032);
function d(t, e, n) {
    let [d, p] = (0, i.Wu)([u.Z, a.Z, l.Z], () => {
            let t = u.Z.getChannelId(e),
                n = a.Z.getChannel(t);
            return [t, null != n && (n.isPrivate() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
        }, [e]),
        v = n === f.IlC.POPOUT;
    return !p || v
        ? null
        : (0, r.jsx)(o.sNh, {
              id: "mention",
              label: b.intl.string(b.t.P8tvKG),
              action: function () {
                  let { id: e } = t,
                      n = "@".concat(t.name);
                  s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                      plainText: n,
                      rawText: "<@$".concat(e, ">"),
                  }),
                      null != d && c.Z.startTyping(d);
              },
          });
}
