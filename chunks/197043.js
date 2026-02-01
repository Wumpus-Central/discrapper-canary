n.d(t, {
    A: () => f,
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(698718),
    s = n(355622),
    o = n(734057),
    u = n(71393),
    c = n(203982),
    d = n(545807),
    h = n(652215),
    p = n(128727);

function f(e) {
    let { selectedChannelId: t } = e,
        n = (0, l.bG)([o.A], () => o.A.getChannel(t), [t]),
        f = (0, d.A)(),
        g = (0, l.bG)(
            [u.A],
            () =>
                (function (e, t) {
                    var n;
                    if (null == e) return null;
                    let i = e.getGuildId();
                    return null == i ? null : null != (n = t.getGuild(i)) ? n : null;
                })(n, u.A),
            [n],
        );
    return (r.useEffect(() => {
        if (null == t) return;
        let e = f.requestAnimationFrame(() => {
            c._.dispatchToLastSubscribed(h.jej.TEXTAREA_FOCUS, {
                channelId: t,
            });
        });
        return () => f.cancelAnimationFrame(e);
    }, [t, f]),
    null != n)
        ? (0, i.jsx)("div", {
              className: p.Q,
              children: (0, i.jsx)("div", {
                  className: p.T,
                  children: (0, i.jsx)(
                      a.A,
                      {
                          channel: n,
                          guild: g,
                          chatInputType: s.oU.OVERLAY,
                      },
                      n.id,
                  ),
              }),
          })
        : null;
}
