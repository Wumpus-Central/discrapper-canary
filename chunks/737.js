(n.d(t, { Z: () => O }), n(388685), n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    o = n(905405),
    c = n(937889),
    s = n(23750),
    u = n(699516),
    d = n(171900),
    _ = n(518944);
let E = [];
function O(e) {
    let t = (0, o.p)(),
        n = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        O = (0, r.e7)(
            [_.Z, d.Z, l.Z],
            () => {
                var r;
                let a = _.Z.getSearchResultsQuery(e),
                    o = d.Z.getMessages(e);
                if (null == a || null == o || 0 === o.length) return E;
                let u = (0, i.nC)(null != (r = a.content) ? r : ''),
                    O = [];
                return (
                    o.forEach((e) => {
                        let r = new s.ZP(e),
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
                                      (0, c.ZP)(r, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: n,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : r;
                        O.push([i]);
                    }),
                    O
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
                searchResults: O.map((n) =>
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
        [O],
        r.pF
    );
}
