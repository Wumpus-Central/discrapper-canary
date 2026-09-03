n.d(t, { A: () => r });
var i = n(315069);
class r extends i.A {
    id;
    interval;
    intervalCount;
    skuId;
    static createFromServer(e) {
        return new r({ id: e.id, interval: e.interval, intervalCount: e.interval_count, skuId: e.sku_id });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.interval = e.interval),
            (this.intervalCount = e.intervalCount),
            (this.skuId = e.skuId);
    }
    get isMultiInterval() {
        return null != this.intervalCount && this.intervalCount > 1;
    }
}
