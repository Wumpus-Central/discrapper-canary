"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(352505),
    s = n(954571),
    o = n(903369),
    l = n(465364),
    u = n(380512),
    c = n(78377),
    d = n(536048),
    _ = n(652215),
    f = n(985018),
    p = n(903957);
let h = i.lazy(() => Promise.all([n.e("55896"), n.e("72756")]).then(n.bind(n, 532255)));
function m(e, t) {
    let {
            hideSimpleEmbedContent: m,
            formatInline: g = !1,
            noStyleAndInteraction: E = !1,
            isInteracting: A = !1,
            allowHeading: I = !1,
            allowList: T = !1,
            allowLinks: y = !1,
            allowDevLinks: S = !1,
            previewLinkTarget: v = !1,
            viewingChannelId: C,
        } = t,
        b = a.m.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        N = (0, d.I)({ location: "useMessageRenderedContent" }),
        [R, O] = i.useState(!1),
        D = i.useCallback((e) => {
            e && O(!0);
        }, []);
    return (
        i.useEffect(() => {
            O(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: f.intl.string(f.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(_.pr7.LOADING)) return (0, u.A)(e);
            if (e.type === _.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, p, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return N.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(c.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: C,
                                  guildId: (0, o.U)(e),
                                  setHasSpoilerEmbeds: D,
                              },
                              children: (0, r.jsx)(h, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: R,
                      hasBailedAst: !1,
                  }
                : (0, l.Ay)(e, {
                      hideSimpleEmbedContent: m,
                      formatInline: g,
                      noStyleAndInteraction: E,
                      isInteracting: A,
                      allowHeading: I,
                      allowList: T,
                      allowLinks: y,
                      allowDevLinks: S,
                      previewLinkTarget: v,
                      viewingChannelId: C,
                      allowGameMentions: b,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            m,
            g,
            E,
            A,
            I,
            T,
            y,
            v,
            S,
            C,
            N.enabled,
            b,
            R,
        ])
    );
}
