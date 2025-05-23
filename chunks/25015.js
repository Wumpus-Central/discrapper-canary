n.d(t, { Z: () => b });
var r = n(255367),
    o = n(73800),
    l = n(905405),
    i = n(626135),
    s = n(750030),
    a = n(937889),
    c = n(761910),
    u = n(488968),
    d = n(479398),
    p = n(981631),
    m = n(388032),
    g = n(534664);
let f = o.lazy(() => n.e('85831').then(n.bind(n, 120314)));
function b(e, t) {
    let { hideSimpleEmbedContent: b, formatInline: h = !1, noStyleAndInteraction: O = !1, isInteracting: y = !1, allowHeading: j = !1, allowList: v = !1, allowLinks: P = !1, allowDevLinks: x = !1, previewLinkTarget: C = !1, viewingChannelId: w } = t,
        S = (0, l.p)(),
        N = (0, d.o)({ location: 'useMessageRenderedContent' });
    return o.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: m.intl.string(m.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.iLy.LOADING)) return (0, c.Z)(e);
        if (e.type === p.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, g, {
                track: (e, t) => {
                    i.default.track(e, t);
                }
            });
        }
        return N.enabled
            ? {
                  content: (0, r.jsx)(o.Suspense, {
                      children: (0, r.jsx)(u.v.Provider, {
                          value: {
                              messageId: e.id,
                              channelId: e.channel_id,
                              viewingChannelId: w,
                              guildId: (0, s.k)(e)
                          },
                          children: (0, r.jsx)(f, { content: e.content })
                      })
                  }),
                  hasSpoilerEmbeds: !1
              }
            : (0, a.ZP)(e, {
                  hideSimpleEmbedContent: b,
                  formatInline: h,
                  noStyleAndInteraction: O,
                  isInteracting: y,
                  allowHeading: j,
                  allowList: v,
                  allowLinks: P,
                  allowDevLinks: x,
                  previewLinkTarget: C,
                  shouldFilterKeywords: S,
                  viewingChannelId: w
              });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, b, h, O, y, j, v, P, C, S, x, w, N.enabled]);
}
