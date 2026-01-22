n.d(t, {
    WL: () => s,
    np: () => a,
    tx: () => i,
});
var r = n(954571),
    l = n(652215);

function i(e) {
    let { selectedTab: t } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_VIEWED, {
        selected_tab: t,
    });
}

function a(e) {
    let { selectedCategoryId: t } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
        selected_category_id: t,
    });
}

function s(e) {
    let { source: t } = e;
    r.default.track(l.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
        source: t,
    });
}
