n.d(i, { A: () => d });
var l = n(582128),
    r = n(17928),
    s = n(401843),
    t = n(384200),
    a = n(734057),
    c = n(576705),
    h = n(309010),
    u = n(818348);
function d(e, i, n) {
    let d = null == i || null == n,
        A = (0, r.bG)([a.A], () => a.A.getChannel(i)),
        o = (0, r.bG)([c.A], () => null != A && c.A.canBasicChannel(u.hV.CONNECT, A)),
        p = (0, r.bG)([h.Ay], () => h.Ay.getVoiceChannelId() === i),
        {
            shouldFetchPreview: v,
            previewUrl: w,
            isLoading: g,
        } = (0, r.cf)([t.A], () => ({
            shouldFetchPreview: !d && t.A.shouldFetchPreview(e, i, n),
            previewUrl: d ? null : t.A.getPreviewURL(e, i, n),
            isLoading: !d && t.A.getIsPreviewLoading(e, i, n),
        })),
        C = o || p;
    return (l.useEffect(() => {
        v && !d && C && (0, s.Tp)(e, i, n);
    }, [v, i, e, n, d, C]),
    d || !C)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: w, isLoading: g };
}
