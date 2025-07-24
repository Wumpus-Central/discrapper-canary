n.d(t, {
    RI: () => l,
    k5: () => a,
    kR: () => o
});
var r = n(626135),
    i = n(981631);
function l(e) {
    let { selectedTab: t } = e;
    r.default.track(i.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function o(e) {
    let { selectedCategoryId: t } = e;
    r.default.track(i.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function a(e) {
    let { source: t } = e;
    r.default.track(i.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
