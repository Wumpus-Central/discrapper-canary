(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(627050),
    i = n(905405),
    s = n(626135),
    a = n(750030),
    c = n(937889),
    u = n(761910),
    d = n(488968),
    p = n(479398),
    m = n(981631),
    g = n(388032),
    f = n(875231);
let b = l.lazy(() => n.e('85831').then(n.bind(n, 120314)));
function h(e, t) {
    let { hideSimpleEmbedContent: h, formatInline: O = !1, noStyleAndInteraction: y = !1, isInteracting: v = !1, allowHeading: j = !1, allowList: P = !1, allowLinks: x = !1, allowDevLinks: C = !1, previewLinkTarget: w = !1, viewingChannelId: S } = t,
        N = (0, i.p)(),
        E = o.d.useExperiment({ location: 'useMessageRenderedContent' }).enabled,
        Z = (0, p.o)({ location: 'useMessageRenderedContent' }),
        [R, T] = l.useState(!1),
        _ = l.useCallback((e) => {
            e && T(!0);
        }, []);
    return l.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: g.intl.string(g.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(m.iLy.LOADING)) return (0, u.Z)(e);
        if (e.type === m.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, f, {
                track: (e, t) => {
                    s.default.track(e, t);
                }
            });
        }
        return Z.enabled
            ? {
                  content: (0, r.jsx)(l.Suspense, {
                      children: (0, r.jsx)(d.v.Provider, {
                          value: {
                              messageId: e.id,
                              channelId: e.channel_id,
                              viewingChannelId: S,
                              guildId: (0, a.k)(e),
                              setHasSpoilerEmbeds: _
                          },
                          children: (0, r.jsx)(b, { content: e.content })
                      })
                  }),
                  hasSpoilerEmbeds: R
              }
            : (0, c.ZP)(e, {
                  hideSimpleEmbedContent: h,
                  formatInline: O,
                  noStyleAndInteraction: y,
                  isInteracting: v,
                  allowHeading: j,
                  allowList: P,
                  allowLinks: x,
                  allowDevLinks: C,
                  previewLinkTarget: w,
                  shouldFilterKeywords: N,
                  viewingChannelId: S,
                  allowGameMentions: E
              });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, h, O, y, v, j, P, x, w, N, C, S, Z.enabled, E, R]);
}
