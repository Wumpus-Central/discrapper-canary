n.d(t, { A: () => o });
var l = n(17928),
    i = n(135621),
    r = n(287809),
    s = n(158045),
    a = n(652215);
function o(e) {
    let { type: t, textValue: n, maxCharacterCount: o, showRemainingCharsAfterCount: u } = e,
        c = (0, l.bG)([r.default], () => s.Ay.canUseIncreasedMessageLength(r.default.getCurrentUser())),
        d = (0, i.A)(),
        h = n.length,
        m = null != t.upsellLongMessages && h > a.uvi && c,
        p = null != t.upsellLongMessages && !c,
        f = (o ?? d) - h,
        g = f > (u ?? o ?? d / 10);
    return { isVisible: (m && f >= 0) || !g, showsUpsell: p && !g };
}
