n.d(t, { Z: () => a });
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
class o {
    constructor() {
        i(this, 'filterTagIds', null),
            i(this, 'sortOrder', null),
            i(this, 'layout', null),
            i(this, 'setFilterTagIds', (e) => {
                this.filterTagIds = e;
            }),
            i(this, 'setSortOrder', (e) => {
                this.sortOrder = e;
            }),
            i(this, 'setLayout', (e) => {
                this.layout = e;
            }),
            i(this, 'getFilterTagIdsAnalytics', () => (null != this.filterTagIds ? Array.from(this.filterTagIds) : [])),
            i(this, 'getSortOrderAnalytics', (e) => {
                var t, n;
                return null != (n = this.sortOrder) ? n : null == (t = r.Z.getChannel(e)) ? void 0 : t.getDefaultSortOrder();
            }),
            i(this, 'getLayoutAnalytics', (e) => {
                var t;
                let n = r.Z.getChannel(e);
                return null != (t = this.layout) ? t : null == n ? void 0 : n.getDefaultLayout();
            });
    }
}
let a = new o();
