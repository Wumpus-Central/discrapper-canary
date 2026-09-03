n.d(t, { K: () => c });
var l = n(17928),
    i = n(616356),
    s = n(280450),
    r = n(734057),
    a = n(279250),
    o = n(652215),
    u = n(375708);
function c(e) {
    let t = e?.channelId,
        n = (0, l.bG)([r.A], () => r.A.getChannel(t), [t]),
        [c, d] = (0, a.zP)(n),
        { activeStream: h, isOwnStream: m } = (0, l.cf)(
            [i.A, s.default],
            () => ({
                activeStream: i.A.getActiveStreamForApplicationStream(e),
                isOwnStream: null != e && e.ownerId === s.default.getId(),
            }),
            [e],
        ),
        f = null != h && h.state !== o.XYD.ENDED;
    return {
        ...(function (e, t, n) {
            let l =
                null != n
                    ? (function (e) {
                          switch (e) {
                              case a.OT.REMOTE_MODE:
                                  return u.intl.string(u.t["1i3tSY"]);
                              case a.OT.CHANNEL_FULL:
                                  return u.intl.string(u.t.elyVbv);
                              case a.OT.NO_PERMISSION:
                                  return u.intl.string(u.t.pgUTZC);
                              case a.OT.AGE_RESTRICTED:
                                  return u.intl.string(u.t.b5FqhF);
                          }
                      })(n)
                    : null;
            if (e || t) {
                let t = e ? u.intl.string(u.t.XvBdeT) : u.intl.string(u.t["JH1SJ+"]);
                return { actionString: t, actionAriaLabel: null != l ? `${t}: ${l}` : `${t}` };
            }
            let i = u.intl.string(u.t["7Xq/nV"]);
            return { actionString: l ?? i, actionAriaLabel: `${i}: ${l ?? u.intl.string(u.t["9C444m"])}` };
        })(m, f, d),
        canWatch: c,
        isWatching: f,
        channel: n,
    };
}
