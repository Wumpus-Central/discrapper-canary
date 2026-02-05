"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    a = n(401843),
    s = n(384200),
    o = n(734057),
    l = n(576705),
    u = n(309010),
    c = n(818348);
function d(e, t, n) {
    let d = null == t || null == n,
        _ = (0, i.bG)([o.A], () => o.A.getChannel(t)),
        f = (0, i.bG)([l.A], () => null != _ && l.A.canBasicChannel(c.hV.CONNECT, _)),
        p = (0, i.bG)([u.A], () => u.A.getVoiceChannelId() === t),
        {
            shouldFetchPreview: h,
            previewUrl: m,
            isLoading: g,
        } = (0, i.cf)([s.A], () => ({
            shouldFetchPreview: !d && s.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : s.A.getPreviewURL(e, t, n),
            isLoading: !d && s.A.getIsPreviewLoading(e, t, n),
        })),
        E = f || p;
    return (r.useEffect(() => {
        h && !d && E && (0, a.Tp)(e, t, n);
    }, [h, t, e, n, d, E]),
    d || !E)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: m, isLoading: g };
}
