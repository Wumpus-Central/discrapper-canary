"use strict";
n.d(t, { A: () => a });
var r = n(734057);
class i {
    filterTagIds;
    sortOrder;
    layout;
    tagSetting;
    setFilterTagIds = (e) => {
        this.filterTagIds = e;
    };
    setSortOrder = (e) => {
        this.sortOrder = e;
    };
    setLayout = (e) => {
        this.layout = e;
    };
    setTagSetting = (e) => {
        this.tagSetting = e;
    };
    getFilterTagIdsAnalytics = () => (null != this.filterTagIds ? Array.from(this.filterTagIds) : []);
    getSortOrderAnalytics = (e) => this.sortOrder ?? r.A.getChannel(e)?.getDefaultSortOrder();
    getLayoutAnalytics = (e) => this.layout ?? r.A.getChannel(e)?.getDefaultLayout();
    getTagSettingAnalytics = (e) => this.tagSetting ?? r.A.getChannel(e)?.getDefaultTagSetting();
}
let a = new i();
