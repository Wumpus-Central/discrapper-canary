"use strict";
n.d(t, { m: () => l, z: () => o });
var i = n(17928),
    r = n(287809),
    s = n(428262),
    a = n(576761);
function o() {
    return (0, i.bG)([r.default], () => l(r.default.getCurrentUser()));
}
function l(e) {
    return null == e
        ? a.MA.INELIGIBLE
        : s.Ay.canUseMoreQuestOrbs(e)
          ? (0, a._z)(e) === a.Et.CREPE
              ? a.MA.CREPE
              : a.MA.NITRO
          : e?.isFractionalPremiumWithNoStandardSub()
            ? a.MA.INELIGIBLE
            : a.MA.UPSELL;
}
