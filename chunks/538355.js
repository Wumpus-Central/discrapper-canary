"use strict";
n.d(t, { A: () => p });
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
    h = n(900543);
let g = i.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function p(e, t) {
    let {
            hideSimpleEmbedContent: p,
            formatInline: A = !1,
            noStyleAndInteraction: f = !1,
            isInteracting: x = !1,
            allowHeading: v = !1,
            allowList: N = !1,
            allowLinks: j = !1,
            allowDevLinks: b = !1,
            previewLinkTarget: C = !1,
            viewingChannelId: E,
        } = t,
        R = (0, c.I)({ location: "useMessageRenderedContent" }),
        [I, T] = i.useState(!1),
        y = i.useCallback((e) => {
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
                return t(e, h, {
                    track: (e, t) => {
                        s.default.track(e, t);
                    },
                });
            }
            return R.enabled
                ? {
                      content: (0, l.jsx)(i.Suspense, {
                          children: (0, l.jsx)(u.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: E,
                                  guildId: (0, r.U)(e),
                                  setHasSpoilerEmbeds: y,
                              },
                              children: (0, l.jsx)(g, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: I,
                      hasBailedAst: !1,
                  }
                : (0, a.Ay)(e, {
                      hideSimpleEmbedContent: p,
                      formatInline: A,
                      noStyleAndInteraction: f,
                      isInteracting: x,
                      allowHeading: v,
                      allowList: N,
                      allowLinks: j,
                      allowDevLinks: b,
                      previewLinkTarget: C,
                      viewingChannelId: E,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            p,
            A,
            f,
            x,
            v,
            N,
            j,
            C,
            b,
            E,
            R.enabled,
            I,
        ])
    );
}
