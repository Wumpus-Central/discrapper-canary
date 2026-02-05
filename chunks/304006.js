t.d(n, { h: () => g });
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(397927),
    s = t(652896),
    o = t(144485),
    d = t(83942),
    c = t(259374),
    u = t(616356),
    A = t(985018);
function g(e) {
    let { stream: n, channelId: t } = e,
        g = (0, c.k)({ channelId: t }),
        h = (0, r.bG)([u.A], () => null != u.A.getActiveStreamForApplicationStream(n)),
        p = (0, s._z)(n),
        f = (0, d.w)(p),
        I = i.useCallback(() => {
            o.A.openSecureFramesStreamVerification(p, t);
        }, [t, p]);
    return g && h && !f
        ? (0, l.jsx)(a.Drp, { id: "secure-frames-stream-verification", label: A.intl.string(A.t.tjbJbf), action: I })
        : null;
}
