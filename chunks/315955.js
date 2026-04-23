n.d(t, { A: () => m });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(939249),
    s = n(734066),
    o = n(274372),
    d = n(794905),
    u = n(788077),
    h = n(985018),
    c = n(974114);
function m(e) {
    let { attachment: t, channelId: n, messageId: m } = e,
        { enableAdvancedSignals: g } = s.L_.useConfig({ location: "DistributedClipShareCTA" }),
        p = t.clip_remote_id,
        f = (0, r.bG)([o.A], () => (null != p ? o.A.getClipByRemoteId(p) : null)),
        { onShareClick: A } = (0, d.A)(n),
        x = (0, r.bG)([o.A], () => null != f && null != n && null != p && o.A.wasClipSharedInChannel(p, n)),
        y = a.useCallback(
            (e) => {
                null != f &&
                    (e.stopPropagation(), A({ clips: [f], messageReference: { channel_id: n, message_id: m } }));
            },
            [A, f, n, m],
        );
    return !g || null == f || x
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(l.D, {
                      tag: "span",
                      className: c.s,
                      onClick: y,
                      children: h.intl.string(u.default.YKst58),
                  }),
              ],
          });
}
