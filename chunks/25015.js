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
    _ = n(981631),
    p = n(388032),
    h = n(453116);
let m = i.lazy(() => Promise.all([n.e("64098"), n.e("85831")]).then(n.bind(n, 120314)));
function g(e, t) {
    let {
            hideSimpleEmbedContent: g,
            formatInline: E = !1,
            noStyleAndInteraction: b = !1,
            isInteracting: y = !1,
            allowHeading: O = !1,
            allowList: v = !1,
            allowLinks: I = !1,
            allowDevLinks: T = !1,
            previewLinkTarget: S = !1,
            viewingChannelId: A,
        } = t,
        C = (0, o.p)(),
        N = a.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        R = (0, f.o)({ location: "useMessageRenderedContent" }),
        [P, D] = i.useState(!1),
        w = i.useCallback((e) => {
            e && D(!0);
        }, []);
    return (
        i.useEffect(() => {
            D(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return {
                    content: p.intl.string(p.t.sWi5EU),
                    hasSpoilerEmbeds: !1,
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(_.iLy.LOADING)) return (0, u.Z)(e);
            if (e.type === _.uaV.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(55406);
                return t(e, h, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return R.enabled
                ? {
                      content: (0, r.jsx)(i.Suspense, {
                          children: (0, r.jsx)(d.v.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: A,
                                  guildId: (0, l.k)(e),
                                  setHasSpoilerEmbeds: w,
                              },
                              children: (0, r.jsx)(m, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: P,
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
            I,
            S,
            C,
            T,
            A,
            R.enabled,
            N,
            P,
        ])
    );
}
