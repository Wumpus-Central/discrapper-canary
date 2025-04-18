n.d(t, { Z: () => d });
var r = n(192379),
    o = n(905405),
    a = n(626135),
    i = n(937889),
    s = n(761910),
    l = n(981631),
    c = n(388032),
    u = n(534664);
function d(e, t) {
    let { hideSimpleEmbedContent: d, formatInline: p = !1, noStyleAndInteraction: g = !1, isInteracting: m = !1, allowHeading: f = !1, allowList: b = !1, allowLinks: h = !1, allowDevLinks: y = !1, previewLinkTarget: _ = !1, viewingChannelId: O } = t,
        v = (0, o.p)();
    return r.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported)
            return {
                content: c.NW.string(c.t.sWi5ER),
                hasSpoilerEmbeds: !1
            };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(l.iLy.LOADING)) return (0, s.Z)(e);
        if (e.type === l.uaV.CHANGELOG) {
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
            allowList: b,
            allowLinks: h,
            allowDevLinks: y,
            previewLinkTarget: _,
            shouldFilterKeywords: v,
            viewingChannelId: O
        });
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, d, p, g, m, f, b, h, _, v, y, O]);
}
