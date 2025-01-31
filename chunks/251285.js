n.d(t, { Z: () => u }), n(47120);
var i = n(442837),
    l = n(963374),
    a = n(735020),
    r = n(905405),
    s = n(786761),
    o = n(937889),
    c = n(699516),
    d = n(768119);
function u(e) {
    let t = (0, r.p)(),
        n = (0, i.e7)(
            [d.Z, a.Z],
            () => {
                var n;
                let i = d.Z.getQuery(e),
                    r = d.Z.getRawResults(e);
                if (null == i || null == r) return [];
                let c = (0, l.nC)(null !== (n = i.content) && void 0 !== n ? n : '');
                return r.map((e) =>
                    e.map((e) => {
                        let n = a.Z.getMessage(e.id, e.channel_id),
                            i = (0, s.e5)(e);
                        return (
                            null != n &&
                                (i = i.merge({
                                    attachments: n.attachments,
                                    embeds: n.embeds
                                })),
                            i.isSearchHit
                                ? i.set(
                                      'customRenderedContent',
                                      (0, o.ZP)(i, {
                                          postProcessor: c,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : i
                        );
                    })
                );
            },
            [e, t],
            i.pF
        ),
        [u, h, p] = (0, i.e7)(
            [c.Z],
            () => {
                let e = 0,
                    t = 0;
                return [
                    n.map((n) =>
                        n.filter((n) => {
                            let i = c.Z.isBlockedForMessage(n),
                                l = c.Z.isIgnoredForMessage(n);
                            return i && n.isSearchHit ? e++ : l && n.isSearchHit && t++, (!i && !l) || n.isSearchHit;
                        })
                    ),
                    e,
                    t
                ];
            },
            [n],
            i.pF
        );
    return {
        searchResults: u,
        blockCount: h,
        ignoreCount: p
    };
}
