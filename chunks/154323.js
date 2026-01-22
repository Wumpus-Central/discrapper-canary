n.d(t, { A: () => d }), n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {
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
    l = {};
function c(e) {
    !1 === e.value ? delete l[e.toggle] : (l[e.toggle] = e.value);
}
class u extends (r = i.Ay.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in o) {
            var n, r;
            let i = null != (n = null == e || null == (r = e.toggleStates) ? void 0 : r[t]) && n;
            i && (l[t] = i);
        }
    }
    get(e) {
        var t;
        return null != (t = l[e]) && t;
    }
    enabled() {
        return l;
    }
    allWithDescriptions() {
        return Object.entries(o).map((e) => {
            var t;
            let [n, r] = e;
            return [n, null != (t = l[n]) && t, r];
        });
    }
}
s(u, "displayName", "DevToolsDesignTogglesStore"), s(u, "persistKey", "DevToolsDesignTogglesStore");
let d = new u(a.h, { DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: c });
