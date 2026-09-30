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
        m = (0, i.bG)([a.A], () => a.A.getChannel(t)),
        h = (0, i.bG)([o.A], () => null != m && o.A.canBasicChannel(c.hV.CONNECT, m)),
        p = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId() === t),
        {
            shouldFetchPreview: f,
            previewUrl: g,
            isLoading: x,
        } = (0, i.cf)([r.A], () => ({
            shouldFetchPreview: !d && r.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : r.A.getPreviewURL(e, t, n),
            isLoading: !d && r.A.getIsPreviewLoading(e, t, n),
        })),
        A = h || p;
    return (l.useEffect(() => {
        f && !d && A && (0, s.Tp)(e, t, n);
    }, [f, t, e, n, d, A]),
    d || !A)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: g, isLoading: x };
}
