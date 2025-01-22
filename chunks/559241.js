var i = r(592125);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    constructor() {
        a(this, 'filterTagIds', null),
            a(this, 'sortOrder', null),
            a(this, 'layout', null),
            a(this, 'setFilterTagIds', (e) => {
                this.filterTagIds = e;
            }),
            a(this, 'setSortOrder', (e) => {
                this.sortOrder = e;
            }),
            a(this, 'setLayout', (e) => {
                this.layout = e;
            }),
            a(this, 'getFilterTagIdsAnalytics', () => (null != this.filterTagIds ? Array.from(this.filterTagIds) : [])),
            a(this, 'getSortOrderAnalytics', (e) => {
                var n, r;
                return null !== (r = this.sortOrder) && void 0 !== r ? r : null === (n = i.Z.getChannel(e)) || void 0 === n ? void 0 : n.getDefaultSortOrder();
            }),
            a(this, 'getLayoutAnalytics', (e) => {
                var n;
                let r = i.Z.getChannel(e);
                return null !== (n = this.layout) && void 0 !== n ? n : null == r ? void 0 : r.getDefaultLayout();
            });
    }
}
n.Z = new o();
