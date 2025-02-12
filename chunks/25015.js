n.d(t, { Z: () => d });
var a = n(192379),
    o = n(905405),
    i = n(626135),
    r = n(937889),
    s = n(761910),
    l = n(981631),
    c = n(388032),
    u = n(702470);
function d(e, t) {
    let { hideSimpleEmbedContent: d, formatInline: p = !1, noStyleAndInteraction: m = !1, isInteracting: g = !1, allowHeading: _ = !1, allowList: h = !1, allowLinks: f = !1, allowDevLinks: C = !1, previewLinkTarget: x = !1, viewingChannelId: v } = t,
        b = (0, o.p)();
    return a.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: c.intl.string(c.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(l.iLy.LOADING)) return (0, s.Z)(e);
        if (e.type === l.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, u, {
                track: (e, t) => {
                    i.default.track(e, t);
                }
            });
        }
        return (0, r.ZP)(e, {
            hideSimpleEmbedContent: d,
            formatInline: p,
            noStyleAndInteraction: m,
            isInteracting: g,
            allowHeading: _,
            allowList: h,
            allowLinks: f,
            allowDevLinks: C,
            previewLinkTarget: x,
            shouldFilterKeywords: b,
            viewingChannelId: v
        });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, d, p, m, g, _, h, f, x, b, C, v]);
}
