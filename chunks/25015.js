n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(627050),
    i = n(905405),
    a = n(626135),
    s = n(750030),
    c = n(937889),
    u = n(761910),
    d = n(488968),
    p = n(479398),
    m = n(981631),
    g = n(388032),
    f = n(491068);
let b = l.lazy(() => Promise.all([n.e("51889"), n.e("85831")]).then(n.bind(n, 120314)));
function h(e, t) {
    let {
            hideSimpleEmbedContent: h,
            formatInline: y = !1,
            noStyleAndInteraction: O = !1,
            isInteracting: v = !1,
            allowHeading: j = !1,
            allowList: P = !1,
            allowLinks: x = !1,
            allowDevLinks: w = !1,
            previewLinkTarget: C = !1,
            viewingChannelId: S,
        } = t,
        E = (0, i.p)(),
        N = o.d.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        R = (0, p.o)({ location: "useMessageRenderedContent" }),
        [T, Z] = l.useState(!1),
        I = l.useCallback((e) => {
            e && Z(!0);
        }, []);
    return (
        l.useEffect(() => {
            Z(!1);
        }, [e.content]),
        l.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return {
                    content: g.intl.string(g.t.sWi5ER),
                    hasSpoilerEmbeds: !1,
                };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(m.iLy.LOADING)) return (0, u.Z)(e);
            if (e.type === m.uaV.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(55406);
                return t(e, f, {
                    track: (e, t) => {
                        a.default.track(e, t);
                    },
                });
            }
            return R.enabled
                ? {
                      content: (0, r.jsx)(l.Suspense, {
                          children: (0, r.jsx)(d.v.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: S,
                                  guildId: (0, s.k)(e),
                                  setHasSpoilerEmbeds: I,
                              },
                              children: (0, r.jsx)(b, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: T,
                  }
                : (0, c.ZP)(e, {
                      hideSimpleEmbedContent: h,
                      formatInline: y,
                      noStyleAndInteraction: O,
                      isInteracting: v,
                      allowHeading: j,
                      allowList: P,
                      allowLinks: x,
                      allowDevLinks: w,
                      previewLinkTarget: C,
                      shouldFilterKeywords: E,
                      viewingChannelId: S,
                      allowGameMentions: N,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            h,
            y,
            O,
            v,
            j,
            P,
            x,
            C,
            E,
            w,
            S,
            R.enabled,
            N,
            T,
        ])
    );
}
