n.d(t, { Z: () => d });
var r = n(192379),
    o = n(905405),
    a = n(626135),
    i = n(937889),
    s = n(761910),
    c = n(981631),
    l = n(388032),
    u = n(875231);
function d(e, t) {
    let { hideSimpleEmbedContent: d, formatInline: p = !1, noStyleAndInteraction: g = !1, isInteracting: m = !1, allowHeading: f = !1, allowList: _ = !1, allowLinks: b = !1, allowDevLinks: h = !1, previewLinkTarget: y = !1, viewingChannelId: v } = t,
        O = (0, o.p)();
    return r.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: l.NW.string(l.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(c.iLy.LOADING)) return (0, s.Z)(e);
        if (e.type === c.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, u, {
                track: (e, t) => {
                    a.default.track(e, t);
                }
            });
        }
        return (0, i.ZP)(e, {
            hideSimpleEmbedContent: d,
            formatInline: p,
            noStyleAndInteraction: g,
            isInteracting: m,
            allowHeading: f,
            allowList: _,
            allowLinks: b,
            allowDevLinks: h,
            previewLinkTarget: y,
            shouldFilterKeywords: O,
            viewingChannelId: v
        });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, d, p, g, m, f, _, b, y, O, h, v]);
}
