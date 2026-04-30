"use strict";
n.d(t, { WL: () => o, np: () => a, tx: () => s });
var i = n(174459),
    r = n(652215);
function s(e) {
    let { selectedTab: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function a(e) {
    let { selectedCategoryId: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function o(e) {
    let { source: t } = e;
    i.default.track(r.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
