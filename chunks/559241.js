n.d(t, { Z: () => o });
var r = n(592125);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    constructor() {
        i(this, 'filterTagIds', void 0),
            i(this, 'sortOrder', void 0),
            i(this, 'layout', void 0),
            i(this, 'tagSetting', void 0),
            i(this, 'setFilterTagIds', (e) => {
                this.filterTagIds = e;
            }),
            i(this, 'setSortOrder', (e) => {
                this.sortOrder = e;
            }),
            i(this, 'setLayout', (e) => {
                this.layout = e;
            }),
            i(this, 'setTagSetting', (e) => {
                this.tagSetting = e;
            }),
            i(this, 'getFilterTagIdsAnalytics', () => (null != this.filterTagIds ? Array.from(this.filterTagIds) : [])),
            i(this, 'getSortOrderAnalytics', (e) => {
                var t, n;
                return null != (n = this.sortOrder) ? n : null == (t = r.Z.getChannel(e)) ? void 0 : t.getDefaultSortOrder();
            }),
            i(this, 'getLayoutAnalytics', (e) => {
                var t, n;
                return null != (n = this.layout) ? n : null == (t = r.Z.getChannel(e)) ? void 0 : t.getDefaultLayout();
            }),
            i(this, 'getTagSettingAnalytics', (e) => {
                var t, n;
                return null != (n = this.tagSetting) ? n : null == (t = r.Z.getChannel(e)) ? void 0 : t.getDefaultTagSetting();
            });
    }
}
let o = new a();
