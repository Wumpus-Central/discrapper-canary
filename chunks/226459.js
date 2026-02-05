"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n(439372),
    a = n(706341),
    s = n(320697),
    o = n(849077);
let l = 5e3;
class u extends i.A {
    throttledPreloadInbox;
    constructor() {
        super(), (this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, l));
    }
    stores = new Map().set(s.A, () => {
        s.A.hasPreloaded || (s.A.canLoadMore({ preload: !0 }) && this.throttledPreloadInbox());
    });
    preloadInbox() {
        a.A.loadMoreInbox({ preload: !0, loadingTrigger: o.VA.AUTO_LOAD });
    }
    _terminate() {
        this.throttledPreloadInbox.cancel();
    }
}
let c = new u();
