n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(843472),
    a = n(698718),
    o = n(355622),
    d = n(734057),
    u = n(71393),
    c = n(320501),
    h = n(576705),
    g = n(203982),
    m = n(545807),
    p = n(652215),
    A = n(871117);
function x(e) {
    let t,
        n,
        x,
        f,
        E,
        S,
        { selectedChannelId: I } = e,
        T = (0, l.bG)([d.A], () => d.A.getChannel(I), [I]),
        v = (0, m.A)(),
        C = (0, l.bG)(
            [u.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(T, u.A),
            [T],
        );
    return ((t = T?.id ?? null),
    (n = s.useRef(new Set())),
    (x = (0, l.bG)([c.A], () => (null != t ? c.A.getMessages(t) : null), [t])),
    (f = (0, l.bG)([h.A], () => h.A.can(p.xBc.READ_MESSAGE_HISTORY, T), [T])),
    (E = x?.first() ?? null),
    (S = null != T && null == E && null != x && !x.loadingMore && !x.ready && !x.hasFetched && f),
    s.useEffect(() => {
        null == t || (!n.current.has(t) && S && (n.current.add(t), r.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, S]),
    s.useEffect(() => {
        if (null == I) return;
        let e = v.requestAnimationFrame(() => {
            g._.dispatchToLastSubscribed(p.jej.TEXTAREA_FOCUS, { channelId: I });
        });
        return () => v.cancelAnimationFrame(e);
    }, [I, v]),
    null != T)
        ? (0, i.jsx)("div", {
              className: A.Q,
              children: (0, i.jsx)("div", {
                  className: A.T,
                  children: (0, i.jsx)(a.A, { channel: T, guild: C, chatInputType: o.oU.OVERLAY }, T.id),
              }),
          })
        : null;
}
