n.d(t, {
    G: () => b,
    Z: () => _
}),
    n(388685),
    n(539854);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    o = n(905405),
    a = n(786761),
    s = n(937889),
    c = n(903488),
    u = n(416638),
    d = n(23750),
    p = n(699516),
    h = n(768119),
    f = n(862825);
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
        [p.Z],
        () => {
            let t = 0,
                n = 0;
            return [
                e.map((e) =>
                    e.filter((e) => {
                        let r = p.Z.isBlockedForMessage(e),
                            i = p.Z.isIgnoredForMessage(e);
                        return r && e.isSearchHit ? t++ : i && e.isSearchHit && n++, (!r && !i) || e.isSearchHit;
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
        [n, a, p] = g(
            (0, r.e7)(
                [h.Z, c.Z, l.Z],
                () => {
                    var n;
                    let r = (0, u.WJ)(e),
                        o = h.Z.getSearchResultsQuery(r),
                        a = h.Z.getSearchResultsQueryString(r),
                        p = (0, u.jj)(e, f.sR.MESSAGES, a),
                        g = c.Z.getMessages(p);
                    if (null == g || 0 === g.length) return [];
                    let b = (0, i.nC)(null != (n = null == o ? void 0 : o.content) ? n : ''),
                        _ = [];
                    return (
                        g.forEach((e) => {
                            let n = new d.ZP(e);
                            (n = m(n, [l.Z])).set(
                                'customRenderedContent',
                                (0, s.ZP)(n, {
                                    postProcessor: b,
                                    allowHeading: !0,
                                    allowList: !0,
                                    shouldFilterKeywords: t
                                })
                            ),
                                _.push([n]);
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
        blockCount: a,
        ignoreCount: p
    };
}
function _(e) {
    let t = (0, o.p)(),
        [n, c, u] = g(
            (0, r.e7)(
                [h.Z, l.Z],
                () => {
                    var n;
                    let r = h.Z.getQuery(e),
                        o = h.Z.getRawResults(e);
                    if (null == r || null == o) return [];
                    let c = (0, i.nC)(null != (n = r.content) ? n : '');
                    return o.map((e) =>
                        e.map((e) => {
                            let n = m((0, a.e5)(e), [l.Z]);
                            return n.isSearchHit
                                ? n.set(
                                      'customRenderedContent',
                                      (0, s.ZP)(n, {
                                          postProcessor: c,
                                          allowHeading: !0,
                                          allowList: !0,
                                          shouldFilterKeywords: t
                                      })
                                  )
                                : n;
                        })
                    );
                },
                [e, t],
                r.pF
            )
        );
    return {
        searchResults: n,
        blockCount: c,
        ignoreCount: u
    };
}
