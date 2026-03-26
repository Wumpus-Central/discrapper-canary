"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(954571),
    r = n(903369),
    a = n(465364),
    o = n(380512),
    u = n(78377),
    c = n(536048),
    d = n(652215),
    m = n(985018),
    h = n(3952);
let g = i.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function A(e, t) {
    let {
            hideSimpleEmbedContent: A,
            formatInline: f = !1,
            noStyleAndInteraction: p = !1,
            isInteracting: x = !1,
            allowHeading: C = !1,
            allowList: N = !1,
            allowLinks: v = !1,
            allowDevLinks: E = !1,
            previewLinkTarget: T = !1,
            viewingChannelId: b,
        } = t,
        _ = (0, c.I)({ location: "useMessageRenderedContent" }),
        [j, I] = i.useState(!1),
        S = i.useCallback((e) => {
            e && I(!0);
        }, []);
    return (
        i.useEffect(() => {
            I(!1);
        }, [e.content]),
        i.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(d.pr7.LOADING)) return (0, o.A)(e);
            if (e.type === d.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, h, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return _.enabled
                ? {
                      content: (0, l.jsx)(i.Suspense, {
                          children: (0, l.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: b,
                                  guildId: (0, r.U)(e),
                                  setHasSpoilerEmbeds: S,
                              },
                              children: (0, l.jsx)(g, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: j,
                      hasBailedAst: !1,
                  }
                : (0, a.Ay)(e, {
                      hideSimpleEmbedContent: A,
                      formatInline: f,
                      noStyleAndInteraction: p,
                      isInteracting: x,
                      allowHeading: C,
                      allowList: N,
                      allowLinks: v,
                      allowDevLinks: E,
                      previewLinkTarget: T,
                      viewingChannelId: b,
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
            C,
            N,
            v,
            T,
            E,
            b,
            _.enabled,
            j,
        ])
    );
}
