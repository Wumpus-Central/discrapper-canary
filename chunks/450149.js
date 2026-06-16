"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    s = n(401843),
    a = n(384200),
    o = n(734057),
    l = n(576705),
    u = n(309010),
    c = n(818348);
function d(e, t, n) {
    let d = null == t || null == n,
        _ = (0, r.bG)([o.A], () => o.A.getChannel(t)),
        h = (0, r.bG)([l.A], () => null != _ && l.A.canBasicChannel(c.hV.CONNECT, _)),
        f = (0, r.bG)([u.A], () => u.A.getVoiceChannelId() === t),
        {
            shouldFetchPreview: p,
            previewUrl: E,
            isLoading: m,
        } = (0, r.cf)([a.A], () => ({
            shouldFetchPreview: !d && a.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : a.A.getPreviewURL(e, t, n),
            isLoading: !d && a.A.getIsPreviewLoading(e, t, n),
        })),
        g = h || f;
    return (i.useEffect(() => {
        p && !d && g && (0, s.Tp)(e, t, n);
    }, [p, t, e, n, d, g]),
    d || !g)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: E, isLoading: m };
}
