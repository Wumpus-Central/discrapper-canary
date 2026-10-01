l.d(t, { A: () => m });
var n = l(582128),
    a = l(17928),
    s = l(401843),
    i = l(384200),
    r = l(734057),
    o = l(576705),
    u = l(309010),
    c = l(818348);
function m(e, t, l) {
    let m = null == t || null == l,
        d = (0, a.bG)([r.A], () => r.A.getChannel(t)),
        v = (0, a.bG)([o.A], () => null != d && o.A.canBasicChannel(c.hV.CONNECT, d)),
        x = (0, a.bG)([u.Ay], () => u.Ay.getVoiceChannelId() === t),
        {
            shouldFetchPreview: f,
            previewUrl: p,
            isLoading: h,
        } = (0, a.cf)([i.A], () => ({
            shouldFetchPreview: !m && i.A.shouldFetchPreview(e, t, l),
            previewUrl: m ? null : i.A.getPreviewURL(e, t, l),
            isLoading: !m && i.A.getIsPreviewLoading(e, t, l),
        })),
        _ = v || x;
    return (n.useEffect(() => {
        f && !m && _ && (0, s.Tp)(e, t, l);
    }, [f, t, e, l, m, _]),
    m || !_)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: p, isLoading: h };
}
