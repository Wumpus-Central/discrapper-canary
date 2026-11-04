var i = n(129230),
    r = n(652215);
n.d(
    t,
    {},
    {
        WL: function (e) {
            let { source: t } = e;
            i.default.track(r.HAw.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
        },
        np: function (e) {
            let { selectedCategoryId: t } = e;
            i.default.track(r.HAw.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
        },
        tx: function (e) {
            let { selectedTab: t } = e;
            i.default.track(r.HAw.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
        },
    },
);
