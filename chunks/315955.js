"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(939249),
    s = n(734066),
    o = n(274372),
    c = n(794905),
    d = n(788077),
    u = n(985018),
    _ = n(974114);
function p(e) {
    let { attachment: t, channelId: n, messageId: p } = e,
        { enableAdvancedSignals: h } = s.L_.useConfig({ location: "DistributedClipShareCTA" }),
        f = t.clip_remote_id,
        m = (0, a.bG)([o.A], () => (null != f ? o.A.getClipByRemoteId(f) : null)),
        { onShareClick: A } = (0, c.A)(n),
        g = (0, a.bG)([o.A], () => null != m && null != n && null != f && o.A.wasClipSharedInChannel(f, n)),
        E = r.useCallback(
            (e) => {
                null != m &&
                    (e.stopPropagation(), A({ clips: [m], messageReference: { channel_id: n, message_id: p } }));
            },
            [A, m, n, p],
        );
    return !h || null == m || g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(l.D, {
                      tag: "span",
                      className: _.s,
                      onClick: E,
                      children: u.intl.string(d.default.YKst58),
                  }),
              ],
          });
}
