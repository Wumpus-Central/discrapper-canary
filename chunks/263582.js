n.d(t, { A: () => o });
var l = n(17928),
    i = n(135621),
    s = n(287809),
    r = n(158045),
    a = n(652215);
function o(e) {
    let { type: t, textValue: n, maxCharacterCount: o, showRemainingCharsAfterCount: u } = e,
        c = (0, l.bG)([s.default], () => r.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser())),
        d = (0, i.A)(),
        h = n.length,
        m = null != t.upsellLongMessages && h > a.uvi && c,
        f = null != t.upsellLongMessages && !c,
        p = (o ?? d) - h,
        g = p > (u ?? o ?? d / 10);
    return { isVisible: (m && p >= 0) || !g, showsUpsell: f && !g };
}
