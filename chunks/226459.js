"use strict";
n.d(t, { A: () => u });
var r = n(735438),
    i = n(439372),
    s = n(706341),
    a = n(320697),
    o = n(849077);
class l extends i.A {
    throttledPreloadInbox;
    constructor() {
        super(), (this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, 5e3));
    }
    stores = new Map().set(a.A, () => {
        a.A.hasPreloaded || (a.A.canLoadMore({ preload: !0 }) && this.throttledPreloadInbox());
    });
    preloadInbox() {
        s.A.loadMoreInbox({ preload: !0, loadingTrigger: o.VA.AUTO_LOAD });
    }
    _terminate() {
        this.throttledPreloadInbox.cancel();
    }
}
let u = new l();
