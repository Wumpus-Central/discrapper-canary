n.d(e, { A: () => p });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(414798),
    c = n(734057),
    o = n(576705),
    s = n(309010),
    u = n(203982),
    d = n(652215),
    A = n(985018);
function p(t, e, n) {
    let [p, E] = (0, r.yK)([s.A, c.A, o.A], () => {
            let t = s.A.getChannelId(e),
                n = c.A.getChannel(t);
            return [t, null != n && (n.isPrivate() || o.A.can(d.xBc.SEND_MESSAGES, n))];
        }, [e]),
        b = n === d.BRT.POPOUT;
    return !E || b
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "mention",
              label: A.intl.string(A.t.P8tvKG),
              action: function () {
                  !(function (t, e) {
                      let { id: n } = t,
                          i = `@${t.name}`,
                          r = `<@$${n}>`;
                      u._.dispatchToLastSubscribed(d.jej.INSERT_TEXT, { plainText: i, rawText: r }),
                          null != e && l.A.startTyping(e);
                  })(t, p);
              },
          });
}
