n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(627050),
    o = n(626135),
    s = n(750030),
    l = n(937889),
    c = n(761910),
    u = n(488968),
    d = n(479398),
    f = n(981631),
    p = n(388032),
    _ = n(653198);
let m = i.lazy(() => Promise.all([n.e("30385"), n.e("85831")]).then(n.bind(n, 120314)));
function h(e, t) {
    let {
            hideSimpleEmbedContent: h,
            formatInline: g = !1,
            noStyleAndInteraction: E = !1,
            isInteracting: b = !1,
            allowHeading: y = !1,
            allowList: O = !1,
            allowLinks: v = !1,
            allowDevLinks: S = !1,
            previewLinkTarget: I = !1,
            viewingChannelId: T,
        } = t,
        C = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        A = (0, d.o)({ location: "useMessageRenderedContent" }),
        [N, P] = i.useState(!1),
        R = i.useCallback((e) => {
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
                    content: p.intl.string(p.t.sWi5EU),
                    hasSpoilerEmbeds: !1,
                    hasBailedAst: !1,
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(f.iLy.LOADING)) return (0, c.Z)(e);
            if (e.type === f.uaV.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(55406);
                return t(e, _, {
                    track: (e, t) => {
                        o.default.track(e, t);
                    },
                });
            }
            return A.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(u.v.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: T,
                                  guildId: (0, s.k)(e),
                                  setHasSpoilerEmbeds: R,
                              },
                              children: (0, r.jsx)(m, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: N,
                      hasBailedAst: !1,
                  }
                : (0, l.ZP)(e, {
                      hideSimpleEmbedContent: h,
                      formatInline: g,
                      noStyleAndInteraction: E,
                      isInteracting: b,
                      allowHeading: y,
                      allowList: O,
                      allowLinks: v,
                      allowDevLinks: S,
                      previewLinkTarget: I,
                      viewingChannelId: T,
                      allowGameMentions: C,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            h,
            g,
            E,
            b,
            y,
            O,
            v,
            I,
            S,
            T,
            A.enabled,
            C,
            N,
        ])
    );
}
