(r.d(t, {
    G: () => g,
    Z: () => j
}),
    r(388685),
    r(539854));
var n = r(442837),
    l = r(963374),
    i = r(735020),
    a = r(627050),
    c = r(905405),
    o = r(786761),
    s = r(937889),
    u = r(903488),
    b = r(416638),
    f = r(23750),
    p = r(699516),
    d = r(768119);
function O(e, t) {
    let [r] = t,
        n = r.getMessage(e.id, e.channel_id);
    return (
        null != n &&
            (e = e.merge({
                attachments: n.attachments,
                embeds: n.embeds
            })),
        e
    );
}
function y(e) {
    return (0, n.e7)(
        [p.Z],
        () => {
            let t = 0,
                r = 0;
            return [
                e.map((e) =>
                    e.filter((e) => {
                        let n = p.Z.isBlockedForMessage(e),
                            l = p.Z.isIgnoredForMessage(e);
                        return (n && e.isSearchHit ? t++ : l && e.isSearchHit && r++, (!n && !l) || e.isSearchHit);
                    })
                ),
                t,
                r
            ];
        },
        [e],
        n.pF
    );
}
function g(e) {
    let t = (0, c.p)(),
        [r, a, o] = y(
            (0, n.e7)(
                [d.Z, u.Z, i.Z],
                () => {
                    var r;
                    let n = (0, b.WJ)(e),
                        a = d.Z.getSearchResultsQuery(n),
                        c = u.Z.getMessages(n);
                    if (null == c || 0 === c.length) return [];
                    let o = (0, l.nC)(null != (r = null == a ? void 0 : a.content) ? r : ''),
                        p = [];
                    return (
                        c.forEach((e) => {
                            let r = new f.ZP(e);
                            ((r = O(r, [i.Z])).set(
                                'customRenderedContent',
                                (0, s.ZP)(r, {
                                    postProcessor: o,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                p.push([r]));
                        }),
                        p
                    );
                },
                [e, t],
                n.pF
            )
        );
    return {
        searchResults: r,
        blockCount: a,
        ignoreCount: o
    };
}
let m = [];
function j(e) {
    let t = (0, c.p)(),
        r = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        [b, f, p] = y(
            (0, n.e7)(
                [d.Z, u.Z, i.Z],
                () => {
                    var n;
                    let a = d.Z.getSearchResultsQuery(e),
                        c = u.Z.getRawMessages(e);
                    if (null == a || null == c) return m;
                    let b = (0, l.nC)(null != (n = a.content) ? n : '');
                    return c.map((e) =>
                        e.map((e) => {
                            let n = O((0, o.e5)(e), [i.Z]);
                            return n.isSearchHit
                                ? n.set(
                                      'customRenderedContent',
                                      (0, s.ZP)(n, {
                                          postProcessor: b,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: r,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : n;
                        })
                    );
                },
                [e, t, r],
                n.pF
            )
        );
    return {
        searchResults: b,
        blockCount: f,
        ignoreCount: p
    };
}
