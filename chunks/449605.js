n.d(t, { Z: () => d });
var i = n(192379),
    r = n(442837),
    a = n(872810),
    s = n(543882),
    o = n(592125),
    l = n(496675),
    u = n(944486),
    c = n(231338);
function d(e, t, n) {
    let d = null == t || null == n,
        f = (0, r.e7)([o.Z], () => o.Z.getChannel(t)),
        _ = (0, r.e7)([l.Z], () => null != f && l.Z.canBasicChannel(c.S7.CONNECT, f)),
        p = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId() === t),
        {
            shouldFetchPreview: h,
            previewUrl: m,
            isLoading: g
        } = (0, r.cj)([s.Z], () => ({
            shouldFetchPreview: !d && s.Z.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : s.Z.getPreviewURL(e, t, n),
            isLoading: !d && s.Z.getIsPreviewLoading(e, t, n)
        })),
        E = _ || p;
    return (i.useEffect(() => {
        h && !d && E && (0, a.n9)(e, t, n);
    }, [h, t, e, n, d, E]),
    d || !E)
        ? {
              previewUrl: void 0,
              isLoading: !1
          }
        : {
              previewUrl: m,
              isLoading: g
          };
}
