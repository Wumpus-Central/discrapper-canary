n.d(t, { A: () => m }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(352505),
    s = n(954571),
    o = n(903369),
    l = n(465364),
    c = n(380512),
    u = n(78377),
    d = n(536048),
    f = n(652215),
    p = n(985018),
    _ = n(903957);
let h = i.lazy(() => Promise.all([n.e("55896"), n.e("72756")]).then(n.bind(n, 532255)));
function m(e, t) {
    let {
            hideSimpleEmbedContent: m,
            formatInline: g = !1,
            noStyleAndInteraction: E = !1,
            isInteracting: b = !1,
            allowHeading: y = !1,
            allowList: O = !1,
            allowLinks: A = !1,
            allowDevLinks: v = !1,
            previewLinkTarget: S = !1,
            viewingChannelId: I,
        } = t,
        T = a.m.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        C = (0, d.I)({ location: "useMessageRenderedContent" }),
        [N, R] = i.useState(!1),
        w = i.useCallback((e) => {
            e && R(!0);
        }, []);
    return (
        i.useEffect(() => {
            R(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return {
                    content: p.intl.string(p.t.sWi5EU),
                    hasSpoilerEmbeds: !1,
                    hasBailedAst: !1,
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(f.pr7.LOADING)) return (0, c.A)(e);
            if (e.type === f.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, _, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return C.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: I,
                                  guildId: (0, o.U)(e),
                                  setHasSpoilerEmbeds: w,
                              },
                              children: (0, r.jsx)(h, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: N,
                      hasBailedAst: !1,
                  }
                : (0, l.Ay)(e, {
                      hideSimpleEmbedContent: m,
                      formatInline: g,
                      noStyleAndInteraction: E,
                      isInteracting: b,
                      allowHeading: y,
                      allowList: O,
                      allowLinks: A,
                      allowDevLinks: v,
                      previewLinkTarget: S,
                      viewingChannelId: I,
                      allowGameMentions: T,
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
            b,
            y,
            O,
            A,
            S,
            v,
            I,
            C.enabled,
            T,
            N,
        ])
    );
}
