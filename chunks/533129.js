n.d(t, { WL: () => r, np: () => a, tx: () => s });
var i = n(954571),
    l = n(652215);
function s(e) {
    let { selectedTab: t } = e;
    i.default.track(l.HAw.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function a(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(l.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function r(e) {
    let { source: t } = e;
    i.default.track(l.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
