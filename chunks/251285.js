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
    u = n(23750),
    d = n(699516),
    _ = n(171900),
    E = n(518944),
    O = n(607802);
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
        [d.Z],
        () => {
            let t = 0,
                n = 0;
            return [
                e.map((e) =>
                    e.filter((e) => {
                        let r = d.Z.isBlockedForMessage(e),
                            i = d.Z.isIgnoredForMessage(e);
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
                [E.Z, _.Z, l.Z],
                () => {
                    var n;
                    let r = (0, O.WJ)(e),
                        a = E.Z.getSearchResultsQuery(r),
                        o = _.Z.getMessages(r);
                    if (null == o || 0 === o.length) return [];
                    let c = (0, i.nC)(null != (n = null == a ? void 0 : a.content) ? n : ''),
                        d = [];
                    return (
                        o.forEach((e) => {
                            let n = new u.ZP(e);
                            ((n = I(n, [l.Z])).set(
                                'customRenderedContent',
                                (0, s.ZP)(n, {
                                    postProcessor: c,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                d.push([n]));
                        }),
                        d
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
        [u, d, O] = p(
            (0, r.e7)(
                [E.Z, _.Z, l.Z],
                () => {
                    var r;
                    let a = E.Z.getSearchResultsQuery(e),
                        o = _.Z.getRawMessages(e);
                    if (null == a || null == o) return S;
                    let u = (0, i.nC)(null != (r = a.content) ? r : '');
                    return o.map((e) =>
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
        ignoreCount: O
    };
}
