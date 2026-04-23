t.d(n, { h: () => h });
var l = t(627968),
    i = t(64700),
    r = t(17928),
    a = t(477782),
    s = t(652896),
    d = t(144485),
    c = t(83942),
    o = t(259374),
    u = t(616356),
    A = t(985018);
function h(e) {
    let { stream: n, channelId: t } = e,
        h = (0, o.k)({ channelId: t }),
        g = (0, r.bG)([u.A], () => null != u.A.getActiveStreamForApplicationStream(n)),
        I = (0, s._z)(n),
        f = (0, c.w)(I),
        m = i.useCallback(() => {
            d.A.openSecureFramesStreamVerification(I, t);
        }, [t, I]);
    return h && g && !f
        ? (0, l.jsx)(a.Dr, { id: "secure-frames-stream-verification", label: A.intl.string(A.t.tjbJbf), action: m })
        : null;
}
