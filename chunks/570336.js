n.d(t, { A: () => f }), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    c = n(397927),
    o = n(414798),
    a = n(734057),
    l = n(576705),
    u = n(309010),
    s = n(203982),
    b = n(652215),
    d = n(985018);
function f(e, t, n) {
    let [f, p] = (0, i.yK)([u.A, a.A, l.A], () => {
            let e = u.A.getChannelId(t),
                n = a.A.getChannel(e);
            return [e, null != n && (n.isPrivate() || l.A.can(b.xBc.SEND_MESSAGES, n))];
        }, [t]),
        A = n === b.BRT.POPOUT;
    return !p || A
        ? null
        : (0, r.jsx)(c.Drp, {
              id: "mention",
              label: d.intl.string(d.t.P8tvKG),
              action: function () {
                  !(function (e, t) {
                      let { id: n } = e,
                          r = "@".concat(e.name);
                      s._.dispatchToLastSubscribed(b.jej.INSERT_TEXT, {
                          plainText: r,
                          rawText: "<@$".concat(n, ">"),
                      }),
                          null != t && o.A.startTyping(t);
                  })(e, f);
              },
          });
}
