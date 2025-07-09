(n.d(t, {
    G: () => b,
    Z: () => _
}),
    n(388685),
    n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    o = n(905405),
    s = n(786761),
    c = n(937889),
    u = n(903488),
    d = n(416638),
    p = n(23750),
    h = n(699516),
    f = n(768119);
function m(e, t) {
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
function g(e) {
    return (0, r.e7)(
        [h.Z],
        () => {
            let t = 0,
                n = 0;
            return [
                e.map((e) =>
                    e.filter((e) => {
                        let r = h.Z.isBlockedForMessage(e),
                            i = h.Z.isIgnoredForMessage(e);
                        return (r && e.isSearchHit ? t++ : i && e.isSearchHit && n++, (!r && !i) || e.isSearchHit);
                    })
                ),
                t,
                n
            ];
        },
        [e],
        r.pF
    );
}
function b(e) {
    let t = (0, o.p)(),
        [n, a, s] = g(
            (0, r.e7)(
                [f.Z, u.Z, l.Z],
                () => {
                    var n;
                    let r = (0, d.WJ)(e),
                        a = f.Z.getSearchResultsQuery(r),
                        o = u.Z.getMessages(r);
                    if (null == o || 0 === o.length) return [];
                    let s = (0, i.nC)(null != (n = null == a ? void 0 : a.content) ? n : ''),
                        h = [];
                    return (
                        o.forEach((e) => {
                            let n = new p.ZP(e);
                            ((n = m(n, [l.Z])).set(
                                'customRenderedContent',
                                (0, c.ZP)(n, {
                                    postProcessor: s,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                h.push([n]));
                        }),
                        h
                    );
                },
                [e, t],
                r.pF
            )
        );
    return {
        searchResults: n,
        blockCount: a,
        ignoreCount: s
    };
}
function _(e) {
    let t = (0, o.p)(),
        n = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        [u, d, p] = g(
            (0, r.e7)(
                [f.Z, l.Z],
                () => {
                    var r;
                    let a = f.Z.getQuery(e),
                        o = f.Z.getRawResults(e);
                    if (null == a || null == o) return [];
                    let u = (0, i.nC)(null != (r = a.content) ? r : '');
                    return o.map((e) =>
                        e.map((e) => {
                            let r = m((0, s.e5)(e), [l.Z]);
                            return r.isSearchHit
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
                        })
                    );
                },
                [e, t, n],
                r.pF
            )
        );
    return {
        searchResults: u,
        blockCount: d,
        ignoreCount: p
    };
}
