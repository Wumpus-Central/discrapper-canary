n.d(t, { Z: () => d }), n(47120);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    o = n(905405),
    a = n(786761),
    s = n(937889),
    c = n(699516),
    u = n(768119);
function d(e) {
    let t = (0, o.p)(),
        n = (0, r.e7)(
            [u.Z, l.Z],
            () => {
                var n;
                let r = u.Z.getQuery(e),
                    o = u.Z.getRawResults(e);
                if (null == r || null == o) return [];
                let c = (0, i.nC)(null != (n = r.content) ? n : '');
                return o.map((e) =>
                    e.map((e) => {
                        let n = l.Z.getMessage(e.id, e.channel_id),
                            r = (0, a.e5)(e);
                        return (
                            null != n &&
                                (r = r.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            r.isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, s.ZP)(r, {
                                          postProcessor: c,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : r
                        );
                    })
                );
            },
            [e, t],
            r.pF
        ),
        [d, p, h] = (0, r.e7)(
            [c.Z],
            () => {
                let e = 0,
                    t = 0;
                return [
                    n.map((n) =>
                        n.filter((n) => {
                            let r = c.Z.isBlockedForMessage(n),
                                i = c.Z.isIgnoredForMessage(n);
                            return r && n.isSearchHit ? e++ : i && n.isSearchHit && t++, (!r && !i) || n.isSearchHit;
                        })
                    ),
                    e,
                    t
                ];
            },
            [n],
            r.pF
        );
    return {
        searchResults: d,
        blockCount: p,
        ignoreCount: h
    };
}
