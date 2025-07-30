(n.d(t, { Z: () => p }), n(388685), n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    o = n(905405),
    s = n(937889),
    c = n(23750),
    u = n(699516),
    d = n(171900),
    _ = n(518944);
let E = [];
function p(e) {
    let t = (0, o.p)(),
        n = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        p = (0, r.e7)(
            [_.Z, d.Z, l.Z],
            () => {
                var r;
                let a = _.Z.getSearchResultsQuery(e),
                    o = d.Z.getMessages(e);
                if (null == a || null == o || 0 === o.length) return E;
                let u = (0, i.nC)(null != (r = a.content) ? r : ''),
                    p = [];
                return (
                    o.forEach((e) => {
                        let r = new c.ZP(e),
                            i = (r = (function (e, t) {
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
                            })(r, [l.Z])).isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, s.ZP)(r, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: n,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : r;
                        p.push([i]);
                    }),
                    p
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
                searchResults: p.map((n) =>
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
        [p],
        r.pF
    );
}
