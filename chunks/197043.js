n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(843472),
    r = n(698718),
    o = n(355622),
    d = n(734057),
    u = n(71393),
    c = n(320501),
    h = n(576705),
    A = n(203982),
    m = n(545807),
    g = n(652215),
    p = n(128727);
function f(e) {
    let t,
        n,
        f,
        _,
        E,
        x,
        { selectedChannelId: S } = e,
        I = (0, a.bG)([d.A], () => d.A.getChannel(S), [S]),
        T = (0, m.A)(),
        C = (0, a.bG)(
            [u.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(I, u.A),
            [I],
        );
    return ((t = I?.id ?? null),
    (n = l.useRef(new Set())),
    (f = (0, a.bG)([c.A], () => (null != t ? c.A.getMessages(t) : null), [t])),
    (_ = (0, a.bG)([h.A], () => h.A.can(g.xBc.READ_MESSAGE_HISTORY, I), [I])),
    (E = f?.first() ?? null),
    (x = null != I && null == E && null != f && !f.loadingMore && !f.ready && !f.hasFetched && _),
    l.useEffect(() => {
        null == t || (!n.current.has(t) && x && (n.current.add(t), s.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, x]),
    l.useEffect(() => {
        if (null == S) return;
        let e = T.requestAnimationFrame(() => {
            A._.dispatchToLastSubscribed(g.jej.TEXTAREA_FOCUS, { channelId: S });
        });
        return () => T.cancelAnimationFrame(e);
    }, [S, T]),
    null != I)
        ? (0, i.jsx)("div", {
              className: p.Q,
              children: (0, i.jsx)("div", {
                  className: p.T,
                  children: (0, i.jsx)(r.A, { channel: I, guild: C, chatInputType: o.oU.OVERLAY }, I.id),
              }),
          })
        : null;
}
