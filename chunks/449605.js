r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(872810),
    o = r(543882),
    l = r(592125),
    u = r(496675),
    c = r(944486),
    d = r(231338);
function f(e, n, r) {
    let f = null == n || null == r,
        _ = (0, a.e7)([l.Z], () => l.Z.getChannel(n)),
        h = (0, a.e7)([u.Z], () => null != _ && u.Z.canBasicChannel(d.S7.CONNECT, _)),
        p = (0, a.e7)([c.Z], () => c.Z.getVoiceChannelId() === n),
        {
            shouldFetchPreview: m,
            previewUrl: g,
            isLoading: E
        } = (0, a.cj)([o.Z], () => ({
            shouldFetchPreview: !f && o.Z.shouldFetchPreview(e, n, r),
            previewUrl: f ? null : o.Z.getPreviewURL(e, n, r),
            isLoading: !f && o.Z.getIsPreviewLoading(e, n, r)
        })),
        v = h || p;
    return (i.useEffect(() => {
        m && !f && v && (0, s.n9)(e, n, r);
    }, [m, n, e, r, f, v]),
    f || !v)
        ? {
              previewUrl: void 0,
              isLoading: !1
          }
        : {
              previewUrl: g,
              isLoading: E
          };
}
