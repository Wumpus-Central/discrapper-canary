"use strict";
n.d(t, { A: () => h });
var s = n(627968),
    a = n(64700),
    l = n(954571),
    r = n(903369),
    i = n(465364),
    c = n(594808),
    o = n(78377);
let u = (0, n(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var d = n(652215),
    m = n(985018),
    p = n(614099);
let g = a.lazy(() => Promise.all([n.e("369"), n.e("72756")]).then(n.bind(n, 532255)));
function h(e, t) {
    let {
            hideSimpleEmbedContent: h,
            formatInline: f = !1,
            noStyleAndInteraction: A = !1,
            allowHeading: E = !1,
            allowList: x = !1,
            allowLinks: R = !1,
            allowDevLinks: C = !1,
            previewLinkTarget: N = !1,
            viewingChannelId: k,
        } = t,
        T = (function (e) {
            let { location: t } = e;
            return u.useConfig({ location: t });
        })({ location: "useMessageRenderedContent" }),
        [b, I] = a.useState(!1),
        y = a.useCallback((e) => {
            e && I(!0);
        }, []);
    return (
        a.useEffect(() => {
            I(!1);
        }, [e.content]),
        a.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported) return { content: m.intl.string(m.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(d.pr7.LOADING))
                return { content: (0, s.jsx)(c.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === d.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: t } = n(550997);
                return t(e, p, {
                    track: (e, t) => {
                        l.default.track(e, t);
                    },
                });
            }
            return T.enabled
                ? {
                      content: (0, s.jsx)(a.Suspense, {
                          children: (0, s.jsx)(o.O.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: k,
                                  guildId: (0, r.U)(e),
                                  setHasSpoilerEmbeds: y,
                              },
                              children: (0, s.jsx)(g, { content: e.content }),
                          }),
                      }),
                      hasSpoilerEmbeds: b,
                      hasBailedAst: !1,
                  }
                : (0, i.Ay)(e, {
                      hideSimpleEmbedContent: h,
                      formatInline: f,
                      noStyleAndInteraction: A,
                      allowHeading: E,
                      allowList: x,
                      allowLinks: R,
                      allowDevLinks: C,
                      previewLinkTarget: N,
                      viewingChannelId: k,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            h,
            f,
            A,
            E,
            x,
            R,
            N,
            C,
            k,
            T.enabled,
            b,
        ])
    );
}
