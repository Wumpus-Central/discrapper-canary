"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    s = n(401843),
    a = n(384200),
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
            previewUrl: E,
            isLoading: m,
        } = (0, i.cf)([a.A], () => ({
            shouldFetchPreview: !d && a.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : a.A.getPreviewURL(e, t, n),
            isLoading: !d && a.A.getIsPreviewLoading(e, t, n),
        })),
        g = f || p;
    return (r.useEffect(() => {
        h && !d && g && (0, s.Tp)(e, t, n);
    }, [h, t, e, n, d, g]),
    d || !g)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: E, isLoading: m };
}
