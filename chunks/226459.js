"use strict";
n.d(t, { A: () => u });
var i = n(735438),
    r = n(439372),
    s = n(706341),
    a = n(310031),
    o = n(849077);
class l extends r.A {
    throttledPreloadInbox;
    constructor() {
        super(), (this.throttledPreloadInbox = (0, i.throttle)(this.preloadInbox, 5e3));
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
