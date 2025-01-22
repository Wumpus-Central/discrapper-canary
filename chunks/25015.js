r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(192379),
    a = r(905405),
    o = r(626135),
    s = r(55406),
    l = r(937889),
    u = r(761910),
    c = r(981631),
    d = r(388032),
    f = r(617768);
function p(e, n) {
    let { hideSimpleEmbedContent: r, formatInline: p = !1, noStyleAndInteraction: h = !1, isInteracting: _ = !1, allowHeading: m = !1, allowList: g = !1, allowLinks: E = !1, allowDevLinks: v = !1, previewLinkTarget: y = !1, viewingChannelId: b } = n,
        I = (0, a.p)();
    return i.useMemo(
        () =>
            null != e.customRenderedContent
                ? e.customRenderedContent
                : e.isUnsupported
                  ? {
                        content: d.intl.string(d.t.sWi5ER),
                        hasSpoilerEmbeds: !1
                    }
                  : (e.isCommandType() && 0 === e.content.length) || e.hasFlag(c.iLy.LOADING)
                    ? (0, u.Z)(e)
                    : e.type === c.uaV.CHANGELOG
                      ? (0, s.n)(e, f, {
                            track: (e, n) => {
                                o.default.track(e, n);
                            }
                        })
                      : (0, l.ZP)(e, {
                            hideSimpleEmbedContent: r,
                            formatInline: p,
                            noStyleAndInteraction: h,
                            isInteracting: _,
                            allowHeading: m,
                            allowList: g,
                            allowLinks: E,
                            allowDevLinks: v,
                            previewLinkTarget: y,
                            shouldFilterKeywords: I,
                            viewingChannelId: b
                        }),
        [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, p, h, _, m, g, E, y, I, v, b]
    );
}
