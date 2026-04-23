"use strict";
n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    s = n(954571),
    i = n(903369),
    r = n(465364),
    o = n(380512),
    c = n(78377),
    u = n(536048),
    d = n(652215),
    m = n(985018),
    g = n(614099);
let h = a.lazy(() => Promise.all([n.e("369"), n.e("50375")]).then(n.bind(n, 532255)));
function p(e, t) {
    let {
            hideSimpleEmbedContent: p,
            formatInline: A = !1,
            noStyleAndInteraction: _ = !1,
            allowHeading: f = !1,
            allowList: v = !1,
            allowLinks: x = !1,
            allowDevLinks: C = !1,
            previewLinkTarget: I = !1,
            viewingChannelId: N,
        } = t,
        E = (0, u.I)({ location: "useMessageRenderedContent" }),
        [b, T] = a.useState(!1),
        S = a.useCallback((e) => {
            e && T(!0);
        }, []);
    return (
        a.useEffect(() => {
            T(!1);
        }, [e.content]),
        a.useMemo(() => {
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
            return E.enabled
                ? {
                      content: (0, l.jsx)(a.Suspense, {
                          children: (0, l.jsx)(c.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: N,
                                  guildId: (0, i.U)(e),
                                  setHasSpoilerEmbeds: S,
                              },
                              children: (0, l.jsx)(h, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: b,
                      hasBailedAst: !1,
                  }
                : (0, r.Ay)(e, {
                      hideSimpleEmbedContent: p,
                      formatInline: A,
                      noStyleAndInteraction: _,
                      allowHeading: f,
                      allowList: v,
                      allowLinks: x,
                      allowDevLinks: C,
                      previewLinkTarget: I,
                      viewingChannelId: N,
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
            _,
            f,
            v,
            x,
            I,
            C,
            N,
            E.enabled,
            b,
        ])
    );
}
