var l = n(582128),
    i = n(855986),
    a = n(401843),
    r = n(384200),
    s = n(734057),
    o = n(576705),
    u = n(309010),
    c = n(818348);
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            let d = null == t || null == n,
                m = (0, i.bG)([s.A], () => s.A.getChannel(t)),
                A = (0, i.bG)([o.A], () => null != m && o.A.canBasicChannel(c.hV.CONNECT, m)),
                p = (0, i.bG)([u.Ay], () => u.Ay.getVoiceChannelId() === t),
                {
                    shouldFetchPreview: h,
                    previewUrl: f,
                    isLoading: g,
                } = (0, i.cf)([r.A], () => ({
                    shouldFetchPreview: !d && r.A.shouldFetchPreview(e, t, n),
                    previewUrl: d ? null : r.A.getPreviewURL(e, t, n),
                    isLoading: !d && r.A.getIsPreviewLoading(e, t, n),
                })),
                x = A || p;
            return (l.useEffect(() => {
                h && !d && x && (0, a.Tp)(e, t, n);
            }, [h, t, e, n, d, x]),
            d || !x)
                ? { previewUrl: void 0, isLoading: !1 }
                : { previewUrl: f, isLoading: g };
        },
    },
);
