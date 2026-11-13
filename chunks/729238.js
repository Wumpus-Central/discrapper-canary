var i = n(439372),
    r = n(114129),
    a = n(931519),
    s = n(254838);
class l extends i.A {
    knownTabs = [];
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        CHANNEL_SELECT: () => this.handleChannelSelect(),
        CHANNEL_TABS_OPEN: () => this.rememberTabs(),
        CHANNEL_TABS_SET_PINNED: () => this.rememberTabs(),
        CHANNEL_TABS_SET_ENABLED: () => this.rememberTabs(),
        CHANNEL_TABS_NAVIGATE_ROUTE: () => this.handleNavigateRoute(),
    };
    rememberTabs() {
        this.knownTabs = a.A.getTabs();
    }
    handleChannelSelect() {
        let e = a.A.getActiveTab(),
            t = null != e && this.knownTabs.length > 0 && !this.knownTabs.some((t) => t.id === e.id);
        (this.rememberTabs(), null != e && t && (0, r.FP)(e, "page_navigation", !0, !0), this.handleUnpinnedAtLimit());
    }
    handleNavigateRoute() {
        (this.rememberTabs(), this.handleUnpinnedAtLimit());
    }
    handleUnpinnedAtLimit() {
        let e = a.A.getTabUnpinnedAtLimit();
        null != e && ((0, s.l)(), (0, r.bi)(e, "tab_limit"));
    }
    handlePostConnectionOpen = () => {
        this.rememberTabs();
        let e = a.A.getActiveTab();
        null != e && a.A.isEnabled() && (0, r.FP)(e, "app_start", !1, !0);
    };
}
let o = new l();
n.d(t, {}, { A: o });
