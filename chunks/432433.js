t.d(n, { A: () => b });
var a = t(477900),
    s = t(582128);
let d = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var l = t(174459),
    r = t(903369),
    i = t(521981),
    o = t(594808),
    u = t(78377),
    c = t(652215),
    h = t(375708),
    m = t(910379);
let p = s.lazy(() => Promise.all([t.e("902654"), t.e("927719"), t.e("147616"), t.e("778422")]).then(t.bind(t, 284565)));
function b(e, n) {
    let {
            hideSimpleEmbedContent: b,
            formatInline: f = !1,
            noStyleAndInteraction: C = !1,
            allowHeading: A = !1,
            allowList: g = !1,
            allowLinks: E = !1,
            allowDevLinks: k = !1,
            previewLinkTarget: v = !1,
            viewingChannelId: y,
            postProcessor: I,
        } = n,
        S = (function (e) {
            let { location: n } = e;
            return d.useConfig({ location: n });
        })({ location: "useMessageRenderedContent" }),
        [_, j] = s.useState(!1),
        x = s.useCallback((e) => {
            e && j(!0);
        }, []);
    return (
        s.useEffect(() => {
            j(!1);
        }, [e.content]),
        s.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: h.intl.string(h.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(c.pr7.LOADING))
                return { content: (0, a.jsx)(o.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === c.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, m, {
                    track: (e, n) => {
                        l.default.track(e, n);
                    },
                });
            }
            return S.enabled && null == I
                ? {
                      content: (0, a.jsx)(s.Suspense, {
                          children: (0, a.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: y,
                                  guildId: (0, r.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: x,
                              },
                              children: (0, a.jsx)(p, {
                                  content: e.content,
                                  allowJumboEmoji: e.type !== c.lAJ.MEDIA_MENTION_MESSAGE,
                              }),
                          }),
                      }),
                      hasSpoilerEmbeds: _,
                      hasBailedAst: !1,
                  }
                : (0, i.Ay)(e, {
                      hideSimpleEmbedContent: b,
                      formatInline: f,
                      noStyleAndInteraction: C,
                      allowHeading: A,
                      allowList: g,
                      allowLinks: E,
                      allowDevLinks: k,
                      previewLinkTarget: v,
                      viewingChannelId: y,
                      allowGameMentions: !0,
                      postProcessor: I,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            b,
            f,
            C,
            A,
            g,
            E,
            v,
            k,
            y,
            I,
            S.enabled,
            _,
        ])
    );
}
