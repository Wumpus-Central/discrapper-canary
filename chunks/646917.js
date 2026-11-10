var i = n(855986),
    r = n(287809),
    a = n(448645),
    s = n(576761);
function l(e) {
    return null == e
        ? s.MA.INELIGIBLE
        : a.Ay.canUseMoreQuestOrbs(e)
          ? (0, s._z)(e) === s.Et.XBOX_GAME_PASS
              ? s.MA.XBOX_GAME_PASS
              : s.MA.NITRO
          : e?.isFractionalPremiumWithNoStandardSub()
            ? s.MA.INELIGIBLE
            : s.MA.UPSELL;
}
n.d(
    t,
    {},
    {
        m: l,
        z: function () {
            return (0, i.bG)([r.default], () => l(r.default.getCurrentUser()));
        },
    },
);
