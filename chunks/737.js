(n.d(t, { Z: () => f }), n(388685), n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    s = n(905405),
    o = n(937889),
    c = n(23750),
    u = n(699516),
    d = n(171900),
    h = n(518944);
let p = [];
function f(e) {
    let t = (0, s.p)(),
        n = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        f = (0, r.e7)(
            [h.Z, d.Z, l.Z],
            () => {
                var r;
                let a = h.Z.getSearchResultsQuery(e),
                    s = d.Z.getMessages(e);
                if (null == a || null == s || 0 === s.length) return p;
                let u = (0, i.nC)(null != (r = a.content) ? r : ''),
                    f = [];
                return (
                    s.forEach((e) => {
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
                                      (0, o.ZP)(r, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: n,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : r;
                        f.push([i]);
                    }),
                    f
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
                searchResults: f.map((n) =>
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
        [f],
        r.pF
    );
}
