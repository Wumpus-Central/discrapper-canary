n.d(t, {
    A: () => o,
}),
    n(114821),
    n(339614),
    n(896048),
    n(321073),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(228524);
var l = n(64700),
    r = n(417597),
    a = n(355622),
    i = n(522602),
    s = n(304162),
    c = n(835134);

function o(e, t) {
    var n, o;
    let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = l.useState(null),
                c = (0, r.yK)([i.A], () => {
                    let t = i.A.getUploads(e.id, a.oU.CREATE_FORUM_POST.drafts.type),
                        n = t.find((e) => e.isThumbnail);
                    return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                }),
                o = l.useMemo(() => c.some((e) => e.isThumbnail), [c]);
            return (
                l.useEffect(() => {
                    let e = [];
                    return (
                        n(
                            c.slice(0, s.A8).flatMap((t) => {
                                var n;
                                let l = null == t || null == (n = t.item) ? void 0 : n.file;
                                if (null == l) return [];
                                let r = URL.createObjectURL(l);
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
                }, [c]),
                {
                    mediaAttachments: t,
                    hasThumbnail: o,
                }
            );
        })(e),
        m = Math.max(s.A8 - (null != (n = null == d ? void 0 : d.length) ? n : 0), 0),
        { embeds: h } = (0, c.w)(u, m, t),
        f = l.useMemo(
            () =>
                null == h
                    ? void 0
                    : h.flatMap((e) => {
                          let t = (0, s.m3)(e);
                          return null == t
                              ? []
                              : {
                                    id: t,
                                    src: t,
                                    spoiler: !1,
                                    alt: e.title,
                                };
                      }),
            [h],
        ),
        g = [...(null != d ? d : [])];
    return !u && m > 0 && g.push(...(null != (o = null == f ? void 0 : f.slice(0, m)) ? o : [])), g;
}
