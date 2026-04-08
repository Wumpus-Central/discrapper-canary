n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(843472),
    s = n(698718),
    o = n(355622),
    d = n(734057),
    c = n(71393),
    u = n(320501),
    _ = n(576705),
    h = n(203982),
    m = n(545807),
    f = n(652215),
    p = n(276e3);
function g(e) {
    let t,
        n,
        g,
        A,
        x,
        I,
        { selectedChannelId: E } = e,
        b = (0, r.bG)([d.A], () => d.A.getChannel(E), [E]),
        v = (0, m.A)(),
        S = (0, r.bG)(
            [c.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(b, c.A),
            [b],
        );
    return ((t = b?.id ?? null),
    (n = a.useRef(new Set())),
    (g = (0, r.bG)([u.A], () => (null != t ? u.A.getMessages(t) : null), [t])),
    (A = (0, r.bG)([_.A], () => _.A.can(f.xBc.READ_MESSAGE_HISTORY, b), [b])),
    (x = g?.first() ?? null),
    (I = null != b && null == x && null != g && !g.loadingMore && !g.ready && !g.hasFetched && A),
    a.useEffect(() => {
        null == t || (!n.current.has(t) && I && (n.current.add(t), l.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, I]),
    a.useEffect(() => {
        if (null == E) return;
        let e = v.requestAnimationFrame(() => {
            h._.dispatchToLastSubscribed(f.jej.TEXTAREA_FOCUS, { channelId: E });
        });
        return () => v.cancelAnimationFrame(e);
    }, [E, v]),
    null != b)
        ? (0, i.jsx)("div", {
              className: p.Q,
              children: (0, i.jsx)("div", {
                  className: p.T,
                  children: (0, i.jsx)(s.A, { channel: b, guild: S, chatInputType: o.oU.OVERLAY }, b.id),
              }),
          })
        : null;
}
