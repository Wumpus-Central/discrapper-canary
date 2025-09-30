function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { Z: () => i });
class i {
    isFortniteActivity(e) {
        return e === this.prodActivityId || e === this.stagingActivityId || e === this.devActivityId;
    }
    constructor(e) {
        r(this, "fortniteId", void 0),
            r(this, "prodActivityId", void 0),
            r(this, "stagingActivityId", void 0),
            r(this, "devActivityId", void 0),
            (this.fortniteId = e.fortnite_id),
            (this.prodActivityId = e.prod_activity_id),
            (this.stagingActivityId = e.staging_activity_id),
            (this.devActivityId = e.dev_activity_id);
    }
}
