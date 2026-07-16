"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
    a = n(401843),
    s = n(384200),
    l = n(734057),
    o = n(576705),
    d = n(309010),
    c = n(818348);
function u(e, t, n) {
    let u = null == t || null == n,
        _ = (0, r.bG)([l.A], () => l.A.getChannel(t)),
        E = (0, r.bG)([o.A], () => null != _ && o.A.canBasicChannel(c.hV.CONNECT, _)),
        A = (0, r.bG)([d.Ay], () => d.Ay.getVoiceChannelId() === t),
        {
            shouldFetchPreview: h,
            previewUrl: I,
            isLoading: f,
        } = (0, r.cf)([s.A], () => ({
            shouldFetchPreview: !u && s.A.shouldFetchPreview(e, t, n),
            previewUrl: u ? null : s.A.getPreviewURL(e, t, n),
            isLoading: !u && s.A.getIsPreviewLoading(e, t, n),
        })),
        p = E || A;
    return (i.useEffect(() => {
        h && !u && p && (0, a.Tp)(e, t, n);
    }, [h, t, e, n, u, p]),
    u || !p)
        ? { previewUrl: void 0, isLoading: !1 }
        : { previewUrl: I, isLoading: f };
}
