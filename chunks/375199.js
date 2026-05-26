t.d(n, { A: () => f });
var s = t(627968),
    a = t(64700),
    d = t(174459),
    r = t(903369),
    i = t(465364),
    l = t(594808),
    o = t(78377);
let u = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c = t(652215),
    h = t(375708),
    p = t(614099);
let m = a.lazy(() =>
    Promise.all([t.e("981"), t.e("7603"), t.e("55896"), t.e("88379"), t.e("72756")]).then(t.bind(t, 532255)),
);
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
        } = n,
        E = (function (e) {
            let { location: n } = e;
            return u.useConfig({ location: n });
        })({ location: "useMessageRenderedContent" }),
        [j, S] = a.useState(!1),
        _ = a.useCallback((e) => {
            e && S(!0);
        }, []);
    return (
        a.useEffect(() => {
            S(!1);
        }, [e.content]),
        a.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: h.intl.string(h.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(c.pr7.LOADING))
                return { content: (0, s.jsx)(l.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === c.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, p, {
                    track: (e, n) => {
                        d.default.track(e, n);
                    },
                });
            }
            return E.enabled
                ? {
                      content: (0, s.jsx)(a.Suspense, {
                          children: (0, s.jsx)(o.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: y,
                                  guildId: (0, r.U)(e),
                                  setHasSpoilerEmbeds: _,
                              },
                              children: (0, s.jsx)(m, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: j,
                      hasBailedAst: !1,
                  }
                : (0, i.Ay)(e, {
                      hideSimpleEmbedContent: f,
                      formatInline: C,
                      noStyleAndInteraction: b,
                      allowHeading: g,
                      allowList: A,
                      allowLinks: k,
                      allowDevLinks: v,
                      previewLinkTarget: x,
                      viewingChannelId: y,
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
            E.enabled,
            j,
        ])
    );
}
