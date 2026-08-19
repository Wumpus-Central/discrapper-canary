"use strict";
n.d(t, { A: () => d });
var i = n(435558),
    r = n(439372),
    a = n(706341),
    s = n(310031),
    l = n(849077);
class o extends r.A {
    throttledPreloadInbox;
    constructor() {
        super(), (this.throttledPreloadInbox = (0, i.throttle)(this.preloadInbox, 5e3));
    }
    stores = new Map().set(s.A, () => {
        s.A.hasPreloaded || (s.A.canLoadMore({ preload: !0 }) && this.throttledPreloadInbox());
    });
    preloadInbox() {
        a.A.loadMoreInbox({ preload: !0, loadingTrigger: l.VA.AUTO_LOAD });
    }
    _terminate() {
        this.throttledPreloadInbox.cancel();
    }
}
let d = new o();
