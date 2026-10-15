n.d(t, { A: () => b });
var s = n(477900),
    i = n(582128),
    a = n(146849),
    d = n(752020),
    o = n(174459),
    r = n(903369),
    l = n(448767),
    u = n(521981),
    c = n(594808),
    h = n(78377),
    p = n(652215),
    m = n(105292),
    A = n(910379);
function b(e, t) {
    let {
            hideSimpleEmbedContent: b = !0,
            formatInline: C = !1,
            noStyleAndInteraction: E = !1,
            allowHeading: f = !1,
            allowList: k = !1,
            allowLinks: g = !1,
            allowDevLinks: S = !1,
            previewLinkTarget: M = !1,
            viewingChannelId: _,
            postProcessor: y,
        } = t,
        j = (0, a.I)({ location: "useMessageRenderedContent" }),
        [v, G] = i.useState(!1),
        w = i.useCallback((e) => {
            e && G(!0);
        }, []);
    i.useEffect(() => {
        G(!1);
    }, [e.content]);
    let x = e.id,
        I = e.channel_id,
        N = (0, r.U)(e),
        O = e.author?.id,
        R = i.useMemo(
            () => ({
                messageId: x,
                channelId: I,
                viewingChannelId: _,
                guildId: N,
                authorId: O,
                setHasSpoilerEmbeds: w,
            }),
            [x, I, _, N, O, w],
        );
    return i.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.pr7.LOADING))
            return { content: (0, s.jsx)(c.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if (e.type === p.lAJ.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(550997);
            return t(e, A, {
                track: (e, t) => {
                    o.default.track(e, t);
                },
            });
        }
        return j.enabled && null == y
            ? {
                  content: (0, s.jsx)(i.Suspense, {
                      children: (0, s.jsx)(h.O.Provider, {
                          value: R,
                          children: (0, s.jsx)(d.A, {
                              content: e.content,
                              allowJumboEmoji: e.type !== p.lAJ.MEDIA_MENTION_MESSAGE,
                              hideSingleLinkContent: b && (0, l.k5)(e.embeds),
                          }),
                      }),
                  }),
                  hasSpoilerEmbeds: v,
                  hasBailedAst: !1,
              }
            : (0, u.Ay)(e, {
                  hideSimpleEmbedContent: b,
                  formatInline: C,
                  noStyleAndInteraction: E,
                  allowHeading: f,
                  allowList: k,
                  allowLinks: g,
                  allowDevLinks: S,
                  previewLinkTarget: M,
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
        f,
        k,
        g,
        M,
        S,
        _,
        y,
        j.enabled,
        v,
        R,
    ]);
}
