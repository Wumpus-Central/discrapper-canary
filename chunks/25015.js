n.d(t, { Z: () => d });
var i = n(192379),
    r = n(905405),
    a = n(626135),
    s = n(937889),
    o = n(761910),
    l = n(981631),
    u = n(388032),
    c = n(617768);
function d(e, t) {
    let { hideSimpleEmbedContent: d, formatInline: f = !1, noStyleAndInteraction: _ = !1, isInteracting: p = !1, allowHeading: h = !1, allowList: m = !1, allowLinks: g = !1, allowDevLinks: E = !1, previewLinkTarget: v = !1, viewingChannelId: y } = t,
        I = (0, r.p)();
    return i.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: u.intl.string(u.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(l.iLy.LOADING)) return (0, o.Z)(e);
        if (e.type === l.uaV.CHANGELOG) {
            let { renderChangelogMessageMarkup: t } = n(55406);
            return t(e, c, {
                track: (e, t) => {
                    a.default.track(e, t);
                }
            });
        }
        return (0, s.ZP)(e, {
            hideSimpleEmbedContent: d,
            formatInline: f,
            noStyleAndInteraction: _,
            isInteracting: p,
            allowHeading: h,
            allowList: m,
            allowLinks: g,
            allowDevLinks: E,
            previewLinkTarget: v,
            shouldFilterKeywords: I,
            viewingChannelId: y
        });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, d, f, _, p, h, m, g, v, I, E, y]);
}
