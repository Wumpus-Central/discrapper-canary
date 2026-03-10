n.d(t, { Op: () => o, s5: () => r, tL: () => l });
var a,
    i = n(945810),
    s = n(654487),
    l =
        (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"),
        (a[(a.EXPRESSIVE_BUTTON_ONLY = 1)] = "EXPRESSIVE_BUTTON_ONLY"),
        (a[(a.LEARN_MORE_CTA_ONLY = 2)] = "LEARN_MORE_CTA_ONLY"),
        (a[(a.COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON = 3)] = "COMBINE_LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON"),
        (a[(a.INFO_ICON = 4)] = "INFO_ICON"),
        a);
let r = (0, i.mj)({
    name: "2026-03-learn-more-cta-and-expressive-button",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: {
        1: { enabled: !0, variant: 1 },
        2: { enabled: !0, variant: 2 },
        3: { enabled: !0, variant: 3 },
        4: { enabled: !0, variant: 4 },
    },
});
function o() {
    let { variant: e } = r.useConfig({ location: s.rE.QUESTS_BAR });
    return {
        primaryCtaButtonVariant: (function (e) {
            switch (e) {
                case 0:
                case 2:
                case 4:
                    return "primary";
                case 1:
                case 3:
                    return "expressive";
            }
        })(e),
    };
}
