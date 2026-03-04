"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    s = n(64700),
    i = n(352505),
    r = n(954571),
    a = n(903369),
    o = n(465364),
    u = n(380512),
    c = n(78377),
    d = n(536048),
    m = n(652215),
    h = n(985018),
    g = n(903957);
let p = s.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function A(e, t) {
    let {
            hideSimpleEmbedContent: A,
            formatInline: f = !1,
            noStyleAndInteraction: x = !1,
            isInteracting: v = !1,
            allowHeading: N = !1,
            allowList: b = !1,
            allowLinks: j = !1,
            allowDevLinks: C = !1,
            previewLinkTarget: E = !1,
            viewingChannelId: R,
        } = t,
        I = i.m.useExperiment({ location: "useMessageRenderedContent" }).enabled,
        T = (0, d.I)({ location: "useMessageRenderedContent" }),
        [y, _] = s.useState(!1),
        S = s.useCallback((e) => {
            e && _(!0);
        }, []);
    return (
        s.useEffect(() => {
            _(!1);
        }, [e.content]),
        s.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: h.intl.string(h.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(m.pr7.LOADING)) return (0, u.A)(e);
            if (e.type === m.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, g, {
                    track: (e, t) => {
                        r.default.track(e, t);
                    },
                });
            }
            return T.enabled
                ? {
                      content: (0, l.jsx)(s.Suspense, {
                          children: (0, l.jsx)(c.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: R,
                                  guildId: (0, a.U)(e),
                                  setHasSpoilerEmbeds: S,
                              },
                              children: (0, l.jsx)(p, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: y,
                      hasBailedAst: !1,
                  }
                : (0, o.Ay)(e, {
                      hideSimpleEmbedContent: A,
                      formatInline: f,
                      noStyleAndInteraction: x,
                      isInteracting: v,
                      allowHeading: N,
                      allowList: b,
                      allowLinks: j,
                      allowDevLinks: C,
                      previewLinkTarget: E,
                      viewingChannelId: R,
                      allowGameMentions: I,
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
            x,
            v,
            N,
            b,
            j,
            E,
            C,
            R,
            T.enabled,
            I,
            y,
        ])
    );
}
