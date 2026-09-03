n.d(t, { WL: () => l, np: () => s, tx: () => a });
var i = n(174459),
    r = n(652215);
function a(e) {
    let { selectedTab: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function s(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function l(e) {
    let { source: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
