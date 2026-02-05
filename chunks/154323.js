"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let a = {
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
        enable_avatar_decoration_uploads: "Shop: Enable avatar decoration uploads",
        lottie_hover_multiple_loop: "Lotties - continue playing the hover animation after mouse enter",
        ss01: "Italic - straight forms (K,R,k)",
        ss02: "Italic - straight l",
        ss03: "Italic - full height forms (W,M)",
        ss04: "Italic - alternate figures (3,4,5,6,7,8,9)",
        wishlist_user_profile_account_popout_upsell:
            "Show user profile account popout upsell (reset WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL DCF as well)",
    },
    s = {};
function o(e) {
    !1 === e.value ? delete s[e.toggle] : (s[e.toggle] = e.value);
}
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: s };
    }
    initialize(e) {
        for (var t in a) {
            let n = e?.toggleStates?.[t] ?? !1;
            n && (s[t] = n);
        }
    }
    get(e) {
        return s[e] ?? !1;
    }
    enabled() {
        return s;
    }
    allWithDescriptions() {
        return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, s[t] ?? !1, n];
        });
    }
}
let u = new l(i.h, { DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: o });
