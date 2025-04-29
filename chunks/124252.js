n.d(t, { Z: () => c }), n(361932), n(187205), n(388685), n(539854), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(953529);
var r = n(73800),
    i = n(399606),
    l = n(541716),
    a = n(117530),
    s = n(154135),
    o = n(337077);
function c(e, t) {
    var n, c;
    let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = r.useState(null),
                o = (0, i.Wu)([a.Z], () => {
                    let t = a.Z.getUploads(e.id, l.Ie.CREATE_FORUM_POST.drafts.type),
                        n = t.find((e) => e.isThumbnail);
                    return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                }),
                c = r.useMemo(() => o.some((e) => e.isThumbnail), [o]);
            return (
                r.useEffect(() => {
                    let e = [];
                    return (
                        n(
                            o.slice(0, s.Yh).flatMap((t) => {
                                var n;
                                let r = null == t || null == (n = t.item) ? void 0 : n.file;
                                if (null == r) return [];
                                let i = URL.createObjectURL(r);
                                return (
                                    e.push(i),
                                    {
                                        id: t.id,
                                        src: i,
                                        spoiler: t.spoiler,
                                        alt: t.description,
                                        isThumbnail: t.isThumbnail,
                                        upload: !0 === t.isThumbnail ? t : void 0,
                                        isVideo: t.isVideo
                                    }
                                );
                            })
                        ),
                        () => {
                            n(null), e.forEach((e) => URL.revokeObjectURL(e));
                        }
                    );
                }, [o]),
                {
                    mediaAttachments: t,
                    hasThumbnail: c
                }
            );
        })(e),
        m = Math.max(s.Yh - (null != (n = null == d ? void 0 : d.length) ? n : 0), 0),
        { embeds: h } = (0, o.M)(u, m, t),
        g = r.useMemo(
            () =>
                null == h
                    ? void 0
                    : h.flatMap((e) => {
                          let t = (0, s.Vh)(e);
                          return null == t
                              ? []
                              : {
                                    id: t,
                                    src: t,
                                    spoiler: !1,
                                    alt: e.title
                                };
                      }),
            [h]
        ),
        f = [...(null != d ? d : [])];
    return !u && m > 0 && f.push(...(null != (c = null == g ? void 0 : g.slice(0, m)) ? c : [])), f;
}
