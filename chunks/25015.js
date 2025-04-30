n.d(t, { Z: () => b });
var r = n(200651),
    o = n(192379),
    a = n(905405),
    i = n(626135),
    l = n(750030),
    s = n(937889),
    c = n(761910),
    u = n(488968),
    d = n(479398),
    p = n(981631),
    g = n(388032),
    m = n(875231);
let f = o.lazy(() => n.e('85831').then(n.bind(n, 120314)));
function b(e, t) {
    let { hideSimpleEmbedContent: b, formatInline: h = !1, noStyleAndInteraction: _ = !1, isInteracting: y = !1, allowHeading: v = !1, allowList: O = !1, allowLinks: j = !1, allowDevLinks: x = !1, previewLinkTarget: C = !1, viewingChannelId: P } = t,
        T = (0, a.p)(),
        w = (0, d.o)({ location: 'useMessageRenderedContent' });
    return o.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: g.intl.string(g.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.iLy.LOADING)) return (0, c.Z)(e);
        if (e.type === p.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, m, {
                track: (e, t) => {
                    i.default.track(e, t);
                }
            });
        }
        return w.enabled
            ? {
                  content: (0, r.jsx)(o.Suspense, {
                      children: (0, r.jsx)(u.v.Provider, {
                          value: {
                              messageId: e.id,
                              channelId: e.channel_id,
                              viewingChannelId: P,
                              guildId: (0, l.k)(e)
                          },
                          children: (0, r.jsx)(f, { content: e.content })
                      })
                  }),
                  hasSpoilerEmbeds: !1
              }
            : (0, s.ZP)(e, {
                  hideSimpleEmbedContent: b,
                  formatInline: h,
                  noStyleAndInteraction: _,
                  isInteracting: y,
                  allowHeading: v,
                  allowList: O,
                  allowLinks: j,
                  allowDevLinks: x,
                  previewLinkTarget: C,
                  shouldFilterKeywords: T,
                  viewingChannelId: P
              });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, b, h, _, y, v, O, j, C, T, x, P, w.enabled]);
}
