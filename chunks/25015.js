r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(192379),
    a = r(905405),
    s = r(626135),
    o = r(55406),
    l = r(937889),
    u = r(761910),
    c = r(981631),
    d = r(388032),
    f = r(617768);
function _(e, n) {
    let { hideSimpleEmbedContent: r, formatInline: _ = !1, noStyleAndInteraction: h = !1, isInteracting: p = !1, allowHeading: m = !1, allowList: g = !1, allowLinks: E = !1, allowDevLinks: v = !1, previewLinkTarget: I = !1, viewingChannelId: T } = n,
        b = (0, a.p)();
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
                      ? (0, o.n)(e, f, {
                            track: (e, n) => {
                                s.default.track(e, n);
                            }
                        })
                      : (0, l.ZP)(e, {
                            hideSimpleEmbedContent: r,
                            formatInline: _,
                            noStyleAndInteraction: h,
                            isInteracting: p,
                            allowHeading: m,
                            allowList: g,
                            allowLinks: E,
                            allowDevLinks: v,
                            previewLinkTarget: I,
                            shouldFilterKeywords: b,
                            viewingChannelId: T
                        }),
        [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, _, h, p, m, g, E, I, b, v, T]
    );
}
