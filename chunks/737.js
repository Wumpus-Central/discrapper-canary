n.d(t, { Z: () => g }), n(388685), n(539854);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    s = n(905405),
    o = n(937889),
    c = n(23750),
    u = n(699516),
    d = n(171900),
    h = n(518944),
    p = n(607802);
let f = [];
function g(e) {
    let { searchContext: t } = e,
        n = (0, s.p)(),
        g = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        m = (0, r.e7)(
            [h.Z, d.Z, l.Z],
            () => {
                var e;
                let r = (0, p.Tm)(t),
                    a = h.Z.getSearchResultsQuery(r),
                    s = d.Z.getMessages(r);
                if (null == a || null == s || 0 === s.length) return f;
                let u = (0, i.nC)(null != (e = a.content) ? e : ""),
                    m = [];
                return (
                    s.forEach((e) => {
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
                                      (0, o.ZP)(t, {
                                          postProcessor: u,
                                          allowHeading: !0,
                                          allowList: !0,
                                          allowGameMentions: g,
                                          shouldFilterKeywords: n,
                                      }),
                                  )
                                : t;
                        m.push([r]);
                    }),
                    m
                );
            },
            [g, t, n],
            r.pF,
        );
    return (0, r.e7)(
        [u.Z],
        () => {
            let e = 0,
                t = 0;
            return {
                searchResults: m.map((n) =>
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
        [m],
        r.pF,
    );
}
