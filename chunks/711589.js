e.d(n, { K: () => d });
var i = e(17928),
    l = e(616356),
    r = e(280450),
    a = e(734057),
    s = e(279250),
    c = e(652215),
    u = e(375708);
function d(t) {
    let n = t?.channelId,
        e = (0, i.bG)([a.A], () => a.A.getChannel(n), [n]),
        [d, h] = (0, s.zP)(e),
        { activeStream: o, isOwnStream: g } = (0, i.cf)(
            [l.A, r.default],
            () => ({
                activeStream: l.A.getActiveStreamForApplicationStream(t),
                isOwnStream: null != t && t.ownerId === r.default.getId(),
            }),
            [t],
        ),
        p = null != o && o.state !== c.XYD.ENDED;
    return {
        ...(function (t, n, e) {
            let i =
                null != e
                    ? (function (t) {
                          switch (t) {
                              case s.OT.REMOTE_MODE:
                                  return u.intl.string(u.t["1i3tSY"]);
                              case s.OT.CHANNEL_FULL:
                                  return u.intl.string(u.t.elyVbv);
                              case s.OT.NO_PERMISSION:
                                  return u.intl.string(u.t.pgUTZC);
                              case s.OT.AGE_RESTRICTED:
                                  return u.intl.string(u.t.b5FqhF);
                          }
                      })(e)
                    : null;
            if (t || n) {
                let n = t ? u.intl.string(u.t.XvBdeT) : u.intl.string(u.t["JH1SJ+"]);
                return { actionString: n, actionAriaLabel: null != i ? `${n}: ${i}` : `${n}` };
            }
            let l = u.intl.string(u.t["7Xq/nV"]);
            return { actionString: i ?? l, actionAriaLabel: `${l}: ${i ?? u.intl.string(u.t["9C444m"])}` };
        })(g, p, h),
        canWatch: d,
        isWatching: p,
        channel: e,
    };
}
