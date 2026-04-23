"use strict";
n.d(t, { A: () => d }), n(321073), n(323874), n(14289), n(35956);
var l = n(64700),
    a = n(417597),
    s = n(355622),
    i = n(522602),
    r = n(304162),
    o = n(835134);
function d(e, t) {
    let { mediaAttachments: n, hasThumbnail: d } = (function (e) {
            let [t, n] = l.useState(null),
                o = (0, a.yK)([i.A], () => {
                    let t = i.A.getUploads(e.id, s.oU.CREATE_FORUM_POST.drafts.type),
                        n = t.find((e) => e.isThumbnail);
                    return null != n ? [n] : t.filter((e) => e.isVideo || e.isImage);
                }),
                d = l.useMemo(() => o.some((e) => e.isThumbnail), [o]);
            return (
                l.useEffect(() => {
                    let e = [];
                    return (
                        n(
                            o.slice(0, r.A8).flatMap((t) => {
                                let n = t?.item?.file;
                                if (null == n) return [];
                                let l = URL.createObjectURL(n);
                                return (
                                    e.push(l),
                                    {
                                        id: t.id,
                                        src: l,
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
                { mediaAttachments: t, hasThumbnail: d }
            );
        })(e),
        c = Math.max(r.A8 - (n?.length ?? 0), 0),
        { embeds: u } = (0, o.w)(d, c, t),
        m = l.useMemo(
            () =>
                u?.flatMap((e) => {
                    let t = (0, r.m3)(e);
                    return null == t ? [] : { id: t, src: t, spoiler: !1, alt: e.title };
                }),
            [u],
        ),
        h = [...(n ?? [])];
    return !d && c > 0 && h.push(...(m?.slice(0, c) ?? [])), h;
}
