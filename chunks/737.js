(n.d(t, { Z: () => h }), n(388685), n(539854));
var r = n(442837),
    i = n(963374),
    a = n(735020),
    o = n(627050),
    s = n(905405),
    l = n(937889),
    c = n(23750),
    u = n(699516),
    d = n(171900),
    f = n(518944);
function _(e, t) {
    let [n] = t,
        r = n.getMessage(e.id, e.channel_id);
    return (
        null != r &&
            (e = e.merge({
                attachments: r.attachments,
                embeds: r.embeds
            })),
        e
    );
}
let p = [];
function h(e) {
    let t = (0, s.p)(),
        n = o.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        h = (0, r.e7)(
            [f.Z, d.Z, a.Z],
            () => {
                var r;
                let o = f.Z.getSearchResultsQuery(e),
                    s = d.Z.getMessages(e);
                if (null == o || null == s || 0 === s.length) return p;
                let u = (0, i.nC)(null != (r = o.content) ? r : ''),
                    h = [];
                return (
                    s.forEach((e) => {
                        let r = new c.ZP(e),
                            i = (r = _(r, [a.Z])).isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, l.ZP)(r, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: n,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : r;
                        h.push([i]);
                    }),
                    h
                );
            },
            [n, e, t],
            r.pF
        );
    return (0, r.e7)(
        [u.Z],
        () => {
            let e = 0,
                t = 0;
            return {
                searchResults: h.map((n) =>
                    n.filter((n) => {
                        let r = u.Z.isBlockedForMessage(n),
                            i = u.Z.isIgnoredForMessage(n);
                        return (r && n.isSearchHit ? e++ : i && n.isSearchHit && t++, (!r && !i) || n.isSearchHit);
                    })
                ),
                blockCount: e,
                ignoreCount: t
            };
        },
        [h],
        r.pF
    );
}
