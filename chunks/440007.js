n.d(t, { Op: () => l });
var a = n(945810),
    i = n(654487);
let s = (0, a.mj)({
    name: "2026-02-quest-bar-expressive-button",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: { 1: { enabled: !0, variant: 1 } },
});
function l() {
    let { variant: e } = s.useConfig({ location: i.rE.QUESTS_BAR });
    return {
        primaryCtaButtonVariant: (function (e) {
            switch (e) {
                case 0:
                    return "primary";
                case 1:
                    return "expressive";
            }
        })(e),
    };
}
