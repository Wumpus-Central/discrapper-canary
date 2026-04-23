"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {
        highlight_mana_buttons: "Highlight mana buttons",
        highlight_mana_components: "Highlight mana components",
        highlight_void_toggleables: "Highlight toggleable components (Checkbox, VoidRadioGroup, Switch)",
        highlight_void_buttons: "Highlight void buttons",
        use_topic_dividers_in_chat: "Use summary topics as divider content in chat instead of string formatted dates.",
        highlight_redesigned_icons: "Highlight redesigned icons",
        alt_clips_1: "Use alt clip icon 1",
        alt_clips_2: "Use alt clip icon 2",
        shop_disable_cache: "Shop: Disable shop cache",
        shop_include_unpublished: "Shop: Show unpublished items in the shop",
        lottie_hover_multiple_loop: "Lotties - continue playing the hover animation after mouse enter",
        ss01: "Italic - straight forms (K,R,k)",
        ss02: "Italic - straight l",
        ss03: "Italic - full height forms (W,M)",
        ss04: "Italic - alternate figures (3,4,5,6,7,8,9)",
    },
    a = {};
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in s) {
            let n = e?.toggleStates?.[t] ?? !1;
            n && (a[t] = n);
        }
    }
    get(e) {
        return a[e] ?? !1;
    }
    enabled() {
        return a;
    }
    allWithDescriptions() {
        return Object.entries(s).map((e) => {
            let [t, n] = e;
            return [t, a[t] ?? !1, n];
        });
    }
}
let l = new o(r.h, {
    DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: function (e) {
        !1 === e.value ? delete a[e.toggle] : (a[e.toggle] = e.value);
    },
});
