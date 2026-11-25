var i = n(855986),
    l = n(616356),
    s = n(46653),
    a = n(734057),
    r = n(279250),
    c = n(652215),
    d = n(792996);
n.d(
    t,
    {},
    {
        K: function (e) {
            let t = e?.channelId,
                n = (0, i.bG)([a.A], () => a.A.getChannel(t), [t]),
                [o, u] = (0, r.zP)(n),
                { activeStream: m, isOwnStream: h } = (0, i.cf)(
                    [l.A, s.default],
                    () => ({
                        activeStream: l.A.getActiveStreamForApplicationStream(e),
                        isOwnStream: null != e && e.ownerId === s.default.getId(),
                    }),
                    [e],
                ),
                A = null != m && m.state !== c.XYD.ENDED;
            return {
                ...(function (e, t, n) {
                    let i =
                        null != n
                            ? (function (e) {
                                  switch (e) {
                                      case r.OT.REMOTE_MODE:
                                          return d.intl.string(d.t["1i3tSY"]);
                                      case r.OT.CHANNEL_FULL:
                                          return d.intl.string(d.t.elyVbv);
                                      case r.OT.NO_PERMISSION:
                                          return d.intl.string(d.t.pgUTZC);
                                      case r.OT.AGE_RESTRICTED:
                                          return d.intl.string(d.t.b5FqhF);
                                  }
                              })(n)
                            : null;
                    if (e || t) {
                        let t = e ? d.intl.string(d.t.XvBdeT) : d.intl.string(d.t["JH1SJ+"]);
                        return { actionString: t, actionAriaLabel: null != i ? `${t}: ${i}` : `${t}` };
                    }
                    let l = d.intl.string(d.t["7Xq/nV"]);
                    return { actionString: i ?? l, actionAriaLabel: `${l}: ${i ?? d.intl.string(d.t["9C444m"])}` };
                })(h, A, u),
                canWatch: o,
                isWatching: A,
                channel: n,
            };
        },
    },
);
