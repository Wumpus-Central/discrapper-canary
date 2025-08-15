n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    o = n(905405),
    s = n(937889),
    c = n(23750),
    u = n(699516),
    d = n(171900),
    p = n(607802),
    h = n(817190);
let f = [];
function m(e) {
    let { searchContext: t } = e,
        n = (0, o.p)(),
        m = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        g = (0, r.e7)(
            [h.Z, d.Z, l.Z],
            () => {
                var e;
                let r = (0, p.Tm)(t),
                    a = h.Z.getSearchResultsQuery(r),
                    o = d.Z.getMessages(r);
                if (null == a || null == o || 0 === o.length) return f;
                let u = (0, i.nC)(null != (e = (0, p.UP)(a)) ? e : ""),
                    g = [];
                return (
                    o.forEach((e) => {
                        let t = new c.ZP(e),
                            r = (t = (function (e, t) {
                                let [n] = t,
                                    r = n.getMessage(e.id, e.channel_id);
                                return (
                                    null != r &&
                                        (e = e.merge({
                                            attachments: r.attachments,
                                            embeds: r.embeds,
                                        })),
                                    e
                                );
                            })(t, [l.Z])).isSearchHit
                                ? t.set(
                                      "customRenderedContent",
                                      (0, s.ZP)(t, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: m,
                                          shouldFilterKeywords: n,
                                      }),
                                  )
                                : t;
                        g.push([r]);
                    }),
                    g
                );
            },
            [m, t, n],
            r.pF,
        );
    return (0, r.e7)(
        [u.Z],
        () => {
            let e = 0,
                t = 0;
            return {
                searchResults: g.map((n) =>
                    n.filter((n) => {
                        let r = u.Z.isBlockedForMessage(n),
                            i = u.Z.isIgnoredForMessage(n);
                        return r && n.isSearchHit ? e++ : i && n.isSearchHit && t++, (!r && !i) || n.isSearchHit;
                    }),
                ),
                blockCount: e,
                ignoreCount: t,
            };
        },
        [g],
        r.pF,
    );
}
