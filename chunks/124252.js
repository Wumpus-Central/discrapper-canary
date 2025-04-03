n.d(t, { Z: () => c }), n(13667), n(390547), n(47120), n(653041), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(266796);
var r = n(192379),
    a = n(399606),
    i = n(541716),
    l = n(117530),
    s = n(154135),
    o = n(337077);
function c(e, t) {
    var n, c;
    let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = r.useState(null),
                o = (0, a.Wu)([l.Z], () => {
                    let t = l.Z.getUploads(e.id, i.Ie.CREATE_FORUM_POST.drafts.type),
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
                                let a = URL.createObjectURL(r);
                                return (
                                    e.push(a),
                                    {
                                        id: t.id,
                                        src: a,
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
