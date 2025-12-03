n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(442837),
    i = n(963374),
    l = n(735020),
    a = n(627050),
    s = n(937889),
    o = n(23750),
    c = n(699516),
    d = n(171900),
    u = n(607802),
    p = n(817190);
let h = [];
function f(e) {
    let { searchContext: t } = e,
        n = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        f = (0, r.e7)(
            [p.Z, d.Z, l.Z],
            () => {
                var e;
                let r = (0, u.Tm)(t),
                    a = p.Z.getSearchResultsQuery(r),
                    c = d.Z.getMessages(r);
                if (null == a || null == c || 0 === c.length) return h;
                let f = (0, i.nC)(null != (e = (0, u.UP)(a)) ? e : ""),
                    g = [];
                return (
                    c.forEach((e) => {
                        let t = new o.ZP(e);
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
                            (0, s.ZP)(t, {
                                postProcessor: f,
                                allowHeading: !0,
                                allowList: !0,
                                allowGameMentions: n,
                            }),
                        )),
                            g.push(t);
                    }),
                    g
                );
            },
            [n, t],
            r.pF,
        ),
        { blockCount: g, ignoreCount: m } = (0, r.cj)([c.Z], () => {
            let e = 0,
                t = 0;
            return (
                f.forEach((n) => {
                    let r = c.Z.isBlockedForMessage(n),
                        i = c.Z.isIgnoredForMessage(n);
                    r ? e++ : i && t++;
                }),
                {
                    blockCount: e,
                    ignoreCount: t,
                }
            );
        });
    return {
        renderedMessages: f,
        blockCount: g,
        ignoreCount: m,
    };
}
