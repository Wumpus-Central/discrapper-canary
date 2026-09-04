t.d(n, { A: () => f });
var a = t(477900),
    s = t(582128);
let d = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var r = t(174459),
    i = t(903369),
    l = t(521981),
    o = t(594808),
    u = t(78377),
    c = t(652215),
    h = t(375708),
    p = t(910379);
let m = s.lazy(() => Promise.all([t.e("902654"), t.e("927719"), t.e("382173"), t.e("672756")]).then(t.bind(t, 532255)));
function f(e, n) {
    let {
            hideSimpleEmbedContent: f,
            formatInline: C = !1,
            noStyleAndInteraction: b = !1,
            allowHeading: g = !1,
            allowList: A = !1,
            allowLinks: k = !1,
            allowDevLinks: v = !1,
            previewLinkTarget: x = !1,
            viewingChannelId: y,
            postProcessor: E,
        } = n,
        j = (function (e) {
            let { location: n } = e;
            return d.useConfig({ location: n });
        })({ location: "useMessageRenderedContent" }),
        [I, S] = s.useState(!1),
        _ = s.useCallback((e) => {
            e && S(!0);
        }, []);
    return (
        s.useEffect(() => {
            S(!1);
        }, [e.content]),
        s.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: h.intl.string(h.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(c.pr7.LOADING))
                return { content: (0, a.jsx)(o.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === c.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, p, {
                    track: (e, n) => {
                        r.default.track(e, n);
                    },
                });
            }
            return j.enabled && null == E
                ? {
                      content: (0, a.jsx)(s.Suspense, {
                          children: (0, a.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: y,
                                  guildId: (0, i.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: _,
                              },
                              children: (0, a.jsx)(m, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: I,
                      hasBailedAst: !1,
                  }
                : (0, l.Ay)(e, {
                      hideSimpleEmbedContent: f,
                      formatInline: C,
                      noStyleAndInteraction: b,
                      allowHeading: g,
                      allowList: A,
                      allowLinks: k,
                      allowDevLinks: v,
                      previewLinkTarget: x,
                      viewingChannelId: y,
                      allowGameMentions: !0,
                      postProcessor: E,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            f,
            C,
            b,
            g,
            A,
            k,
            x,
            v,
            y,
            E,
            j.enabled,
            I,
        ])
    );
}
