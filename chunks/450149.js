n.d(t, { A: () => d });
var r = n(582128),
    i = n(17928),
    a = n(401843),
    l = n(384200),
    s = n(734057),
    o = n(576705),
    u = n(309010),
    c = n(818348);
function d(e, t, n) {
    let d = null == t || null == n,
        h = (0, i.bG)([s.A], () => s.A.getChannel(t)),
        A = (0, i.bG)([o.A], () => null != h && o.A.canBasicChannel(c.hV.CONNECT, h)),
        p = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId() === t),
        {
            shouldFetchPreview: v,
            previewUrl: f,
            isLoading: g,
        } = (0, i.cf)([l.A], () => ({
            shouldFetchPreview: !d && l.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : l.A.getPreviewURL(e, t, n),
            isLoading: !d && l.A.getIsPreviewLoading(e, t, n),
        })),
        m = A || p;
    return (r.useEffect(() => {
        v && !d && m && (0, a.Tp)(e, t, n);
    }, [v, t, e, n, d, m]),
    d || !m)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: f, isLoading: g };
}
