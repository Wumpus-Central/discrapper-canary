n.d(t, { Z: () => d });
var r = n(192379),
    i = n(442837),
    o = n(872810),
    a = n(543882),
    s = n(592125),
    l = n(496675),
    c = n(944486),
    u = n(231338);
function d(e, t, n) {
    let d = null == t || null == n,
        f = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
        _ = (0, i.e7)([l.Z], () => null != f && l.Z.canBasicChannel(u.S7.CONNECT, f)),
        p = (0, i.e7)([c.Z], () => c.Z.getVoiceChannelId() === t),
        {
            shouldFetchPreview: h,
            previewUrl: m,
            isLoading: g
        } = (0, i.cj)([a.Z], () => ({
            shouldFetchPreview: !d && a.Z.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : a.Z.getPreviewURL(e, t, n),
            isLoading: !d && a.Z.getIsPreviewLoading(e, t, n)
        })),
        E = _ || p;
    return (r.useEffect(() => {
        h && !d && E && (0, o.n9)(e, t, n);
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
