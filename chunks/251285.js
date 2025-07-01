(n.d(t, {
    G: () => _,
    Z: () => y
}),
    n(388685),
    n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    o = n(627050),
    a = n(905405),
    s = n(786761),
    c = n(937889),
    u = n(903488),
    d = n(416638),
    p = n(23750),
    h = n(699516),
    f = n(768119),
    m = n(862825);
function g(e, t) {
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
function b(e) {
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
function _(e) {
    let t = (0, a.p)(),
        [n, o, s] = b(
            (0, r.e7)(
                [f.Z, u.Z, l.Z],
                () => {
                    var n;
                    let r = (0, d.WJ)(e),
                        o = f.Z.getSearchResultsQuery(r),
                        a = f.Z.getSearchResultsQueryString(r),
                        s = (0, d.jj)(e, m.sR.MESSAGES, a),
                        h = u.Z.getMessages(s);
                    if (null == h || 0 === h.length) return [];
                    let b = (0, i.nC)(null != (n = null == o ? void 0 : o.content) ? n : ''),
                        _ = [];
                    return (
                        h.forEach((e) => {
                            let n = new p.ZP(e);
                            ((n = g(n, [l.Z])).set(
                                'customRenderedContent',
                                (0, c.ZP)(n, {
                                    postProcessor: b,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                _.push([n]));
                        }),
                        _
                    );
                },
                [e, t],
                r.pF
            )
        );
    return {
        searchResults: n,
        blockCount: o,
        ignoreCount: s
    };
}
function y(e) {
    let t = (0, a.p)(),
        n = o.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        [u, d, p] = b(
            (0, r.e7)(
                [f.Z, l.Z],
                () => {
                    var r;
                    let o = f.Z.getQuery(e),
                        a = f.Z.getRawResults(e);
                    if (null == o || null == a) return [];
                    let u = (0, i.nC)(null != (r = o.content) ? r : '');
                    return a.map((e) =>
                        e.map((e) => {
                            let r = g((0, s.e5)(e), [l.Z]);
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
