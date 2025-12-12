n.d(t, { Z: () => c }),
    n(361932),
    n(187205),
    n(388685),
    n(539854),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(953529);
var a = n(473749),
    r = n(399606),
    i = n(541716),
    l = n(117530),
    s = n(154135),
    o = n(337077);
function c(e, t) {
    var n, c;
    let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = a.useState(null),
                o = (0, r.Wu)([l.Z], () => {
                    let t = l.Z.getUploads(e.id, i.Ie.CREATE_FORUM_POST.drafts.type),
                        n = t.find((e) => e.isThumbnail);
                    return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                }),
                c = a.useMemo(() => o.some((e) => e.isThumbnail), [o]);
            return (
                a.useEffect(() => {
                    let e = [];
                    return (
                        n(
                            o.slice(0, s.Yh).flatMap((t) => {
                                var n;
                                let a = null == t || null == (n = t.item) ? void 0 : n.file;
                                if (null == a) return [];
                                let r = URL.createObjectURL(a);
                                return (
                                    e.push(r),
                                    {
                                        id: t.id,
                                        src: r,
                                        spoiler: t.spoiler,
                                        alt: t.description,
                                        isThumbnail: t.isThumbnail,
                                        upload: !0 === t.isThumbnail ? t : void 0,
                                        isVideo: t.isVideo,
                                    }
                                );
                            }),
                        ),
                        () => {
                            n(null), e.forEach((e) => URL.revokeObjectURL(e));
                        }
                    );
                }, [o]),
                {
                    mediaAttachments: t,
                    hasThumbnail: c,
                }
            );
        })(e),
        m = Math.max(s.Yh - (null != (n = null == d ? void 0 : d.length) ? n : 0), 0),
        { embeds: f } = (0, o.M)(u, m, t),
        h = a.useMemo(
            () =>
                null == f
                    ? void 0
                    : f.flatMap((e) => {
                          let t = (0, s.Vh)(e);
                          return null == t
                              ? []
                              : {
                                    id: t,
                                    src: t,
                                    spoiler: !1,
                                    alt: e.title,
                                };
                      }),
            [f],
        ),
        g = [...(null != d ? d : [])];
    return !u && m > 0 && g.push(...(null != (c = null == h ? void 0 : h.slice(0, m)) ? c : [])), g;
}
