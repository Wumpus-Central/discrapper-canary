"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    s = n(401843),
    a = n(384200),
    o = n(734057),
    l = n(576705),
    d = n(309010),
    _ = n(818348);
function u(e, t, n) {
    let u = null == t || null == n,
        c = (0, r.bG)([o.A], () => o.A.getChannel(t)),
        E = (0, r.bG)([l.A], () => null != c && l.A.canBasicChannel(_.hV.CONNECT, c)),
        h = (0, r.bG)([d.A], () => d.A.getVoiceChannelId() === t),
        {
            shouldFetchPreview: m,
            previewUrl: f,
            isLoading: g,
        } = (0, r.cf)([a.A], () => ({
            shouldFetchPreview: !u && a.A.shouldFetchPreview(e, t, n),
            previewUrl: u ? null : a.A.getPreviewURL(e, t, n),
            isLoading: !u && a.A.getIsPreviewLoading(e, t, n),
        })),
        p = E || h;
    return (i.useEffect(() => {
        m && !u && p && (0, s.Tp)(e, t, n);
    }, [m, t, e, n, u, p]),
    u || !p)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: f, isLoading: g };
}
