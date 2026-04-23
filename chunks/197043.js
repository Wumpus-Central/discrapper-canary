n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(843472),
    l = n(698718),
    o = n(355622),
    d = n(734057),
    c = n(71393),
    u = n(320501),
    h = n(576705),
    m = n(203982),
    p = n(545807),
    g = n(652215),
    f = n(827280);
function _(e) {
    let t,
        n,
        _,
        x,
        A,
        E,
        { selectedChannelId: S } = e,
        I = (0, a.bG)([d.A], () => d.A.getChannel(S), [S]),
        v = (0, p.A)(),
        b = (0, a.bG)(
            [c.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(I, c.A),
            [I],
        );
    return ((t = I?.id ?? null),
    (n = r.useRef(new Set())),
    (_ = (0, a.bG)([u.A], () => (null != t ? u.A.getMessages(t) : null), [t])),
    (x = (0, a.bG)([h.A], () => h.A.can(g.xBc.READ_MESSAGE_HISTORY, I), [I])),
    (A = _?.first() ?? null),
    (E = null != I && null == A && null != _ && !_.loadingMore && !_.ready && !_.hasFetched && x),
    r.useEffect(() => {
        null == t || (!n.current.has(t) && E && (n.current.add(t), s.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, E]),
    r.useEffect(() => {
        if (null == S) return;
        let e = v.requestAnimationFrame(() => {
            m._.dispatchToLastSubscribed(g.jej.TEXTAREA_FOCUS, { channelId: S });
        });
        return () => v.cancelAnimationFrame(e);
    }, [S, v]),
    null != I)
        ? (0, i.jsx)("div", {
              className: f.Q,
              children: (0, i.jsx)("div", {
                  className: f.T,
                  children: (0, i.jsx)(l.A, { channel: I, guild: b, chatInputType: o.oU.OVERLAY }, I.id),
              }),
          })
        : null;
}
