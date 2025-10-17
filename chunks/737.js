n.d(t, { Z: () => g }), n(388685), n(539854);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    s = n(905405),
    o = n(937889),
    c = n(23750),
    d = n(699516),
    u = n(171900),
    p = n(607802),
    h = n(817190);
let f = [];
function g(e) {
    let { searchContext: t } = e,
        n = (0, s.p)(),
        g = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        m = (0, r.e7)(
            [h.Z, u.Z, l.Z],
            () => {
                var e;
                let r = (0, p.Tm)(t),
                    a = h.Z.getSearchResultsQuery(r),
                    s = u.Z.getMessages(r);
                if (null == a || null == s || 0 === s.length) return f;
                let d = (0, i.nC)(null != (e = (0, p.UP)(a)) ? e : ""),
                    m = [];
                return (
                    s.forEach((e) => {
                        let t = new c.ZP(e);
                        (t = (t = (function (e, t) {
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
                        })(t, [l.Z])).set(
                            "customRenderedContent",
                            (0, o.ZP)(t, {
                                postProcessor: d,
                                allowHeading: !0,
                                allowList: !0,
                                allowGameMentions: g,
                                shouldFilterKeywords: n,
                            }),
                        )),
                            m.push(t);
                    }),
                    m
                );
            },
            [g, t, n],
            r.pF,
        ),
        { blockCount: b, ignoreCount: y } = (0, r.cj)([d.Z], () => {
            let e = 0,
                t = 0;
            return (
                m.forEach((n) => {
                    let r = d.Z.isBlockedForMessage(n),
                        i = d.Z.isIgnoredForMessage(n);
                    r ? e++ : i && t++;
                }),
                {
                    blockCount: e,
                    ignoreCount: t,
                }
            );
        });
    return {
        renderedMessages: m,
        blockCount: b,
        ignoreCount: y,
    };
}
