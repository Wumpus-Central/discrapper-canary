n.d(t, { Z: () => d });
var r = n(473749),
    i = n(442837),
    a = n(872810),
    o = n(543882),
    s = n(592125),
    l = n(496675),
    c = n(944486),
    u = n(231338);
function d(e, t, n) {
    let d = null == t || null == n,
        f = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
        p = (0, i.e7)([l.Z], () => null != f && l.Z.canBasicChannel(u.S7.CONNECT, f)),
        _ = (0, i.e7)([c.Z], () => c.Z.getVoiceChannelId() === t),
        {
            shouldFetchPreview: m,
            previewUrl: h,
            isLoading: g,
        } = (0, i.cj)([o.Z], () => ({
            shouldFetchPreview: !d && o.Z.shouldFetchPreview(e, t, n),
            previewUrl: d ? null : o.Z.getPreviewURL(e, t, n),
            isLoading: !d && o.Z.getIsPreviewLoading(e, t, n),
        })),
        E = p || _;
    return (r.useEffect(() => {
        m && !d && E && (0, a.n9)(e, t, n);
    }, [m, t, e, n, d, E]),
    d || !E)
        ? {
              previewUrl: void 0,
              isLoading: !1,
          }
        : {
              previewUrl: h,
              isLoading: g,
          };
}
