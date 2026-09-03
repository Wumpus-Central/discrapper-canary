n.d(t, { A: () => d });
var l = n(582128),
    i = n(17928),
    s = n(401843),
    r = n(384200),
    a = n(734057),
    o = n(576705),
    u = n(309010),
    c = n(818348);
function d(e, t, n) {
    let d = null == t || null == n,
        h = (0, i.bG)([a.A], () => a.A.getChannel(t)),
        m = (0, i.bG)([o.A], () => null != h && o.A.canBasicChannel(c.hV.CONNECT, h)),
        f = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId() === t),
        {
            shouldFetchPreview: p,
            previewUrl: g,
            isLoading: x,
        } = (0, i.cf)([r.A], () => ({
            shouldFetchPreview: !d && r.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : r.A.getPreviewURL(e, t, n),
            isLoading: !d && r.A.getIsPreviewLoading(e, t, n),
        })),
        A = m || f;
    return (l.useEffect(() => {
        p && !d && A && (0, s.Tp)(e, t, n);
    }, [p, t, e, n, d, A]),
    d || !A)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: g, isLoading: x };
}
