n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(843472),
    a = n(698718),
    o = n(355622),
    u = n(734057),
    d = n(71393),
    c = n(320501),
    h = n(576705),
    g = n(203982),
    m = n(545807),
    f = n(652215),
    A = n(827280);
function I(e) {
    let t,
        n,
        I,
        E,
        p,
        _,
        { selectedChannelId: S } = e,
        x = (0, r.bG)([u.A], () => u.A.getChannel(S), [S]),
        T = (0, m.A)(),
        N = (0, r.bG)(
            [d.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(x, d.A),
            [x],
        );
    return ((t = x?.id ?? null),
    (n = l.useRef(new Set())),
    (I = (0, r.bG)([c.A], () => (null != t ? c.A.getMessages(t) : null), [t])),
    (E = (0, r.bG)([h.A], () => h.A.can(f.xBc.READ_MESSAGE_HISTORY, x), [x])),
    (p = I?.first() ?? null),
    (_ = null != x && null == p && null != I && !I.loadingMore && !I.ready && !I.hasFetched && E),
    l.useEffect(() => {
        null == t || (!n.current.has(t) && _ && (n.current.add(t), s.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, _]),
    l.useEffect(() => {
        if (null == S) return;
        let e = T.requestAnimationFrame(() => {
            g._.dispatchToLastSubscribed(f.jej.TEXTAREA_FOCUS, { channelId: S });
        });
        return () => T.cancelAnimationFrame(e);
    }, [S, T]),
    null != x)
        ? (0, i.jsx)("div", {
              className: A.Q,
              children: (0, i.jsx)("div", {
                  className: A.T,
                  children: (0, i.jsx)(a.A, { channel: x, guild: N, chatInputType: o.oU.OVERLAY }, x.id),
              }),
          })
        : null;
}
