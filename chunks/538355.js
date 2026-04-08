"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(954571),
    a = n(903369),
    r = n(465364),
    o = n(380512),
    u = n(78377),
    c = n(536048),
    d = n(652215),
    m = n(985018),
    g = n(3952);
let h = i.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function A(e, t) {
    let {
            hideSimpleEmbedContent: A,
            formatInline: f = !1,
            noStyleAndInteraction: p = !1,
            isInteracting: x = !1,
            allowHeading: v = !1,
            allowList: C = !1,
            allowLinks: N = !1,
            allowDevLinks: E = !1,
            previewLinkTarget: _ = !1,
            viewingChannelId: I,
        } = t,
        b = (0, c.I)({ location: "useMessageRenderedContent" }),
        [S, T] = i.useState(!1),
        j = i.useCallback((e) => {
            e && T(!0);
        }, []);
    return (
        i.useEffect(() => {
            T(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(d.pr7.LOADING)) return (0, o.A)(e);
            if (e.type === d.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, g, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return b.enabled
                ? {
                      content: (0, l.jsx)(i.Suspense, {
                          children: (0, l.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: I,
                                  guildId: (0, a.U)(e),
                                  setHasSpoilerEmbeds: j,
                              },
                              children: (0, l.jsx)(h, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: S,
                      hasBailedAst: !1,
                  }
                : (0, r.Ay)(e, {
                      hideSimpleEmbedContent: A,
                      formatInline: f,
                      noStyleAndInteraction: p,
                      isInteracting: x,
                      allowHeading: v,
                      allowList: C,
                      allowLinks: N,
                      allowDevLinks: E,
                      previewLinkTarget: _,
                      viewingChannelId: I,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            A,
            f,
            p,
            x,
            v,
            C,
            N,
            _,
            E,
            I,
            b.enabled,
            S,
        ])
    );
}
