n.d(t, { m: () => o, z: () => l });
var i = n(17928),
    r = n(287809),
    a = n(158045),
    s = n(576761);
function l() {
    return (0, i.bG)([r.default], () => o(r.default.getCurrentUser()));
}
function o(e) {
    return null == e
        ? s.MA.INELIGIBLE
        : a.Ay.canUseMoreQuestOrbs(e)
          ? (0, s._z)(e) === s.Et.CREPE
              ? s.MA.CREPE
              : s.MA.NITRO
          : e?.isFractionalPremiumWithNoStandardSub()
            ? s.MA.INELIGIBLE
            : s.MA.UPSELL;
}
