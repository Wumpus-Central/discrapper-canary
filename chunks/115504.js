n.d(t, { BJ: () => u, FT: () => d, RQ: () => c, Sj: () => E, TY: () => o, r_: () => _, x3: () => l });
var i,
    r,
    a = n(174459),
    s = n(652215);
let l = "SIDEBAR_SEARCH_RESULTS";
var o =
        (((i = {}).SIDEBAR_HEADER_BUTTON = "sidebar_header_button"),
        (i.TOGGLE_BUTTON = "toggle_button"),
        (i.RESIZE_HANDLE = "resize_handle"),
        (i.EXTERNAL = "external"),
        i),
    d =
        (((r = {}).ADD_FRIEND = "add_friend"),
        (r.SEARCH = "search"),
        (r.GROUPING_MODE_SELECT = "grouping_mode_select"),
        r);
function c(e) {
    let { open: t, source: n, analyticsLocations: i } = e;
    a.default.track(s.HAw.FRIENDS_SIDEBAR_TOGGLED, { sidebar_open: t, source: n, location_stack: i });
}
function u(e) {
    let { button: t, analyticsLocations: n } = e;
    a.default.track(s.HAw.FRIENDS_SIDEBAR_HEADER_BUTTON_CLICKED, { button: t, location_stack: n });
}
function _(e) {
    let { oldGroupingMode: t, newGroupingMode: n, analyticsLocations: i } = e;
    a.default.track(s.HAw.FRIENDS_SIDEBAR_GROUPING_MODE_CHANGED, {
        old_grouping_mode: t,
        new_grouping_mode: n,
        location_stack: i,
    });
}
function E(e) {
    let { oldVoiceGroupingEnabled: t, newVoiceGroupingEnabled: n, analyticsLocations: i } = e;
    a.default.track(s.HAw.FRIENDS_SIDEBAR_VOICE_GROUPING_TOGGLED, {
        old_voice_grouping_enabled: t,
        new_voice_grouping_enabled: n,
        location_stack: i,
    });
}
