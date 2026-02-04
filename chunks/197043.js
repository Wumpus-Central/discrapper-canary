n.d(t, {
    A: () => A,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(843472),
    o = n(698718),
    s = n(355622),
    u = n(734057),
    c = n(71393),
    d = n(320501),
    h = n(576705),
    p = n(203982),
    f = n(545807),
    g = n(652215),
    m = n(128727);

function A(e) {
    var t, n;
    let A,
        y,
        O,
        v,
        b,
        E,
        { selectedChannelId: _ } = e,
        S = (0, l.bG)([u.A], () => u.A.getChannel(_), [_]),
        x = (0, f.A)(),
        I = (0, l.bG)(
            [c.A],
            () =>
                (function (e, t) {
                    var n;
                    if (null == e) return null;
                    let i = e.getGuildId();
                    return null == i ? null : null != (n = t.getGuild(i)) ? n : null;
                })(S, c.A),
            [S],
        );
    return ((A = null != (t = null == S ? void 0 : S.id) ? t : null),
    (y = r.useRef(new Set())),
    (O = (0, l.bG)([d.A], () => (null != A ? d.A.getMessages(A) : null), [A])),
    (v = (0, l.bG)([h.A], () => h.A.can(g.xBc.READ_MESSAGE_HISTORY, S), [S])),
    (b = null != (n = null == O ? void 0 : O.first()) ? n : null),
    (E = null != S && null == b && null != O && !O.loadingMore && !O.ready && !O.hasFetched && v),
    r.useEffect(() => {
        null == A ||
            (!y.current.has(A) &&
                E &&
                (y.current.add(A),
                a.A.fetchMessages({
                    channelId: A,
                    limit: 50,
                })));
    }, [A, E]),
    r.useEffect(() => {
        if (null == _) return;
        let e = x.requestAnimationFrame(() => {
            p._.dispatchToLastSubscribed(g.jej.TEXTAREA_FOCUS, {
                channelId: _,
            });
        });
        return () => x.cancelAnimationFrame(e);
    }, [_, x]),
    null != S)
        ? (0, i.jsx)("div", {
              className: m.Q,
              children: (0, i.jsx)("div", {
                  className: m.T,
                  children: (0, i.jsx)(
                      o.A,
                      {
                          channel: S,
                          guild: I,
                          chatInputType: s.oU.OVERLAY,
                      },
                      S.id,
                  ),
              }),
          })
        : null;
}
