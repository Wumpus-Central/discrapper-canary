n.d(t, { h: () => p });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(397927),
    a = n(652896),
    s = n(144485),
    c = n(83942),
    u = n(259374),
    d = n(616356),
    b = n(985018);
function p(e) {
    let { stream: t, channelId: n } = e,
        p = (0, u.k)({ channelId: n }),
        f = (0, i.bG)([d.A], () => null != d.A.getActiveStreamForApplicationStream(t)),
        g = (0, a._z)(t),
        I = (0, c.w)(g),
        O = l.useCallback(() => {
            s.A.openSecureFramesStreamVerification(g, n);
        }, [n, g]);
    return p && f && !I
        ? (0, r.jsx)(o.Drp, {
              id: "secure-frames-stream-verification",
              label: b.intl.string(b.t.tjbJbf),
              action: O,
          })
        : null;
}
