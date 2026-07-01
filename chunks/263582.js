"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(135621),
    s = n(287809),
    a = n(428262),
    o = n(652215);
function l(e) {
    let { type: t, textValue: n, maxCharacterCount: l, showRemainingCharsAfterCount: u } = e,
        c = (0, i.bG)([s.default], () => a.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser())),
        d = (0, r.A)(),
        _ = n.length,
        h = null != t.upsellLongMessages && _ > o.uvi && c,
        f = null != t.upsellLongMessages && !c,
        p = (l ?? d) - _,
        E = p > (u ?? l ?? d / 10);
    return (h && p >= 0) || !E || (f && !E);
}
