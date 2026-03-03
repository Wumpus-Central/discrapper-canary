"use strict";
n.d(t, { rn: () => s, vz: () => i });
var r = n(945810),
    i = (function (e) {
        return (
            (e.FLOATING = "FLOATING"), (e.FLOATING_REDESIGNED = "FLOATING_REDESIGNED"), (e.BOTTOM_BAR = "BOTTOM_BAR"), e
        );
    })({});
let s = (0, r.mj)({
    name: "2025-12-soundboard-upsell-redesign",
    kind: "user",
    defaultConfig: {
        upsellDisplayType: "FLOATING",
        floatingUpsellAlwaysVisible: !1,
        subscribeButtonVariant: "expressive",
        reorderDefaultSounds: !1,
        enablePinnedDefaults: !1,
        enableSoundPreview: !1,
        showUpsellWithoutLockedSounds: !1,
    },
    variations: {
        1: {
            upsellDisplayType: "FLOATING_REDESIGNED",
            floatingUpsellAlwaysVisible: !0,
            subscribeButtonVariant: "primary",
            reorderDefaultSounds: !0,
            enablePinnedDefaults: !0,
            enableSoundPreview: !0,
            showUpsellWithoutLockedSounds: !1,
        },
        2: {
            upsellDisplayType: "BOTTOM_BAR",
            floatingUpsellAlwaysVisible: !0,
            subscribeButtonVariant: "expressive",
            reorderDefaultSounds: !0,
            enablePinnedDefaults: !0,
            enableSoundPreview: !0,
            showUpsellWithoutLockedSounds: !1,
        },
    },
});
