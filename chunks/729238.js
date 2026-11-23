var i = n(73153),
    r = n(439372),
    a = n(114129),
    s = n(442325),
    l = n(254838);
class o extends r.A {
    knownTabs = [];
    isSubscribed = !1;
    tabActions = [
        ["CONNECTION_OPEN", () => this.rememberTabs()],
        ["POST_CONNECTION_OPEN", () => this.handlePostConnectionOpen()],
        ["CHANNEL_SELECT", () => this.handleChannelSelect()],
        ["CHANNEL_TABS_OPEN", () => this.rememberTabs()],
        ["CHANNEL_TABS_NAVIGATE_ROUTE", () => this.handleNavigateRoute()],
    ];
    stores = new Map([[s.A, () => this.setSubscribed(s.A.isEnabled())]]);
    _initialize() {
        this.setSubscribed(s.A.isEnabled());
    }
    _terminate() {
        this.setSubscribed(!1);
    }
    setSubscribed(e) {
        if (e !== this.isSubscribed) {
            for (let [t, n] of ((this.isSubscribed = e), this.tabActions))
                e ? i.h.subscribe(t, n) : i.h.unsubscribe(t, n);
            e && this.rememberTabs();
        }
    }
    rememberTabs() {
        this.knownTabs = s.A.getTabs();
    }
    handleChannelSelect() {
        let e = s.A.getActiveTab(),
            t = null != e && this.knownTabs.length > 0 && !this.knownTabs.some((t) => t.id === e.id);
        (this.rememberTabs(),
            null != e && t && (0, a.FP)(e, { method: "page_navigation", isNewTab: !0, focused: !0 }),
            this.handleUnpinnedAtLimit());
    }
    handleNavigateRoute() {
        (this.rememberTabs(), this.handleUnpinnedAtLimit());
    }
    handleUnpinnedAtLimit() {
        let e = s.A.getTabUnpinnedAtLimit();
        null != e && ((0, l.l)(), (0, a.bi)(e, "tab_limit"));
    }
    handlePostConnectionOpen() {
        this.rememberTabs();
        let e = s.A.getActiveTab();
        null != e && (0, a.FP)(e, { method: "app_start", isNewTab: !1, focused: !0 });
    }
}
let d = new o();
n.d(t, {}, { A: d });
