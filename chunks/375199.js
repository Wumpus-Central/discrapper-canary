n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(954571),
    a = n(903369),
    l = n(465364),
    o = n(594808),
    c = n(78377);
let d = (0, n(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var u = n(652215),
    m = n(985018),
    h = n(614099);
let p = r.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function f(e, t) {
    let {
            hideSimpleEmbedContent: f,
            formatInline: E = !1,
            noStyleAndInteraction: A = !1,
            allowHeading: g = !1,
            allowList: C = !1,
            allowLinks: S = !1,
            allowDevLinks: T = !1,
            previewLinkTarget: N = !1,
            viewingChannelId: x,
        } = t,
        _ = (function (e) {
            let { location: t } = e;
            return d.useConfig({ location: t });
        })({ location: "useMessageRenderedContent" }),
        [I, O] = r.useState(!1),
        j = r.useCallback((e) => {
            e && O(!0);
        }, []);
    return (
        r.useEffect(() => {
            O(!1);
        }, [e.content]),
        r.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(u.pr7.LOADING))
                return { content: (0, i.jsx)(o.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === u.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, h, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return _.enabled
                ? {
                      content: (0, i.jsx)(r.Suspense, {
                          children: (0, i.jsx)(c.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: x,
                                  guildId: (0, a.U)(e),
                                  setHasSpoilerEmbeds: j,
                              },
                              children: (0, i.jsx)(p, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: I,
                      hasBailedAst: !1,
                  }
                : (0, l.Ay)(e, {
                      hideSimpleEmbedContent: f,
                      formatInline: E,
                      noStyleAndInteraction: A,
                      allowHeading: g,
                      allowList: C,
                      allowLinks: S,
                      allowDevLinks: T,
                      previewLinkTarget: N,
                      viewingChannelId: x,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            f,
            E,
            A,
            g,
            C,
            S,
            N,
            T,
            x,
            _.enabled,
            I,
        ])
    );
}
