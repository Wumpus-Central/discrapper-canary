"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(135621),
    a = n(287809),
    s = n(428262),
    l = n(652215);
function o(e) {
    let { type: t, textValue: n, maxCharacterCount: o, showRemainingCharsAfterCount: d } = e,
        c = (0, i.bG)([a.default], () => s.Ay.canUseIncreasedMessageLength(a.default.getCurrentUser())),
        u = (0, r.A)(),
        _ = n.length,
        E = null != t.upsellLongMessages && _ > l.uvi && c,
        A = null != t.upsellLongMessages && !c,
        h = (o ?? u) - _,
        I = h > (d ?? o ?? u / 10);
    return { isVisible: (E && h >= 0) || !I, showsUpsell: A && !I };
}
