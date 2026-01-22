n.d(t, {
    h: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(652896),
    c = n(144485),
    s = n(83942),
    u = n(259374),
    d = n(616356),
    p = n(985018);

function b(e) {
    let { stream: t, channelId: n } = e,
        b = (0, u.k)({
            channelId: n,
        }),
        f = (0, i.bG)([d.A], () => null != d.A.getActiveStreamForApplicationStream(t)),
        g = (0, o._z)(t),
        A = (0, s.w)(g),
        h = l.useCallback(() => {
            c.A.openSecureFramesStreamVerification(g, n);
        }, [n, g]);
    return b && f && !A
        ? (0, r.jsx)(a.Drp, {
              id: "secure-frames-stream-verification",
              label: p.intl.string(p.t.tjbJbf),
              action: h,
          })
        : null;
}
