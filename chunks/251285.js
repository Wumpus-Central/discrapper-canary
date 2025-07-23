(n.d(t, {
    G: () => T,
    Z: () => S
}),
    n(388685),
    n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    o = n(627050),
    a = n(905405),
    c = n(786761),
    s = n(937889),
    u = n(903488),
    d = n(416638),
    _ = n(23750),
    E = n(699516),
    O = n(768119);
function I(e, t) {
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
function p(e) {
    return (0, r.e7)(
        [E.Z],
        () => {
            let t = 0,
                n = 0;
            return [
                e.map((e) =>
                    e.filter((e) => {
                        let r = E.Z.isBlockedForMessage(e),
                            i = E.Z.isIgnoredForMessage(e);
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
function T(e) {
    let t = (0, a.p)(),
        [n, o, c] = p(
            (0, r.e7)(
                [O.Z, u.Z, l.Z],
                () => {
                    var n;
                    let r = (0, d.WJ)(e),
                        o = O.Z.getSearchResultsQuery(r),
                        a = u.Z.getMessages(r);
                    if (null == a || 0 === a.length) return [];
                    let c = (0, i.nC)(null != (n = null == o ? void 0 : o.content) ? n : ''),
                        E = [];
                    return (
                        a.forEach((e) => {
                            let n = new _.ZP(e);
                            ((n = I(n, [l.Z])).set(
                                'customRenderedContent',
                                (0, s.ZP)(n, {
                                    postProcessor: c,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                E.push([n]));
                        }),
                        E
                    );
                },
                [e, t],
                r.pF
            )
        );
    return {
        searchResults: n,
        blockCount: o,
        ignoreCount: c
    };
}
function S(e) {
    let t = (0, a.p)(),
        n = o.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        [u, d, _] = p(
            (0, r.e7)(
                [O.Z, l.Z],
                () => {
                    var r;
                    let o = O.Z.getQuery(e),
                        a = O.Z.getRawResults(e);
                    if (null == o || null == a) return [];
                    let u = (0, i.nC)(null != (r = o.content) ? r : '');
                    return a.map((e) =>
                        e.map((e) => {
                            let r = I((0, c.e5)(e), [l.Z]);
                            return r.isSearchHit
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
        ignoreCount: _
    };
}
