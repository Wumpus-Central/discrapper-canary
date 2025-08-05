(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(627050),
    o = n(905405),
    s = n(626135),
    l = n(750030),
    c = n(937889),
    u = n(761910),
    d = n(488968),
    f = n(479398),
    _ = n(981631),
    p = n(388032),
    h = n(875231);
let m = i.lazy(() => Promise.all([n.e('87597'), n.e('85831')]).then(n.bind(n, 120314)));
function g(e, t) {
    let { hideSimpleEmbedContent: g, formatInline: E = !1, noStyleAndInteraction: b = !1, isInteracting: y = !1, allowHeading: O = !1, allowList: v = !1, allowLinks: I = !1, allowDevLinks: T = !1, previewLinkTarget: S = !1, viewingChannelId: A } = t,
        N = (0, o.p)(),
        C = a.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        w = (0, f.o)({ location: 'useMessageRenderedContent' }),
        [R, P] = i.useState(!1),
        D = i.useCallback((e) => {
            e && P(!0);
        }, []);
    return (
        i.useEffect(() => {
            P(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return {
                    content: p.intl.string(p.t.sWi5ER),
                    hasSpoilerEmbeds: !1
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(_.iLy.LOADING)) return (0, u.Z)(e);
            if (e.type === _.uaV.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(55406);
                return t(e, h, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    }
                });
            }
            return w.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(d.v.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: A,
                                  guildId: (0, l.k)(e),
                                  setHasSpoilerEmbeds: D
                              },
                              children: (0, r.jsx)(m, { content: e.content })
                          })
                      }),
                      hasSpoilerEmbeds: R
                  }
                : (0, c.ZP)(e, {
                      hideSimpleEmbedContent: g,
                      formatInline: E,
                      noStyleAndInteraction: b,
                      isInteracting: y,
                      allowHeading: O,
                      allowList: v,
                      allowLinks: I,
                      allowDevLinks: T,
                      previewLinkTarget: S,
                      shouldFilterKeywords: N,
                      viewingChannelId: A,
                      allowGameMentions: C
                  });
        }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, g, E, b, y, O, v, I, S, N, T, A, w.enabled, C, R])
    );
}
