n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(627050),
    o = n(905405),
    s = n(626135),
    l = n(750030),
    c = n(937889),
    u = n(761910),
    d = n(488968),
    f = n(479398),
    p = n(981631),
    _ = n(388032),
    m = n(491068);
let h = i.lazy(() => Promise.all([n.e("30385"), n.e("85831")]).then(n.bind(n, 120314)));
function g(e, t) {
    let {
            hideSimpleEmbedContent: g,
            formatInline: E = !1,
            noStyleAndInteraction: b = !1,
            isInteracting: y = !1,
            allowHeading: O = !1,
            allowList: v = !1,
            allowLinks: S = !1,
            allowDevLinks: I = !1,
            previewLinkTarget: T = !1,
            viewingChannelId: A,
        } = t,
        C = (0, o.p)(),
        N = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        P = (0, f.o)({ location: "useMessageRenderedContent" }),
        [R, w] = i.useState(!1),
        D = i.useCallback((e) => {
            e && w(!0);
        }, []);
    return (
        i.useEffect(() => {
            w(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return {
                    content: _.intl.string(_.t.sWi5EU),
                    hasSpoilerEmbeds: !1,
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.iLy.LOADING)) return (0, u.Z)(e);
            if (e.type === p.uaV.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(55406);
                return t(e, m, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return P.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(d.v.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: A,
                                  guildId: (0, l.k)(e),
                                  setHasSpoilerEmbeds: D,
                              },
                              children: (0, r.jsx)(h, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: R,
                  }
                : (0, c.ZP)(e, {
                      hideSimpleEmbedContent: g,
                      formatInline: E,
                      noStyleAndInteraction: b,
                      isInteracting: y,
                      allowHeading: O,
                      allowList: v,
                      allowLinks: S,
                      allowDevLinks: I,
                      previewLinkTarget: T,
                      shouldFilterKeywords: C,
                      viewingChannelId: A,
                      allowGameMentions: N,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            g,
            E,
            b,
            y,
            O,
            v,
            S,
            T,
            C,
            I,
            A,
            P.enabled,
            N,
            R,
        ])
    );
}
