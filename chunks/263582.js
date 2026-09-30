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
        m = n.length,
        h = null != t.upsellLongMessages && m > a.uvi && c,
        p = null != t.upsellLongMessages && !c,
        f = (o ?? d) - m,
        g = f > (u ?? o ?? d / 10);
    return { isVisible: (h && f >= 0) || !g, showsUpsell: p && !g };
}
