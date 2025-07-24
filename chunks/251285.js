(n.d(t, {
    G: () => T,
    Z: () => N
}),
    n(388685),
    n(539854));
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    o = n(905405),
    c = n(786761),
    s = n(937889),
    u = n(903488),
    d = n(416638),
    _ = n(23750),
    E = n(699516),
    I = n(768119);
function O(e, t) {
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
    let t = (0, o.p)(),
        [n, a, c] = p(
            (0, r.e7)(
                [I.Z, u.Z, l.Z],
                () => {
                    var n;
                    let r = (0, d.WJ)(e),
                        a = I.Z.getSearchResultsQuery(r),
                        o = u.Z.getMessages(r);
                    if (null == o || 0 === o.length) return [];
                    let c = (0, i.nC)(null != (n = null == a ? void 0 : a.content) ? n : ''),
                        E = [];
                    return (
                        o.forEach((e) => {
                            let n = new _.ZP(e);
                            ((n = O(n, [l.Z])).set(
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
        blockCount: a,
        ignoreCount: c
    };
}
let S = [];
function N(e) {
    let t = (0, o.p)(),
        n = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        [d, _, E] = p(
            (0, r.e7)(
                [I.Z, u.Z, l.Z],
                () => {
                    var r;
                    let a = I.Z.getSearchResultsQuery(e),
                        o = u.Z.getRawMessages(e);
                    if (null == a || null == o) return S;
                    let d = (0, i.nC)(null != (r = a.content) ? r : '');
                    return o.map((e) =>
                        e.map((e) => {
                            let r = O((0, c.e5)(e), [l.Z]);
                            return r.isSearchHit
                                ? r.set(
                                      'customRenderedContent',
                                      (0, s.ZP)(r, {
                                          postProcessor: d,
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
        searchResults: d,
        blockCount: _,
        ignoreCount: E
    };
}
