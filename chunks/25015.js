n.d(t, { Z: () => f });
var r = n(200651),
    o = n(192379),
    a = n(905405),
    i = n(626135),
    l = n(937889),
    s = n(761910),
    c = n(488968),
    u = n(479398),
    d = n(981631),
    p = n(388032),
    g = n(875231);
let m = o.lazy(() => n.e('85831').then(n.bind(n, 120314)));
function f(e, t) {
    let { hideSimpleEmbedContent: f, formatInline: b = !1, noStyleAndInteraction: h = !1, isInteracting: _ = !1, allowHeading: y = !1, allowList: v = !1, allowLinks: O = !1, allowDevLinks: j = !1, previewLinkTarget: x = !1, viewingChannelId: C } = t,
        P = (0, a.p)(),
        T = (0, u.o)({ location: 'useMessageRenderedContent' });
    return o.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: p.intl.string(p.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(d.iLy.LOADING)) return (0, s.Z)(e);
        if (e.type === d.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, g, {
                track: (e, t) => {
                    i.default.track(e, t);
                }
            });
        }
        if (T.enabled) {
            var t;
            return {
                content: (0, r.jsx)(o.Suspense, {
                    children: (0, r.jsx)(c.v.Provider, {
                        value: {
                            messageId: e.id,
                            channelId: e.channel_id,
                            viewingChannelId: C,
                            guildId: null != (t = e.getGuildId()) ? t : void 0
                        },
                        children: (0, r.jsx)(m, { content: e.content })
                    })
                }),
                hasSpoilerEmbeds: !1
            };
        }
        return (0, l.ZP)(e, {
            hideSimpleEmbedContent: f,
            formatInline: b,
            noStyleAndInteraction: h,
            isInteracting: _,
            allowHeading: y,
            allowList: v,
            allowLinks: O,
            allowDevLinks: j,
            previewLinkTarget: x,
            shouldFilterKeywords: P,
            viewingChannelId: C
        });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, f, b, h, _, y, v, O, x, P, j, C, T.enabled]);
}
