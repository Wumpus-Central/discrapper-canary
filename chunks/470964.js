t.d(n, { A: () => b });
var s = t(477900),
    d = t(582128),
    a = t(146849),
    i = t(752020),
    o = t(174459),
    r = t(903369),
    l = t(448767),
    u = t(521981),
    c = t(594808),
    h = t(78377),
    p = t(652215),
    m = t(105292),
    A = t(910379);
function b(e, n) {
    let {
            hideSimpleEmbedContent: b = !0,
            formatInline: C = !1,
            noStyleAndInteraction: E = !1,
            allowHeading: g = !1,
            allowList: f = !1,
            allowLinks: k = !1,
            allowDevLinks: I = !1,
            previewLinkTarget: S = !1,
            viewingChannelId: _,
            postProcessor: y,
        } = n,
        M = (0, a.I)({ location: "useMessageRenderedContent" }),
        [j, v] = d.useState(!1),
        G = d.useCallback((e) => {
            e && v(!0);
        }, []);
    return (
        d.useEffect(() => {
            v(!1);
        }, [e.content]),
        d.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.pr7.LOADING))
                return { content: (0, s.jsx)(c.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === p.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, A, {
                    track: (e, n) => {
                        o.default.track(e, n);
                    },
                });
            }
            return M.enabled && null == y
                ? {
                      content: (0, s.jsx)(d.Suspense, {
                          children: (0, s.jsx)(h.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: _,
                                  guildId: (0, r.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: G,
                              },
                              children: (0, s.jsx)(i.A, {
                                  content: e.content,
                                  allowJumboEmoji: e.type !== p.lAJ.MEDIA_MENTION_MESSAGE,
                                  hideSingleLinkContent: b && (0, l.k5)(e.embeds),
                              }),
                          }),
                      }),
                      hasSpoilerEmbeds: j,
                      hasBailedAst: !1,
                  }
                : (0, u.Ay)(e, {
                      hideSimpleEmbedContent: b,
                      formatInline: C,
                      noStyleAndInteraction: E,
                      allowHeading: g,
                      allowList: f,
                      allowLinks: k,
                      allowDevLinks: I,
                      previewLinkTarget: S,
                      viewingChannelId: _,
                      allowGameMentions: !0,
                      postProcessor: y,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            b,
            C,
            E,
            g,
            f,
            k,
            S,
            I,
            _,
            y,
            M.enabled,
            j,
        ])
    );
}
