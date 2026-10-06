n.d(t, { A: () => o });
var l = n(17928),
    i = n(135621),
    r = n(287809),
    s = n(927578),
    a = n(652215);
function o(e) {
    let { type: t, textValue: n, maxCharacterCount: o, showRemainingCharsAfterCount: u } = e,
        c = (0, l.bG)([r.default], () => s.Ay.canUseIncreasedMessageLength(r.default.getCurrentUser())),
        d = (0, i.A)(),
        h = n.length,
        m = null != t.upsellLongMessages && h > a.uvi && c,
        f = null != t.upsellLongMessages && !c,
        p = (o ?? d) - h,
        g = p > (u ?? o ?? d / 10);
    return { isVisible: (m && p >= 0) || !g, showsUpsell: f && !g };
}
