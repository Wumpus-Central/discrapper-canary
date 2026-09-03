n.d(t, { A: () => a });
var i = n(826673),
    r = n(49999);
let a = new (class {
    dismissibleBadges = null;
    badgeSidebarItemKey = null;
    currentSidebarItemKey = null;
    registerBadges(e, t) {
        (this.dismissibleBadges = e),
            (this.badgeSidebarItemKey =
                null != t ? (e.dismissibleContentToNodeKeys.get(t)?.sidebarItemKey ?? null) : null);
    }
    notifyNavigated(e) {
        e !== this.currentSidebarItemKey && (this.markAsDismissed(), (this.currentSidebarItemKey = e));
    }
    reset() {
        this.markAsDismissed(),
            (this.dismissibleBadges = null),
            (this.badgeSidebarItemKey = null),
            (this.currentSidebarItemKey = null);
    }
    markAsDismissed() {
        if (null == this.currentSidebarItemKey || this.badgeSidebarItemKey !== this.currentSidebarItemKey) return;
        let e = this.dismissibleBadges?.nodeKeyToDismissibleContents.get(this.currentSidebarItemKey);
        (this.badgeSidebarItemKey = null),
            e?.forEach((e) => {
                (0, i.Dr)(e, { dismissAction: r.i.AUTO, forceTrack: !0 });
            });
    }
})();
