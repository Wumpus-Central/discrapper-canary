"use strict";
n.d(t, { A: () => d });
var l = n(64700),
    i = n(17928),
    s = n(401843),
    a = n(384200),
    r = n(734057),
    o = n(576705),
    c = n(309010),
    u = n(818348);
function d(e, t, n) {
    let d = null == t || null == n,
        h = (0, i.bG)([r.A], () => r.A.getChannel(t)),
        m = (0, i.bG)([o.A], () => null != h && o.A.canBasicChannel(u.hV.CONNECT, h)),
        p = (0, i.bG)([c.A], () => c.A.getVoiceChannelId() === t),
        {
            shouldFetchPreview: f,
            previewUrl: g,
            isLoading: _,
        } = (0, i.cf)([a.A], () => ({
            shouldFetchPreview: !d && a.A.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : a.A.getPreviewURL(e, t, n),
            isLoading: !d && a.A.getIsPreviewLoading(e, t, n),
        })),
        x = m || p;
    return (l.useEffect(() => {
        f && !d && x && (0, s.Tp)(e, t, n);
    }, [f, t, e, n, d, x]),
    d || !x)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: g, isLoading: _ };
}
